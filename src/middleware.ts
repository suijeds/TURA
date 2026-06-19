import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isEnginePage = req.nextUrl.pathname.startsWith("/engine");
  const isDirectorPage = req.nextUrl.pathname.startsWith("/director");

  if ((isEnginePage || isDirectorPage) && !isLoggedIn) {
    const signInUrl = new URL("/auth/signin", req.nextUrl.origin);
    return Response.redirect(signInUrl);
  }
});

export const config = {
  matcher: ["/engine/:path*", "/director/:path*"],
};
