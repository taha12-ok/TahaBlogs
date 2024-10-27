import Link from 'next/link';
import React from 'react';
import { FaStreetView } from "react-icons/fa6";

function MainBlog() {
  return (
    <>
      <div className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Discover Exciting Stories</h1>
            <p className="text-lg md:text-normal">Explore a variety of engaging and insightful blogs written just for you. Dive into topics that inspire, inform, and entertain.</p>
          </div>
          <div className="relative md:w-1/2 mt-0 md:mt-0 flex justify-end">
            <div className="relative top-0 left-20 z-5">
              <img src="/m2.png" alt="Design Image 1" className="w-[1500px] h-[350px]" />
            </div>
            <div className="relative top-12 right-20 z-5">
              <img src="/m1.png" alt="Design Image 1" className="w-[1500px] h-[350px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 text-white py-20">
        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Explore Unique Perspectives</h1>
            <p className="text-lg md:text-normal">Enjoy reading blogs that offer unique viewpoints and thought-provoking ideas on topics you care about.</p>
          </div>
          <div className="relative w-full md:w-1/2 mt-0 flex justify-end">
            <div className="p-12 left-5 bottom-10 relative z-2">
              <img src="/m3.png" alt="Design Image 1" className="w-[320px] h-[200px] sm:w-[480px] sm:h-[200px] md:w-[1200px] md:h-[300px] lg:w-[2400px] lg:h-[380px]" />
            </div>
            <div className="-m-3 absolute -bottom-10 left-5 sm:left-10 sm:-bottom-20 z-2">
              <img src="/m4.png" alt="Design Image 2" className="w-[300px] h-[150px] sm:w-[800px] sm:h-[150px] md:w-[600px] md:h-[180px] lg:w-[800px] lg:h-[200px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
          <div className="right-20 relative">
            <img src="/m5.png" alt="Design Image 1" className="w-[400px] h-[400px] rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Find Solutions to Your Problems</h1>
            <p className="text-lg md:text-normal">Browse helpful guides and how-tos that provide practical solutions and advice for your everyday challenges.</p>
          </div>
          <div className="relative md:w-1/2 mt-0 md:mt-0 flex justify-end">
            <div className="left-60 top-0 relative z-5">
              <img src="/m6.png" alt="Design Image 1" className="w-[1350px] h-[350px]" />
            </div>
            <div className="relative top-10 right-40">
              <img src="/m7.png" alt="Design Image 2" className="w-[950px] h-[300px] object-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 text-white py-20">
        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Follow Your Interests</h1>
            <p className="text-lg md:text-normal">Discover blogs on topics that matter to you, from [topic 1] to [topic 2], and everything in between.</p>
          </div>
          <div className="relative w-full md:w-1/2 mt-0 flex justify-end">
            <div className="p-12 left-5 bottom-10 relative z-2">
              <img src="/m8.png" alt="Design Image 1" className="w-[320px] h-[200px] sm:w-[480px] sm:h-[200px] md:w-[1200px] md:h-[300px] lg:w-[2400px] lg:h-[380px]" />
            </div>
            <div className="-m-3 absolute -bottom-10 left-5 sm:left-10 sm:-bottom-20 z-2">
              <img src="/m9.png" alt="Design Image 2" className="w-[300px] h-[150px] sm:w-[800px] sm:h-[150px] md:w-[600px] md:h-[180px] lg:w-[800px] lg:h-[200px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-orange-500 text-white py-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_LINK"
          className="absolute inset-0 w-full h-full opacity-40 z-5" 
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        <div className="absolute inset-0 bg-orange-500 opacity-70 z-5"></div>
        <div className="container mx-auto px-4 flex flex-col items-center justify-center m-10 relative z-5">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Join the Conversation</h1>
            <p className="text-lg md:text-normal mb-6">Engage with the community by leaving comments and sharing your thoughts on our blog posts.</p>
            <Link href="/blog">
             <button className="bg-gray-700 text-gray-100 font-semibold px-6 py-3 rounded-md m-10 hover:text-yellow-500">
                View My Blog
             </button>
            </Link>
            <div className="relative gap-10 flex inset-0 m-2 sm:m-6 md:m-8 lg:m-10 justify-center z-5">
              <FaStreetView size={58} className="text-gray-300 m-2" />
              <FaStreetView size={58} className="text-gray-300 m-2" />
              <FaStreetView size={58} className="text-gray-300 m-2" />
              <FaStreetView size={58} className="text-gray-300 m-2" />
              <FaStreetView size={58} className="text-gray-300 m-2" />
              <FaStreetView size={58} className="text-gray-300 m-2" />
              <FaStreetView size={58} className="text-gray-300 m-2" />
              <FaStreetView size={58} className="text-gray-300 m-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainBlog;
