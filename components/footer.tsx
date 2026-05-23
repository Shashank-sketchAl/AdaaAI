import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"
import { RumiDarwazaIcon, BaraImambaraIcon, ChikankariPatternIcon } from "./lucknow-icons"

const footerLinks = {
  women: [
    { name: "Chikankari Suits", hindi: "चिकनकारी सूट", href: "#" },
    { name: "Anarkali", hindi: "अनारकली", href: "#" },
    { name: "Bridal Lehenga", hindi: "दुल्हन लहंगा", href: "#" },
    { name: "Shadow Work", hindi: "शैडो वर्क", href: "#" },
    { name: "Dupattas", hindi: "दुपट्टे", href: "#" },
  ],
  men: [
    { name: "Nawabi Sherwani", hindi: "नवाबी शेरवानी", href: "#" },
    { name: "Kurta Pajama", hindi: "कुर्ता पायजामा", href: "#" },
    { name: "Achkan", hindi: "अचकन", href: "#" },
    { name: "Nehru Jacket", hindi: "नेहरू जैकेट", href: "#" },
    { name: "Pathani Suit", hindi: "पठानी सूट", href: "#" },
  ],
  crafts: [
    { name: "Chikankari", hindi: "चिकनकारी", href: "#" },
    { name: "Zardozi", hindi: "ज़रदोज़ी", href: "#" },
    { name: "Mukaish", hindi: "मुकैश", href: "#" },
    { name: "Kamdani", hindi: "कमदानी", href: "#" },
    { name: "Gota Patti", hindi: "गोटा पट्टी", href: "#" },
  ],
  support: [
    { name: "Size Guide", hindi: "साइज़ गाइड", href: "#" },
    { name: "Fabric Care", hindi: "कपड़े की देखभाल", href: "#" },
    { name: "Shipping", hindi: "शिपिंग", href: "#" },
    { name: "Returns", hindi: "रिटर्न", href: "#" },
    { name: "FAQs", hindi: "सवाल जवाब", href: "#" },
  ],
}

const locations = [
  { name: "Aminabad", hindi: "अमीनाबाद" },
  { name: "Chowk", hindi: "चौक" },
  { name: "Hazratganj", hindi: "हज़रतगंज" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* Lucknow Markets Strip */}
      <div className="border-b border-border bg-secondary/30 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="text-muted-foreground">Our Karigars from:</span>
            {locations.map((loc) => (
              <span key={loc.name} className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-primary" />
                <span className="text-foreground">{loc.name}</span>
                <span className="text-primary/70 text-xs">{loc.hindi}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <RumiDarwazaIcon className="h-12 w-12 text-primary" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-foreground">
                  Nazakat<span className="text-primary">AI</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  लखनवी स्टाइलिस्ट
                </span>
              </div>
            </Link>
            
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Bringing the timeless elegance of the City of Nawabs to your wardrobe. 
              Where AI meets Awadhi artistry.
            </p>
            
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 p-3">
              <ChikankariPatternIcon className="h-8 w-8 text-primary" />
              <div>
                <p className="text-xs font-medium text-foreground">{'"पहले आप"'}</p>
                <p className="text-[10px] text-muted-foreground">The Lucknowi way of hospitality</p>
              </div>
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

          {/* Women's Collection */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-foreground">
              Women&apos;s | महिलाओं के लिए
            </h4>
            <ul className="space-y-3">
              {footerLinks.women.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-primary/50 group-hover:text-primary/80">{link.hindi}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Men's Collection */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-foreground">
              Men&apos;s | पुरुषों के लिए
            </h4>
            <ul className="space-y-3">
              {footerLinks.men.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-primary/50 group-hover:text-primary/80">{link.hindi}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Crafts */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-foreground">
              Crafts | शिल्प
            </h4>
            <ul className="space-y-3">
              {footerLinks.crafts.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-primary/50 group-hover:text-primary/80">{link.hindi}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-foreground">
              Contact | संपर्क
            </h4>
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
                <span>aadaab@nazakat.ai</span>
              </li>
            </ul>
            
            <div className="mt-6 flex items-center gap-2">
              <BaraImambaraIcon className="h-8 w-8 text-primary/40" />
              <p className="text-[10px] text-muted-foreground">
                Proudly from<br />
                <span className="text-foreground">लखनऊ, उत्तर प्रदेश</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <ChikankariPatternIcon className="h-4 w-4 text-primary/50" />
            <p className="text-xs text-muted-foreground">
              © 2026 NazakatAI. Handcrafted with <span className="text-primary">तहज़ीब</span> in the City of Nawabs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Karigar Partners
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              GI Certification
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
