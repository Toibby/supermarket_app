-- =========================================================
-- SUPERMARKET SYSTEM - INITIAL DATABASE SCHEMA
-- Batch 2
-- =========================================================

-- Recommended extensions
create extension if not exists pgcrypto;
create extension if not exists citext;

-- =========================================================
-- ENUMS
-- =========================================================

do $$
begin
  if not exists (select 1 from pg_type where typname = 'app_role') then
    create type public.app_role as enum ('customer', 'admin', 'manager', 'cashier');
  end if;

  if not exists (select 1 from pg_type where typname = 'product_status') then
    create type public.product_status as enum ('active', 'draft', 'archived');
  end if;

  if not exists (select 1 from pg_type where typname = 'order_status') then
    create type public.order_status as enum ('pending', 'confirmed', 'processing', 'delivered', 'cancelled');
  end if;

  if not exists (select 1 from pg_type where typname = 'payment_status') then
    create type public.payment_status as enum ('pending', 'paid', 'failed', 'refunded');
  end if;

  if not exists (select 1 from pg_type where typname = 'payment_method') then
    create type public.payment_method as enum ('cash', 'card', 'transfer', 'wallet', 'pos');
  end if;

  if not exists (select 1 from pg_type where typname = 'inventory_action') then
    create type public.inventory_action as enum ('restock', 'sale', 'adjustment', 'return', 'damaged');
  end if;
end $$;

-- =========================================================
-- TABLES (MOVED UP - FIX)
-- =========================================================

-- Profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email citext not null unique,
  full_name text not null default '',
  phone text,
  avatar_url text,
  role public.app_role not null default 'customer',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Customers
create table if not exists public.customers (
  id uuid primary key references auth.users(id) on delete cascade,
  email citext not null unique,
  full_name text not null default '',
  phone text,
  address_line_1 text,
  address_line_2 text,
  city text,
  state text,
  country text default 'Nigeria',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Workers
create table if not exists public.workers (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles(id) on delete cascade,
  employee_code text not null unique,
  role public.app_role not null check (role in ('admin', 'manager', 'cashier')),
  hired_at timestamptz not null default now(),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =========================================================
-- UTILITY FUNCTIONS
-- =========================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.generate_order_number()
returns text
language plpgsql
as $$
declare
  generated text;
begin
  generated := 'ORD-' || to_char(now(), 'YYYYMMDD') || '-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6));
  return generated;
end;
$$;

create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    email,
    full_name,
    role,
    is_active
  )
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    'customer',
    true
  )
  on conflict (id) do nothing;

  insert into public.customers (
    id,
    email,
    full_name
  )
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

create or replace function public.is_admin_or_manager(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = uid
      and p.role in ('admin', 'manager')
      and p.is_active = true
  );
$$;

create or replace function public.is_admin(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = uid
      and p.role = 'admin'
      and p.is_active = true
  );
$$;

create or replace function public.is_cashier_or_above(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = uid
      and p.role in ('admin', 'manager', 'cashier')
      and p.is_active = true
  );
$$;


-- =========================================================
-- UTILITY FUNCTIONS
-- =========================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.generate_order_number()
returns text
language plpgsql
as $$
declare
  generated text;
begin
  generated := 'ORD-' || to_char(now(), 'YYYYMMDD') || '-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6));
  return generated;
end;
$$;

create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    email,
    full_name,
    role,
    is_active
  )
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    'customer',
    true
  )
  on conflict (id) do nothing;

  insert into public.customers (
    id,
    email,
    full_name
  )
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

create or replace function public.is_admin_or_manager(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = uid
      and p.role in ('admin', 'manager')
      and p.is_active = true
  );
$$;

create or replace function public.is_admin(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = uid
      and p.role = 'admin'
      and p.is_active = true
  );
$$;

create or replace function public.is_cashier_or_above(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = uid
      and p.role in ('admin', 'manager', 'cashier')
      and p.is_active = true
  );
$$;


-- Categories
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  image_url text,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Products
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories(id) on delete restrict,
  name text not null,
  slug text not null unique,
  description text not null default '',
  sku text not null unique,
  barcode text,
  price numeric(12,2) not null check (price >= 0),
  compare_at_price numeric(12,2) check (compare_at_price is null or compare_at_price >= 0),
  stock_quantity integer not null default 0 check (stock_quantity >= 0),
  low_stock_threshold integer not null default 5 check (low_stock_threshold >= 0),
  status public.product_status not null default 'draft',
  featured boolean not null default false,
  thumbnail_url text,
  weight_grams integer check (weight_grams is null or weight_grams >= 0),
  created_by uuid references public.profiles(id) on delete set null,
  updated_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Product images
