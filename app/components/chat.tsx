"use client";

import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    { role: "user", text: userMessage },
  ]);

  setInput("");

  // 👇 THIS IS WHERE YOUR CODE GOES
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userMessage }),
  });

  const data = await res.json();

  setMessages((prev) => [
    ...prev,
    { role: "assistant", text: data.reply },
  ]);
};

  return (
    <div className="mt-10 bg-white/10 p-6 rounded-2xl border border-white/20">
      <h2 className="text-xl font-semibold mb-3">
        💬 Ask about Zippy
      </h2>

      <div className="h-60 overflow-y-auto space-y-2 mb-3 text-black">
        {messages.map((m, i) => (
          <div key={i} className="text-sm">
            <b>{m.role}:</b> {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded bg-white/20 text-black"
          placeholder="Ask about skills, projects..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-indigo-500 rounded text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}