"use client"

import { useState } from "react"
import { generateFashionAdvice } from "@/lib/gemini"
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
  {
    name: "Chikankari",
    description: "White-on-white embroidery with 36 stitches",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=400&fit=crop",
  },
  {
    name: "Zardozi",
    description: "Gold & silver metallic thread work",
    image:
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=300&h=400&fit=crop",
  },
  {
    name: "Shadow Work",
    description: "Translucent herringbone stitching",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=400&fit=crop",
  },
]

const testimonials = [
  {
    name: "Priya Kapoor",
    location: "Delhi",
    occasion: "Wedding",
    text: "The AI understood exactly what I wanted - a subtle Chikankari lehenga that honored tradition while feeling modern.",
    rating: 5,
  },
  {
    name: "Zainab Sheikh",
    location: "Mumbai",
    occasion: "Eid",
    text: "Lucknowi AI connected me with pieces that tell the story of Awadhi heritage.",
    rating: 5,
  },
]

const stats = [
  { value: "500+", label: "Master Artisans", icon: Users },
  { value: "50K+", label: "Happy Customers", icon: Sparkles },
  { value: "36", label: "Traditional Stitches", icon: Award },
]

export default function Home() {

  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)

    try {
      const result = await generateFashionAdvice(
        "Wedding outfit under ₹5000 traditional black color"
      )

      setResponse(result)
    } catch (error) {
      console.error(error)
      setResponse("Something went wrong while generating AI fashion advice.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 lg:pt-24">

        <div className="chikankari-pattern pointer-events-none absolute inset-0" />

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

            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >

              <p className="mb-4 font-serif text-lg text-primary">
                {"آداب - Aadaab"}
              </p>

              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Discover the{" "}
                <span className="text-primary">
                  Nazakat
                </span>{" "}
                of Lucknowi Fashion
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Experience timeless artistry of Chikankari and Zardozi with AI-powered styling recommendations.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">

                <Button
                  size="lg"
                  onClick={handleClick}
                  className="gap-2 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                >
                  {loading ? "Generating..." : "Get AI Recommendation"}

                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-border text-foreground hover:bg-muted"
                >
                  <Play className="h-4 w-4" />
                  Watch Our Story
                </Button>

              </div>

              {/* AI RESPONSE */}
              {response && (
                <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5 text-left">

                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    AI Stylist Recommendation
                  </h3>

                  <p className="whitespace-pre-line text-sm text-foreground">
                    {response}
                  </p>

                </div>
              )}

              {/* Stats */}
              <div className="mt-12 flex justify-center gap-8 border-t border-border pt-8 lg:justify-start">

                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">

                    <div className="flex items-center gap-2 lg:justify-start">
                      <stat.icon className="h-4 w-4 text-primary" />

                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                    </div>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </p>

                  </div>
                ))}

              </div>

            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ChatInterface />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row"
          >

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Curated for You
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                AI-Selected Collections
              </h2>
            </div>

          </motion.div>

          <RecommendationCards />

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2">

            {testimonials.map((testimonial, index) => (

              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-background p-6"
              >

                <div className="mb-4 flex gap-1">

                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}

                </div>

                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {testimonial.text}
                </p>

                <div className="border-t border-border pt-4">

                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.occasion}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}