create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  image_url text not null,
  alt_text text,
  is_primary boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- Orders
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete restrict,
  order_number text not null unique default public.generate_order_number(),
  status public.order_status not null default 'pending',
  payment_status public.payment_status not null default 'pending',
  subtotal numeric(12,2) not null default 0 check (subtotal >= 0),
  delivery_fee numeric(12,2) not null default 0 check (delivery_fee >= 0),
  discount_amount numeric(12,2) not null default 0 check (discount_amount >= 0),
  total_amount numeric(12,2) not null default 0 check (total_amount >= 0),
  notes text,
  delivery_address_line_1 text,
  delivery_address_line_2 text,
  delivery_city text,
  delivery_state text,
  delivery_country text default 'Nigeria',
  created_by_worker_id uuid references public.workers(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Order items
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  product_name text not null,
  product_sku text not null,
  unit_price numeric(12,2) not null check (unit_price >= 0),
  quantity integer not null check (quantity > 0),
  subtotal numeric(12,2) not null check (subtotal >= 0),
  created_at timestamptz not null default now()
);

-- Payments
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  amount numeric(12,2) not null check (amount >= 0),
  status public.payment_status not null default 'pending',
  method public.payment_method not null,
  transaction_reference text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

-- Inventory logs
create table if not exists public.inventory_logs (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  action public.inventory_action not null,
  quantity_change integer not null,
  previous_quantity integer not null,
  new_quantity integer not null,
  reason text,
  performed_by uuid references public.profiles(id) on delete set null,
  order_id uuid references public.orders(id) on delete set null,
  created_at timestamptz not null default now()
);

-- =========================================================
-- INDEXES
-- =========================================================

create index if not exists idx_profiles_role on public.profiles(role);
create index if not exists idx_profiles_is_active on public.profiles(is_active);

create index if not exists idx_workers_profile_id on public.workers(profile_id);
create index if not exists idx_workers_role on public.workers(role);

create index if not exists idx_categories_slug on public.categories(slug);
create index if not exists idx_categories_is_active on public.categories(is_active);

create index if not exists idx_products_category_id on public.products(category_id);
create index if not exists idx_products_slug on public.products(slug);
create index if not exists idx_products_status on public.products(status);
create index if not exists idx_products_featured on public.products(featured);
create index if not exists idx_products_stock_quantity on public.products(stock_quantity);

create index if not exists idx_product_images_product_id on public.product_images(product_id);
create index if not exists idx_product_images_primary on public.product_images(product_id, is_primary);

create index if not exists idx_orders_customer_id on public.orders(customer_id);
create index if not exists idx_orders_status on public.orders(status);
create index if not exists idx_orders_payment_status on public.orders(payment_status);
create index if not exists idx_orders_created_at on public.orders(created_at desc);

create index if not exists idx_order_items_order_id on public.order_items(order_id);
create index if not exists idx_order_items_product_id on public.order_items(product_id);

create index if not exists idx_payments_order_id on public.payments(order_id);
create index if not exists idx_payments_status on public.payments(status);

create index if not exists idx_inventory_logs_product_id on public.inventory_logs(product_id);
create index if not exists idx_inventory_logs_order_id on public.inventory_logs(order_id);
create index if not exists idx_inventory_logs_created_at on public.inventory_logs(created_at desc);

-- =========================================================
-- UPDATED_AT TRIGGERS
-- =========================================================

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

drop trigger if exists set_customers_updated_at on public.customers;
create trigger set_customers_updated_at
before update on public.customers
for each row
execute function public.set_updated_at();

drop trigger if exists set_workers_updated_at on public.workers;
create trigger set_workers_updated_at
before update on public.workers
for each row
execute function public.set_updated_at();

drop trigger if exists set_categories_updated_at on public.categories;
create trigger set_categories_updated_at
before update on public.categories
for each row
execute function public.set_updated_at();

drop trigger if exists set_products_updated_at on public.products;
create trigger set_products_updated_at
before update on public.products
for each row
execute function public.set_updated_at();

drop trigger if exists set_orders_updated_at on public.orders;
create trigger set_orders_updated_at
before update on public.orders
for each row
execute function public.set_updated_at();

-- =========================================================
-- AUTH USER -> PROFILE/CUSTOMER TRIGGER
-- =========================================================

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_auth_user();

-- =========================================================
-- INVENTORY / ORDER HELPERS
-- =========================================================

create or replace function public.apply_order_inventory_deduction(p_order_id uuid, p_performed_by uuid default null)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  item_record record;
  current_stock integer;
