export default function Home() {
  return (
    <main className="min-h-screen relative flex justify-center px-6 py-16 text-white overflow-hidden">

      {/* Background glow layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f3ff] to-[#e9d5ff]" />

      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[20%] w-[500px] h-[500px] bg-orange-500 blur-[180px] rounded-full" />
        <div className="absolute top-[20%] right-[-200px] w-[500px] h-[500px] bg-yellow-400 blur-[180px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative w-full max-w-4xl space-y-12">

        {/* HERO */}
        <section className="text-center space-y-5">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-400 text-transparent bg-clip-text">
            Hey there, I'm Zippy 👋
          </h1>

          <p className="text-lg text-black">
            Cloud & Data Engineer | Python | AWS | Next.js
          </p>

          <div className="flex justify-center gap-3 pt-4 flex-wrap">
            <span className="px-4 py-1 bg-white/10 border border-white/10 rounded-full text-black backdrop-blur">
              Data Engineering
            </span>
            <span className="px-4 py-1 bg-white/10 border border-white/10 rounded-full text-black backdrop-blur">
              AI Automation
            </span>
            <span className="px-4 py-1 bg-white/10 border border-white/10 rounded-full text-black backdrop-blur">
              Data Science
            </span>
			<span className="px-4 py-1 bg-white/10 border border-white/10 rounded-full text-black backdrop-blur">
              Api Intergrations
            </span>
			<span className="px-4 py-1 bg-white/10 border border-white/10 rounded-full text-black backdrop-blur">
              Cloud Computing
            </span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">About Me</h2>
          <p className="text-black leading-relaxed">
            I build cloud-based applications, data systems, and dashboards.
            I enjoy working with backend systems and deploying apps to the cloud.
            I focus on turning data into useful products with scalable architecture.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-500">Projects</h2>

          <div className="grid gap-4 md:grid-cols-2">

            {/* Project 1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-indigo-500 transition">
              <h3 className="font-semibold text-black">🌱 Agricultural Dashboard</h3>
              <p className="text-black text-sm mt-2">
                AI-powered agricultural insights dashboard built for real-world data analysis.
              </p>

              <a
                href="https://iitasamplekpidashboard-ldjmxg6jehbwm4jqwofxrx.streamlit.app/"
                target="_blank"
                className="inline-block mt-4 text-green-500 hover:text-indigo-300 font-medium"
              >
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-indigo-500 transition">
              <h3 className="font-semibold text-black">🌐 Portfolio Website</h3>
              <p className="text-black text-sm mt-2">
                Built using Next.js with modern UI styling and cloud deployment readiness.
              </p>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {["Python", "SQL", "AWS", "ETL Pipelines", "Next.js", "Power BI", "Machine Learning"].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-black text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

{/* CONTACT */}
<section className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">

  <h2 className="text-2xl font-semibold text-indigo-600">
    Let’s Connect
  </h2>

  <p className="text-gray-800">
    Open to opportunities in Data Engineering, Cloud & Analytics 🚀
  </p>

  <div className="flex flex-col items-center gap-3 text-gray-800">

    {/* Email */}
<a
  href="mailto:zippwaah@gmail.com"
  className="flex items-center gap-2 hover:text-red-500 transition"
>
  {/* Gmail-style M envelope icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-5 h-5 text-red-500"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
  </svg>

  Gmail: zippwaah@gmail.com
</a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/254727317927"
      target="_blank"
      className="flex items-center gap-2 hover:text-green-500 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-green-500"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.53 0 .24 5.29.24 11.82c0 2.09.55 4.13 1.59 5.93L0 24l6.41-1.67a11.78 11.78 0 005.65 1.44h.01c6.53 0 11.82-5.29 11.82-11.82 0-3.16-1.23-6.12-3.47-8.47zM12.07 21.5c-1.82 0-3.6-.49-5.16-1.42l-.37-.22-3.81 1 1.02-3.71-.24-.38a9.5 9.5 0 01-1.45-5.02c0-5.25 4.27-9.52 9.52-9.52 2.54 0 4.93.99 6.73 2.79a9.46 9.46 0 012.79 6.73c0 5.25-4.27 9.52-9.53 9.52zm5.21-7.1c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.28.27-.46.09-.18.05-.35-.02-.49-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.19 0 1.29.94 2.53 1.07 2.71.14.18 1.86 2.84 4.5 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
      </svg>
      WhatsApp:+254727317927
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/zipporahvaati"
      target="_blank"
      className="hover:text-indigo-500 transition"
    >
      💻 github.com/zipporahvaati
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/zipporah-vaati-23804b77/"
      target="_blank"
      className="hover:text-blue-500 transition"
    >
      🔗 LinkedIn Profile
    </a>

  </div>
</section>
 </div> {/* closes content wrapper */}

    </main>
  );
}