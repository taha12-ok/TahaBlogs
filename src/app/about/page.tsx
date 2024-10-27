import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen p-4 m-0 md:p-20 bg-gradient-to-r from-[#f0f4f8] to-[#e0ecf4]">
      <div className="flex flex-col md:flex-row items-center justify-between my-16 space-y-8 md:space-y-0">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="a1.png"
            alt="My Blogs"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-3xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 p-5 hover:text-yellow-500 transition duration-300 cursor-pointer">
            My Blogs
          </h2>
          <p className="text-gray-500 text-base md:text-lg lg:text-2xl p-4 mb-3">
            Welcome to TahaBlog, where I share my insights on the latest trends in tech, programming, AI, and much more. Stay tuned for regular updates on topics that matter to tech enthusiasts and developers alike.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between my-16 space-y-8 md:space-y-0">
        <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hover:text-red-500 transition duration-300 cursor-pointer">
            My Mission
          </h2>
          <p className="text-gray-500 text-base md:text-lg lg:text-2xl mb-4">
            My mission is to inspire and empower people through content that promotes learning, creativity, and technological advancement. TahaBlog is here to make complex topics simple, so anyone can follow along.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="a2.png"
            alt="My Mission"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between my-16 space-y-8 md:space-y-0">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="a3.png"
            alt="Privacy Policy"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-3xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 p-5 hover:text-blue-500 transition duration-300 cursor-pointer">
            Privacy Policy
          </h2>
          <p className="text-gray-500 text-base md:text-lg lg:text-2xl p-4 mb-3">
            At TahaBlog, we respect your privacy. Any information we collect from our users will be kept confidential, ensuring a safe browsing experience. We believe in transparency and trust with our readers.
          </p>
        </div>
      </div>

      <div className="bg-gray-300 p-10 rounded-lg shadow-inner my-30 space-y-8 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center justify-between my-16">
          <div className="md:w-1/2 md:pr-10">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 p-5 hover:text-purple-500 transition duration-300 cursor-pointer">
              Creator of TahaBlog
            </h2>
            <p className="text-gray-500 text-base md:text-lg lg:text-2xl p-4 mb-3">
              I’m Taha Shabbir, the creator of TahaBlog. With a background in technology, I am passionate about writing content that informs, educates, and empowers the tech community. Through this blog, I aim to make technology more approachable for everyone.
            </p>
          </div>
          <div className="md:w-1/2 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/taha-shabbir-86367525a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="a4.png"
                alt="Creator of TahaBlog"
                className="w-full h-auto object-cover rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-between my-10 space-y-8 md:space-y-0">
        <div className="md:w-1/2 md:pl-10">
          <p className="text-gray-500 text-base md:text-lg lg:text-2xl p-4 mb-3">
            TahaBlog is constantly evolving to bring you the most relevant, up-to-date content on technology and programming. As the tech world changes, so does the blog, ensuring that you always have access to cutting-edge insights and tips.
          </p>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="a5.png"
            alt="Final Section"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