begin
  for item_record in
    select oi.*, p.stock_quantity
    from public.order_items oi
    join public.products p on p.id = oi.product_id
    where oi.order_id = p_order_id
  loop
    current_stock := item_record.stock_quantity;

    if current_stock < item_record.quantity then
      raise exception 'Insufficient stock for product %', item_record.product_name;
    end if;

    update public.products
    set stock_quantity = stock_quantity - item_record.quantity
    where id = item_record.product_id;

    insert into public.inventory_logs (
      product_id,
      action,
      quantity_change,
      previous_quantity,
      new_quantity,
      reason,
      performed_by,
      order_id
    )
    values (
      item_record.product_id,
      'sale',
      -item_record.quantity,
      current_stock,
      current_stock - item_record.quantity,
      'Stock deducted from order',
      p_performed_by,
      p_order_id
    );
  end loop;
end;
$$;

create or replace function public.restock_product(
  p_product_id uuid,
  p_quantity integer,
  p_reason text,
  p_performed_by uuid default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  current_stock integer;
begin
  if p_quantity <= 0 then
    raise exception 'Restock quantity must be greater than zero';
  end if;

  select stock_quantity into current_stock
  from public.products
  where id = p_product_id
  for update;

  if current_stock is null then
    raise exception 'Product not found';
  end if;

  update public.products
  set stock_quantity = stock_quantity + p_quantity
  where id = p_product_id;

  insert into public.inventory_logs (
    product_id,
    action,
    quantity_change,
    previous_quantity,
    new_quantity,
    reason,
    performed_by
  )
  values (
    p_product_id,
    'restock',
    p_quantity,
    current_stock,
    current_stock + p_quantity,
    p_reason,
    p_performed_by
  );
end;
$$;

-- =========================================================
-- ROW LEVEL SECURITY
-- =========================================================

alter table public.profiles enable row level security;
alter table public.customers enable row level security;
alter table public.workers enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_images enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payments enable row level security;
alter table public.inventory_logs enable row level security;

-- =========================================================
-- PROFILES POLICIES
-- =========================================================

drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin"
on public.profiles
for select
to authenticated
using (
  auth.uid() = id
  or public.is_cashier_or_above(auth.uid())
);

drop policy if exists "profiles_update_own_or_admin" on public.profiles;
create policy "profiles_update_own_or_admin"
on public.profiles
for update
to authenticated
using (
  auth.uid() = id
  or public.is_admin(auth.uid())
)
with check (
  auth.uid() = id
  or public.is_admin(auth.uid())
);

-- =========================================================
-- CUSTOMERS POLICIES
-- =========================================================

drop policy if exists "customers_select_own_or_staff" on public.customers;
create policy "customers_select_own_or_staff"
on public.customers
for select
to authenticated
using (
  auth.uid() = id
  or public.is_cashier_or_above(auth.uid())
);

drop policy if exists "customers_insert_own" on public.customers;
create policy "customers_insert_own"
on public.customers
for insert
to authenticated
with check (
  auth.uid() = id
);

drop policy if exists "customers_update_own_or_staff" on public.customers;
create policy "customers_update_own_or_staff"
on public.customers
for update
to authenticated
using (
  auth.uid() = id
  or public.is_cashier_or_above(auth.uid())
)
with check (
  auth.uid() = id
  or public.is_cashier_or_above(auth.uid())
);

-- =========================================================
-- WORKERS POLICIES
-- =========================================================

drop policy if exists "workers_select_staff" on public.workers;
create policy "workers_select_staff"
on public.workers
for select
to authenticated
using (
  public.is_cashier_or_above(auth.uid())
);

drop policy if exists "workers_insert_admin_only" on public.workers;
create policy "workers_insert_admin_only"
on public.workers
for insert
to authenticated
with check (
  public.is_admin(auth.uid())
);

drop policy if exists "workers_update_admin_only" on public.workers;
create policy "workers_update_admin_only"
on public.workers
for update
to authenticated
using (
  public.is_admin(auth.uid())
)
with check (
  public.is_admin(auth.uid())
);

-- =========================================================
-- CATEGORIES POLICIES
-- =========================================================

drop policy if exists "categories_public_read" on public.categories;
create policy "categories_public_read"
on public.categories
for select
to anon, authenticated
using (is_active = true or public.is_cashier_or_above(auth.uid()));

drop policy if exists "categories_admin_manager_write" on public.categories;
create policy "categories_admin_manager_write"
on public.categories
for all
to authenticated
using (
  public.is_admin_or_manager(auth.uid())
)
with check (
  public.is_admin_or_manager(auth.uid())
);

-- =========================================================
-- PRODUCTS POLICIES
-- =========================================================

drop policy if exists "products_public_read" on public.products;
create policy "products_public_read"
on public.products
for select
to anon, authenticated
using (
  status = 'active'
  or public.is_cashier_or_above(auth.uid())
);

drop policy if exists "products_admin_manager_write" on public.products;
create policy "products_admin_manager_write"
on public.products
for all
to authenticated
using (
  public.is_admin_or_manager(auth.uid())
)
with check (
  public.is_admin_or_manager(auth.uid())
);

-- =========================================================
-- PRODUCT IMAGES POLICIES
-- =========================================================

drop policy if exists "product_images_public_read" on public.product_images;
create policy "product_images_public_read"
on public.product_images
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.products p
    where p.id = product_id
      and (
        p.status = 'active'
        or public.is_cashier_or_above(auth.uid())
      )
  )
);

