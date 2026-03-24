import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

// Using Node runtime for the more stable Axios-like behavior requested
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "No message provided" }), { status: 400 });
    }

    // NVIDIA implementation of Qwen using the provided key and model
    const stream = await openai.chat.completions.create({
      model: "qwen/qwen3.5-122b-a10b",
      messages: [{ role: "user", content: message }],
      temperature: 0.60, // Per user prompt
      top_p: 0.95,
      max_tokens: 16384,
      stream: true,
      ...({ chat_template_kwargs: { enable_thinking: true } } as any)
    }) as any;

    const encoder = new TextEncoder();
    const customStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta;
            const content = delta?.content || "";
            const reasoning = (delta as any)?.reasoning_content || "";
            
            // We stream both reasoning and content sequentially
            if (reasoning) {
               controller.enqueue(encoder.encode(reasoning));
            }
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(customStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal server error" }), { status: 500 });
  }
}
