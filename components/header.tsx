"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import {
  useUser,
  SignInButton,
  UserButton,
} from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { RumiDarwazaIcon } from "./lucknow-icons"

const navLinks = [
  { name: "Home", hindi: "होम", href: "#" },
  { name: "Collections", hindi: "संग्रह", href: "#collection" },
  { name: "Karigars", hindi: "कारीगर", href: "#karigars" },
  { name: "Testimonials", hindi: "प्रशंसा", href: "#testimonials" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { isSignedIn } = useUser()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <RumiDarwazaIcon className="h-10 w-10 text-primary" />

          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wide text-foreground">
              Nazakat
              <span className="text-primary">AI</span>
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              लखनवी स्टाइलिस्ट
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>{link.name}</span>

              <span className="absolute -bottom-4 left-0 text-[10px] text-primary/60 opacity-0 transition-opacity group-hover:opacity-100">
                {link.hindi}
              </span>

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden items-center gap-3 lg:flex">

          {!isSignedIn ? (
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                Sign In
              </Button>
            </SignInButton>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}

          <Button>
            Start Styling
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
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

      {/* MOBILE MENU */}
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
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>

                  <span className="text-xs text-primary/70">
                    {link.hindi}
                  </span>
                </Link>
              ))}

              <hr className="my-2 border-border" />

              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              ) : (
                <div className="px-2 py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}

              <Button className="w-full">
                Start Styling
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}