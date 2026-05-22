"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, User, Mic, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: number
  type: "user" | "ai"
  text: string
  suggestions?: string[]
}

const sampleResponses = [
  {
    text: "Bahut khoob! For a Lucknowi wedding, I recommend a stunning white-on-white Chikankari lehenga with delicate 'phanda' and 'murri' stitches. This traditional shadowwork embroidery from our city has adorned royalty for centuries. Shall I show you some options?",
    suggestions: ["Show Chikankari options", "What about Zardozi?", "Budget-friendly alternatives"],
  },
  {
    text: "Mashallah! For Eid celebrations, consider a pastel mint Lucknowi kurta with intricate 'jali' work - the open lattice pattern that lets the fabric breathe in our summer heat. Pair it with a gold tissue dupatta for that Nawabi elegance.",
    suggestions: ["Show kurta designs", "Men's collection", "Family matching sets"],
  },
  {
    text: "For the sangeet, might I suggest a vibrant mustard Anarkali with 'tepchi' embroidery? The running stitch creates beautiful paisley motifs inspired by the mangoes of Malihabad. Add some polki jewelry from Chowk for the complete look!",
    suggestions: ["View Anarkali collection", "Jewelry suggestions", "Hair and makeup tips"],
  },
]

const quickPrompts = [
  "Wedding outfit",
  "Eid special",
  "Festival wear",
  "Casual ethnic",
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      text: "Aadaab! Welcome to Lucknowi - your personal stylist from the City of Nawabs. Tell me about your occasion, and I shall curate the finest ethnic ensembles featuring our legendary Chikankari, Zardozi, and more. Pehle Aap! 🙏",
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
      const response = sampleResponses[Math.floor(Math.random() * sampleResponses.length)]
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "ai",
        text: response.text,
        suggestions: response.suggestions,
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1800)
  }

  return (
    <div className="flex h-[560px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
      {/* Chat Header with Lucknowi flair */}
      <div className="relative border-b border-border bg-gradient-to-r from-primary/5 via-transparent to-primary/5 px-5 py-4">
        <div className="chikankari-pattern absolute inset-0 opacity-30" />
        <div className="relative flex items-center gap-3">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-green-500" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">Lucknowi Stylist</h3>
            <p className="text-xs text-muted-foreground">
              <span className="italic">{"\"Pehle Aap\""}</span> - Your fashion, our honor
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5">
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
                        ? "bg-primary/10 ring-1 ring-primary/20" 
                        : "bg-secondary ring-1 ring-border"
                    }`}
                  >
                    {message.type === "ai" ? (
                      <Sparkles className="h-4 w-4 text-primary" />
                    ) : (
                      <User className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.type === "ai"
                          ? "rounded-tl-sm bg-muted text-foreground"
                          : "rounded-tr-sm bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    {message.suggestions && (
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => handleSend(suggestion)}
                            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5"
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
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div className="flex gap-1.5 rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
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
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-foreground"
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
              placeholder="Describe your occasion..."
              className="w-full rounded-full border border-border bg-muted/50 px-4 py-2.5 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground">
              <Mic className="h-4 w-4" />
            </button>
          </div>
          <Button
            onClick={() => handleSend()}
            size="icon"
            className="h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
