"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, User, Mic, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChikankariPatternIcon } from "./lucknow-icons"

interface Message {
  id: number
  type: "user" | "ai"
  text: string
  suggestions?: string[]
  products?: {
    name: string
    nameHindi: string
    price: number
    craft: string
  }[]
}

const aiResponses: Record<string, { text: string; suggestions?: string[]; products?: { name: string; nameHindi: string; price: number; craft: string }[] }> = {
  "planning a wedding": {
    text: "मुबारक हो! For a Lucknowi wedding, I recommend our finest bridal collection. The Zardozi work from Chowk and delicate Chikankari from Aminabad will make you look like royalty. Here are some stunning pieces:",
    products: [
      { name: "Zardozi Bridal Lehenga", nameHindi: "ज़रदोज़ी दुल्हन लहंगा", price: 45000, craft: "Zardozi" },
      { name: "Gota Patti Dupatta", nameHindi: "गोटा पट्टी दुपट्टा", price: 15000, craft: "Gota Patti" },
      { name: "Nawabi Sherwani", nameHindi: "नवाबी शेरवानी", price: 35000, craft: "Zardozi" }
    ],
    suggestions: ["Show more bridal", "Groom collection", "Budget options"]
  },
  "festive occasion": {
    text: "बहुत खूब! For festive celebrations, nothing speaks elegance like our Shadow Work collection. The translucent embroidery paired with Mukaish highlights creates a mesmerizing effect. Perfect for Eid, Diwali, or any दावत!",
    products: [
      { name: "Shadow Work Anarkali", nameHindi: "शैडो वर्क अनारकली", price: 8500, craft: "Shadow Work" },
      { name: "Mukaish Kurta Set", nameHindi: "मुकैश कुर्ता सेट", price: 5500, craft: "Mukaish" },
      { name: "Chikankari Palazzo Set", nameHindi: "चिकनकारी प्लाज़ो सेट", price: 6500, craft: "Chikankari" }
    ],
    suggestions: ["Eid collection", "Diwali specials", "Men festive wear"]
  },
  "daily ethnic wear": {
    text: "रोज़मर्रा की शान! For daily wear, our pure cotton Chikankari kurtas are perfect. Light, breathable, and crafted with traditional Tepchi stitches - ideal for Lucknow's weather. Each piece is handmade by our karigars.",
    products: [
      { name: "Cotton Chikankari Kurta", nameHindi: "कॉटन चिकनकारी कुर्ता", price: 2500, craft: "Chikankari" },
      { name: "Everyday Palazzo Set", nameHindi: "रोज़ाना प्लाज़ो सेट", price: 3500, craft: "Chikankari" },
      { name: "Office Wear Kurta", nameHindi: "ऑफिस वेयर कुर्ता", price: 2800, craft: "Tepchi Work" }
    ],
    suggestions: ["Show more daily wear", "Under ₹3000", "Men daily wear"]
  },
  "gift for someone": {
    text: "तोहफ़े की बात! A Lucknowi gift carries centuries of heritage. Our gift boxes include authentic GI-tagged Chikankari with certificate of authenticity. Perfect for spreading the Nawabi tehzeeb!",
    products: [
      { name: "Premium Gift Box", nameHindi: "प्रीमियम गिफ्ट बॉक्स", price: 5000, craft: "Assorted" },
      { name: "Bridal Trousseau Set", nameHindi: "दुल्हन ट्रूसो सेट", price: 25000, craft: "Mixed Crafts" },
      { name: "Men Gift Hamper", nameHindi: "पुरुष गिफ्ट हैम्पर", price: 8000, craft: "Chikankari" }
    ],
    suggestions: ["Wedding gifts", "Corporate gifts", "Festival hampers"]
  }
}

const quickPrompts = [
  "Chikankari suits",
  "Nawabi sherwani",
  "Bridal lehenga",
  "Eid collection",
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      text: "आदाब! मैं आपका लखनवी स्टाइलिस्ट हूं। Welcome to the City of Nawabs! Tell me about your occasion - शादी, ईद, त्योहार, or daily elegance. I shall curate the finest Chikankari, Zardozi, and Mukaish ensembles for you. पहले आप!",
      suggestions: ["Planning a wedding", "Festive occasion", "Daily ethnic wear", "Gift for someone"],
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      text: messageText,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const key = messageText.toLowerCase()
      const response = aiResponses[key] || {
        text: "जी बिल्कुल! I understand you are looking for something special. Our master karigars from Chowk and Aminabad have crafted exquisite pieces for every occasion. Could you tell me more about your preference - Women or Men collection? And your budget range?",
        suggestions: ["Women collection", "Men collection", "Under ₹10,000", "Premium range"]
      }
      
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "ai",
        text: response.text,
        suggestions: response.suggestions,
        products: response.products
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="flex h-[580px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      {/* Chat Header */}
      <div className="relative border-b border-border bg-gradient-to-r from-primary to-primary/80 px-5 py-4">
        <div className="relative flex items-center gap-3">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <ChikankariPatternIcon className="h-7 w-7 text-white" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary bg-green-400 animate-pulse" />
          </div>
          <div className="text-primary-foreground">
            <h3 className="font-serif text-lg font-semibold">Nazakat AI Stylist</h3>
            <p className="text-xs text-white/80">
              आपका लखनवी फैशन सहायक | <span className="italic">{'"पहले आप"'}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 bg-secondary/20">
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex max-w-[85%] gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      message.type === "ai" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-foreground/10 text-foreground"
                    }`}
                  >
                    {message.type === "ai" ? (
                      <Sparkles className="h-4 w-4" />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </div>
                  <div className="space-y-3">
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.type === "ai"
                          ? "rounded-tl-sm bg-card border border-border text-foreground"
                          : "rounded-tr-sm bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    
                    {/* Product Recommendations */}
                    {message.products && (
                      <div className="space-y-2">
                        {message.products.map((product, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-primary/50 transition-colors cursor-pointer"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                              <ChikankariPatternIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-foreground truncate">{product.name}</h4>
                              <p className="text-xs text-primary/80">{product.nameHindi}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-foreground">₹{product.price.toLocaleString()}</p>
                              <span className="text-[10px] text-muted-foreground">{product.craft}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    
                    {message.suggestions && (
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => handleSend(suggestion)}
                            className="rounded-full border border-primary/30 bg-card px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex gap-1.5 rounded-2xl rounded-tl-sm bg-card border border-border px-4 py-3">
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60" />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick prompts */}
      <div className="border-t border-border/50 bg-muted/30 px-4 py-2">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <ImageIcon className="h-5 w-5" />
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about Chikankari, Zardozi, शादी, ईद..."
              className="w-full rounded-full border border-border bg-secondary px-4 py-2.5 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground">
              <Mic className="h-4 w-4" />
            </button>
          </div>
          <Button
            onClick={() => handleSend()}
            size="icon"
            className="h-10 w-10 shrink-0 rounded-full"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
