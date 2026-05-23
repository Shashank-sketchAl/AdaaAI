"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Gender = "women" | "men";

interface Product {
  id: string;
  name: string;
  nameHindi: string;
  price: number;
  image: string;
  craftType: string;
  rating: number;
  reviews: number;
  description: string;
  artisan: string;
  gender: Gender;
}

const products: Product[] = [
  // Women's Collection
  {
    id: "w1",
    name: "Pure Chikankari Kurta",
    nameHindi: "शुद्ध चिकनकारी कुर्ता",
    price: 4500,
    image: "/images/chikankari-kurta-women.jpg",
    craftType: "Chikankari",
    rating: 4.9,
    reviews: 234,
    description: "Hand-embroidered with Tepchi & Bakhiya stitches on pure cotton",
    artisan: "Ustad Irfan",
    gender: "women"
  },
  {
    id: "w2",
    name: "Shadow Work Anarkali",
    nameHindi: "शैडो वर्क अनारकली",
    price: 8500,
    image: "/images/chikankari-anarkali.jpg",
    craftType: "Shadow Work",
    rating: 4.8,
    reviews: 156,
    description: "Delicate translucent embroidery on georgette with mukaish highlights",
    artisan: "Begum Fatima",
    gender: "women"
  },
  {
    id: "w3",
    name: "Zardozi Bridal Dupatta",
    nameHindi: "ज़रदोज़ी दुल्हन दुपट्टा",
    price: 15000,
    image: "/images/zardozi-dupatta.jpg",
    craftType: "Zardozi",
    rating: 5.0,
    reviews: 89,
    description: "Gold & silver metallic thread work on pure silk, bridal collection",
    artisan: "Haji Sahab",
    gender: "women"
  },
  {
    id: "w4",
    name: "Gota Patti Lehenga",
    nameHindi: "गोटा पट्टी लहंगा",
    price: 25000,
    image: "/images/gota-patti-lehenga.jpg",
    craftType: "Gota Patti",
    rating: 4.9,
    reviews: 67,
    description: "Royal golden ribbon work on velvet, perfect for weddings",
    artisan: "Noor Collection",
    gender: "women"
  },
  {
    id: "w5",
    name: "Shadow Work Suit",
    nameHindi: "शैडो वर्क सूट",
    price: 6500,
    image: "/images/shadow-work-suit.jpg",
    craftType: "Shadow Work",
    rating: 4.7,
    reviews: 198,
    description: "Elegant blue georgette with fine shadow embroidery",
    artisan: "Amina Bibi",
    gender: "women"
  },
  // Men's Collection
  {
    id: "m1",
    name: "Nawabi Sherwani",
    nameHindi: "नवाबी शेरवानी",
    price: 18000,
    image: "/images/nawabi-sherwani-men.jpg",
    craftType: "Zardozi",
    rating: 4.9,
    reviews: 145,
    description: "Royal ivory sherwani with heavy gold zardozi, Nawabi style",
    artisan: "Shahi Darzi",
    gender: "men"
  },
  {
    id: "m2",
    name: "Chikankari Kurta Pajama",
    nameHindi: "चिकनकारी कुर्ता पायजामा",
    price: 3500,
    image: "/images/kurta-pajama-men.jpg",
    craftType: "Chikankari",
    rating: 4.8,
    reviews: 312,
    description: "Pure cotton kurta with hand embroidery, complete set",
    artisan: "Mohammad Irfan",
    gender: "men"
  },
  {
    id: "m3",
    name: "Mukaish Nehru Jacket",
    nameHindi: "मुकैश नेहरू जैकेट",
    price: 5500,
    image: "/images/nehru-jacket.jpg",
    craftType: "Mukaish",
    rating: 4.7,
    reviews: 178,
    description: "Elegant beige jacket with subtle metallic mukaish work",
    artisan: "Lucknow Couture",
    gender: "men"
  },
  {
    id: "m4",
    name: "Royal Achkan",
    nameHindi: "शाही अचकन",
    price: 12000,
    image: "/images/achkan-men.jpg",
    craftType: "Zardozi",
    rating: 4.9,
    reviews: 98,
    description: "Deep navy achkan with gold buttons and embroidery, Nawabi heritage",
    artisan: "Shahi Collection",
    gender: "men"
  }
];

export function ProductShowcase() {
  const [activeGender, setActiveGender] = useState<Gender>("women");
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredProducts = products.filter(p => p.gender === activeGender);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-background" id="collection">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Curated Collection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-4">
            नवाबी पोशाक संग्रह
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Handpicked ethnic wear from Lucknow&apos;s finest karigars, each piece tells a story of generations
          </p>

          {/* Gender Toggle */}
          <div className="inline-flex bg-secondary rounded-full p-1.5 gap-1">
            <button
              onClick={() => setActiveGender("women")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeGender === "women"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Women&apos;s - महिलाओं के लिए
            </button>
            <button
              onClick={() => setActiveGender("men")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeGender === "men"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Men&apos;s - पुरुषों के लिए
            </button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGender}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Top Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        favorites.includes(product.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/90 text-foreground hover:bg-white"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/90 text-foreground hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Craft Badge */}
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                    {product.craftType}
                  </Badge>

                  {/* Quick Add */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>

                  <h3 className="font-medium text-foreground mb-0.5 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-primary/80 mb-2">{product.nameHindi}</p>
                  
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-semibold text-foreground">
                        ₹{product.price.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      by {product.artisan}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Complete Collection
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
