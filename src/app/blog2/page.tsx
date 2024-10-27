import React from 'react';

const blogContent = {
    title: 'Natural Health Supplements',
    description: 'Natural health supplements are gaining popularity for promoting wellness and enhancing overall health.',
    content: (
      <div>
        <p className="text-gray-800 text-lg mb-4">
          In recent years, natural health supplements have emerged as a vital component of many individuals' wellness routines. These supplements, derived from natural sources such as plants, herbs, and minerals, are being embraced for their potential to support overall health and well-being. As consumers become more health-conscious, the demand for effective and safe natural remedies is on the rise.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          One of the key benefits of natural health supplements is their ability to enhance nutritional intake. Many people struggle to meet their daily nutritional needs through diet alone, leading to deficiencies that can impact health. Supplements like vitamins, minerals, and herbal extracts can help fill these gaps, providing essential nutrients that support bodily functions and improve vitality.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          Additionally, natural supplements are often viewed as a safer alternative to synthetic medications. They typically have fewer side effects and can be used to address various health concerns, from boosting immunity to improving digestion. Popular options like turmeric for inflammation, omega-3 fatty acids for heart health, and probiotics for gut health have gained recognition for their positive effects on the body.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          However, it is crucial to approach natural supplements with caution. While they can offer significant health benefits, not all products are created equal. The supplement industry is vast, and the lack of regulation can lead to quality discrepancies. It's essential to choose reputable brands and consult healthcare professionals before starting any new supplement regimen to ensure safety and effectiveness.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          In conclusion, natural health supplements can play an important role in supporting health and wellness. By providing essential nutrients and promoting various bodily functions, these supplements have become increasingly popular among health enthusiasts. As we continue to explore the benefits of natural products, it's vital to stay informed and make educated choices that align with our health goals.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Key Takeaways:</h2>
        <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
          <li>Natural supplements enhance nutritional intake and support health.</li>
          <li>They are often safer alternatives to synthetic medications.</li>
          <li>Common supplements include vitamins, omega-3s, and probiotics.</li>
          <li>Quality and regulation can vary; choose reputable brands.</li>
          <li>Consult healthcare professionals before starting new supplements.</li>
        </ul>
      </div>
    ),
};

function BlogPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-10 md:p-20 overflow-hidden">
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(b2.png)',
          filter: 'blur(8px)', 
          zIndex: 0,
        }}/> 
      <div className="relative w-full max-w-2xl bg-gray-100 shadow-lg rounded-lg overflow-hidden border-4 border-transparent hover:border-[rgba(255,0,255,0.5)] transition-all duration-300 group z-5">
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-center p-4 transform transition-transform duration-300 group-hover:scale-110">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{blogContent.title}</h1>
        </div>
        <div className="p-4 sm:p-6 bg-customGreen">
          <p className="text-gray-800 text-base sm:text-lg mb-4">{blogContent.description}</p>
          {blogContent.content}
        </div>
      </div>
      <div className="m-4 sm:m-10 font-semibold flex justify-center pb-4 z-10">
        <a
          href="/blog"
          className="text-sm sm:text-lg text-white bg-gray-700 px-4 py-2 rounded hover:underline hover:text-yellow-400 transition-colors duration-300">
          Back To Blogs
        </a>
      </div>
    </div>
  );
}

export default BlogPage;
