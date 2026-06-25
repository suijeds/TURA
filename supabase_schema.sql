-- Create support_tickets table in Supabase
create table support_tickets (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  messages jsonb not null,
  status text not null default 'open',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table support_tickets enable row level security;

-- Create policy to allow anonymous and authenticated user insertions
create policy "Allow public inserts on support_tickets" 
on support_tickets 
for insert 
with check (true);

-- Create policy to allow authenticated reads (e.g. for developers/support team)
create policy "Allow read access for authenticated users" 
on support_tickets 
for select 
to authenticated 
using (true);
