import React from "react";

const educationData = [
  {
    degree: "Graduation in Software Engineering",
    institution: "Virtual University of Pakistan",
    period: "2019 - 2023",
    color: "from-blue-600 to-purple-600",
    icon: "🎓",
    description: "Specialized in software development, algorithms, and system design with hands-on project experience."
  },
  {
    degree: "DAE in Electronics",
    institution: "Swedish College",
    period: "2016 - 2019",
    color: "from-green-500 to-emerald-600",
    icon: "💻",
    description: "Focused on computer fundamentals, hardware and software fundamentals of electronics devices ."
  },
  {
    degree: "School Education",
    institution: "Islamia High School",
    period: "2011 - 2016",
    color: "from-orange-500 to-red-500",
    icon: "📚",
    description: "Completed foundational education with excellence in science and mathematics."
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-5 lg:px-10 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="mt-4 text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            My academic path that built the foundation for my technical expertise and professional growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
          
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                <div className="group relative">
                  {/* 3D Rotating Card */}
                  <div className="bg-white rounded-2xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] p-8 border border-slate-100 min-h-[200px]">
                    {/* Front Side */}
                    <div className="[backface-visibility:hidden]">
                      {/* Icon and Header */}
                      <div className="flex items-start mb-4">
                        <div className={`text-2xl mr-4 p-3 rounded-xl bg-gradient-to-r ${edu.color} text-white shadow-md`}>
                          {edu.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                          <p className="text-slate-700 font-medium mt-1">{edu.institution}</p>
                        </div>
                      </div>
                      
                      {/* Period */}
                      <div className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium text-sm mb-4">
                        {edu.period}
                      </div>
                      
                      {/* Gradient accent */}
                      <div className={`h-1 w-20 mt-6 rounded-full bg-gradient-to-r ${edu.color}`}></div>
                      
                      {/* Hover hint */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center text-slate-400 text-sm">
                          <span>Hover to flip</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 border border-slate-200 flex flex-col justify-center">
                      <div className="text-center">
                        <div className={`text-3xl mb-4 p-4 rounded-full bg-gradient-to-r ${edu.color} text-white inline-block`}>
                          {edu.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{edu.degree}</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {edu.description}
                        </p>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-sm`}>
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline Dot - Visible only on large screens */}
              <div className="hidden lg:flex w-2/12 justify-center">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${edu.color} shadow-lg border-4 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-700`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Spacer for alternating sides */}
              <div className="hidden lg:block w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-slate-700 font-medium mr-3">Continuous Learner</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* 3D perspective */
        .group:hover .group-hover\:\[transform\:rotateY\(180deg\)\] {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}