"use client"

import { useState } from "react"
import { generateFashionAdvice } from "@/lib/gemini"

export default function Home() {

  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)

    try {
      const result = await generateFashionAdvice(
        "Suggest a traditional Lucknowi wedding outfit under ₹5000"
      )

      setResponse(result)
    } catch (error) {
      console.error(error)
      setResponse("Failed to generate AI recommendation.")
    }

    setLoading(false)
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#111",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        AdaaAI
      </h1>

      <p style={{ marginBottom: "20px" }}>
        AI Stylist for Lucknow Ethnic Fashion
      </p>

      <button
        onClick={handleClick}
        style={{
          padding: "12px 24px",
          background: "#d4a373",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {loading ? "Generating..." : "Get AI Recommendation"}
      </button>

      {response && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#222",
            borderRadius: "12px",
            whiteSpace: "pre-wrap",
          }}
        >
          {response}
        </div>
      )}
    </main>
  )
}