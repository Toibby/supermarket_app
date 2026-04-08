-- =========================================================
-- SUPERMARKET SYSTEM - 120 PRODUCT SEED
-- =========================================================

with product_seed as (
  select *
  from (
    values
      -- Groceries (30)
      ('groceries','Royal Basmati Rice 5kg','royal-basmati-rice-5kg-2','SKU-GR-001',18900,40,true),
      ('groceries','Mama Gold Rice 5kg','mama-gold-rice-5kg','SKU-GR-002',17500,35,false),
      ('groceries','Cap Rice 10kg','cap-rice-10kg','SKU-GR-003',34500,20,false),
      ('groceries','Golden Penny Spaghetti','golden-penny-spaghetti-2','SKU-GR-004',1200,80,true),
      ('groceries','Honeywell Pasta','honeywell-pasta','SKU-GR-005',1300,70,false),
      ('groceries','Semovita 1kg','semovita-1kg','SKU-GR-006',2200,60,false),
      ('groceries','Semolina 1kg','semolina-1kg','SKU-GR-007',2100,55,false),
      ('groceries','Garri White 2kg','garri-white-2kg','SKU-GR-008',2800,50,false),
      ('groceries','Garri Yellow 2kg','garri-yellow-2kg','SKU-GR-009',3000,45,false),
      ('groceries','Beans Brown 2kg','beans-brown-2kg','SKU-GR-010',4200,40,false),
      ('groceries','Beans White 2kg','beans-white-2kg','SKU-GR-011',4300,35,false),
      ('groceries','Yam Flour 1kg','yam-flour-1kg','SKU-GR-012',3500,30,false),
      ('groceries','Wheat Meal 1kg','wheat-meal-1kg','SKU-GR-013',2400,32,false),
      ('groceries','Sugar 1kg','sugar-1kg','SKU-GR-014',1800,80,false),
      ('groceries','Salt 500g','salt-500g','SKU-GR-015',500,100,false),
      ('groceries','Tomato Paste Tin','tomato-paste-tin-2','SKU-GR-016',900,100,false),
      ('groceries','Vegetable Oil 1L','vegetable-oil-1l','SKU-GR-017',3200,42,false),
      ('groceries','Groundnut Oil 1L','groundnut-oil-1l','SKU-GR-018',4500,36,false),
      ('groceries','Palm Oil 1L','palm-oil-1l','SKU-GR-019',2800,38,false),
      ('groceries','Curry Powder','curry-powder','SKU-GR-020',700,65,false),
      ('groceries','Thyme Jar','thyme-jar','SKU-GR-021',650,58,false),
      ('groceries','Seasoning Cubes Pack','seasoning-cubes-pack','SKU-GR-022',850,90,false),
      ('groceries','Corn Flour 1kg','corn-flour-1kg','SKU-GR-023',1700,44,false),
      ('groceries','Custard Vanilla 1kg','custard-vanilla-1kg','SKU-GR-024',2600,27,false),
      ('groceries','Powdered Milk 400g','powdered-milk-400g','SKU-GR-025',3900,25,false),
      ('groceries','Evaporated Milk Tin','evaporated-milk-tin','SKU-GR-026',1200,62,false),
      ('groceries','Breakfast Oats 500g','breakfast-oats-500g','SKU-GR-027',2100,40,false),
      ('groceries','Cornflakes 500g','cornflakes-500g','SKU-GR-028',2800,33,false),
      ('groceries','Noodles Chicken Pack','noodles-chicken-pack','SKU-GR-029',1800,75,false),
      ('groceries','Flour 1kg','flour-1kg','SKU-GR-030',1600,50,false),

      -- Beverages (20)
      ('beverages','Orange Juice 1L','orange-juice-1l-2','SKU-BV-001',3200,50,true),
      ('beverages','Pineapple Juice 1L','pineapple-juice-1l','SKU-BV-002',3000,44,false),
      ('beverages','Apple Juice 1L','apple-juice-1l','SKU-BV-003',3100,41,false),
      ('beverages','Mango Juice 1L','mango-juice-1l','SKU-BV-004',3050,39,false),
      ('beverages','Table Water 75cl','table-water-75cl-2','SKU-BV-005',300,200,false),
      ('beverages','Sparkling Water','sparkling-water','SKU-BV-006',1500,28,false),
      ('beverages','Sachet Water Bag','sachet-water-bag','SKU-BV-007',450,120,false),
      ('beverages','Malt Drink Can','malt-drink-can','SKU-BV-008',800,70,false),
      ('beverages','Cola Soft Drink 50cl','cola-soft-drink-50cl','SKU-BV-009',500,95,false),
      ('beverages','Lemon Soft Drink 50cl','lemon-soft-drink-50cl','SKU-BV-010',500,92,false),
      ('beverages','Orange Soda 50cl','orange-soda-50cl','SKU-BV-011',500,89,false),
      ('beverages','Energy Drink','energy-drink','SKU-BV-012',1200,52,false),
      ('beverages','Chocolate Drink Sachet','chocolate-drink-sachet','SKU-BV-013',1700,46,false),
      ('beverages','Tea Bags Pack','tea-bags-pack','SKU-BV-014',1400,54,false),
      ('beverages','Instant Coffee Jar','instant-coffee-jar','SKU-BV-015',3500,22,false),
      ('beverages','Coconut Drink Can','coconut-drink-can','SKU-BV-016',950,31,false),
      ('beverages','Guava Juice 1L','guava-juice-1l','SKU-BV-017',2950,29,false),
      ('beverages','Strawberry Drink 1L','strawberry-drink-1l','SKU-BV-018',3000,24,false),
      ('beverages','Yoghurt Drink 500ml','yoghurt-drink-500ml','SKU-BV-019',1800,37,false),
      ('beverages','Vanilla Milk Drink 500ml','vanilla-milk-drink-500ml','SKU-BV-020',1900,34,false),

      -- Fresh Produce (20)
      ('fresh-produce','Fresh Tomatoes Pack','fresh-tomatoes-pack-2','SKU-FP-001',2500,60,true),
      ('fresh-produce','Fresh Pepper Pack','fresh-pepper-pack','SKU-FP-002',1800,50,false),
      ('fresh-produce','Fresh Onion Pack','fresh-onion-pack','SKU-FP-003',2000,43,false),
      ('fresh-produce','Fresh Cabbage','fresh-cabbage','SKU-FP-004',1700,24,false),
      ('fresh-produce','Fresh Lettuce','fresh-lettuce','SKU-FP-005',1500,22,false),
      ('fresh-produce','Fresh Cucumber','fresh-cucumber','SKU-FP-006',1200,26,false),
      ('fresh-produce','Fresh Carrots Pack','fresh-carrots-pack-2','SKU-FP-007',1800,55,false),
      ('fresh-produce','Irish Potatoes 2kg','irish-potatoes-2kg','SKU-FP-008',3400,35,false),
      ('fresh-produce','Sweet Potatoes 2kg','sweet-potatoes-2kg','SKU-FP-009',3200,31,false),
      ('fresh-produce','Fresh Apples Pack','fresh-apples-pack','SKU-FP-010',3500,34,false),
      ('fresh-produce','Fresh Banana Bunch','fresh-banana-bunch','SKU-FP-011',2800,29,false),
      ('fresh-produce','Fresh Oranges Pack','fresh-oranges-pack','SKU-FP-012',2600,31,false),
      ('fresh-produce','Watermelon Slice','watermelon-slice','SKU-FP-013',2200,21,false),
      ('fresh-produce','Pineapple Whole','pineapple-whole','SKU-FP-014',2500,18,false),
      ('fresh-produce','Avocado Pear Pack','avocado-pear-pack','SKU-FP-015',3000,16,false),
      ('fresh-produce','Fresh Spinach Pack','fresh-spinach-pack','SKU-FP-016',1400,27,false),
      ('fresh-produce','Fresh Pumpkin Leaves','fresh-pumpkin-leaves','SKU-FP-017',1300,30,false),
      ('fresh-produce','Fresh Okra Pack','fresh-okra-pack','SKU-FP-018',1600,26,false),
      ('fresh-produce','Fresh Green Beans Pack','fresh-green-beans-pack','SKU-FP-019',1900,20,false),
      ('fresh-produce','Lemon Pack','lemon-pack','SKU-FP-020',1700,23,false),

      -- Household (20)
      ('household','Dishwashing Liquid','dishwashing-liquid-2','SKU-HH-001',1800,35,false),
      ('household','Laundry Detergent','laundry-detergent-2','SKU-HH-002',4500,24,true),
      ('household','Toilet Tissue Pack','toilet-tissue-pack','SKU-HH-003',2500,60,false),
      ('household','Bath Soap Multipack','bath-soap-multipack','SKU-HH-004',1800,58,false),
      ('household','Laundry Bar Soap','laundry-bar-soap','SKU-HH-005',900,72,false),
      ('household','Floor Cleaner','floor-cleaner','SKU-HH-006',2200,27,false),
      ('household','Bleach 1L','bleach-1l','SKU-HH-007',1300,35,false),
      ('household','Air Freshener','air-freshener','SKU-HH-008',2500,33,false),
      ('household','Waste Bin Liners','waste-bin-liners','SKU-HH-009',1200,48,false),
      ('household','Paper Towels Pack','paper-towels-pack','SKU-HH-010',2100,41,false),
      ('household','Bathroom Cleaner','bathroom-cleaner','SKU-HH-011',2300,29,false),
      ('household','Glass Cleaner','glass-cleaner','SKU-HH-012',2000,26,false),
      ('household','Insect Spray','insect-spray','SKU-HH-013',2800,18,false),
      ('household','Disinfectant 1L','disinfectant-1l','SKU-HH-014',2400,30,false),
      ('household','Mop Head Refill','mop-head-refill','SKU-HH-015',1500,17,false),
      ('household','Scrubbing Brush','scrubbing-brush','SKU-HH-016',950,39,false),
      ('household','Kitchen Foil','kitchen-foil','SKU-HH-017',1100,44,false),
      ('household','Cling Film Wrap','cling-film-wrap','SKU-HH-018',1000,38,false),
      ('household','Matches Box Pack','matches-box-pack','SKU-HH-019',600,67,false),
      ('household','Candles Pack','candles-pack','SKU-HH-020',850,53,false),

      -- Snacks (15)
      ('snacks','Potato Chips Classic','potato-chips-classic-2','SKU-SN-001',1200,70,false),
      ('snacks','Chocolate Biscuits','chocolate-biscuits-2','SKU-SN-002',950,90,false),
      ('snacks','Cream Crackers','cream-crackers','SKU-SN-003',850,80,false),
      ('snacks','Chocolate Wafer','chocolate-wafer','SKU-SN-004',600,90,false),
      ('snacks','Peanut Cookies','peanut-cookies','SKU-SN-005',950,67,false),
      ('snacks','Plantain Chips','plantain-chips','SKU-SN-006',1000,54,false),
      ('snacks','Popcorn Butter','popcorn-butter','SKU-SN-007',1200,49,false),
      ('snacks','Shortbread Biscuits','shortbread-biscuits','SKU-SN-008',1100,57,false),
      ('snacks','Salted Peanuts Pack','salted-peanuts-pack','SKU-SN-009',750,63,false),
      ('snacks','Chin Chin Family Pack','chin-chin-family-pack','SKU-SN-010',1400,52,false),
      ('snacks','Coconut Cookies','coconut-cookies','SKU-SN-011',1000,48,false),
      ('snacks','Mini Cupcake Pack','mini-cupcake-pack','SKU-SN-012',1600,21,false),
      ('snacks','Cheese Crackers','cheese-crackers','SKU-SN-013',1150,34,false),
      ('snacks','Pretzels Pack','pretzels-pack','SKU-SN-014',1350,25,false),
      ('snacks','Vanilla Wafers','vanilla-wafers','SKU-SN-015',950,40,false),

      -- Personal Care (15)
      ('personal-care','Body Lotion 500ml','body-lotion-500ml-2','SKU-PC-001',3900,28,false),
      ('personal-care','Toothpaste Fresh Mint','toothpaste-fresh-mint-2','SKU-PC-002',1400,65,false),
      ('personal-care','Toothbrush Medium','toothbrush-medium','SKU-PC-003',700,75,false),
      ('personal-care','Bathing Sponge','bathing-sponge','SKU-PC-004',500,88,false),
      ('personal-care','Shampoo 400ml','shampoo-400ml','SKU-PC-005',2800,33,false),
      ('personal-care','Hair Conditioner','hair-conditioner','SKU-PC-006',3000,27,false),
      ('personal-care','Roll-On Deodorant','roll-on-deodorant','SKU-PC-007',2200,39,false),
      ('personal-care','Petroleum Jelly','petroleum-jelly','SKU-PC-008',1600,46,false),
      ('personal-care','Hand Wash 500ml','hand-wash-500ml','SKU-PC-009',1800,32,false),
      ('personal-care','Hand Sanitizer 250ml','hand-sanitizer-250ml','SKU-PC-010',1500,29,false),
      ('personal-care','Face Towel Pack','face-towel-pack','SKU-PC-011',900,41,false),
      ('personal-care','Cotton Buds Pack','cotton-buds-pack','SKU-PC-012',650,56,false),
      ('personal-care','Disposable Razor Pack','disposable-razor-pack','SKU-PC-013',1200,35,false),
      ('personal-care','Baby Wipes Pack','baby-wipes-pack','SKU-PC-014',1700,38,false),
      ('personal-care','Body Spray','body-spray','SKU-PC-015',2500,24,false)
  ) as t(category_slug, name, slug, sku, price, stock_quantity, featured)
),
category_map as (
  select id, slug
  from public.categories
),
inserted as (
  insert into public.products (
    category_id,
    name,
    slug,
    description,
    sku,
    price,
    stock_quantity,
    low_stock_threshold,
    status,
    featured,
    thumbnail_url
  )
  select
    c.id,
    p.name,
    p.slug,
    p.name || ' available in store.',
    p.sku,
    p.price,
    p.stock_quantity,
    5,
    'active',
    p.featured,
    'https://placehold.co/800x600?text=' || replace(p.name, ' ', '+')
  from product_seed p
  join category_map c
    on c.slug = p.category_slug
  on conflict (slug) do update
  set
    name = excluded.name,
    description = excluded.description,
    sku = excluded.sku,
    price = excluded.price,
    stock_quantity = excluded.stock_quantity,
    low_stock_threshold = excluded.low_stock_threshold,
    status = excluded.status,
    featured = excluded.featured,
    thumbnail_url = excluded.thumbnail_url
  returning id, name, thumbnail_url
)
insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  is_primary,
  sort_order
)
select
  p.id,
  p.thumbnail_url,
  p.name,
  true,
  0
from public.products p
where not exists (
  select 1
  from public.product_images pi
  where pi.product_id = p.id
    and pi.is_primary = true
);