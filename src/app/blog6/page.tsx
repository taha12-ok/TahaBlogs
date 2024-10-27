import React from 'react';
const blogContent = {
  title: 'Streaming Trends',
  description:
    'The streaming industry is rapidly evolving with new trends, platforms, and user behaviors shaping the future of entertainment consumption.',
  content: (
    <div>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        The streaming industry has seen explosive growth in recent years, with more people shifting away from traditional cable TV to online streaming platforms. Companies like Netflix, Amazon Prime, and Disney+ are leading the charge, offering on-demand access to vast libraries of content. This shift has redefined how we consume entertainment, with trends such as binge-watching and personalized content recommendations becoming the norm.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        One of the biggest trends in streaming today is the rise of exclusive content, or "originals." Streaming giants are investing billions in creating original movies and TV shows to attract and retain subscribers. These exclusive offerings set platforms apart from one another, fueling competition and giving viewers more reasons to subscribe to multiple services.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        Another major trend is the rise of live streaming. Platforms like Twitch, YouTube, and Facebook are expanding beyond gaming content to include live broadcasts of events, talk shows, and even news. Live streaming allows for real-time interaction between content creators and viewers, making it a unique and engaging form of entertainment.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        As mobile devices become more powerful and accessible, mobile streaming has also surged in popularity. Viewers can now watch their favorite shows and movies on the go, leading to a demand for apps that offer a seamless streaming experience across different devices. Additionally, mobile data plans are becoming more affordable, which further supports this trend.
      </p>
      <p className="text-gray-800 text-base md:text-lg mb-4">
        Lastly, interactive content is gaining traction. Shows like "Black Mirror: Bandersnatch" and platforms like Netflix's interactive storytelling feature allow viewers to make choices that influence the direction of the story, making the viewing experience more engaging. This trend is still in its early stages, but it has the potential to redefine how content is consumed in the future.
      </p>
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-2">
        Key Takeaways:
      </h2>
      <ul className="list-disc list-inside text-gray-800 text-base md:text-lg mb-4">
        <li>Exclusive content is driving competition among streaming platforms.</li>
        <li>Live streaming is expanding beyond gaming into new content areas.</li>
        <li>Mobile streaming is on the rise, supported by powerful devices and affordable data plans.</li>
        <li>Interactive content is becoming more popular, offering viewers a more immersive experience.</li>
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
          backgroundImage: 'url(b6.png)', // Adjust this to your image
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      <div className="relative w-full max-w-lg md:max-w-2xl bg-gray-100 shadow-lg rounded-lg overflow-hidden border-4 border-transparent hover:border-[rgba(255,0,255,0.5)] transition-all duration-300 group z-5">
        <div className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white text-center p-4 transform transition-transform duration-300 group-hover:scale-110">
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
