"use client"

import { motion } from "framer-motion"
import { Heart, ShoppingBag, Star, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Product {
  id: number
  name: string
  nameHindi: string
  category: string
  price: string
  originalPrice?: string
  rating: number
  reviews: number
  image: string
  description: string
  tag?: string
  craftType: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Ivory Chikankari Anarkali",
    nameHindi: "चिकनकारी अनारकली",
    category: "Festive Wear",
    price: "12,999",
    originalPrice: "18,999",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop",
    description: "Hand-embroidered with traditional phanda, murri & shadow work",
    tag: "Bestseller",
    craftType: "Chikankari",
  },
  {
    id: 2,
    name: "Royal Zardozi Lehenga",
    nameHindi: "ज़रदोज़ी लहंगा",
    category: "Bridal Collection",
    price: "89,999",
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=400&h=500&fit=crop",
    description: "Luxurious gold metallic embroidery on rich maroon velvet",
    tag: "Premium",
    craftType: "Zardozi",
  },
  {
    id: 3,
    name: "Pastel Lucknowi Kurta Set",
    nameHindi: "लखनवी कुर्ता सेट",
    category: "Casual Ethnic",
    price: "4,999",
    originalPrice: "6,999",
    rating: 4.7,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    description: "Breathable cotton with delicate jali work for summer comfort",
    tag: "Sale",
    craftType: "Shadow Work",
  },
  {
    id: 4,
    name: "Nawabi Sherwani",
    nameHindi: "नवाबी शेरवानी",
    category: "Groom Collection",
    price: "34,999",
    rating: 4.8,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    description: "Classic ivory with intricate gota patti & pearl detailing",
    craftType: "Gota Patti",
  },
]

export function RecommendationCards() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Tag */}
            {product.tag && (
              <span className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-semibold ${
                product.tag === "Bestseller" 
                  ? "bg-primary text-primary-foreground" 
                  : product.tag === "Premium"
                  ? "bg-foreground text-background"
                  : "bg-destructive text-destructive-foreground"
              }`}>
                {product.tag}
              </span>
            )}

            {/* Craft type badge */}
            <span className="absolute right-3 top-3 rounded-md bg-card/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
              {product.craftType}
            </span>
            
            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute right-3 top-12 mt-2 flex h-9 w-9 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm transition-all hover:scale-110"
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  favorites.includes(product.id)
                    ? "fill-destructive text-destructive"
                    : "text-muted-foreground"
                }`}
              />
            </button>

            {/* Hover Actions */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex gap-2">
                <Button className="flex-1 gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button size="icon" variant="secondary" className="shrink-0 bg-card/90 backdrop-blur-sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {product.category}
                </p>
                <h3 className="mt-1 font-serif text-base font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground">{product.nameHindi}</p>
              </div>
            </div>
            
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-foreground">
                  {"₹"}{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {"₹"}{product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                <span className="text-xs font-semibold text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
