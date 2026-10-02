'use client';

import { useState, useEffect, useRef } from 'react';
import { GalleryHeading } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function InteractiveHero() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animId;

    const handleMouseMove = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      targetRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      targetRef.current.x = 0;
      targetRef.current.y = 0;
    };

    const loop = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

      const x = currentRef.current.x;
      const y = currentRef.current.y;

      if (cardRef.current) {
        const rotateY = x * 20;
        const rotateX = -y * 15;
        cardRef.current.style.transform =
          `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
      }

      if (glareRef.current) {
        const gx = 50 + x * 40;
        const gy = 50 + y * 40;
        glareRef.current.style.background =
          `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.25) 0%, transparent 60%)`;
      }

      animId = requestAnimationFrame(loop);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    }
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="shader-frame relative flex items-center justify-center overflow-hidden select-none cursor-pointer"
      style={{ background: 'linear-gradient(145deg, #0f1923 0%, #1a2a3d 50%, #0d1520 100%)' }}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full flex items-center justify-center will-change-transform"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.05s ease-out' }}
      >
        <img
          src="/developer-boy.jpg"
          alt="Developer"
          className="h-[92%] w-auto max-w-[95%] object-contain rounded-2xl shadow-2xl shadow-black/70"
          draggable={false}
          style={{ transform: 'translateZ(30px)' }}
        />
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-overlay"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ boxShadow: 'inset 0 0 80px rgba(100,180,255,0.06)' }} />
    </div>
  );
}


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
    <div className="min-h-screen bg-[#08090c] text-gray-100 selection:bg-amber-500/30 selection:text-amber-200">
        {/* Navigation */}
        <nav className="fixed top-0 w-full glass-nav z-50 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-sm group-hover:bg-amber-500/20 transition">
                R
              </span>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition">
                Ramanavasan
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-gray-300 hover:text-amber-400 transition">About</a>
              <a href="#courses" className="text-sm font-medium text-gray-300 hover:text-amber-400 transition">What I Teach</a>
              <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/50 transition">
                Get in Touch
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-28 pb-16 px-6 md:pt-36 md:pb-24 bg-riso-glow">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Interactive Character Hero Gaze Tracking */}
            <InteractiveHero />

            {/* Hero Content */}
            <div className="max-w-3xl space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <span>📍 CSE 3rd Year Student</span>
                <span>•</span>
                <span>Thanjavur, India</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Building modern apps & <span className="text-gradient-gold">teaching code that sticks</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-normal">
                Full-stack developer helping students skip theoretical fluff and dive straight into building real-world projects. From web applications to vibe coding and AI/ML fundamentals.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#courses"
                  className="px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore Courses
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl font-semibold bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-amber-500/40 transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 border-t border-white/5 bg-[#0a0c10]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">01 / ABOUT ME</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Who Am I?</h3>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-5 text-gray-300 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Hey! I'm <strong className="text-white font-medium">Ramanavasan</strong>, a 3rd-year Computer Science Engineering student passionate about building practical software and teaching modern web tech.
                </p>
                <p>
                  I started coding because static theory bored me — so I jumped into real projects instead. Now I help other learners skip the confusion, build real applications, and master modern AI tools.
                </p>
                <p>
                  Whether I'm shipping products or mentoring students, I believe in hands-on experimentation, clean user interfaces, and continuous learning.
                </p>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="glass-card p-6 rounded-2xl space-y-2">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Active Project</div>
                  <h4 className="font-semibold text-lg text-white">NearPro Strickers</h4>
                  <p className="text-sm text-gray-400">A local service marketplace connecting providers directly with customers.</p>
                </div>

                <div className="glass-card p-6 rounded-2xl space-y-2">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Tech Stack</div>
                  <h4 className="font-semibold text-lg text-white">Full-Stack & AI</h4>
                  <p className="text-sm text-gray-400">React • Next.js • Node.js • Python • AI/ML • MongoDB • PostgreSQL</p>
                </div>

                <div className="glass-card p-6 rounded-2xl space-y-2">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Location</div>
                  <h4 className="font-semibold text-lg text-white">Thanjavur, Tamil Nadu</h4>
                  <p className="text-sm text-gray-400">Open for remote mentorship, technical roles, and student collaborations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-24 px-6 border-t border-white/5 bg-[#08090c]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">02 / MENTORSHIP</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">What I Teach</h3>
              <p className="text-gray-400 mt-2">Practical, project-based learning tailored for developers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Full-Stack Card */}
              <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition">Full-Stack Development</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Build complete web applications from scratch. Master modern frontends, backends, databases, and deployment pipelines.
                  </p>
                  <ul className="text-xs text-gray-300 space-y-2.5 pt-2 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✓</span> React & Next.js Ecosystem
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✓</span> Node.js, Express & REST APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✓</span> Database Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✓</span> Real-World App Deployment
                    </li>
                  </ul>
                </div>
              </div>

              {/* Vibe Coding Card */}
              <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-2xl">
                    ✨
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition">Vibe Coding</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Make coding enjoyable and creative. Learn interactive web UI, creative CSS animations, and building fast prototypes.
                  </p>
                  <ul className="text-xs text-gray-300 space-y-2.5 pt-2 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✓</span> Modern JS Fundamentals
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✓</span> Interactive Creative UI
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✓</span> CSS Art & Animations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✓</span> AI Tooling Integration
                    </li>
                  </ul>
                </div>
              </div>

              {/* AI/ML Card */}
              <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl">
                    🤖
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition">AI/ML Fundamentals</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Demystify artificial intelligence. Learn Python data science, core machine learning algorithms, and real project integration.
                  </p>
                  <ul className="text-xs text-gray-300 space-y-2.5 pt-2 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span> Python for Data Science
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span> Machine Learning Models
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span> Neural Network Concepts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span> AI API Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 border-t border-white/5 bg-[#0a0c10]">
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">03 / CONTACT</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Let's Build Something Together</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Interested in learning, collaborating, or discussing software? Send a message below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-300">
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
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-300">
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
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-gray-300">
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
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 transition shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
              >
                {isLoading ? 'Sending Message...' : 'Send Message'}
              </button>

              {message && (
                <div className={`p-4 rounded-xl text-center text-sm font-medium border ${message.includes('Thanks') ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-300'}`}>
                  {message}
                </div>
              )}
            </form>

            <div className="text-center space-y-3 pt-4 text-sm text-gray-400">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Or connect directly</p>
              <div className="flex flex-wrap gap-4 justify-center items-center font-medium">
                <a href="mailto:ramanavasanmanivannan@gmail.com" className="text-amber-300 hover:underline">
                  ramanavasanmanivannan@gmail.com
                </a>
                <span className="text-gray-600">•</span>
                <a href="tel:+918870804734" className="text-amber-300 hover:underline">
                  +91 8870804734
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/5 bg-[#060709] text-center text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Ramanavasan. Integrated with ThreeUI GalleryHeading.</p>
        </footer>
      </div>
    );
  }
