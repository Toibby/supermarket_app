-- -- =========================================================
-- -- BATCH 4 - ATOMIC CUSTOMER CHECKOUT RPC
-- -- =========================================================

-- create or replace function public.create_customer_order(
--   p_items jsonb,
--   p_delivery_address_line_1 text,
--   p_delivery_address_line_2 text default null,
--   p_delivery_city text,
--   p_delivery_state text,
--   p_delivery_country text default 'Nigeria',
--   p_phone text default null,
--   p_notes text default null,
--   p_payment_method public.payment_method default 'transfer'
-- )
-- returns table (
--   order_id uuid,
--   order_number text,
--   total_amount numeric
-- )
-- language plpgsql
-- security definer
-- set search_path = public
-- as $$
-- declare
--   v_customer_id uuid;
--   v_order_id uuid;
--   v_order_number text;
--   v_subtotal numeric(12,2) := 0;
--   v_delivery_fee numeric(12,2) := 0;
--   v_discount_amount numeric(12,2) := 0;
--   v_total_amount numeric(12,2) := 0;
--   v_item jsonb;
--   v_product record;
--   v_quantity integer;
-- begin
--   v_customer_id := auth.uid();

--   if v_customer_id is null then
--     raise exception 'Authentication required';
--   end if;

--   if p_items is null or jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then
--     raise exception 'Cart is empty';
--   end if;

--   -- validate products and stock first
--   for v_item in
--     select * from jsonb_array_elements(p_items)
--   loop
--     v_quantity := (v_item->>'quantity')::integer;

--     if v_quantity is null or v_quantity <= 0 then
--       raise exception 'Invalid quantity';
--     end if;

--     select *
--     into v_product
--     from public.products
--     where id = (v_item->>'productId')::uuid
--       and status = 'active'
--     for update;

--     if not found then
--       raise exception 'Product not found or inactive';
--     end if;

--     if v_product.stock_quantity < v_quantity then
--       raise exception 'Insufficient stock for %', v_product.name;
--     end if;

--     v_subtotal := v_subtotal + (v_product.price * v_quantity);
--   end loop;

--   v_delivery_fee := case when v_subtotal >= 50000 then 0 else 2500 end;
--   v_total_amount := v_subtotal + v_delivery_fee - v_discount_amount;

--   insert into public.orders (
--     customer_id,
--     status,
--     payment_status,
--     subtotal,
--     delivery_fee,
--     discount_amount,
--     total_amount,
--     notes,
--     delivery_address_line_1,
--     delivery_address_line_2,
--     delivery_city,
--     delivery_state,
--     delivery_country
--   )
--   values (
--     v_customer_id,
--     'pending',
--     'pending',
--     v_subtotal,
--     v_delivery_fee,
--     v_discount_amount,
--     v_total_amount,
--     p_notes,
--     p_delivery_address_line_1,
--     p_delivery_address_line_2,
--     p_delivery_city,
--     p_delivery_state,
--     coalesce(p_delivery_country, 'Nigeria')
--   )
--   returning id, order_number
--   into v_order_id, v_order_number;

--   -- insert items + deduct stock + inventory logs
--   for v_item in
--     select * from jsonb_array_elements(p_items)
--   loop
--     v_quantity := (v_item->>'quantity')::integer;

--     select *
--     into v_product
--     from public.products
--     where id = (v_item->>'productId')::uuid
--     for update;

--     insert into public.order_items (
--       order_id,
--       product_id,
--       product_name,
--       product_sku,
--       unit_price,
--       quantity,
--       subtotal
--     )
--     values (
--       v_order_id,
--       v_product.id,
--       v_product.name,
--       v_product.sku,
--       v_product.price,
--       v_quantity,
--       v_product.price * v_quantity
--     );

--     update public.products
--     set stock_quantity = stock_quantity - v_quantity
--     where id = v_product.id;

--     insert into public.inventory_logs (
--       product_id,
--       action,
--       quantity_change,
--       previous_quantity,
--       new_quantity,
--       reason,
--       performed_by,
--       order_id
--     )
--     values (
--       v_product.id,
--       'sale',
--       -v_quantity,
--       v_product.stock_quantity,
--       v_product.stock_quantity - v_quantity,
--       'Stock deducted from customer checkout',
--       v_customer_id,
--       v_order_id
--     );
--   end loop;

--   insert into public.payments (
--     order_id,
--     amount,
--     status,
--     method
--   )
--   values (
--     v_order_id,
--     v_total_amount,
--     'pending',
--     p_payment_method
--   );

--   update public.customers
--   set
--     phone = coalesce(nullif(p_phone, ''), phone),
--     address_line_1 = p_delivery_address_line_1,
--     address_line_2 = p_delivery_address_line_2,
--     city = p_delivery_city,
--     state = p_delivery_state,
--     country = coalesce(p_delivery_country, 'Nigeria')
--   where id = v_customer_id;

