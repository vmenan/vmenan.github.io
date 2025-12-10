import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCreativeIdea = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "I need an API Key to brainstorm with you! (Env var missing)";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a creative muse living in a sketchbook. 
      The user wants ideas about: "${topic}".
      Provide a short, punchy, and creative paragraph (max 80 words) suggesting a project idea or a philosophical thought related to this topic. 
      Keep the tone whimsical, artistic, and encouraging. Do not use markdown formatting like bold or headers, just raw text.`,
    });
    
    return response.text || "My pencil broke... try again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I couldn't draw up an idea right now. Check the console.";
  }
};
