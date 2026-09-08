'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Replace with your AppScript deployment URL
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbw4CSCPGxtISXlBFo7fy2TE0GBoskh6wht3OzHO6TNT4wchonFN_YVXI-CmOGp-9vcFsA/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("✨ Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Error sending message. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Ramanavasan - Full-Stack Developer & AI Educator</title>
        <meta name="description" content="I help students build real-world full-stack applications and master AI/ML. Learn through hands-on projects, not theory." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Ramanavasan - Full-Stack Developer" />
        <meta property="og:description" content="CSE 3rd Year | Full-Stack Developer | Vibe Coding | AI/ML Educator" />
        <meta name="keywords" content="full-stack developer, AI courses, vibe coding, CSE student, web development" />
      </Head>

      <div className="bg-white text-gray-900 overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">Ramanavasan</h1>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-sm hover:text-blue-600 transition">About</a>
              <a href="#courses" className="text-sm hover:text-blue-600 transition">What I Teach</a>
              <a href="#contact" className="text-sm hover:text-blue-600 transition">Get in Touch</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                CSE 3rd Year Student
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              I build apps, teach coding, <span className="text-blue-600">and make learning fun</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Full-stack developer from India helping students skip the boring tutorials and dive straight into building real projects. Whether you want to learn web development, vibe with modern AI tools, or master data structures — I've got your back.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="#courses" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Explore My Courses
              </a>
              <a href="#contact" className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition">
                Let's Connect
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">Who Am I?</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Hey! I'm Ramanavasan, a 3rd-year CSE student who's genuinely excited about building things that matter. I started coding because I was bored with theory, so I jumped into real projects instead.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Now I help other students do the same — skip the fluff, build something cool, and actually understand what's happening under the hood.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Between classes and my internship, I'm always experimenting with new tech, breaking things, and learning from the mess.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-lg mb-2">Currently Working On</h4>
                  <p className="text-gray-600">NearPro Strickers - a local service marketplace connecting service providers with customers</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-lg mb-2">My Stack</h4>
                  <p className="text-gray-600">React • Next.js • Node.js • Python • AI/ML • MongoDB • PostgreSQL</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-lg mb-2">Location</h4>
                  <p className="text-gray-600">Thanjavur, Tamil Nadu • India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">What I Teach</h3>
            <p className="text-lg text-gray-600 mb-12">Practical, project-based learning that actually sticks</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Full-Stack Card */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Full-Stack Development</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Learn to build complete web applications from database to frontend. We build real projects, not toy examples.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Frontend with React/Next.js</li>
                  <li>✓ Backend with Node.js & Express</li>
                  <li>✓ Databases & API Design</li>
                  <li>✓ Deployment & DevOps Basics</li>
                </ul>
              </div>

              {/* Vibe Coding Card */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Vibe Coding</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Coding doesn't have to feel like work. Learn web development, UI/UX, and creative coding in a chill, judgment-free space.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ JavaScript Fundamentals</li>
                  <li>✓ Creative Frontend Projects</li>
                  <li>✓ CSS Art & Animations</li>
                  <li>✓ Building for Fun & Portfolio</li>
                </ul>
              </div>

              {/* AI/ML Card */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="text-xl font-bold mb-3">AI/ML Fundamentals</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Demystify AI and machine learning. Understand the concepts, build models, and integrate AI into your projects.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Python & Data Science</li>
                  <li>✓ ML Algorithms & Models</li>
                  <li>✓ Deep Learning Basics</li>
                  <li>✓ Real-World AI Applications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-center">Let's Build Something Together</h3>
            <p className="text-lg text-gray-600 text-center mb-12">
              Interested in learning, collaborating, or just want to chat about tech? Drop your info below and I'll reach out.
            </p>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Alex Johnson"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>

                {/* Message */}
                {message && (
                  <p className={`text-center text-sm ${message.includes('Thanks') ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                  </p>
                )}
              </div>
            </form>

            <div className="mt-12 text-center space-y-3 text-gray-600">
              <p className="text-sm">Or reach out directly:</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a href="mailto:ramanavasanmanivannan@gmail.com" className="hover:text-blue-600 transition font-medium">
                  ramanavasanmanivannan@gmail.com
                </a>
                <span>•</span>
                <a href="tel:+918870804734" className="hover:text-blue-600 transition font-medium">
                  +91 8870804734
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
            <p>Built with Next.js & love. © 2024 Ramanavasan</p>
          </div>
        </footer>
      </div>
    </>
  );
}
