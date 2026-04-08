drop policy if exists "payments_insert_staff_only" on public.payments;

create policy "payments_insert_own_or_staff"
on public.payments
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