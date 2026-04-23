import Chat from "./components/chat";

export default function Home() {
  return (
    <main className="min-h-screen relative flex justify-center px-6 py-16 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f3ff] to-[#e9d5ff]" />

      {/* Glow effects */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-400 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[20%] w-[500px] h-[500px] bg-orange-400 blur-[180px] rounded-full" />
        <div className="absolute top-[20%] right-[-200px] w-[500px] h-[500px] bg-yellow-300 blur-[180px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative w-full max-w-4xl space-y-12 text-black">

        {/* HERO */}
        <section className="text-center space-y-5">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-transparent bg-clip-text">
            Hey there, I'm Zippy 👋
          </h1>

          <p className="text-lg">
            Cloud & Data Engineer | Python | AWS | Next.js
          </p>

          <div className="flex justify-center gap-3 flex-wrap pt-4">
            {["Data Engineering", "AI Automation", "Data Science", "API Integrations", "Cloud Computing"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 bg-white/30 border border-white/40 rounded-full text-sm backdrop-blur"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white/60 backdrop-blur border border-white/40 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            About Me
          </h2>
          <p>
            I build cloud-based applications, data systems, and dashboards with scalable architecture and automation.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-600">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-white/60 backdrop-blur border border-white/40 p-6 rounded-2xl">
              <h3 className="font-semibold">🌱 Agricultural Dashboard</h3>
              <p className="text-sm mt-2">
                AI-powered agricultural insights dashboard.
              </p>

              <a
                href="https://iitasamplekpidashboard-ldjmxg6jehbwm4jqwofxrx.streamlit.app/"
                target="_blank"
                className="inline-block mt-3 text-green-600 hover:text-indigo-500"
              >
                View Project →
              </a>
            </div>

            <div className="bg-white/60 backdrop-blur border border-white/40 p-6 rounded-2xl">
              <h3 className="font-semibold">🌐 Portfolio Website</h3>
              <p className="text-sm mt-2">
                Built with Next.js and deployed on Vercel.
              </p>
            </div>

          </div>
        </section>

        {/* CHATBOT */}
        <Chat />

        {/* CONTACT */}
        <section className="text-center bg-white/60 backdrop-blur border border-white/40 rounded-2xl p-8 space-y-4">

          <h2 className="text-2xl font-semibold text-indigo-600">
            Let’s Connect
          </h2>

          <p>
            Open to Data Engineering, Cloud & AI roles 🚀
          </p>

          <div className="flex flex-col items-center gap-3">

            <a href="mailto:zippwaah@gmail.com" className="flex items-center gap-2 hover:text-red-500">
              📧 Gmail: zippwaah@gmail.com
            </a>

            <a href="https://wa.me/254727317927" target="_blank" className="flex items-center gap-2 hover:text-green-500">
              💬 WhatsApp: +254727317927
            </a>

            <a href="https://github.com/zipporahvaati" target="_blank" className="hover:text-indigo-500">
              💻 GitHub
            </a>

            <a href="https://www.linkedin.com/in/zipporah-vaati-23804b77/" target="_blank" className="hover:text-blue-500">
              🔗 LinkedIn
            </a>

          </div>
        </section>

      </div>
    </main>
  );
}