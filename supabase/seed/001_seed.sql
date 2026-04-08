-- =========================================================
-- SUPERMARKET SYSTEM - SEED DATA
-- Batch 2
-- =========================================================

-- Categories
insert into public.categories (name, slug, description, image_url, is_active, sort_order)
values
  ('Groceries', 'groceries', 'Daily kitchen and pantry essentials', 'https://images.unsplash.com/photo-1542838132-92c53300491e', true, 1),
  ('Beverages', 'beverages', 'Drinks, juices, water, and soft drinks', 'https://images.unsplash.com/photo-1544145945-f90425340c7e', true, 2),
  ('Fresh Produce', 'fresh-produce', 'Fresh fruits and vegetables', 'https://images.unsplash.com/photo-1610832958506-aa56368176cf', true, 3),
  ('Household', 'household', 'Cleaning and daily home items', 'https://images.unsplash.com/photo-1583947582886-f40ec95dd752', true, 4),
  ('Snacks', 'snacks', 'Biscuits, chips, and light treats', 'https://images.unsplash.com/photo-1585238342024-78d387f4a707', true, 5),
  ('Personal Care', 'personal-care', 'Body care and hygiene products', 'https://images.unsplash.com/photo-1596462502278-27bfdc403348', true, 6)
on conflict (slug) do nothing;

-- Products
with category_map as (
  select id, slug from public.categories
)
insert into public.products (
  category_id,
  name,
  slug,
  description,
  sku,
  barcode,
  price,
  compare_at_price,
  stock_quantity,
  low_stock_threshold,
  status,
  featured,
  thumbnail_url
)
values
  ((select id from category_map where slug = 'groceries'), 'Royal Basmati Rice 5kg', 'royal-basmati-rice-5kg', 'Premium long grain rice for home cooking.', 'SKU-RICE-001', '100000000001', 18900, 21000, 40, 5, 'active', true, 'https://images.unsplash.com/photo-1586201375761-83865001e31c'),
  ((select id from category_map where slug = 'groceries'), 'Golden Penny Spaghetti', 'golden-penny-spaghetti', 'Quality pasta for family meals.', 'SKU-PASTA-001', '100000000002', 1200, 1400, 80, 10, 'active', true, 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5'),
  ((select id from category_map where slug = 'groceries'), 'Tomato Paste Tin', 'tomato-paste-tin', 'Rich tomato paste for stew and sauces.', 'SKU-TOM-001', '100000000003', 900, 1000, 100, 10, 'active', false, 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea'),
  ((select id from category_map where slug = 'beverages'), 'Orange Juice 1L', 'orange-juice-1l', 'Refreshing orange juice.', 'SKU-BEV-001', '100000000004', 3200, 3500, 50, 5, 'active', true, 'https://images.unsplash.com/photo-1600271886742-f049cd451bba'),
  ((select id from category_map where slug = 'beverages'), 'Table Water 75cl', 'table-water-75cl', 'Clean bottled drinking water.', 'SKU-BEV-002', '100000000005', 300, 350, 200, 20, 'active', false, 'https://images.unsplash.com/photo-1564419320461-6870880221ad'),
  ((select id from category_map where slug = 'fresh-produce'), 'Fresh Tomatoes Pack', 'fresh-tomatoes-pack', 'Fresh tomatoes for cooking.', 'SKU-PROD-001', '100000000006', 2500, null, 60, 10, 'active', true, 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea'),
  ((select id from category_map where slug = 'fresh-produce'), 'Fresh Carrots Pack', 'fresh-carrots-pack', 'Crunchy fresh carrots.', 'SKU-PROD-002', '100000000007', 1800, null, 55, 8, 'active', false, 'https://images.unsplash.com/photo-1447175008436-054170c2e979'),
  ((select id from category_map where slug = 'household'), 'Dishwashing Liquid', 'dishwashing-liquid', 'Grease-cutting dishwashing liquid.', 'SKU-HOME-001', '100000000008', 1800, 2200, 35, 5, 'active', false, 'https://images.unsplash.com/photo-1583947582886-f40ec95dd752'),
  ((select id from category_map where slug = 'household'), 'Laundry Detergent', 'laundry-detergent', 'Effective laundry cleaning detergent.', 'SKU-HOME-002', '100000000009', 4500, 5000, 24, 4, 'active', true, 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1'),
  ((select id from category_map where slug = 'snacks'), 'Potato Chips Classic', 'potato-chips-classic', 'Crunchy salted potato chips.', 'SKU-SNK-001', '100000000010', 1200, null, 70, 8, 'active', false, 'https://images.unsplash.com/photo-1566478989037-eec170784d0b'),
  ((select id from category_map where slug = 'snacks'), 'Chocolate Biscuits', 'chocolate-biscuits', 'Sweet chocolate flavored biscuits.', 'SKU-SNK-002', '100000000011', 950, 1100, 90, 12, 'active', false, 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f'),
  ((select id from category_map where slug = 'personal-care'), 'Body Lotion 500ml', 'body-lotion-500ml', 'Moisturizing body lotion.', 'SKU-CARE-001', '100000000012', 3900, 4300, 28, 5, 'active', false, 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be'),
  ((select id from category_map where slug = 'personal-care'), 'Toothpaste Fresh Mint', 'toothpaste-fresh-mint', 'Everyday mint toothpaste.', 'SKU-CARE-002', '100000000013', 1400, null, 65, 10, 'active', false, 'https://images.unsplash.com/photo-1559591937-abc7f7e8ca7b')
on conflict (slug) do nothing;

-- Product images
insert into public.product_images (product_id, image_url, alt_text, is_primary, sort_order)
select p.id, p.thumbnail_url, p.name, true, 0
from public.products p
where p.thumbnail_url is not null
on conflict do nothing;