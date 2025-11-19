import React, { useState } from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager at TechCorp",
    content: "Working with Shahzaib was an absolute pleasure. His attention to detail and problem-solving skills helped us deliver our project 2 weeks ahead of schedule. The code quality was exceptional!",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO at StartupHub",
    content: "One of the most talented developers I've worked with. His ability to understand complex requirements and translate them into clean, efficient code is remarkable. Highly recommended!",
    avatar: "👨‍💻",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Lead Designer at CreativeMinds",
    content: "The collaboration was seamless. He not only implemented designs perfectly but also provided valuable technical insights that improved the overall user experience. Truly a team player!",
    avatar: "👩‍🎨",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center space-x-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  const prevTestimonial = () =>
    setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  const goToTestimonial = (index) => setCurrentTestimonial(index);

  return (
    <section
      id="testimonials"
      className="py-24 px-5 lg:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Testimonials</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Here's what clients and colleagues have to say about working with me.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <button
            onClick={prevTestimonial}
            className="hidden md:inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            ‹
          </button>

          <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-6xl mb-4 text-blue-600 opacity-30">❝</div>
              <p className="text-slate-700 text-lg md:text-xl italic leading-relaxed">
                "{testimonialsData[currentTestimonial].content}"
              </p>
              <StarRating rating={5} />
              <div className="mt-6 flex flex-col items-center">
                <div className="text-4xl p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg mb-3">
                  {testimonialsData[currentTestimonial].avatar}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{testimonialsData[currentTestimonial].name}</h3>
                <p className="text-slate-500">{testimonialsData[currentTestimonial].position}</p>
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="hidden md:inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-6">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-lg">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}