drop policy if exists "product_images_admin_manager_write" on public.product_images;
create policy "product_images_admin_manager_write"
on public.product_images
for all
to authenticated
using (
  public.is_admin_or_manager(auth.uid())
)
with check (
  public.is_admin_or_manager(auth.uid())
);

-- =========================================================
-- ORDERS POLICIES
-- =========================================================

drop policy if exists "orders_select_own_or_staff" on public.orders;
create policy "orders_select_own_or_staff"
on public.orders
for select
to authenticated
using (
  customer_id = auth.uid()
  or public.is_cashier_or_above(auth.uid())
);

drop policy if exists "orders_insert_own_or_cashier_above" on public.orders;
create policy "orders_insert_own_or_cashier_above"
on public.orders
for insert
to authenticated
with check (
  customer_id = auth.uid()
  or public.is_cashier_or_above(auth.uid())
);

drop policy if exists "orders_update_staff_only" on public.orders;
create policy "orders_update_staff_only"
on public.orders
for update
to authenticated
using (
  public.is_cashier_or_above(auth.uid())
)
with check (
  public.is_cashier_or_above(auth.uid())
);

-- =========================================================
-- ORDER ITEMS POLICIES
-- =========================================================

drop policy if exists "order_items_select_own_or_staff" on public.order_items;
create policy "order_items_select_own_or_staff"
on public.order_items
for select
to authenticated
using (
  exists (
    select 1
    from public.orders o
    where o.id = order_id
      and (
        o.customer_id = auth.uid()
        or public.is_cashier_or_above(auth.uid())
      )
  )
);

drop policy if exists "order_items_insert_own_or_staff" on public.order_items;
create policy "order_items_insert_own_or_staff"
on public.order_items
for insert
to authenticated
with check (
  exists (
    select 1
    from public.orders o
    where o.id = order_id
      and (
        o.customer_id = auth.uid()
        or public.is_cashier_or_above(auth.uid())
      )
  )
);

drop policy if exists "order_items_update_staff_only" on public.order_items;
create policy "order_items_update_staff_only"
on public.order_items
for update
to authenticated
using (
  public.is_cashier_or_above(auth.uid())
)
with check (
  public.is_cashier_or_above(auth.uid())
);

-- =========================================================
-- PAYMENTS POLICIES
-- =========================================================

drop policy if exists "payments_select_own_or_staff" on public.payments;
create policy "payments_select_own_or_staff"
on public.payments
for select
to authenticated
using (
  exists (
    select 1
    from public.orders o
    where o.id = order_id
      and (
        o.customer_id = auth.uid()
        or public.is_cashier_or_above(auth.uid())
      )
  )
);

drop policy if exists "payments_insert_staff_only" on public.payments;
create policy "payments_insert_staff_only"
on public.payments
for insert
to authenticated
with check (
  public.is_cashier_or_above(auth.uid())
);

drop policy if exists "payments_update_staff_only" on public.payments;
create policy "payments_update_staff_only"
on public.payments
for update
to authenticated
using (
  public.is_cashier_or_above(auth.uid())
)
with check (
  public.is_cashier_or_above(auth.uid())
);

-- =========================================================
-- INVENTORY LOGS POLICIES
-- =========================================================

drop policy if exists "inventory_logs_select_staff_only" on public.inventory_logs;
create policy "inventory_logs_select_staff_only"
on public.inventory_logs
for select
to authenticated
using (
  public.is_cashier_or_above(auth.uid())
);

drop policy if exists "inventory_logs_insert_staff_only" on public.inventory_logs;
create policy "inventory_logs_insert_staff_only"
on public.inventory_logs
for insert
to authenticated
with check (
  public.is_cashier_or_above(auth.uid())
);

-- =========================================================
-- STORAGE BUCKET NOTE
-- =========================================================
-- Create a Supabase storage bucket manually or with a later migration:
-- bucket name suggestion: product-images
-- public bucket: true