import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);
    form.append("access_key", "382fa22f-2b2f-4f2c-b72f-fb0dd8bb51d2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully! 🎉");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      setResult("Something went wrong! ❌");
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "shahzaib.nadeem17@gmail.com",
      link: "mailto:shahzaib.nadeem17@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+92 3165770166",
      link: "tel:+923165770166",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Lahore, Pakistan",
      link: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Shahzaib Shahg",
      link: "http://www.linkedin.com/in/shahzaib-shahg-64510b1b1",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: "🌐", link: "https://github.com" },
    { name: "LinkedIn", icon: "💼", link: "http://www.linkedin.com/in/shahzaib-shahg-64510b1b1" },
    { name: "Instagram", icon: "📸", link: "https://instagram.com" },
    { name: "WhatsApp", icon: "💬", link: "https://wa.me/923165770166" }
  ];

  return (
    <section id="contact" className="py-20 px-5 lg:px-10 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Send a Message</h3>
            <p className="text-slate-600 mb-8">I'll get back to you as soon as possible</p>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border rounded-xl px-4 py-3 w-full"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border rounded-xl px-4 py-3 w-full"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border rounded-xl px-4 py-3 w-full"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="border rounded-xl px-4 py-3 w-full resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl"
              >
                Send Message
              </button>

              {result && <p className="text-center mt-2 font-semibold">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}