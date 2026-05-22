import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  collections: [
    { name: "Chikankari", href: "#" },
    { name: "Zardozi", href: "#" },
    { name: "Bridal", href: "#" },
    { name: "Groom Collection", href: "#" },
    { name: "Festive Wear", href: "#" },
  ],
  crafts: [
    { name: "Shadow Work", href: "#" },
    { name: "Phanda & Murri", href: "#" },
    { name: "Jali Work", href: "#" },
    { name: "Gota Patti", href: "#" },
    { name: "Dabka Work", href: "#" },
  ],
  support: [
    { name: "Size Guide", href: "#" },
    { name: "Fabric Care", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "FAQs", href: "#" },
  ],
}

function LucknowLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
      <path d="M20 4C10 4 4 14 4 20V36H36V20C36 14 30 4 20 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M20 10C14 10 10 16 10 20V32H30V20C30 16 26 10 20 10Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
      <circle cx="20" cy="18" r="2" fill="currentColor" />
      <circle cx="14" cy="24" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="26" cy="24" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
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
            
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Bringing the timeless elegance of the City of Nawabs to your wardrobe. 
              Where AI meets Awadhi artistry.
            </p>
            
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{"\"पहले आप\""}</span>
              <span>-</span>
              <span>The Lucknowi way of hospitality</span>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                aria-label="Pinterest"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.217-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-foreground">Collections</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-foreground">Our Crafts</h4>
            <ul className="space-y-3">
              {footerLinks.crafts.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-foreground">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-foreground">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Aminabad Market,<br />
                  Near Ghantaghar,<br />
                  Lucknow, UP 226018
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 522 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>namaste@lucknowi.ai</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
          <p className="text-xs text-muted-foreground">
            © 2026 Lucknowi AI. Handcrafted with tehzeeb in the City of Nawabs.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Artisan Partners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
