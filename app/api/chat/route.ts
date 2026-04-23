import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  // Simple AI brain (portfolio-aware responses)
  let reply = "";

  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hey")) {
    reply = "Hey 👋 I'm Zippy's portfolio assistant. Ask me about her skills or projects!";
  } 
  else if (msg.includes("skills")) {
    reply = "Zippy is skilled in Python, SQL, AWS, ETL pipelines, Power BI, Next.js, and machine learning.";
  } 
  else if (msg.includes("project")) {
    reply = "She has built an Agricultural Dashboard and multiple enterprise data pipelines across telecom systems.";
  } 
  else if (msg.includes("who are you") || msg.includes("what do you do")) {
    reply = "I'm an AI assistant built to explain Zippy's experience in Data Engineering, Cloud, and AI systems.";
  } 
  else {
    reply = "I can help you learn about Zippy's skills, projects, experience, or contact details 🚀";
  }

  return NextResponse.json({ reply });
}