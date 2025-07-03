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
    <main className="flex h-screen text-gray-800 font-sans bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="bg-slate-800 text-white w-64 min-h-screen p-6 sticky top-0 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-wide text-center">
          NIKITHA <br />
          <span className="text-indigo-700">SRI GARAPATI</span>
        </h1>
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

      {/* Main Content Area */}
      <div className="flex-1 p-10 space-y-32 overflow-y-auto h-screen snap-y snap-mandatory scroll-smooth">
        {/* Welcome Section */}
        <section id="welcome" className="snap-start h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-indigo-400 mb-6">
            Turning code into impact, welcome to my digital workspace.
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            I'm Nikitha Sri Garapati, a full stack developer with a passion for crafting scalable applications and smart solutions.
          </p>
          <a
            href="#about"
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Start Exploring
          </a>
        </section>

        {/* About */}
        <section id="about" className="snap-start min-h-screen scroll-mt-24">
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">About</h2>
          <p className="text-lg max-w-2xl">
            I'm a passionate Full Stack Developer and graduate student in Applied Computer Science at Northwest Missouri State University. I specialize in building secure, scalable web and mobile applications using modern technologies like React, Node.js, and Spring Boot. My mission is to turn complex challenges into elegant technical solutions.
          </p>
          <div className="mt-4 flex space-x-6 text-indigo-400 text-lg">
            <a
              href="https://www.linkedin.com/in/nikithagarapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nikithasri-168"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="snap-start min-h-screen scroll-mt-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Experience</h2>
          <h3 className="font-bold">
            Northwest Missouri State University – Software Developer Aide (Jan 2025 – May 2025)
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enhanced university systems using Java and JavaScript.</li>
            <li>Managed backend SQL data and provided UI improvements.</li>
            <li>Collaborated with faculty to meet tech requirements efficiently.</li>
          </ul>

          <h3 className="font-bold">
            Schneider Electric – Graduate Engineer Trainee (Jan 2023 – Dec 2023)
          </h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Developed and optimized control system components and safety modules.</li>
            <li>Automated engineering tasks with Java and Python scripts.</li>
            <li>Configured SQL integrations and supported firewall/network modules.</li>
            <li>Collaborated with cross-functional teams to meet client requirements.</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start min-h-screen scroll-mt-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Projects</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>AI Quiz Bot:</strong> AI-powered software engineering quiz tool using TensorFlow & Dialogflow with NLP feedback.</li>
            <li><strong>Real-Time Twitter Trends:</strong> Hadoop + MapReduce pipeline to analyze social media trends in real time.</li>
            <li><strong>TeleMedicine App:</strong> Built with Node.js, Firebase, TiDB, and Agora SDK for live video consults.</li>
            <li><strong>EduCentral:</strong> Android + Firebase app to guide new students through campus resources.</li>
            <li><strong>CardioCare:</strong> Wearable heart monitoring app that detects coronary disease symptoms.</li>
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="snap-start min-h-screen scroll-mt-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Skills</h2>
          <p>
            Java, Python, C, ReactJS, Android, Node.js, Firebase, SQL, MongoDB, AWS, GCP, Spring Boot, Django, REST APIs,
            MapReduce, Hadoop, Git, Postman, TensorFlow, NLP, LLMs, LangChain, and more.
          </p>
        </section>

        {/* Education */}
        <section id="education" className="snap-start min-h-screen scroll-mt-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Education</h2>
          <p>
            <strong>Northwest Missouri State University</strong> — MS in Applied Computer Science (GPA: 3.80/4)<br />
            <strong>Velagapudi Ramakrishna Siddhartha Engineering College</strong> — B.Tech in Electronics and Instrumentation (GPA: 7.9/10)
          </p>
        </section>
      </div>
    </main>
  );
}
