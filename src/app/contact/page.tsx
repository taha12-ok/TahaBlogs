"use client"; // This makes it a Client Component

import { useState } from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin, FaTelegram, FaPlay } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    phone: "",
    occupation: "",
    tahaBlogFeedback: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const phoneNumber = formData.phone;
    const message = encodeURIComponent("Hi, I'm coming from TahaBlog!");

    // Open WhatsApp link with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#dde8f4] to-[#e0ecf4] py-10">
      <div className="flex justify-center my-10">
        <h1 className="text-3xl md:text-7xl font-bold text-gray-700">
          <span className="inline-block animate-glow">S</span>
          <span className="inline-block animate-glow [animation-delay:0.3s]">u</span>
          <span className="inline-block animate-glow [animation-delay:0.6s]">b</span>
          <span className="inline-block animate-glow [animation-delay:0.9s]">m</span>
          <span className="inline-block animate-glow [animation-delay:1.2s]">i</span>
          <span className="inline-block animate-glow [animation-delay:1.5s]">t</span>
          <span className="inline-block ml-4"> </span>
          <span className="inline-block animate-glow [animation-delay:2.1s]">T</span>
          <span className="inline-block animate-glow [animation-delay:2.4s]">h</span>
          <span className="inline-block animate-glow [animation-delay:2.7s]">i</span>
          <span className="inline-block animate-glow [animation-delay:3s]">s</span>
          <span className="inline-block ml-4"> </span>
          <span className="inline-block animate-glow [animation-delay:3.6s]">F</span>
          <span className="inline-block animate-glow [animation-delay:3.9s]">o</span>
          <span className="inline-block animate-glow [animation-delay:4.2s]">r</span>
          <span className="inline-block animate-glow [animation-delay:4.5s]">m</span>
          <span className="inline-block ml-4"> </span>
          <span className="inline-block animate-glow [animation-delay:5.1s]">P</span>
          <span className="inline-block animate-glow [animation-delay:5.4s]">l</span>
          <span className="inline-block animate-glow [animation-delay:5.8s]">e</span>
          <span className="inline-block animate-glow [animation-delay:6.1s]">a</span>
          <span className="inline-block animate-glow [animation-delay:6.4s]">s</span>
          <span className="inline-block animate-glow [animation-delay:6.7s]">e</span>
          <span className="inline-block animate-glow [animation-delay:7s]">!</span>
        </h1>
      </div>

      <div className="flex flex-col items-center my-10 p-10">
        {!submitted ? (
          <form
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg transition-transform duration-200 hover:shadow-2xl hover:border-1 hover:border-gray-700"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                placeholder="Your Full Name"
                required
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                placeholder="Your Email Address"
                required
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                min="1"
                max="100"
                value={formData.age}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                placeholder="Your Age"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* Occupation */}
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="occupation">
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                placeholder="Your Occupation"
                required
              />
            </div>

            {/* How was TahaBlog? */}
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="tahaBlogFeedback">
                How was TahaBlog?
              </label>
              <select
                id="tahaBlogFeedback"
                name="tahaBlogFeedback"
                value={formData.tahaBlogFeedback}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                required
              >
                <option value="">Select an option</option>
                <option value="nice">😄 Nice</option>
                <option value="average">🙂 Average</option>
                <option value="excellent">🤩 Excellent</option>
                <option value="greatWork">🔥 Great Work</option>
              </select>
            </div>

            {/* Comment */}
            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="comment">
                Your Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                placeholder="Your Comment"
                rows={4}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform duration-200 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center text-green-500 font-bold text-xl">Form submitted successfully!</div>
        )}
      </div>

      <div className="flex justify-center space-x-8 mt-10 text-4xl">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="https://wa.me/923060484798" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/tahashabbir12/profilecard/?igsh=OTBpajQ4aXM5Z25l" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://github.com/taha12-ok" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/taha-shabbir-86367525a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
}
