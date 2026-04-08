// import type { Category, Product } from "@supermarket/shared";

// export const demoCategories: Category[] = [
//   {
//     id: "cat-1",
//     name: "Groceries",
//     slug: "groceries",
//     description: "Daily cooking essentials",
//     imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e",
//     isActive: true
//   },
//   {
//     id: "cat-2",
//     name: "Beverages",
//     slug: "beverages",
//     description: "Soft drinks, juices and more",
//     imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
//     isActive: true
//   },
//   {
//     id: "cat-3",
//     name: "Fresh Produce",
//     slug: "fresh-produce",
//     description: "Vegetables and fruits",
//     imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
//     isActive: true
//   },
//   {
//     id: "cat-4",
//     name: "Household",
//     slug: "household",
//     description: "Cleaning and home care",
//     imageUrl: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
//     isActive: true
//   }
// ];

// export const demoProducts: Product[] = [
//   {
//     id: "prod-1",
//     categoryId: "cat-1",
//     name: "Royal Basmati Rice 5kg",
//     slug: "royal-basmati-rice-5kg",
//     description: "Premium long-grain rice for family meals.",
//     price: 18900,
//     compareAtPrice: 21000,
//     sku: "RICE-5KG-001",
//     stockQuantity: 32,
//     status: "active",
//     featured: true,
//     thumbnailUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
//     images: [
//       {
//         id: "img-1",
//         productId: "prod-1",
//         imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
//         altText: "Bag of rice",
//         isPrimary: true,
//         sortOrder: 0
//       }
//     ]
//   },
//   {
//     id: "prod-2",
//     categoryId: "cat-2",
//     name: "Orange Juice 1L",
//     slug: "orange-juice-1l",
//     description: "Refreshing orange juice with rich flavor.",
//     price: 3200,
//     sku: "BEV-OJ-1L",
//     stockQuantity: 48,
//     status: "active",
//     featured: true,
//     thumbnailUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
//     images: [
//       {
//         id: "img-2",
//         productId: "prod-2",
//         imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
//         altText: "Orange juice bottle",
//         isPrimary: true,
//         sortOrder: 0
//       }
//     ]
//   },
//   {
//     id: "prod-3",
//     categoryId: "cat-3",
//     name: "Fresh Tomatoes Pack",
//     slug: "fresh-tomatoes-pack",
//     description: "Farm fresh tomatoes perfect for stews and salads.",
//     price: 2500,
//     sku: "PROD-TOM-001",
//     stockQuantity: 60,
//     status: "active",
//     featured: true,
//     thumbnailUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
//     images: [
//       {
//         id: "img-3",
//         productId: "prod-3",
//         imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
//         altText: "Fresh tomatoes",
//         isPrimary: true,
//         sortOrder: 0
//       }
//     ]
//   },
//   {
//     id: "prod-4",
//     categoryId: "cat-4",
//     name: "Dishwashing Liquid",
//     slug: "dishwashing-liquid",
//     description: "Powerful grease-cutting liquid for kitchen cleaning.",
//     price: 1800,
//     sku: "HOME-DISH-001",
//     stockQuantity: 22,
//     status: "active",
//     featured: false,
//     thumbnailUrl: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
//     images: [
//       {
//         id: "img-4",
//         productId: "prod-4",
//         imageUrl: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
//         altText: "Cleaning liquid",
//         isPrimary: true,
//         sortOrder: 0
//       }
//     ]
//   }
// ];



// import type { Category, Product } from "@supermarket/shared";

// export const demoCategories: Category[] = [
//   {
//     id: "cat-1",
//     name: "Groceries",
//     slug: "groceries",
//     description: "Daily cooking essentials",
//     imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e",
//     isActive: true,
//     sortOrder: 1
//   },
//   {
//     id: "cat-2",
//     name: "Beverages",
//     slug: "beverages",
//     description: "Soft drinks, juices and more",
//     imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
//     isActive: true,
//     sortOrder: 2
//   },
//   {
//     id: "cat-3",
//     name: "Fresh Produce",
//     slug: "fresh-produce",
//     description: "Vegetables and fruits",
//     imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
//     isActive: true,
//     sortOrder: 3
//   },
//   {
//     id: "cat-4",
//     name: "Household",
//     slug: "household",
//     description: "Cleaning and home care",
//     imageUrl: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
//     isActive: true,
//     sortOrder: 4
//   }
// ];

