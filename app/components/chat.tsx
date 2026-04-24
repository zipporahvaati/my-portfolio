"use client";

import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  // Auto-hide popup after a few seconds (optional nice touch)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const startDrag = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!dragging.current) return;

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">

          {/* 👋 POPUP MESSAGE */}
          {showPopup && (
            <div className="bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-xl text-sm animate-bounce max-w-[220px] relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-1 right-2 text-gray-400 hover:text-black"
              >
                ✕
              </button>

              👋 Hey! Good to see you  
              <br />
              Ask me about Zippy 🚀
            </div>
          )}

          {/* Chat Icon */}
          <button
            onClick={() => setOpen(true)}
            className="bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg"
          >
            💬
          </button>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="fixed bottom-6 right-6 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50"
        >
          {/* Header */}
          <div
            onMouseDown={startDrag}
            className="p-3 border-b font-semibold text-indigo-600 flex justify-between cursor-move bg-gray-50 rounded-t-2xl"
          >
            <span>Ask Zippy</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.length === 0 && (
              <p className="text-gray-400">
                Ask me about skills, projects, or experience 👋
              </p>
            )}

            {messages.map((m, i) => (
              <div key={i}>
                <b>{m.role === "user" ? "You" : "AI"}:</b> {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 outline-none text-sm"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="px-3 text-indigo-600 font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}