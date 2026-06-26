export interface Product {
  id: string;
  name: string;
  price: number;
  sizes?: string[];
  colors?: string[];
  colorsHex?: Record<string, string>; // for rendering color circles
  material: string;
  description: string;
  image: string;
  category: string;
  capacity?: string; // for backpack
  rating: number; // to show star ratings
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export interface CartItem {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role: string;
  rating: number;
}
