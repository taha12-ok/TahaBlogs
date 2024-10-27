import React from 'react';

const blogContent = {
    title: 'Sustainable Investments',
    description: 'Sustainable investments are gaining traction as individuals seek to align their financial goals with environmental and social responsibility.',
    content: (
      <div>
        <p className="text-gray-800 text-lg mb-4">
          In recent years, sustainable investments have emerged as a significant trend in the financial world, reflecting a growing awareness of the impact that businesses have on society and the environment. Investors are increasingly looking to align their financial goals with their values, prioritizing companies that demonstrate a commitment to sustainability. This shift not only promotes responsible investing but also encourages companies to adopt more ethical practices.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          Sustainable investments encompass a range of strategies, including environmental, social, and governance (ESG) criteria. These criteria help investors evaluate the ethical implications of their investments, focusing on issues like climate change, human rights, and corporate governance. By incorporating these factors into their investment decisions, individuals can support businesses that contribute positively to society while potentially enjoying financial returns.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          Additionally, sustainable investments have shown resilience in volatile markets. Studies indicate that companies with strong ESG practices tend to outperform their peers in the long term. This performance is attributed to better risk management, enhanced brand reputation, and increased operational efficiency. As a result, more investors are recognizing that sustainable investing is not just a moral choice but also a smart financial strategy.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          However, it is essential for investors to conduct thorough research before committing to sustainable investments. The lack of standardization in ESG metrics can lead to confusion and misinformation. It's crucial to identify funds and companies that genuinely adhere to sustainable practices rather than those that engage in "greenwashing," which involves misleading claims about environmental benefits.
        </p>
        <p className="text-gray-800 text-lg mb-4">
          In conclusion, sustainable investments are reshaping the financial landscape by merging profit with purpose. As more investors seek to make a positive impact on the world, the demand for sustainable options will continue to grow. By choosing to invest in companies that prioritize sustainability, individuals can contribute to a more equitable and environmentally friendly future while working toward their financial goals.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Key Takeaways:</h2>
        <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
          <li>Sustainable investments reflect a commitment to ethical and responsible investing.</li>
          <li>ESG criteria help assess the social and environmental impact of investments.</li>
          <li>Companies with strong ESG practices often perform better in volatile markets.</li>
          <li>Conduct thorough research to avoid misleading claims and greenwashing.</li>
          <li>Investing sustainably contributes to a better future while achieving financial goals.</li>
        </ul>
      </div>
    ),
};

function BlogPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 md:p-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(b3.png)',
          filter: 'blur(8px)', 
          zIndex: 0,
        }}/> 
      <div className="relative w-full max-w-2xl bg-gray-100 shadow-lg rounded-lg overflow-hidden border-4 border-transparent hover:border-[rgba(255,0,255,0.5)] transition-all duration-300 group z-5">
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-center p-4 transform transition-transform duration-300 group-hover:scale-110">
          <h1 className="text-3xl md:text-4xl font-bold">{blogContent.title}</h1>
        </div>
        <div className="p-4 md:p-6 bg-customGreen">
          <p className="text-gray-800 text-base md:text-lg mb-4">{blogContent.description}</p>
          {blogContent.content}
        </div>
      </div>
      <div className="m-4 md:m-10 font-semibold flex justify-center pb-4 z-10">
        <a
          href="/blog"
          className="text-lg text-white bg-gray-700 px-4 py-2 rounded hover:underline hover:text-yellow-400 transition-colors duration-300">
          Back To Blogs
        </a>
      </div>
    </div>
  );
}

export default BlogPage;
