"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import {
  ArrowRight,
  Play,
  Star,
  Award,
  Users,
  Sparkles,
  Lock,
} from "lucide-react"

import { SignInButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"
import { ProductShowcase } from "@/components/product-showcase"
import { KarigarSection } from "@/components/karigar-section"

import {
  RumiDarwazaIcon,
  BaraImambaraIcon,
  ChotaImambaraIcon,
  DecorativeBorder,
} from "@/components/lucknow-icons"

const landmarks = [
  {
    name: "Bara Imambara",
    hindi: "बड़ा इमामबाड़ा",
    year: "1784",
    Icon: BaraImambaraIcon,
  },
  {
    name: "Rumi Darwaza",
    hindi: "रूमी दरवाज़ा",
    year: "1784",
    Icon: RumiDarwazaIcon,
  },
  {
    name: "Chota Imambara",
    hindi: "छोटा इमामबाड़ा",
    year: "1838",
    Icon: ChotaImambaraIcon,
  },
]

const stats = [
  {
    value: "500+",
    label: "Karigars",
    icon: Users,
  },
  {
    value: "50K+",
    label: "Customers",
    icon: Sparkles,
  },
  {
    value: "36",
    label: "Stitches",
    icon: Award,
  },
]

const testimonials = [
  {
    name: "Priya Kapoor",
    location: "Delhi",
    text: "Amazing AI styling experience.",
  },
  {
    name: "Zainab Sheikh",
    location: "Mumbai",
    text: "Loved the Lucknowi collection.",
  },
  {
    name: "Arjun Verma",
    location: "Bangalore",
    text: "Beautiful Nawabi recommendations.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        <div className="relative mx-auto max-w-7xl px-4 py-20">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <RumiDarwazaIcon className="h-8 w-8 text-primary" />

                <p className="font-serif text-lg text-primary">
                  आदाब | Welcome
                </p>
              </div>

              <h1 className="font-serif text-5xl font-bold leading-tight text-foreground lg:text-7xl">
                Discover the{" "}
                <span className="text-primary">
                  नज़ाकत
                </span>{" "}
                of Lucknowi Fashion
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Experience AI-powered styling inspired by authentic
                Lucknowi craftsmanship.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <SignInButton mode="modal">
                  <Button
                    size="lg"
                    className="gap-2 cursor-pointer"
                  >
                    Start Your Journey
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </SignInButton>

                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                >
                  <Play className="h-4 w-4" />
                  Watch Stories
                </Button>
              </div>

              {/* STATS */}
              <div className="mt-14 flex gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-center gap-2">
                      <stat.icon className="h-5 w-5 text-primary" />

                      <p className="text-2xl font-bold">
                        {stat.value}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex min-h-[550px] flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-xl">

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Lock className="h-10 w-10 text-primary" />
                </div>

                <h2 className="text-3xl font-bold">
                  Access Nazakat AI
                </h2>

                <p className="mt-4 max-w-md text-muted-foreground">
                  Sign in to continue your AI fashion experience.
                </p>

                <div className="mt-8">
                  <SignInButton mode="modal">
                    <Button size="lg">
                      Sign In
                    </Button>
                  </SignInButton>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* LANDMARKS */}
      <section className="border-y border-border bg-secondary/30 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-16 px-4">
          {landmarks.map((landmark) => (
            <motion.div
              key={landmark.name}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <landmark.Icon className="h-16 w-16 text-primary" />

              <p className="mt-3 font-serif text-lg">
                {landmark.name}
              </p>

              <p className="text-sm text-primary">
                {landmark.hindi}
              </p>

              <p className="text-xs text-muted-foreground">
                {landmark.year}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <ProductShowcase />

      <KarigarSection />

      {/* IMAGE SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl">

            <div className="relative aspect-[21/9]">
              <Image
                src="/images/bara-imambara.jpg"
                alt="Lucknow"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl p-10">

                <h2 className="font-serif text-5xl font-bold text-white">
                  Born in Lucknow
                </h2>

                <p className="mt-6 text-lg text-white/80">
                  Every thread carries centuries of Nawabi elegance.
                </p>

                <Button className="mt-8">
                  Explore Heritage
                </Button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold">
              Community Love
            </h2>

            <p className="mt-4 text-muted-foreground">
              Loved by users across India
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground">
                  "{testimonial.text}"
                </p>

                <div className="mt-6 border-t border-border pt-4">

                  <p className="font-semibold">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <DecorativeBorder className="mx-auto max-w-4xl px-4" />

      <Footer />
    </div>
  )
}