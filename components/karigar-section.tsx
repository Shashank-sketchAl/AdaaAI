"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { NeedleThreadIcon, LoomIcon } from "./lucknow-icons";

interface Karigar {
  name: string;
  craft: string;
  experience: string;
  image: string;
  story: string;
  location: string;
}

const karigars: Karigar[] = [
  {
    name: "Ustad Mohammad Irfan",
    craft: "Chikankari Master",
    experience: "45 वर्षों का अनुभव",
    image: "/images/karigar-craftsman.jpg",
    story: "चौथी पीढ़ी के कारीगर, जिन्होंने अपने दादा से यह कला सीखी। आज भी परंपरागत टांकों को जीवित रखे हुए हैं।",
    location: "चौक, लखनऊ"
  },
  {
    name: "Bunkar Ramzan Ali",
    craft: "Handloom Weaver",
    experience: "38 वर्षों का अनुभव",
    image: "/images/bunkar-weaving.jpg",
    story: "तीन पीढ़ियों से हथकरघा बुनाई में लगे परिवार से। हर धागे में अपनी आत्मा डालते हैं।",
    location: "अमीनाबाद, लखनऊ"
  }
];

const craftTypes = [
  {
    name: "Chikankari",
    hindi: "चिकनकारी",
    icon: NeedleThreadIcon,
    description: "Shadow work embroidery with 36 traditional stitches including Tepchi, Bakhiya, Hool, Zanzeera",
    origin: "Mughal Era - Introduced by Nur Jahan"
  },
  {
    name: "Zardozi",
    hindi: "ज़रदोज़ी",
    icon: NeedleThreadIcon,
    description: "Gold and silver metallic thread embroidery, once reserved for royalty",
    origin: "Persian influence - Nawabi patronage"
  },
  {
    name: "Mukaish",
    hindi: "मुकैश",
    icon: NeedleThreadIcon,
    description: "Delicate metallic work using flattened gold/silver wire, creating shimmering patterns",
    origin: "Awadhi royal courts"
  },
  {
    name: "Kamdani",
    hindi: "कमदानी",
    icon: LoomIcon,
    description: "Fine metallic embroidery similar to Mukaish but with twisted wire technique",
    origin: "Nawabi tradition"
  }
];

export function KarigarSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            The Artisans
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-4 text-balance">
            कारीगर और बुनकर
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honoring the master craftsmen whose hands have kept Lucknow&apos;s textile heritage alive for generations
          </p>
        </motion.div>

        {/* Karigar Profiles */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {karigars.map((karigar, index) => (
            <motion.div
              key={karigar.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={karigar.image}
                  alt={karigar.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full mb-2">
                    {karigar.craft}
                  </span>
                  <h3 className="font-serif text-2xl text-white">{karigar.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {karigar.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {karigar.location}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed">{karigar.story}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Craft Types Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-serif text-2xl text-center text-foreground mb-8">
            परंपरागत शिल्प - Traditional Crafts
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftTypes.map((craft, index) => (
            <motion.div
              key={craft.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <craft.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-xl text-foreground mb-1">{craft.name}</h4>
              <p className="text-primary text-sm mb-3">{craft.hindi}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {craft.description}
              </p>
              <p className="text-xs text-primary/70 italic">{craft.origin}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
