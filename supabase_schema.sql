-- ═══════════════════════════════════════════════════════════
-- TURA DATABASE SCHEMA & SECURITY POLICIES (Supabase)
-- ═══════════════════════════════════════════════════════════

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create Policies for users
CREATE POLICY "Users can view own profile" 
  ON users FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON users FOR UPDATE 
  USING (auth.uid() = id);


-- 2. SAVED PROMPTS TABLE
CREATE TABLE IF NOT EXISTS saved_prompts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  prompt_text TEXT NOT NULL,
  negative_prompt TEXT,
  aspect_ratio VARCHAR(50),
  category VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE saved_prompts ENABLE ROW LEVEL SECURITY;

-- Create Policy for saved_prompts
CREATE POLICY "Users manage own prompts" 
  ON saved_prompts FOR ALL 
  USING (auth.uid() = user_id);


-- 3. SUBSCRIPTIONS TABLE
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan VARCHAR(50) NOT NULL,
  status VARCHAR(50) NOT NULL,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create Policy for subscriptions
CREATE POLICY "Users view own subscription" 
  ON subscriptions FOR SELECT 
  USING (auth.uid() = user_id);


-- 4. SUPPORT TICKETS TABLE
CREATE TABLE IF NOT EXISTS support_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  messages JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Create Policies for support_tickets
CREATE POLICY "Allow public inserts on support_tickets" 
  ON support_tickets FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow read access for authenticated users" 
  ON support_tickets FOR SELECT 
  TO authenticated 
  USING (true);


-- 5. AUTOMATIC PROFILE CREATION TRIGGER (auth.users -> public.users)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, avatar_url)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''),
    COALESCE(new.raw_user_meta_data->>'avatar_url', '')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
