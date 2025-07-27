create table if not exists public.meals (
  id serial primary key,
  title text,
  description text,
  price numeric not null,
  created_at timestamp with time zone default now()
);
