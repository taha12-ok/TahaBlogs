import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="text-white hover:underline me-4 md:me-6 font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-white hover:underline me-4 md:me-6 font-semibold">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/licensing" className="text-white hover:underline me-4 md:me-6 font-semibold">
                Licensing
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:underline font-semibold">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-white font-semibold hover:underline transition duration-300">
              TahaBlog™
            </a>
            
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a href="/" className="text-white font-semibold hover:underline">
            TahaBlog™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
