import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-5 lg:px-10 bg-white relative overflow-hidden"
    >
      {/* Soft background gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto space-y-14">
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm Shahzaib, a passionate Frontend Developer focused on creating
            modern, responsive, and visually appealing web interfaces using
            React, Tailwind CSS, and clean UI/UX principles.
          </p>
        </div>

        {/* MAIN INFO CARD */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-10 rounded-3xl shadow-lg border border-blue-100">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            👨‍💻 Who Am I?
          </h3>

          <p className="text-slate-700 leading-relaxed text-lg">
            I enjoy transforming ideas into interactive digital experiences.
            With strong attention to detail, I focus on delivering pixel-perfect
            UI, smooth animations, and clean structured code.
            <br />
            <br />
            My goal is simple: **Build beautiful, fast, and user-friendly
            websites** that leave a lasting impression.
          </p>
        </div>

        {/* SKILLS */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            🚀 Skills & Expertise
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "HTML / CSS",
              "Figma UI/UX",
              "GSAP / Framer Motion",
              "Git & GitHub",
              "Responsive Design",
            ].map((skill, i) => (
              <div
                key={i}
                className="px-4 py-3 text-center rounded-xl bg-white shadow-sm border 
                border-slate-200 text-slate-700 font-semibold
                hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
                hover:text-white hover:scale-105 transition-all cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            📌 Experience
          </h3>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-blue-600 bg-white rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">
                Frontend Developer — 1+ Years
              </h4>
              <p className="text-slate-700 mt-1">
                Building responsive websites, modern UI, animations, and
                real-world client work with React & Tailwind.
              </p>
            </div>

            <div className="p-5 border-l-4 border-purple-600 bg-white rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">
                UI Designer — 8+ Months
              </h4>
              <p className="text-slate-700 mt-1">
                Designing clean layouts, color systems, typography, and
                interactive user flows in Figma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
