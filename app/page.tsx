"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Star, Award, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"
import { RecommendationCards } from "@/components/recommendation-cards"
import { FeatureSection } from "@/components/feature-section"

const landmarks = [
  { name: "Bara Imambara", year: "1784" },
  { name: "Rumi Darwaza", year: "1784" },
  { name: "Chota Imambara", year: "1838" },
  { name: "Hazratganj", year: "Est. 1810" },
]

const crafts = [
  { name: "Chikankari", description: "White-on-white embroidery with 36 stitches", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=400&fit=crop" },
  { name: "Zardozi", description: "Gold & silver metallic thread work", image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=300&h=400&fit=crop" },
  { name: "Shadow Work", description: "Translucent herringbone stitching", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=400&fit=crop" },
]

const testimonials = [
  {
    name: "Priya Kapoor",
    location: "Delhi",
    occasion: "Wedding",
    text: "The AI understood exactly what I wanted - a subtle Chikankari lehenga that honored tradition while feeling modern. Mashallah, it was perfect!",
    rating: 5,
  },
  {
    name: "Zainab Sheikh",
    location: "Mumbai",
    occasion: "Eid",
    text: "As a fashion blogger, I appreciate authentic craftsmanship. Lucknowi AI connected me with pieces that tell the story of Awadhi heritage.",
    rating: 5,
  },
  {
    name: "Arjun Verma",
    location: "Bangalore",
    occasion: "Engagement",
    text: "Found the most elegant Nawabi sherwani for my engagement. The personalization and cultural understanding made all the difference.",
    rating: 5,
  },
]

const stats = [
  { value: "500+", label: "Master Artisans", icon: Users },
  { value: "50K+", label: "Happy Customers", icon: Sparkles },
  { value: "36", label: "Traditional Stitches", icon: Award },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 lg:pt-24">
        {/* Chikankari pattern background */}
        <div className="chikankari-pattern pointer-events-none absolute inset-0" />
        
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -left-32 top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-64 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-foreground">
                AI-Powered Fashion from the City of Nawabs
              </span>
            </div>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center lg:text-left"
            >
              {/* Urdu greeting */}
              <p className="mb-4 font-serif text-lg text-primary">
                {"آداب - Aadaab"}
              </p>

              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Discover the{" "}
                <span className="relative">
                  <span className="text-primary">Nazakat</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="2" className="text-primary/30" strokeLinecap="round"/>
                  </svg>
                </span>
                {" "}of Lucknowi Fashion
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Experience the timeless artistry of <strong className="text-foreground">Chikankari</strong>, 
                {" "}<strong className="text-foreground">Zardozi</strong>, and Awadhi heritage. 
                Let our AI stylist curate perfect ethnic ensembles with the grace of{" "}
                <em className="text-primary">{"\"Pehle Aap\""}</em>.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-muted">
                  <Play className="h-4 w-4" />
                  Watch Our Story
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 flex justify-center gap-8 border-t border-border pt-8 lg:justify-start">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="flex items-center gap-2 lg:justify-start">
                      <stat.icon className="h-4 w-4 text-primary" />
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ChatInterface />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Strip */}
      <section className="border-y border-border bg-muted/50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Inspired by Lucknow Heritage
            </p>
            {landmarks.map((landmark) => (
              <div key={landmark.name} className="text-center">
                <p className="font-serif text-sm font-medium text-foreground">{landmark.name}</p>
                <p className="text-[10px] text-muted-foreground">{landmark.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Craft Section */}
      <section id="craft" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              500 Years of Excellence
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              The Art of Lucknowi Craft
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From the royal courts of Nawab Asaf-ud-Daula to your wardrobe - 
              each piece carries the legacy of master artisans from Chowk and Aminabad.
            </p>
          </motion.div>

          {/* Craft Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {crafts.map((craft, index) => (
              <motion.div
                key={craft.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={craft.image} 
                    alt={craft.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                  <h3 className="font-serif text-2xl font-bold">{craft.name}</h3>
                  <p className="mt-2 text-sm text-background/80">{craft.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Why Choose Lucknowi
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Where Tradition Meets Technology
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Blending centuries-old craftsmanship with modern AI to deliver 
              a truly personalized Lucknowi fashion experience.
            </p>
          </motion.div>
          <FeatureSection />
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Curated for You
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                AI-Selected Collections
              </h2>
              <p className="mt-2 text-muted-foreground">
                Hand-picked selections based on trending styles and customer favorites.
              </p>
            </div>
            <Button variant="outline" className="gap-2 border-border text-foreground hover:bg-muted">
              View All Collections
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <RecommendationCards />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Testimonials
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Stories from Our Community
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {"Join thousands who've discovered their perfect ethnic look with Lucknowi AI."}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-border bg-background p-6"
              >
                {/* Quote mark */}
                <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z"/>
                  </svg>
                </div>
                
                <div className="mb-4 flex gap-1 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {`"${testimonial.text}"`}
                </p>
                
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location} • {testimonial.occasion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16"
          >
            {/* Decorative arch pattern */}
            <div className="arch-pattern pointer-events-none absolute inset-0 opacity-10" />
            
            <div className="relative">
              <p className="font-serif text-lg text-primary">{"पहले आप"}</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-background sm:text-4xl">
                Begin Your Lucknowi Journey
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-background/70">
                Experience the elegance of Nawabi fashion with AI-powered styling. 
                Your perfect ethnic ensemble awaits.
              </p>
              
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="gap-2 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
                >
                  Start Styling Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 bg-transparent text-background hover:bg-background/10"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
