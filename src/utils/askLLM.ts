export async function askLLM(prompt: string, token: string): Promise<string> {
  const url = "https://api.intelligence.io.solutions/api/v1/chat/completions";

  const body = {
    model: "CohereForAI/c4ai-command-r-plus-08-2024",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return data?.choices?.[0]?.message?.content ?? "❌ Ошибка в ответе";
}