// export const demoProducts: Product[] = [
//   {
//     id: "prod-1",
//     categoryId: "cat-1",
//     name: "Royal Basmati Rice 5kg",
//     slug: "royal-basmati-rice-5kg",
//     description: "Premium long-grain rice for family meals.",
//     price: 18900,
//     compareAtPrice: 21000,
//     sku: "RICE-5KG-001",
//     stockQuantity: 32,
//     lowStockThreshold: 5,
//     status: "active",
//     featured: true,
//     thumbnailUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
//     images: [
//       {
//         id: "img-1",
//         productId: "prod-1",
//         imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
//         altText: "Bag of rice",
//         isPrimary: true,
//         sortOrder: 0
//       }
//     ]
//   },
//   {
//     id: "prod-2",
//     categoryId: "cat-2",
//     name: "Orange Juice 1L",
//     slug: "orange-juice-1l",
//     description: "Refreshing orange juice with rich flavor.",
//     price: 3200,
//     compareAtPrice: 3500,
//     sku: "BEV-OJ-1L",
//     stockQuantity: 48,
//     lowStockThreshold: 5,
//     status: "active",
//     featured: true,
//     thumbnailUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
//     images: [
//       {
//         id: "img-2",
//         productId: "prod-2",
//         imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
//         altText: "Orange juice bottle",
//         isPrimary: true,
//         sortOrder: 0
//       }
//     ]
//   },
//   {
//     id: "prod-3",
//     categoryId: "cat-3",
//     name: "Fresh Tomatoes Pack",
//     slug: "fresh-tomatoes-pack",
//     description: "Farm fresh tomatoes perfect for stews and salads.",
//     price: 2500,
//     sku: "PROD-TOM-001",
//     stockQuantity: 60,
//     lowStockThreshold: 8,
//     status: "active",
//     featured: true,
//     thumbnailUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
//     images: [
//       {
//         id: "img-3",
//         productId: "prod-3",
//         imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
//         altText: "Fresh tomatoes",
//         isPrimary: true,
//         sortOrder: 0
//       }
//     ]
//   },
//   {
//     id: "prod-4",
//     categoryId: "cat-4",
//     name: "Dishwashing Liquid",
//     slug: "dishwashing-liquid",
//     description: "Powerful grease-cutting liquid for kitchen cleaning.",
//     price: 1800,
//     sku: "HOME-DISH-001",
//     stockQuantity: 22,
//     lowStockThreshold: 4,
//     status: "active",
//     featured: false,
//     thumbnailUrl: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
//     images: [
//       {
//         id: "img-4",
//         productId: "prod-4",
//         imageUrl: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
//         altText: "Cleaning liquid",
//         isPrimary: true,
//         sortOrder: 0
//       }
//     ]
//   }
// ];



import type { Category, Product } from "@supermarket/shared";

export const demoCategories: Category[] = [
  {
    id: "cat-1",
    name: "Groceries",
    slug: "groceries",
    description: "Daily kitchen essentials, rice, pasta, seasoning, and staples.",
    imageUrl: "https://placehold.co/800x600?text=Groceries",
    isActive: true,
    sortOrder: 1
  },
  {
    id: "cat-2",
    name: "Beverages",
    slug: "beverages",
    description: "Water, juice, soft drinks, and household refreshment options.",
    imageUrl: "https://placehold.co/800x600?text=Beverages",
    isActive: true,
    sortOrder: 2
  },
  {
    id: "cat-3",
    name: "Fresh Produce",
    slug: "fresh-produce",
    description: "Fresh fruits and vegetables for daily cooking.",
    imageUrl: "https://placehold.co/800x600?text=Fresh+Produce",
    isActive: true,
    sortOrder: 3
  },
  {
    id: "cat-4",
    name: "Household",
    slug: "household",
    description: "Cleaning materials and everyday home care products.",
    imageUrl: "https://placehold.co/800x600?text=Household",
    isActive: true,
    sortOrder: 4
  }
];

export const demoProducts: Product[] = [
  {
    id: "prod-1",
    categoryId: "cat-1",
    name: "Royal Basmati Rice 5kg",
    slug: "royal-basmati-rice-5kg",
    description: "Premium long-grain rice for home and family meals.",
    price: 18900,
    compareAtPrice: 21000,
    sku: "RICE-5KG-001",
    stockQuantity: 32,
    lowStockThreshold: 5,
    status: "active",
    featured: true,
    thumbnailUrl: "https://placehold.co/800x600?text=Rice+5kg",
    images: [
      {
        id: "img-1",
        productId: "prod-1",
        imageUrl: "https://placehold.co/800x600?text=Rice+5kg",
        altText: "Bag of rice",
        isPrimary: true,
        sortOrder: 0
      }
    ]
  },
  {
    id: "prod-2",
    categoryId: "cat-2",
    name: "Orange Juice 1L",
    slug: "orange-juice-1l",
    description: "Refreshing orange juice for breakfast and family use.",
    price: 3200,
    compareAtPrice: 3500,
    sku: "BEV-OJ-1L",
    stockQuantity: 48,
    lowStockThreshold: 5,
    status: "active",
    featured: true,
    thumbnailUrl: "https://placehold.co/800x600?text=Orange+Juice",
    images: [
      {
        id: "img-2",
        productId: "prod-2",
        imageUrl: "https://placehold.co/800x600?text=Orange+Juice",
        altText: "Orange juice bottle",
        isPrimary: true,
        sortOrder: 0
      }
    ]
  },
  {
    id: "prod-3",
    categoryId: "cat-3",
    name: "Fresh Tomatoes Pack",
    slug: "fresh-tomatoes-pack",
    description: "Fresh tomatoes for stew, soup, and salads.",
    price: 2500,
    sku: "PROD-TOM-001",
    stockQuantity: 60,
    lowStockThreshold: 8,
    status: "active",
    featured: true,
    thumbnailUrl: "https://placehold.co/800x600?text=Tomatoes",
    images: [
      {
        id: "img-3",
        productId: "prod-3",
        imageUrl: "https://placehold.co/800x600?text=Tomatoes",
        altText: "Fresh tomatoes",
        isPrimary: true,
        sortOrder: 0
      }
    ]
  },
  {
    id: "prod-4",
    categoryId: "cat-4",
    name: "Dishwashing Liquid",
    slug: "dishwashing-liquid",
    description: "Powerful grease-cutting liquid for kitchen cleaning.",
    price: 1800,
    sku: "HOME-DISH-001",
    stockQuantity: 22,
    lowStockThreshold: 4,
    status: "active",
    featured: false,
    thumbnailUrl: "https://placehold.co/800x600?text=Dishwashing+Liquid",
    images: [
      {
        id: "img-4",
        productId: "prod-4",
        imageUrl: "https://placehold.co/800x600?text=Dishwashing+Liquid",
        altText: "Cleaning liquid",
        isPrimary: true,
        sortOrder: 0
      }
    ]
  }
];