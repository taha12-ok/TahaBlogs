import React from 'react';
import Image from 'next/image'; // Assuming you will add images later

const blogContent = {
  title: 'EdTech Innovations',
  description:
    'Educational technology (EdTech) is revolutionizing the way we learn and teach, with new tools and platforms reshaping education globally.',
  content: (
    <div>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        The rise of EdTech has transformed the education sector, offering innovative ways to teach and learn. From interactive platforms that engage students with personalized learning experiences to AI-driven tools that adapt to individual learning styles, the possibilities are endless. With these advancements, education is becoming more accessible, dynamic, and tailored to the needs of each learner.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        Online learning platforms like Coursera, Khan Academy, and Duolingo have made it easier for people around the world to access high-quality education, breaking down barriers of location and financial constraints. These platforms offer courses from elementary education to university-level content, allowing learners to advance their knowledge at their own pace.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        Virtual reality (VR) and augmented reality (AR) are also making waves in EdTech. These technologies provide immersive learning environments, enabling students to experience subjects in a hands-on way. For example, medical students can perform virtual surgeries, and history students can explore ancient civilizations in 3D, making learning more engaging and effective.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        Moreover, AI-powered tutoring systems are helping teachers provide one-on-one assistance to students. These systems analyze a student’s performance and suggest personalized lessons to improve understanding. As AI continues to advance, it will play an even greater role in automating administrative tasks, freeing up educators to focus on teaching and mentorship.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        The EdTech space is also focusing on inclusivity. Tools like speech-to-text, screen readers, and adaptive learning platforms ensure that students with disabilities can access the same learning opportunities as others. This push towards universal access is reshaping education to be more inclusive and equitable for all.
      </p>
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-2">
        Key Takeaways:
      </h2>
      <ul className="list-disc list-inside text-gray-800 text-base md:text-lg mb-4">
        <li>EdTech personalizes learning experiences for individual needs.</li>
        <li>Online learning platforms make education accessible to everyone.</li>
        <li>VR and AR provide immersive, hands-on learning environments.</li>
        <li>AI-powered systems enhance tutoring and automate educational tasks.</li>
        <li>EdTech promotes inclusivity and equitable access to education.</li>
      </ul>
    </div>
  ),
};

function BlogPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 md:p-20 overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(b5.png)',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      <div className="relative w-full max-w-lg md:max-w-2xl bg-gray-100 shadow-lg rounded-lg overflow-hidden border-4 border-transparent hover:border-[rgba(255,0,255,0.5)] transition-all duration-300 group z-5">
        <div className="bg-gradient-to-r from-blue-400 to-green-600 text-white text-center p-4 transform transition-transform duration-300 group-hover:scale-110">
          <h1 className="text-2xl md:text-4xl font-bold">{blogContent.title}</h1>
        </div>
        <div className="p-4 md:p-6 bg-customGreen">
          <p className="text-gray-800 text-base md:text-lg mb-4">
            {blogContent.description}
          </p>
          {blogContent.content}
        </div>
      </div>
      <div className="m-6 md:m-10 font-semibold flex justify-center pb-4 z-10">
        <a
          href="/blog"
          className="text-sm md:text-lg text-white bg-gray-700 px-3 md:px-4 py-2 rounded hover:underline hover:text-yellow-400 transition-colors duration-300"
        >
          Back To Blogs
        </a>
      </div>
    </div>
  );
}

export default BlogPage;