--   if p_phone is not null and trim(p_phone) <> '' then
--     update public.profiles
--     set phone = p_phone
--     where id = v_customer_id;
--   end if;

--   return query
--   select v_order_id, v_order_number, v_total_amount;
-- end;
-- $$;

-- grant execute on function public.create_customer_order(
--   jsonb,
--   text,
--   text,
--   text,
--   text,
--   text,
--   text,
--   text,
--   public.payment_method
-- ) to authenticated;



-- =========================================================
-- BATCH 4 - ATOMIC CUSTOMER CHECKOUT RPC
-- =========================================================

create or replace function public.create_customer_order(
  p_items jsonb,
  p_delivery_address_line_1 text,
  p_delivery_city text,
  p_delivery_state text,
  p_delivery_address_line_2 text default null,
  p_delivery_country text default 'Nigeria',
  p_phone text default null,
  p_notes text default null,
  p_payment_method public.payment_method default 'transfer'
)
returns table (
  order_id uuid,
  order_number text,
  total_amount numeric
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_customer_id uuid;
  v_order_id uuid;
  v_order_number text;
  v_subtotal numeric(12,2) := 0;
  v_delivery_fee numeric(12,2) := 0;
  v_discount_amount numeric(12,2) := 0;
  v_total_amount numeric(12,2) := 0;
  v_item jsonb;
  v_product record;
  v_quantity integer;
begin
  v_customer_id := auth.uid();

  if v_customer_id is null then
    raise exception 'Authentication required';
  end if;

  if p_items is null or jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then
    raise exception 'Cart is empty';
  end if;

  for v_item in
    select * from jsonb_array_elements(p_items)
  loop
    v_quantity := (v_item->>'quantity')::integer;

    if v_quantity is null or v_quantity <= 0 then
      raise exception 'Invalid quantity';
    end if;

    select *
    into v_product
    from public.products
    where id = (v_item->>'productId')::uuid
      and status = 'active'
    for update;

    if not found then
      raise exception 'Product not found or inactive';
    end if;

    if v_product.stock_quantity < v_quantity then
      raise exception 'Insufficient stock for %', v_product.name;
    end if;

    v_subtotal := v_subtotal + (v_product.price * v_quantity);
  end loop;

  v_delivery_fee := case when v_subtotal >= 50000 then 0 else 2500 end;
  v_total_amount := v_subtotal + v_delivery_fee - v_discount_amount;

  insert into public.orders (
    customer_id,
    status,
    payment_status,
    subtotal,
    delivery_fee,
    discount_amount,
    total_amount,
    notes,
    delivery_address_line_1,
    delivery_address_line_2,
    delivery_city,
    delivery_state,
    delivery_country
  )
  values (
    v_customer_id,
    'pending',
    'pending',
    v_subtotal,
    v_delivery_fee,
    v_discount_amount,
    v_total_amount,
    p_notes,
    p_delivery_address_line_1,
    p_delivery_address_line_2,
    p_delivery_city,
    p_delivery_state,
    coalesce(p_delivery_country, 'Nigeria')
  )
  returning id, order_number
  into v_order_id, v_order_number;

  for v_item in
    select * from jsonb_array_elements(p_items)
  loop
    v_quantity := (v_item->>'quantity')::integer;

    select *
    into v_product
    from public.products
    where id = (v_item->>'productId')::uuid
    for update;

    insert into public.order_items (
      order_id,
      product_id,
      product_name,
      product_sku,
      unit_price,
      quantity,
      subtotal
    )
    values (
      v_order_id,
      v_product.id,
      v_product.name,
      v_product.sku,
      v_product.price,
      v_quantity,
      v_product.price * v_quantity
    );

    update public.products
    set stock_quantity = stock_quantity - v_quantity
    where id = v_product.id;

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
      v_product.id,
      'sale',
      -v_quantity,
      v_product.stock_quantity,
      v_product.stock_quantity - v_quantity,
      'Stock deducted from customer checkout',
      v_customer_id,
      v_order_id
    );
  end loop;

  insert into public.payments (
    order_id,
    amount,
    status,
    method
  )
  values (
    v_order_id,
    v_total_amount,
    'pending',
    p_payment_method
  );

  update public.customers
  set
    phone = coalesce(nullif(p_phone, ''), phone),
    address_line_1 = p_delivery_address_line_1,
    address_line_2 = p_delivery_address_line_2,
    city = p_delivery_city,
    state = p_delivery_state,
    country = coalesce(p_delivery_country, 'Nigeria')
  where id = v_customer_id;

  if p_phone is not null and trim(p_phone) <> '' then
    update public.profiles
    set phone = p_phone
    where id = v_customer_id;
  end if;

  return query
  select v_order_id, v_order_number, v_total_amount;
end;
$$;

grant execute on function public.create_customer_order(
  jsonb,
  text,
  text,
  text,
  text,
  text,
  text,
  text,
  public.payment_method
) to authenticated;