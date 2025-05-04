import React from "react";
import "./App.css";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  // Update with the projects you've worked on
  const projects = [
    {
      title: "Carotid Artery Segmentation",
      description: "Developed a hybrid ViT-CNN model for accurate segmentation of carotid arteries from ultrasound images.",
      link: "https://github.com/zinahghul/FusionViTNet.git"  // Update with the actual link to the project
    },
    {
      title: "Polyp Segmentation for Colonoscopy",
      description: "Implemented self-supervised learning models for detecting polyps in colonoscopy images.",
      link: "https://github.com/yourgithub/repo3"
    },
    {
      title: "Thermal Model for Diabetic Socks",
      description: "Developed a thermal model to optimize sensor placement in diabetic socks for better monitoring.",
      link: "https://github.com/yourgithub/repo4"
    }
    // Add more projects if needed
  ];

  return (
    <div className="App">
      {/* Header Section */}
      <header className="text-center py-8">
        <img
          src="/zinah.jpg"
          alt="Zinah Ghulam"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Zinah Ghulam</h1>
        <p className="text-xl text-gray-600">Biomedical Engineer | AI Enthusiast</p>
      </header>

      {/* About Section */}
      <section id="about" className="py-8 px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">About Me</h2>
        <p className="text-lg text-center max-w-4xl mx-auto">
          I am a Biomedical Engineer with a passion for AI and deep learning. I work on cutting-edge medical
          imaging technologies and am actively involved in research related to machine learning and medical devices.
        </p>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
