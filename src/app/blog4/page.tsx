import React from 'react';

const blogContent = {
  title: 'Eco-Friendly Fashion',
  description: 'Eco-friendly fashion is transforming the clothing industry by prioritizing sustainability and ethical practices in garment production.',
  content: (
    <div>
      <p className="text-gray-800 text-lg mb-4">
        Eco-friendly fashion is rapidly emerging as a vital movement within the clothing industry, driven by the increasing awareness of environmental issues and consumer demand for sustainable practices. As climate change and resource depletion become more pressing concerns, many brands are reevaluating their production methods to minimize their ecological footprint. This shift towards sustainability is reshaping the way we think about fashion and its impact on the planet.
      </p>
      <p className="text-gray-800 text-lg mb-4">
        At its core, eco-friendly fashion emphasizes the use of sustainable materials, such as organic cotton, hemp, and recycled fabrics. These materials not only reduce the consumption of harmful pesticides and chemicals but also help to lessen waste in landfills. Many brands are also adopting innovative production techniques that prioritize energy efficiency and water conservation, further contributing to a more sustainable fashion industry.
      </p>
      <p className="text-gray-800 text-lg mb-4">
        In addition to materials, eco-friendly fashion focuses on ethical labor practices. Many brands are committed to fair wages and safe working conditions for garment workers, ensuring that their products are not only environmentally friendly but also socially responsible. By supporting these brands, consumers can make a positive impact on the lives of those involved in the fashion supply chain.
      </p>
      <p className="text-gray-800 text-lg mb-4">
        However, navigating the eco-friendly fashion landscape can be challenging due to the prevalence of greenwashing. This practice occurs when brands mislead consumers about their sustainability efforts to appear more environmentally friendly than they are. Its essential for consumers to conduct thorough research and seek out certifications or transparency from brands to ensure they are genuinely contributing to sustainable practices.
      </p>
      <p className="text-gray-800 text-lg mb-4">
        In conclusion, eco-friendly fashion represents a significant step forward in creating a more sustainable and ethical clothing industry. By choosing to support brands that prioritize environmentally conscious practices, consumers can play a crucial role in driving positive change. The future of fashion lies in our ability to embrace eco-friendly alternatives, ultimately leading to a more sustainable world.
      </p>
      <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Key Takeaways:</h2>
      <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
        <li>Eco-friendly fashion focuses on sustainability and reducing environmental impact.</li>
        <li>Using sustainable materials helps lessen pollution and waste in the fashion industry.</li>
        <li>Ethical labor practices are crucial for a socially responsible fashion supply chain.</li>
        <li>Be aware of greenwashing and research brands' sustainability claims.</li>
        <li>Supporting eco-friendly brands contributes to a more sustainable and ethical future.</li>
      </ul>
    </div>
  ),
};

function BlogPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(b4.png)',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      <div className="relative w-full max-w-2xl bg-gray-100 shadow-lg rounded-lg overflow-hidden border-4 border-transparent hover:border-[rgba(255,0,255,0.5)] transition-all duration-300 group z-5">
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-center p-4 transform transition-transform duration-300 group-hover:scale-110">
          <h1 className="text-3xl sm:text-4xl font-bold">{blogContent.title}</h1>
        </div>
        <div className="p-4 sm:p-6 bg-customGreen">
          <p className="text-gray-800 text-base sm:text-lg mb-4">{blogContent.description}</p>
          {blogContent.content}
        </div>
      </div>
      <div className="m-4 sm:m-10 font-semibold flex justify-center pb-4 z-10">
        <a
          href="/blog"
          className="text-lg text-white bg-gray-700 px-4 py-2 rounded hover:underline hover:text-yellow-400 transition-colors duration-300"
        >
          Back To Blogs
        </a>
      </div>
    </div>
  );
}

export default BlogPage;
