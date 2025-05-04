import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-4">My Projects</h2>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4">
          <li>
            <h3 className="text-2xl font-bold">Project 1: Diabetic Sock</h3>
            <p className="text-lg text-gray-600">
              Developed a thermal model to optimize system placement for diabetic socks to ensure optimal
              comfort and health monitoring.
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-bold">Project 2: Carotid Artery Segmentation</h3>
            <p className="text-lg text-gray-600">
              Developed a hybrid deep learning model for accurate segmentation of carotid arteries in 2D ultrasound
              images to assist in diagnostic applications.
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-bold">Project 3: Polyp Segmentation from Colonoscopy Images</h3>
            <p className="text-lg text-gray-600">
              Used self-supervised learning techniques to enhance colonoscopy image segmentation for the detection of
              polyps.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
