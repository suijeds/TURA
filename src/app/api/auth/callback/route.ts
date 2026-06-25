import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/engine'

  // Determine redirect url first
  const forwardedHost = request.headers.get('x-forwarded-host')
  const redirectUrl = forwardedHost 
    ? `https://${forwardedHost}${next}` 
    : `${origin}${next}`;

  // Create redirect response
  let response = NextResponse.redirect(redirectUrl)

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          getAll() {
            // Parse cookies directly from request headers
            const cookieHeader = request.headers.get('Cookie') || '';
            const parsedCookies = cookieHeader.split(';').map(c => {
              const [name, ...val] = c.trim().split('=');
              return { name, value: val.join('=') };
            }).filter(c => c.name !== '');
            return parsedCookies;
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              // Write directly to the redirect response
              response.cookies.set(name, value, {
                ...options,
                // Ensure cookies are secure and available on pages.dev domains
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                path: '/',
              })
            })
          },
        },
      }
    )
    
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return response;
    }
  }

  // Redirect to signin with error status
  return NextResponse.redirect(`${origin}/auth/signin?error=auth_callback_failed`)
}
