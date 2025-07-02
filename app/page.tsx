"use client";

import React from "react";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "education", label: "EDUCATION" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen text-gray-800 font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-[#944E30] text-white w-64 min-h-screen p-6 sticky top-0 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center leading-tight">
          NIKITHA <br />
          <span className="text-orange-200">SRI</span>
        </h1>
        <p className="text-sm mt-2 text-center">
          nikithagarapati168@gmail.com <br /> +1-315-567-7983
        </p>

        <nav className="mt-10 space-y-4 text-center">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block hover:underline transition"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 p-10 space-y-24 scroll-smooth">
        {/* About */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-[#944E30] mb-2">About</h2>
          <p>
            I'm a passionate Java developer and MS in Applied Computer Science student at Northwest Missouri State University. My work focuses on AI, cloud-based systems, and mobile-first applications. I love crafting impactful digital experiences that combine deep technical skill with thoughtful design.
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-[#944E30] mb-2">Experience</h2>
          <h3 className="font-bold">Schneider Electric – Graduate Engineer Trainee (Jan 2023 – Dec 2023)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Developed and optimized control system components and safety modules.</li>
            <li>Automated engineering tasks with Java and Python scripts.</li>
            <li>Configured SQL integrations and supported firewall/network modules.</li>
            <li>Collaborated with cross-functional teams to meet client requirements.</li>
          </ul>

          <h3 className="font-bold">Northwest Missouri State University – Software Developer Aide (Jan 2025 – May 2025)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enhanced university systems using Java and JavaScript.</li>
            <li>Managed backend SQL data and provided UI improvements.</li>
            <li>Collaborated with faculty to meet tech requirements efficiently.</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-[#944E30] mb-2">Projects</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>AI Quiz Bot:</strong> AI-powered software engineering quiz tool using TensorFlow & Dialogflow with NLP feedback.</li>
            <li><strong>Real-Time Twitter Trends:</strong> Hadoop + MapReduce pipeline to analyze social media trends in real time.</li>
            <li><strong>TeleMedicine App:</strong> Built with Node.js, Firebase, TiDB, and Agora SDK for live video consults.</li>
            <li><strong>EduCentral:</strong> Android + Firebase app to guide new students through campus resources.</li>
            <li><strong>CardioCare:</strong> Wearable heart monitoring app that detects coronary disease symptoms.</li>
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-[#944E30] mb-2">Skills</h2>
          <p>
            Java, Python, C, ReactJS, Android, Node.js, Firebase, SQL, MongoDB, AWS, GCP, Spring Boot, Django, REST APIs, MapReduce, Hadoop, Git, Postman, TensorFlow, NLP, LLMs, LangChain, and more.
          </p>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-[#944E30] mb-2">Education</h2>
          <p>
            <strong>Northwest Missouri State University</strong> — MS in Applied Computer Science (GPA: 3.80) <br />
            <strong>Velagapudi Ramakrishna Siddhartha Engineering College</strong> — B.Tech in Electronics and Instrumentation (GPA: 7.9/10)
          </p>
        </section>
      </div>
    </main>
  );
}
