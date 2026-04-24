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
      <div className="relative w-full max-w-4xl text-black">

        {/* HERO */}
        <section className="text-center space-y-5 mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-transparent bg-clip-text">
            Hey there, I'm Zippy 👋
          </h1>

          <p className="text-lg">
            Data Engineering | Artificial Intelligence | Python | AWS Cloud | Business Intelligence
          </p>

          <div className="flex justify-center gap-3 flex-wrap pt-4">
            {["Data Engineering", "AI Automation", "API Intergraions","Business Intelligence dashboards", "Cloud Computing ", "Web Applications"].map((skill) => (
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
        <section className="bg-white/60 backdrop-blur border border-white/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            About Me
          </h2>
          <p>
            I design scalable data engineering architectures and AI-driven pipelines for large-scale data processing,
			enabling automated transformation, analytics and insight generation across diverse domains.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600"> Completed Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-white/60 backdrop-blur border border-white/40 p-6 rounded-2xl">
              <h3 className="font-semibold">📞🌬️ Apache Airflow Call Detail Records Pipeline </h3>
              <p className="text-sm mt-2">
			  A data engineering project for telecom Call Detail Records (CDR) processing, orchestrated using Apache Airflow.
			  The pipeline uses DAGs to automate ingestion, transformation, and structuring of large-scale call data for analytics.
			  This project is inspired by Airtel Networks Kenya Limited use case.
				
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
              <h3 className="font-semibold"> 🚨🎗️Cancer AI Surveillance System  </h3>
              <p className="text-sm mt-2">
			  An AI-enhanced data engineering pipeline for cancer surveillance and early warning analytics in Africa.
			  The system processes and transforms health data to detect trends and support predictive insights on cancer patterns across countries.
			  This project is inspired by UN Sustainable Development Goals (Good Health & Well-being)
			  This project is built using python and deployed on Google Cloud.
               
			 
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
              <h3 className="font-semibold"> 🤖🔐Fintech Fraud Detection System </h3>
              <p className="text-sm mt-2">
                A fintech mobile money system built with python(Flask) and enhanced with a machine learning model to detect fraudulent transactions.
				The system handles wallet operations such as balance management, deposits and transfers
				while using a Random Forest model to flag suspicious activity based on transaction patterns.
				This project is inspired by MTN Mobile Money use case
				
              </p>

              <a
                href="https://github.com/zipporahvaati/Python_Flask_Mobile_Money_App/tree/main"
                target="_blank"
                className="inline-block mt-3 text-green-600 hover:text-indigo-500"
              >
                View Project →
              </a>
            </div>
			<div className="bg-white/60 backdrop-blur border border-white/40 p-6 rounded-2xl">
              <h3 className="font-semibold">🚗💳 Nairobi Car Rental System</h3>
              <p className="text-sm mt-2">
               
				A full-stack car rental platform developed using React and Flask, with integrated M-Pesa API for real-time mobile money payments.
				The system manages vehicle bookings, availability tracking, and pricing logic while enabling secure transaction processing through M-Pesa STK push integration.
				This project demonstrates full-stack development, payment gateway integration, and real-world fintech application design.
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
              <h3 className="font-semibold">🔄 Mombasa unemployment ETL Pipeline</h3>
              <p className="text-sm mt-2">
                A cloud-based data engineering pipeline for unemployment patterns in Mombasa County built with Python and deployed on AWS EC2.
				It uses AWS Lambda and Step Functions for orchestration, stores data in S3, enables SQL analytics through Amazon Athena, and visualizes insights using Amazon QuickSight dashboards
				This project is Inspired by DataKind social impact data engineering use cases.
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
              <h3 className="font-semibold">📊 M-KOPA Business Intelligence Project </h3>
              <p className="text-sm mt-2">
                A Business Intelligence Project Stimulating real world analytics for M-kopa Kenya
				Foucing on regional performance,DSR churn and commisssion efficiency.
				It combines advanced SQL analysis, Excel modeling, and dashboard design to evaluate operational and revenue trends
				The project delivers data-driven insights and strategic recommendations to support executive decision-making.
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
              <h3 className="font-semibold">🌱 Agricultural Dashboard</h3>
              <p className="text-sm mt-2">
                AI-powered agricultural insights dashboard
				Inspired by International Institute of Tropical Agriculture use case.
				Built with Python and deployed on Streamlit
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
                A modern AI-powered portfolio with an interactive chat
			    interface and dynamic UI components built with Next.js
			    React,Tailwind CSS, Node.js and deployed on Vercel.
				
				<a
                href="https://iitasamplekpidashboard-ldjmxg6jehbwm4jqwofxrx.streamlit.app/"
                target="_blank"
                className="inline-block mt-3 text-green-600 hover:text-indigo-500"
              >
                View Project →
              </a>
				
              </p>
            </div>

          </div>
        </section>

        {/* CHATBOT (controlled spacing here) */}
        <div className="mt-4 mb-10">
          <Chat />
        </div>

        {/* CONTACT */}
        <section className="text-center bg-white/60 backdrop-blur border border-white/40 rounded-2xl p-8 space-y-4 mb-12">

          <h2 className="text-2xl font-semibold text-indigo-600">
            Let’s Connect
          </h2>

          <p>
            Open to Data Engineering, Cloud & AI consultancy 🚀
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