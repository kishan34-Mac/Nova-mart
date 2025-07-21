export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  isNew?: boolean;
  isSale?: boolean;
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2847,
    category: "Electronics",
    description: "Premium wireless headphones with industry-leading noise cancellation technology.",
    features: ["30-hour battery", "Quick charge", "Premium sound quality", "Comfortable fit"],
    isSale: true,
    stock: 15
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1523,
    category: "Electronics",
    description: "Advanced fitness tracking with heart rate monitoring and GPS.",
    features: ["7-day battery", "Water resistant", "GPS tracking", "Health monitoring"],
    isNew: true,
    stock: 25
  },
  {
    id: "3",
    name: "Premium Laptop Backpack",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 892,
    category: "Accessories",
    description: "Durable and stylish laptop backpack with multiple compartments.",
    features: ["Water resistant", "15-inch laptop compartment", "USB charging port", "Anti-theft"],
    isSale: true,
    stock: 30
  },
  {
    id: "4",
    name: "Wireless Charging Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 456,
    category: "Electronics",
    description: "Fast wireless charging stand compatible with all Qi-enabled devices.",
    features: ["Fast charging", "Universal compatibility", "LED indicator", "Sleek design"],
    stock: 50
  },
  {
    id: "5",
    name: "Minimalist Desk Lamp",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 234,
    category: "Home & Office",
    description: "Modern LED desk lamp with adjustable brightness and color temperature.",
    features: ["Touch control", "USB charging port", "Adjustable brightness", "Energy efficient"],
    isNew: true,
    stock: 20
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1089,
    category: "Electronics",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    features: ["12-hour battery", "Waterproof", "360-degree sound", "Voice assistant"],
    isSale: true,
    stock: 35
  },
  {
    id: "7",
    name: "Premium Coffee Mug",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 167,
    category: "Home & Kitchen",
    description: "Ceramic coffee mug with temperature retention technology.",
    features: ["Temperature retention", "Ergonomic handle", "Dishwasher safe", "16oz capacity"],
    stock: 100
  },
  {
    id: "8",
    name: "Mechanical Keyboard",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 2156,
    category: "Electronics",
    description: "Professional mechanical keyboard with RGB backlighting and tactile switches.",
    features: ["RGB backlighting", "Tactile switches", "Programmable keys", "USB-C connection"],
    isNew: true,
    stock: 18
  }
];

export const categories = [
  "All",
  "Electronics",
  "Accessories",
  "Home & Office",
  "Home & Kitchen"
];