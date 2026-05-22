import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
})

export async function generateFashionAdvice(userInput) {
  const prompt = `
You are an expert ethnic fashion stylist from Lucknow.

Suggest outfit recommendations based on:
${userInput}

Provide:
1. Outfit recommendation
2. Styling advice
3. Accessories
4. Footwear
5. Occasion matching tips
`

  const result = await model.generateContent(prompt)
  const response = await result.response

  return response.text()
}