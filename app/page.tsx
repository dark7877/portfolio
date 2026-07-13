"use client";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
    "Linux",
    "Python",
    "C",
    "C++",
    "SQL",
    "Networking",
    "Cybersecurity",
    "SIEM",
  ];

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-all duration-300 ${
        darkMode
          ? "bg-[#050a18] text-white"
          : "bg-[#e6f2fa] text-[#16324a]"
      }`}
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-8%] w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b ${
          darkMode
            ? "bg-[#050a18]/80 border-white/10"
            : "bg-[#e6f2fa]/80 border-black/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="font-mono font-semibold text-blue-400 text-lg">
            hasnain<span className="text-cyan-400">.sec</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="#about"
              className={`text-sm transition ${
                darkMode
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }`}
            >
              About
            </a>

            <a
              href="#skills"
              className={`text-sm transition ${
                darkMode
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }`}
            >
              Skills
            </a>

            <a
              href="#contact"
              className={`text-sm transition ${
                darkMode
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }`}
            >
              Contact
            </a>

            {/* Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-xl border text-sm transition ${
                darkMode
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-black/10 bg-black/5 hover:bg-black/10"
              }`}
            >
              {darkMode ? "☀" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center max-w-6xl mx-auto px-6 pt-24">
        <div>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-8 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <span className="font-mono text-sm text-blue-400">
              Open to Learning Opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Hasnain
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Khan
            </span>
          </h1>

          {/* Role */}
          <p
            className={`mt-5 text-xl ${
              darkMode
                ? "text-white/70"
                : "text-black/70"
            }`}
          >
            B.Tech CSE Student · Learning Cybersecurity &
            Networking
          </p>

          {/* Desc */}
          <p
            className={`mt-6 max-w-2xl text-lg leading-9 ${
              darkMode
                ? "text-white/60"
                : "text-black/60"
            }`}
          >
            Focused on Linux, networking, cybersecurity,
            and programming while improving practical
            technical skills through hands-on learning and
            continuous exploration.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://github.com/dark7877"
              target="_blank"
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:translate-y-[-2px] transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hasnain-khan-a27479369"
              target="_blank"
              className={`px-7 py-4 rounded-xl border transition ${
                darkMode
                  ? "border-white/10 hover:bg-white/5 text-cyan-400"
                  : "border-black/10 hover:bg-black/5 text-blue-600"
              }`}
            >
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16">
            <div>
              <h3 className="text-3xl font-bold text-blue-400 font-mono">
                Linux
              </h3>

              <p
                className={`uppercase text-xs tracking-widest mt-2 ${
                  darkMode
                    ? "text-white/50"
                    : "text-black/50"
                }`}
              >
                Systems & Terminal
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400 font-mono">
                Networking
              </h3>

              <p
                className={`uppercase text-xs tracking-widest mt-2 ${
                  darkMode
                    ? "text-white/50"
                    : "text-black/50"
                }`}
              >
                Security Fundamentals
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400 font-mono">
                2
              </h3>

              <p
                className={`uppercase text-xs tracking-widest mt-2 ${
                  darkMode
                    ? "text-white/50"
                    : "text-black/50"
                }`}
              >
                Certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <p className="font-mono text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
           about me
        </p>

        <h2 className="text-4xl font-bold mb-14">
          Who I Am
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <p
              className={`text-lg leading-9 mb-6 ${
                darkMode
                  ? "text-white/65"
                  : "text-black/65"
              }`}
            >
              I'm a B.Tech Computer Science student with a
              strong interest in cybersecurity, Linux
              systems, networking, and programming.
            </p>

            <p
              className={`text-lg leading-9 ${
                darkMode
                  ? "text-white/65"
                  : "text-black/65"
              }`}
            >
              Currently improving practical skills through
              hands-on learning, labs, and certification
              programs while continuously building technical
              knowledge step by step.
            </p>
          </div>

          {/* Right */}
          <div
            className={`rounded-3xl border p-8 backdrop-blur-xl ${
              darkMode
                ? "bg-[#0f1e3c]/50 border-blue-400/10"
                : "bg-white/60 border-blue-400/20"
            }`}
          >
            <div className="grid grid-cols-2 gap-5">
              {[
                ["Education", "B.Tech CSE"],
                [
                  "Focus",
                  "Cybersecurity & Networking",
                ],
                ["Platforms", "Linux · GitHub"],
                ["Learning", "Python · C · C++"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className={`rounded-2xl p-5 ${
                    darkMode
                      ? "bg-blue-500/5 border border-blue-400/10"
                      : "bg-blue-100/50 border border-blue-300/20"
                  }`}
                >
                  <p
                    className={`uppercase text-xs tracking-widest mb-2 ${
                      darkMode
                        ? "text-white/40"
                        : "text-black/40"
                    }`}
                  >
                    {label}
                  </p>

                  <h3 className="font-semibold text-blue-400">
                    {value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <p className="font-mono text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
           skills
        </p>

        <h2 className="text-4xl font-bold mb-14">
          Skills & Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className={`rounded-3xl border p-8 transition hover:-translate-y-1 ${
                darkMode
                  ? "bg-[#0f1e3c]/50 border-blue-400/10 hover:border-blue-400/30"
                  : "bg-white/60 border-blue-400/20 hover:border-blue-400/40"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-400/20 flex items-center justify-center text-2xl mb-5">
                💻
              </div>

              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
           certifications
        </p>

        <h2 className="text-4xl font-bold mb-14">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Cisco */}
          <div
            className={`rounded-3xl border p-8 ${
              darkMode
                ? "bg-[#0f1e3c]/50 border-blue-400/10"
                : "bg-white/60 border-blue-400/20"
            }`}
          >
            <p className="text-cyan-400 font-mono text-sm mb-5">
              Cisco
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Introduction to Cybersecurity
            </h3>

            <a
              href="https://www.credly.com/badges/fd2f674b-5cb3-475e-be17-1cf08c38dba9/linked_in_profile"
              target="_blank"
              className="inline-flex px-5 py-3 rounded-xl border border-blue-400/20 text-blue-400 hover:bg-blue-400/10 transition"
            >
              View Credential ↗
            </a>
          </div>

          {/* Google */}
          <div
            className={`rounded-3xl border p-8 ${
              darkMode
                ? "bg-[#0f1e3c]/50 border-blue-400/10"
                : "bg-white/60 border-blue-400/20"
            }`}
          >
            <p className="text-cyan-400 font-mono text-sm mb-5">
              Google
            </p>

            <h3 className="text-2xl font-semibold">
              Google Cybersecurity Professional
              Certificate
            </h3>

            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/52K35CEYB9ML"
              target="_blank"
              className="inline-flex px-5 py-3 rounded-xl border border-blue-400/20 text-blue-400 hover:bg-blue-400/10 transition mt-4"
            >
              View Credential ↗
            </a>
          </div>
           {/* Google */}
          <div
            className={`rounded-3xl border p-8 ${
              darkMode
                ? "bg-[#0f1e3c]/50 border-blue-400/10"
                : "bg-white/60 border-blue-400/20"
            }`}
          >
            <p className="text-cyan-400 font-mono text-sm mb-5">
              Google
            </p>

            <h3 className="text-2xl font-semibold">
              Crash Course on Python
            </h3>

          <a
           href="https://www.coursera.org/account/accomplishments/records/VGZUWUZ1HY98"
           target="_blank"
           className="inline-flex px-5 py-3 rounded-xl border border-blue-400/20 text-blue-400 hover:bg-blue-400/10 transition mt-4"
          >
  View Credential ↗
</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <p className="font-mono text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
           contact
        </p>

        <h2 className="text-4xl font-bold mb-14">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left */}
          <div>
            <p
              className={`text-lg leading-9 mb-10 ${
                darkMode
                  ? "text-white/65"
                  : "text-black/65"
              }`}
            >
              Open to learning opportunities, networking,
              and connecting with people interested in
              cybersecurity and technology.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hasnain2005325@gmail.com"
                className="flex items-center gap-4 text-blue-400"
              >
                ✉ hasnain2005325@gmail.com
              </a>

              <a
                href="https://github.com/dark7877"
                target="_blank"
                className="flex items-center gap-4 text-blue-400"
              >
                ⌂ github.com/dark7877
              </a>

              <a
                href="https://www.linkedin.com/in/hasnain-khan-a27479369"
                target="_blank"
                className="flex items-center gap-4 text-blue-400"
              >
                in LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className={`rounded-3xl border p-8 ${
              darkMode
                ? "bg-[#0f1e3c]/50 border-blue-400/10"
                : "bg-white/60 border-blue-400/20"
            }`}
          >
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full rounded-xl px-5 py-4 outline-none border ${
                  darkMode
                    ? "bg-[#081120] border-white/10"
                    : "bg-white border-black/10"
                }`}
              />

              <input
                type="email"
                placeholder="Your Email"
                className={`w-full rounded-xl px-5 py-4 outline-none border ${
                  darkMode
                    ? "bg-[#081120] border-white/10"
                    : "bg-white border-black/10"
                }`}
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className={`w-full rounded-xl px-5 py-4 outline-none border resize-none ${
                  darkMode
                    ? "bg-[#081120] border-white/10"
                    : "bg-white border-black/10"
                }`}
              />

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:opacity-90 transition">
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t py-10 ${
          darkMode
            ? "border-white/10"
            : "border-black/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p
            className={`text-sm ${
              darkMode
                ? "text-white/40"
                : "text-black/40"
            }`}
          >
            © 2026 Hasnain Khan. Built with curiosity and
            continuous learning.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/dark7877"
              target="_blank"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                darkMode
                  ? "border-white/10 hover:border-blue-400/30"
                  : "border-black/10 hover:border-blue-400/30"
              }`}
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/hasnain-khan-a27479369"
              target="_blank"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                darkMode
                  ? "border-white/10 hover:border-blue-400/30"
                  : "border-black/10 hover:border-blue-400/30"
              }`}
            >
              in
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}