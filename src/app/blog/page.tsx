import Image from 'next/image';
import React from 'react';

const blogCards = [
  {
    title: 'Generative AI in Tech',
    description: 'AI tools like ChatGPT are transforming content creation and programming, making them a hot topic in tech.',
    imageUrl: 'b1.png',
    link: '/blog1',
  },
  {
    title: 'Natural Health Supplements',
    description: 'Products like CBG gummies and sea moss are gaining traction for their holistic health benefits.',
    imageUrl: 'b2.png',
    link: '/blog2',
  },
  {
    title: 'Sustainable Investments',
    description: 'Green bonds and ESG investing are trending among those looking to align their portfolios with sustainability.',
    imageUrl: 'b3.png',
    link: '/blog3',
  },
  {
    title: 'Eco-Friendly Fashion',
    description: 'Blogs focusing on ethical, sustainable fashion are popular as consumers aim to reduce their environmental impact.',
    imageUrl: 'b4.png',
    link: '/blog4',
  },
  {
    title: 'EdTech Innovations',
    description: 'Virtual learning and AI-powered education tools are reshaping how we teach and learn.',
    imageUrl: 'b5.png',
    link: '/blog5',
  },
  {
    title: 'Streaming Trends',
    description: 'Streaming platforms are using AI to enhance viewer experience with personalized recommendations.',
    imageUrl: 'b6.png',
    link: '/blog6',
  },
];

function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[200px] bg-gradient-to-r from-[#d8e3ee] to-[#d1e7f5] p-6"> {/* Updated background to light gray */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2 tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
          {Array.from('Trending Blog').map((letter, index) => (
            <span key={index} className="inline-block transition-colors duration-100 ease-in-out hover:text-red-500" style={{ transitionDelay: `${index * 0}ms` }}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
        <div className="relative overflow-hidden w-full mt-4">
          <p className="text-md md:text-lg text-gray-600 whitespace-nowrap animate-marquee">
            Fun with the trending blogs and insightful reads! | Explore the latest ideas, trends, and stories from around the world! | Stay informed, stay curious!
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full min-h-[800px] bg-white p-6"> {/* Light gray background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogCards.map((card, index) => (
            <div key={index} className="group relative w-full max-w-[300px] bg-gradient-to-r from-[#d8e3ee] to-[#d1e7f5] rounded-xl shadow-xl p-4 hover:shadow-2xl hover:shadow-gray-300 transition-all duration-300 m-3 transform hover:scale-105"> {/* White card with subtle shadow */}
              <div className="overflow-hidden rounded-lg">
                <Image src={card.imageUrl} alt={card.title} className="w-full h-[150px] object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-4 flex flex-col justify-between" style={{ height: '200px' }}>
                <div>
                  <h2 className="text-gray-900 font-semibold text-lg">{card.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">{card.description}</p>
                </div>
                <a href={card.link} className="mt-4 px-16 py-2 bg-teal-700 text-white rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
