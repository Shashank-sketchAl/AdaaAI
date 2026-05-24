"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Send,
  Sparkles,
  User,
  Mic,
  ImageIcon,
  Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ChikankariPatternIcon } from "./lucknow-icons"

interface Message {
  id: number
  type: "user" | "ai"
  text: string
}

const quickPrompts = [
  "Suggest Eid outfit",
  "Wedding lehenga ideas",
  "Best Chikankari kurta",
  "Nawabi sherwani",
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      text:
        "आदाब! Welcome to Nazakat AI. Ask me about Chikankari, Nawabi fashion, weddings, Eid styling, ethnic wear, or personalized outfit suggestions.",
    },
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (customText?: string) => {
    const messageText = customText || input

    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      text: messageText,
    }

    setMessages((prev) => [...prev, userMessage])

    setInput("")
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
        }),
      })

      const data = await response.json()

      const aiMessage: Message = {
        id: Date.now() + 1,
        type: "ai",
        text:
          data.reply ||
          "माफ कीजिए, something went wrong while generating response.",
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.log(error)

      const errorMessage: Message = {
        id: Date.now() + 2,
        type: "ai",
        text:
          "Server error occurred. Please check API connection and try again.",
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-[600px] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
      
      {/* HEADER */}
      <div className="border-b border-border bg-gradient-to-r from-primary to-primary/80 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <ChikankariPatternIcon className="h-6 w-6 text-white" />
            </div>

            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary bg-green-400" />
          </div>

          <div>
            <h2 className="font-serif text-lg font-semibold text-white">
              Nazakat AI Stylist
            </h2>

            <p className="text-xs text-white/80">
              आपका AI Fashion Assistant
            </p>
          </div>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto bg-secondary/20 p-5">
        <div className="space-y-5">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-[85%] gap-3 ${
                    message.type === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
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

                  {/* Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.type === "ai"
                        ? "rounded-tl-sm border border-border bg-card text-foreground"
                        : "rounded-tr-sm bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* LOADING */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>

              <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm border border-border bg-card px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />

                <span className="text-sm text-muted-foreground">
                  Thinking...
                </span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* QUICK PROMPTS */}
      <div className="border-t border-border/50 bg-muted/20 px-4 py-2">
        <div className="flex gap-2 overflow-x-auto">
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

      {/* INPUT */}
      <div className="border-t border-border bg-card p-4">
        <div className="flex items-center gap-2">
          
          {/* IMAGE BUTTON */}
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <ImageIcon className="h-5 w-5" />
          </button>

          {/* INPUT */}
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              placeholder="Ask about Chikankari, Eid fashion, weddings..."
              className="w-full rounded-full border border-border bg-secondary px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />

            {/* MIC */}
            <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground">
              <Mic className="h-4 w-4" />
            </button>
          </div>

          {/* SEND */}
          <Button
            onClick={() => handleSend()}
            size="icon"
            disabled={loading}
            className="h-11 w-11 shrink-0 rounded-full"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}