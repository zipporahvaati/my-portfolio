import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();
  const msg = message.toLowerCase();

  // 🔹 Structured CV Data
  const cvData = {
    name: "Zippy Vaati Muthini",
    title: "Senior Data Engineer",

    skills: [
      "Python",
      "SQL",
      "AWS",
      "ETL Pipeline Development",
      "Data Engineering Architecture",
      "Power BI & Data Visualization",
      "API Integrations",
      "Machine Learning",
      "Cloud Data Solutions"
    ],

    projects: [
      {
        name: "Agricultural Analytics Dashboard",
        description:
          "A data-driven dashboard providing insights into agricultural trends, production, and forecasting using Python and BI tools."
      },
      {
        name: "Telecom Revenue Assurance Pipelines",
        description:
          "Designed and implemented enterprise ETL pipelines to track, validate, and optimize telecom revenue streams."
      }
    ],

    experience:
      "Senior Data Engineer with strong expertise in building scalable ETL pipelines, optimizing data workflows, and delivering business intelligence solutions across telecom and data-driven industries.",

    contact:
      "You can reach Zippy for opportunities or collaborations through her portfolio contact section."
  };

  let reply = "";

  // 🔹 Intent Handling
  if (msg.includes("hello") || msg.includes("hey")) {
    reply = `Hey there 👋 I'm ${cvData.name}'s AI assistant. 
Ask me about her skills, projects, or experience!`;
  }

  else if (msg.includes("skills")) {
    reply = `Zippy's core skills include:
- ${cvData.skills.join("\n- ")}`;
  }

  else if (msg.includes("project")) {
    reply = `Here are some of Zippy's key projects:

${cvData.projects
  .map(
    (p) => `🔹 ${p.name}\n${p.description}`
  )
  .join("\n\n")}`;
  }

  else if (msg.includes("experience") || msg.includes("background")) {
    reply = cvData.experience;
  }

  else if (
    msg.includes("who are you") ||
    msg.includes("what do you do")
  ) {
    reply = `I'm an AI assistant built to represent ${cvData.name}.
I help explain her experience, skills, and projects in Data Engineering, Cloud, and AI systems.`;
  }

  else if (msg.includes("contact") || msg.includes("reach")) {
    reply = cvData.contact;
  }

  else {
    reply = `I can help you learn about ${cvData.name}'s:

• Skills  
• Projects  
• Experience  
• Contact details  

Try asking something like "What are her skills?" 🚀`;
  }

  return NextResponse.json({ reply });
}