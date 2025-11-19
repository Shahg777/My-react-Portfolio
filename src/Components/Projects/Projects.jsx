import React from "react";
import projectImg1 from "../../assets/portfolio.jpg"; // using user's images from assets
import projectImg2 from "../../assets/e-commerce-ui.jpg";
import projectImg3 from "../../assets/admin.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio built with React and Tailwind CSS.",
    image: projectImg1,
    live: "#",
    code: "#",
  },
  {
    title: "E-commerce UI",
    description: "Modern e-commerce interface with clean product listing.",
    image: projectImg2,
    live: "#",
    code: "#",
  },
  {
    title: "Admin Dashboard",
    description: "Interactive admin dashboard with charts and stats.",
    image: projectImg3,
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-5 lg:px-10 bg-gradient-to-br from-blue-50 to-purple-50 relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Some of my recent work showcasing clean UI, responsive design, and interactive web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md
                    hover:from-purple-600 hover:to-blue-600 hover:scale-105 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-slate-800 font-semibold
                    hover:bg-slate-200 hover:scale-105 transition-all duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
