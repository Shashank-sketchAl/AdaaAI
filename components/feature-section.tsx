"use client"

import { motion } from "framer-motion"

const features = [
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9 4 4 9 4 16v12h24V16c0-7-5-12-12-12z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M16 8c-4.5 0-8 3.5-8 8v8h16v-8c0-4.5-3.5-8-8-8z" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none"/>
        <circle cx="16" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
    title: "Rumi Darwaza Heritage",
    titleHindi: "रूमी दरवाज़ा विरासत",
    description: "Inspired by the iconic gateway of Lucknow, our designs embody 500 years of Awadhi architectural elegance.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8 2 2 8 2 16s6 14 14 14 14-6 14-14S24 2 16 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M16 6c-2 4-2 8 0 12m0-12c2 4 2 8 0 12" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
        <path d="M8 12h16M8 20h16" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    title: "Authentic Chikankari",
    titleHindi: "असली चिकनकारी",
    description: "Every stitch tells a story - from delicate tepchi to intricate phanda, crafted by master artisans of Chowk.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    title: "AI-Powered Nazakat",
    titleHindi: "AI संचालित नज़ाकत",
    description: "Our AI understands Lucknowi tehzeeb - recommending outfits that balance tradition with your personal style.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 14h4m4 0h8M8 18h8m4 0h4" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="26" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    title: "Occasion Perfect",
    titleHindi: "हर मौके के लिए",
    description: "From Nikah to Navratri, Eid to engagement - curated collections for every celebration in the Nawabi way.",
  },
]

export function FeatureSection() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        >
          {/* Decorative corner */}
          <div className="absolute -right-px -top-px h-8 w-8 overflow-hidden">
            <div className="absolute right-0 top-0 h-12 w-12 origin-top-right rotate-45 transform bg-gradient-to-r from-primary/20 to-primary/5" />
          </div>
          
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            {feature.icon}
          </div>
          
          <h3 className="font-serif text-lg font-semibold text-foreground">{feature.title}</h3>
          <p className="mb-2 text-xs text-primary">{feature.titleHindi}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
