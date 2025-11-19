import React from "react";
import heroImg from "../../assets/shahzaib.jpg"; // ensure this file exists

export default function Home() {
  return (
    // added overflow-x-hidden to prevent horizontal scroll
    <section
      id="home"
      className="min-h-screen flex items-center overflow-x-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 px-5 lg:px-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE TEXT */}
        <div className="space-y-6">
          {/* Badge */}
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            👋 Hi, I'm Shahzaib
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Creative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Frontend Developer
            </span>
            <br /> & UI Designer
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            I build modern, clean, responsive web experiences. Passionate about
            crafting elegant UI with React, Tailwind, and beautiful animations.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            {/* Button 1 */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-blue-600 to-purple-600 shadow-md
              hover:from-purple-600 hover:to-blue-600 hover:scale-105 active:scale-95 transition-all"
            >
              View Projects
            </a>

            {/* Button 2 */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-slate-800 font-semibold border border-slate-300
              hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        {/* group allows the glow/background to react when hovering the image/card */}
        <div className="flex justify-center relative group">
          {/* Soft Glow Background */}
          <div
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-r from-blue-600 to-purple-600
              opacity-30 scale-125 blur-3xl
              transform transition-all duration-500
              group-hover:opacity-60 group-hover:scale-115
              group-hover:from-purple-500 group-hover:to-blue-500
            "
            aria-hidden="true"
          />

          {/* Hero Image */}
          <img
            src={heroImg}
            alt="Shahzaib developer"
            className="
              relative w-[300px] md:w-[380px] rounded-3xl shadow-xl
              transform transition-all duration-500
              group-hover:scale-95 group-hover:-translate-y-1
              group-hover:ring-4 group-hover:ring-blue-200 group-hover:ring-opacity-30
              cursor-pointer
            "
            style={{ willChange: "transform, box-shadow, filter" }}
          />
        </div>
      </div>
    </section>
  );
}
