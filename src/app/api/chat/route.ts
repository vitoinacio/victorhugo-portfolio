import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';
import { systemPrompt } from '@/lib/prompt';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export const maxDuration = 30;

// Sistema simplificado de rate limiting em memória para o MVP
// AVISO: Isso será resetado se a função serverless da Vercel for reiniciada.
// Para produção pesada, usar Vercel KV ou Upstash Redis.
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();

const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hora

export async function POST(req: Request) {
  try {
    // Pegar IP do header (Vercel ou genérico)
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    
    const now = Date.now();
    const requestData = ipRequestMap.get(ip);
    
    if (requestData) {
      if (now - requestData.timestamp > RATE_LIMIT_WINDOW_MS) {
        ipRequestMap.set(ip, { count: 1, timestamp: now });
      } else {
        if (requestData.count >= RATE_LIMIT_MAX_REQUESTS) {
          return new Response(
            "Você atingiu o limite de mensagens para esta sessão. Por favor, faça o download do currículo para mais informações.",
            { status: 429 }
          );
        }
        ipRequestMap.set(ip, { count: requestData.count + 1, timestamp: requestData.timestamp });
      }
    } else {
      ipRequestMap.set(ip, { count: 1, timestamp: now });
    }

    const { messages } = await req.json();

    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      "Erro de conexão com o Copilot. Por favor, tente novamente mais tarde.",
      { status: 500 }
    );
  }
}
