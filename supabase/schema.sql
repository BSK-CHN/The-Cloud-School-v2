-- ============================================================================
-- The Cloud School — MVP database schema (Supabase / PostgreSQL)
-- Run in the Supabase SQL editor (or `supabase db reset` in CI).
-- ============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Enquiries & consultations (also used for general contact messages)
-- status: new | contact | consulted | lost
-- ---------------------------------------------------------------------------
create table if not exists public.consultations (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  phone           text not null,
  email           text not null,
  experience      text not null default '—',
  current_role_name    text not null,
  target_role_name     text not null default '—',
  preferred_time  text not null default '',
  message         text,
  status          text not null default 'new',
  created_at      timestamptz not null default now()
);

create index if not exists consultations_created_idx on public.consultations (created_at desc);
create index if not exists consultations_status_idx on public.consultations (status);

-- ---------------------------------------------------------------------------
-- Workshop registrations (₹199 seats)
-- status: registered | attended | no_show | cancelled
-- ---------------------------------------------------------------------------
create table if not exists public.workshop_registrations (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  phone      text not null,
  email      text not null,
  workshop   text not null,
  amount_inr integer not null default 199,
  status     text not null default 'registered',
  created_at timestamptz not null default now()
);

create index if not exists workshop_created_idx on public.workshop_registrations (created_at desc);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- Enabled with NO public policies: anonymous web clients cannot read or
-- write. All inserts (server fns) and admin reads (dashboard loader) use
-- the SERVICE ROLE key, which bypasses RLS. This is the secure default.
-- ---------------------------------------------------------------------------
alter table public.consultations enable row level security;
alter table public.workshop_registrations enable row level security;

-- ---------------------------------------------------------------------------
-- Admin user
-- Create the admin in Supabase Dashboard → Authentication → Add user
-- (email + password). The /admin loader verifies this session.
-- ---------------------------------------------------------------------------
