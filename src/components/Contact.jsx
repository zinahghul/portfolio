import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-4">Contact</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg mb-4">Feel free to reach out to me for collaborations or inquiries!</p>
        <p className="text-lg">
          Email: <a href="mailto:zinahghulam@gmail.com" className="text-blue-600">zinahghulam@gmail.com</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
