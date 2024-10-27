"use client"; // This makes it a Client Component

import { useState } from "react";


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

    const userPhoneNumber = formData.phone;
    const comment = formData.comment;
    const yourPhoneNumber = "923060484798"; // Replace this with your WhatsApp number without the plus sign (+)

    // Prepare the message to send via WhatsApp, including the user's phone number and comment
    const message = encodeURIComponent(
      `Hi Taha, a user has filled out the form on TahaBlog!\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nAge: ${formData.age}\nPhone: ${userPhoneNumber}\nOccupation: ${formData.occupation}\nTahaBlog Feedback: ${formData.tahaBlogFeedback}\nComment: ${comment}`
    );

    // Open WhatsApp link with the pre-filled message
    window.open(`https://wa.me/${yourPhoneNumber}?text=${message}`, "_blank");
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
            {/* Full Name */}
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

            {/* Email */}
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

            {/* Phone */}
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

            {/* Feedback */}
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
                <option value="amazing">😃 Amazing</option>
                <option value="wow">🤩 Wow!</option>
              </select>
            </div>

            {/* Comment */}
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="comment">
                Any Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                placeholder="Write your comment here"
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center text-2xl font-bold">
            Form Submitted Successfully! We will get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
}
