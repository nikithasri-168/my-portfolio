"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    document.title = "Nikitha Sri Garapati | Portfolio";
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      {/* Navbar */}
      <header className="p-4 shadow-md bg-white sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nikitha Sri Garapati</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-white">
        <motion.h2 className="text-4xl md:text-6xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Hi, I'm Nikitha Sri Garapati
        </motion.h2>
        <motion.p className="mt-4 text-lg text-gray-600 max-w-xl" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          A Java Developer & CS Master's Student specialized in full-stack development, mobile apps, and real-time data projects.
        </motion.p>
        <div className="mt-6 flex space-x-6">
          <a href="https://github.com/nikithasri-168" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/nikithagarapati/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700 max-w-3xl">
            I am a Master's student at Northwest Missouri State University with experience in building scalable, user-friendly applications. I enjoy solving complex problems and continuously learning new technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">TeleMedicine Application</h4>
              <p className="text-gray-600 mb-4">A full-stack telemedicine solution with Node.js backend, TiDB MySQL database, and Firebase authentication. Integrated Agora SDK for live video consultations, email notifications, and a responsive Android frontend, deployed using Railway and Postman-tested APIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">Contact</h3>
          <p className="text-gray-700 mb-6">Feel free to reach out for collaborations or just a friendly hello 👋</p>
          <a href="mailto:youremail@example.com" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
