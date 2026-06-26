import { Product, BlogPost, Testimonial } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Classic Oversized Hoodie",
    price: 49.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
    colorsHex: {
      "Gray": "#9CA3AF",
      "Black": "#18181B",
      "Navy": "#1E3A8A"
    },
    material: "80% Cotton, 20% Polyester",
    description: "Comfortable oversized hoodie perfect for everyday wear, designed with a drop shoulder silhouette, double-layered hood, and soft brushed interior.",
    image: "/src/assets/images/hoodie_product_1781761923090.jpg",
    category: "New Arrivals",
    rating: 4.8
  },
  {
    id: "prod-2",
    name: "Urban Cargo Pants",
    price: 59.99,
    sizes: ["30", "32", "34", "36"],
    colors: ["Olive", "Black", "Khaki"],
    colorsHex: {
      "Olive": "#556B2F",
      "Black": "#18181B",
      "Khaki": "#DBD0B4"
    },
    material: "Cotton Blend",
    description: "Functional cargo pants with modern streetwear styling. Features multi-pocket utility compartments, relaxed tapered fit, and premium durable drawstring cuffs.",
    image: "/src/assets/images/cargo_product_1781761938103.jpg",
    category: "Men's Collection",
    rating: 4.6
  },
  {
    id: "prod-3",
    name: "Essential Graphic Tee",
    price: 24.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    colorsHex: {
      "White": "#F9FAFB",
      "Black": "#18181B"
    },
    material: "100% Cotton",
    description: "Soft premium t-shirt featuring exclusive UrbanClothing artwork printed with eco-friendly ink. Heavyweight premium cotton provides structured shape and ultimate comfort.",
    image: "/src/assets/images/graphic_tee_product_1781761952621.jpg",
    category: "New Arrivals",
    rating: 4.7
  },
  {
    id: "prod-4",
    name: "Denim Street Jacket",
    price: 79.99,
    sizes: ["M", "L", "XL"],
    colors: ["Blue Denim"],
    colorsHex: {
      "Blue Denim": "#4B6584"
    },
    material: "Premium Denim",
    description: "A versatile jacket designed for all seasons. Features a classic collared neckline, structured heavy washed denim feel, and custom metallic hardware for a timeless streetwear flair.",
    image: "/src/assets/images/denim_jacket_product_1781761968324.jpg",
    category: "Women's Collection",
    rating: 4.9
  },
  {
    id: "prod-5",
    name: "Minimalist Backpack",
    price: 44.99,
    capacity: "20L",
    colors: ["Black", "Gray"],
    colorsHex: {
      "Black": "#18181B",
      "Gray": "#9CA3AF"
    },
    material: "Water-Resistant Premium Poly-Nylon",
    description: "Modern backpack suitable for work, travel, and everyday use. Includes an integrated 15-inch padded laptop sleeve, hidden security pocket, and ergonomic shoulder straps.",
    image: "/src/assets/images/backpack_product_1781761982458.jpg",
    category: "Accessories",
    rating: 4.5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Top 10 Streetwear Trends in 2025",
    excerpt: "Streetwear continues to evolve with oversized silhouettes, cargo-inspired designs, bold graphics, and sustainable materials leading the industry.",
    content: "Streetwear has transcended its subcultural origins to become the defining language of modern apparel. In 2025, we are witnessing a powerful convergence of outdoor utility (gorpcore) and high-luxury minimalism. Underneath this aesthetic revolution are four undeniable trends:\n\n1. **Aggressive Silhouettes**: The 'oversized' mandate has become even more structured. Boxy shoulder cuts, wide-sleeved crops, and voluminous pants dominate lookbooks.\n\n2. **Cargo and Tactical Hardware**: Utility is no longer functional—it is design. Double-knee reinforcements, tactical D-rings, modular pockets, and release-buckles add modular complexity to daily garments.\n\n3. **Eco-Streetwear**: The industry has taken severe strides toward responsibility. Upcycled deadstock materials, vegan faux-leathers, organic canvas, and waterless denim washes are no longer premium alternatives—they are standard.\n\n4. **Earth tone Palettes**: Deep olives, warm sands, natural stones, and charcoal slates are grounding streetwear designs, pushing back against the neon oversaturation of the late 2010s.\n\nStaying relevant is about fluid adaptation. Combining structured neutral items (like our iconic Urban Cargo Pants in Olive) with soft-textured classics ensures you remain effortlessly aligned with the global shift.",
    publishedDate: "March 10, 2025",
    author: "Elena Petrova",
    category: "Streetwear",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=720"
  },
  {
    id: "post-2",
    title: "How to Build a Capsule Wardrobe",
    excerpt: "A capsule wardrobe consists of versatile essentials that can be mixed and matched to create multiple outfits while reducing unnecessary purchases.",
    content: "The modern wardrobe is clutter-free, thoughtful, and highly reusable. A 'capsule wardrobe' is a curated collection of classic garments that harmonize seamlessly, empowering you to wake up and get ready in under two minutes without ever saying 'I have nothing to wear.'\n\nHere is how to design yours from scratch:\n\n### Step 1: Establish Your Core Neutral Base\nSixty percent of your capsule wardrobe should settle on primary colors: Black, Charcoal, Navy, White, and Heather Gray. These colors layer together without ever clashing. Our Essential Graphic Tee in Black and White serves as the ideal canvas.\n\n### Step 2: Select Your Top and Bottom Silhouettes\n- **Tops**: 2 Heavyweight Tees, 1 Classic Hoodie, 1 Structured Denim Jacket.\n- **Bottoms**: 1 Pair of Relaxed Cargo Pants, 1 Pair of Heavy Selvedge Denim Jeans, 1 Pair of Chino trousers.\n\n### Step 3: Introduce Texture and Layering\nTexture is what separates a boring outfit from an elite one. A structured Blue Denim Jacket layered over a soft gray oversized hoodie creates depth and shadow, transforming basic garments into an artistic style statement.\n\n### Benefit of Capsule-building:\nBy focusing on premium building blocks, you spend less time shopping, drastically reduce textile waste, and ensure every outfit you assemble is high-quality and timeless.",
    publishedDate: "April 2, 2025",
    author: "Jameson Reynolds",
    category: "Style Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=720"
  },
  {
    id: "post-3",
    title: "Sustainable Fashion: Why It Matters",
    excerpt: "Consumers are increasingly choosing brands that prioritize ethical production and environmentally friendly materials.",
    content: "For decades, the standard fashion runway operated on 'extract, create, discard' speed cycles. Today, the climate reality demands an entirely new paradigm. Sustainable fashion is no longer a corporate buzzword; it is a collaborative necessity between designers and consumers.\n\n### What Sustainable Fashion Actually Means:\n- **Ethical Working Standards**: Demanding fair labor wages, sanitary work environments, and regulated working hours for the garment makers at home and abroad.\n- **Carbon Neutral Logistics**: Working with factories that leverage renewable energy, optimizing shipping routes, and removing single-use plastic wrapping.\n- **Material Transparency**: Favoring organic natural cottons, biodegradable linen crops, and recycled polyester blends which use a fraction of plastic microfibers compared to virgin synthetics.\n\nAt UrbanClothing, our mission is to ensure streetwear feels as good to the planet as it does on your skin. Every piece we release, from our organic cotton hoodies to our functional recycled backpacks, matches rigorous tests of supply chain transparency.",
    publishedDate: "May 15, 2025",
    author: "Sophia Sterling",
    category: "Sustainability",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=720"
  },
  {
    id: "post-4",
    title: "Summer Styling Guide",
    excerpt: "Lightweight fabrics, neutral tones, and breathable designs are key elements for staying comfortable and fashionable during warmer months.",
    content: "Summer dressing can be incredibly challenging. How do you stay cool without losing your style identity when you can no longer rely on your favorite heavy winter trench coats or chunky knits?\n\nThe answer is simple: **High-quality, lightweight fabrics and architectural geometry.**\n\n### 1. Master the Boxy Crop Fitting\nA relaxed-fit, heavy-wash, 100% cotton tee is naturally breathable because it stands slightly off the body, enabling natural air circulation while keeping a clean, boxy, high-street look.\n\n### 2. The Power of Light Denim\nA light-wash denim jacket is the quintessential summer companion. Keep it casually slung around your shoulders or waist, ready for rapid transitions into air-conditioned cafes or twilight rooftops.\n\n### 3. Neutral Tonal Outfits\nLighter shades like cream, khaki, sand, and vintage-white deflect heat and give off an effortless, clean, summer-coastal street look. Swap your heavy black boots for retro sneakers and complete the look with our low-profile Minimalist Backpack.",
    publishedDate: "June 5, 2025",
    author: "Marcella Vance",
    category: "Style Guide",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=720"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sophia M.",
    quote: "Amazing quality and fast delivery. Definitely shopping again. The fabric weight on the oversized hoodie feels exactly like high-end luxury streetwear.",
    role: "Verified Buyer",
    rating: 5
  },
  {
    id: "test-2",
    name: "James R.",
    quote: "Stylish designs and perfect fit. The cargo pants have unmatched utility and are extremely comfortable for full-day travel or working on-set.",
    role: "Digital Creator",
    rating: 5
  },
  {
    id: "test-3",
    name: "Emily K.",
    quote: "UrbanClothing has become my absolute favorite clothing brand. They strike the ultimate balance between premium sustainable materials and affordable prices.",
    role: "Fashion Consultant",
    rating: 5
  }
];
