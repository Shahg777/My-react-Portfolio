import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 px-5 lg:px-10 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Logo & Short Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Shahzaib
          </h2>
          <p className="text-slate-400">
            Creative Frontend Developer & UI Designer. Building modern, responsive, and beautiful web experiences with passion.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-2xl" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors text-2xl" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors text-2xl" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="mailto:shahzaib@example.com" className="hover:text-red-400 transition-colors text-2xl" aria-label="Email Shahzaib">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-slate-100 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-slate-100 mb-4">Contact</h3>
          <p className="text-slate-400 mb-2">Email: shahzaib.nadeem17@example.com</p>
          <p className="text-slate-400 mb-2">Phone: +92 316 5770166</p>
          <p className="text-slate-400">Location: Islamabad, Pakistan</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Shahzaib. All rights reserved.
      </div>
    </footer>
  );
}
