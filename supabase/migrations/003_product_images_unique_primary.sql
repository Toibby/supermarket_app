create unique index if not exists uq_product_primary_image
on public.product_images(product_id)
where is_primary = true;