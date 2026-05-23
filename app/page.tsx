"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Play, Star, Award, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"
import { ProductShowcase } from "@/components/product-showcase"
import { KarigarSection } from "@/components/karigar-section"
import { RumiDarwazaIcon, BaraImambaraIcon, ChotaImambaraIcon, ChikankariPatternIcon, DecorativeBorder } from "@/components/lucknow-icons"

const landmarks = [
  { name: "Bara Imambara", hindi: "बड़ा इमामबाड़ा", year: "1784", Icon: BaraImambaraIcon },
  { name: "Rumi Darwaza", hindi: "रूमी दरवाज़ा", year: "1784", Icon: RumiDarwazaIcon },
  { name: "Chota Imambara", hindi: "छोटा इमामबाड़ा", year: "1838", Icon: ChotaImambaraIcon },
]

const stitchTypes = [
  { name: "Tepchi", hindi: "टेपची", description: "Running stitch forming the base" },
  { name: "Bakhiya", hindi: "बखिया", description: "Shadow work creating depth" },
  { name: "Phanda", hindi: "फंदा", description: "Tiny knots like millet grains" },
  { name: "Murri", hindi: "मुर्री", description: "Rice-shaped raised stitches" },
  { name: "Jaali", hindi: "जाली", description: "Open lattice pattern work" },
  { name: "Hool", hindi: "हूल", description: "Eyelet stitch for flowers" },
]

const testimonials = [
  {
    name: "Priya Kapoor",
    location: "Delhi",
    occasion: "शादी - Wedding",
    text: "The AI understood exactly what I wanted - a subtle Chikankari lehenga that honored tradition while feeling modern. The karigar's work was impeccable!",
    rating: 5,
  },
  {
    name: "Zainab Sheikh",
    location: "Mumbai",
    occasion: "ईद - Eid",
    text: "As a fashion blogger, I appreciate authentic craftsmanship. Nazakat AI connected me with pieces that tell the story of Awadhi heritage beautifully.",
    rating: 5,
  },
  {
    name: "Arjun Verma",
    location: "Bangalore",
    occasion: "सगाई - Engagement",
    text: "Found the most elegant Nawabi sherwani with authentic Zardozi work. The personalization and cultural understanding made all the difference.",
    rating: 5,
  },
]

const stats = [
  { value: "500+", label: "Master Karigars", hindi: "कुशल कारीगर", icon: Users },
  { value: "50K+", label: "Happy Customers", hindi: "संतुष्ट ग्राहक", icon: Sparkles },
  { value: "36", label: "Traditional Stitches", hindi: "पारंपरिक टांके", icon: Award },
]

const features = [
  {
    title: "AI-Powered Styling",
    hindi: "AI स्टाइलिंग",
    description: "Our intelligent stylist understands occasions, body types, and preferences to recommend perfect outfits",
    icon: Sparkles,
  },
  {
    title: "GI-Tagged Authenticity",
    hindi: "GI प्रमाणित",
    description: "Every Chikankari piece comes with Geographical Indication certification ensuring genuine Lucknowi craft",
    icon: Award,
  },
  {
    title: "Direct from Karigars",
    hindi: "कारीगरों से सीधे",
    description: "Connect directly with master artisans from Chowk and Aminabad, ensuring fair wages and authentic work",
    icon: Users,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 lg:pt-24">
        {/* Chikankari pattern background */}
        <div className="chikankari-pattern pointer-events-none absolute inset-0" />
        
        {/* Decorative blurs */}
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
                नवाबों के शहर से AI फैशन | AI Fashion from the City of Nawabs
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
              {/* Urdu/Hindi greeting */}
              <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
                <RumiDarwazaIcon className="h-8 w-8 text-primary/60" />
                <p className="font-serif text-lg text-primary">
                  آداب | आदाब
                </p>
              </div>

              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Discover the{" "}
                <span className="relative">
                  <span className="text-primary">नज़ाकत</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="2" className="text-primary/30" strokeLinecap="round"/>
                  </svg>
                </span>
                {" "}of Lucknowi Fashion
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Experience the timeless artistry of <strong className="text-foreground">चिकनकारी</strong>, 
                {" "}<strong className="text-foreground">ज़रदोज़ी</strong>, and Awadhi heritage crafted by master karigars. 
                Let our AI stylist curate perfect ethnic ensembles with the grace of{" "}
                <em className="text-primary">{'"पहले आप"'}</em>.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Play className="h-4 w-4" />
                  Watch Karigar Stories
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
                    <p className="text-[10px] text-primary/70">{stat.hindi}</p>
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

      {/* Heritage Monuments Strip */}
      <section className="border-y border-border bg-secondary/50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Inspired by Lucknow&apos;s Heritage | लखनऊ की विरासत से प्रेरित
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
            {landmarks.map((landmark) => (
              <motion.div 
                key={landmark.name} 
                className="flex flex-col items-center gap-3 group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <landmark.Icon className="h-16 w-16 text-primary/70 group-hover:text-primary transition-colors" />
                <div className="text-center">
                  <p className="font-serif text-sm font-medium text-foreground">{landmark.name}</p>
                  <p className="text-xs text-primary/80">{landmark.hindi}</p>
                  <p className="text-[10px] text-muted-foreground">{landmark.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chikankari Stitches Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              500 Years of Excellence
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              The 36 Sacred Stitches | ३६ पवित्र टांके
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Chikankari embroidery features 36 distinct stitches, each with its own name and purpose. 
              Here are the most celebrated techniques passed down through generations.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stitchTypes.map((stitch, index) => (
              <motion.div
                key={stitch.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <ChikankariPatternIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{stitch.name}</h3>
                    <span className="text-sm text-primary">{stitch.hindi}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stitch.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeBorder className="mx-auto max-w-4xl px-4" />

      {/* Features Section */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Why Choose Nazakat
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Where Tradition Meets Technology
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              परंपरा और तकनीक का संगम | Blending centuries-old craftsmanship with modern AI
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-xl transition-all"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-primary mb-2">{feature.hindi}</p>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Karigar Section */}
      <KarigarSection />

      {/* Product Showcase with Men/Women Toggle */}
      <ProductShowcase />

      {/* Bara Imambara Image Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-[21/9] relative">
              <Image
                src="/images/bara-imambara.jpg"
                alt="Bara Imambara Lucknow"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/50 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl p-8 md:p-12">
                <BaraImambaraIcon className="h-16 w-16 text-primary mb-4" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-4">
                  Born in the Lanes of Lucknow
                </h2>
                <p className="text-background/80 mb-6">
                  From the historic bylanes of Chowk where Nawab Asaf-ud-Daula patronized artisans, 
                  to the bustling markets of Aminabad - every piece carries 500 years of heritage.
                </p>
                <Button className="gap-2">
                  Explore Our Heritage
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Testimonials | प्रशंसापत्र
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Stories from Our Community
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Join thousands who have discovered their perfect ethnic look with Nazakat AI
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
                      {testimonial.location} | {testimonial.occasion}
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
              <RumiDarwazaIcon className="mx-auto h-16 w-16 text-primary mb-4" />
              <p className="font-serif text-lg text-primary">पहले आप | Pehle Aap</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-background sm:text-4xl">
                Begin Your Lucknowi Journey
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-background/70">
                Experience the elegance of Nawabi fashion with AI-powered styling. 
                From Chikankari to Zardozi, your perfect ethnic ensemble awaits.
              </p>
              
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="gap-2 shadow-lg"
                >
                  Start Styling Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 bg-transparent text-background hover:bg-background/10"
                >
                  Visit Lucknow Showroom
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
