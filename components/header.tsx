"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Collections", href: "#collections" },
  { name: "Our Craft", href: "#craft" },
  { name: "Testimonials", href: "#testimonials" },
]

function LucknowLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
      {/* Rumi Darwaza inspired arch */}
      <path 
        d="M20 4C10 4 4 14 4 20V36H36V20C36 14 30 4 20 4Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
      />
      {/* Inner arch detail */}
      <path 
        d="M20 10C14 10 10 16 10 20V32H30V20C30 16 26 10 20 10Z" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
        opacity="0.6"
      />
      {/* Decorative dot pattern */}
      <circle cx="20" cy="18" r="2" fill="currentColor" />
      <circle cx="14" cy="24" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="26" cy="24" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <LucknowLogo />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wide text-foreground">
              Lucknow<span className="text-primary">i</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              AI Stylist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Sign In
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start Styling
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <Button variant="ghost" className="w-full justify-start text-foreground">
                Sign In
              </Button>
              <Button className="w-full bg-primary text-primary-foreground">
                Start Styling
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
