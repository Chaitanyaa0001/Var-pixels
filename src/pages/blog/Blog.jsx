import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Blog = () => {
  return (
    <div className="bg-[#f4f8ff] text-gray-800 min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="text-center py-12 px-4">
        <p className="text-sm text-teal-600 uppercase font-medium">Latest Insights</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Tech <span className="text-blue-600">Blog</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Stay updated with the latest trends, tips, and insights in web development,
          digital marketing, and technology.
        </p>
      </div>

      {/* Featured Article */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1581093588401-7c8ccfa6f1bd?auto=format&fit=crop&w=1950&q=80"
          alt="Featured"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium rounded px-2 py-1 mb-2">
            Web Design
          </span>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            5 Web Design Trends Dominating 2025
          </h2>
          <p className="text-gray-600 mb-4">
            Discover the cutting-edge design trends that are shaping the digital landscape —
            from AI-driven personalization to ultra-minimalistic interfaces...
          </p>
          <div className="text-sm text-gray-500 flex items-center justify-between">
            <p>📅 January 13, 2025 · 🕒 5 min read · ✍️ VAR PIXELS Team</p>
            <a href="#" className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
              Read More →
            </a>
          </div>
        </div>
      </div>

      {/* More Articles */}
      <div className="text-center text-xl font-semibold text-gray-700 mb-8">More Articles</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-16">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581092334600-033f56f59c07?auto=format&fit=crop&w=800&q=80"
            alt="AI"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="inline-block bg-teal-100 text-teal-600 text-xs font-medium rounded px-2 py-1 mb-2">
              Digital Marketing
            </span>
            <h3 className="text-lg font-bold mb-1">The Rise of AI in Digital Marketing</h3>
            <p className="text-gray-600 text-sm mb-3">
              Explore how artificial intelligence is revolutionizing digital marketing and helping businesses...
            </p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>📅 January 10, 2025</span>
              <span>🕒 6 min read</span>
            </div>
            <a href="#" className="text-sm text-blue-600 mt-2 inline-block hover:underline">
              Read More →
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581092580499-a9da0b9e64b5?auto=format&fit=crop&w=800&q=80"
            alt="Mobile First"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="inline-block bg-green-100 text-green-600 text-xs font-medium rounded px-2 py-1 mb-2">
              Mobile Development
            </span>
            <h3 className="text-lg font-bold mb-1">Mobile-First Design: Best Practices</h3>
            <p className="text-gray-600 text-sm mb-3">
              Learn the essential principles of mobile-first design and how to create seamless UX...
            </p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>📅 January 5, 2025</span>
              <span>🕒 5 min read</span>
            </div>
            <a href="#" className="text-sm text-blue-600 mt-2 inline-block hover:underline">
              Read More →
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581090710317-c6d0b3a4e803?auto=format&fit=crop&w=800&q=80"
            alt="SEO"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium rounded px-2 py-1 mb-2">
              SEO
            </span>
            <h3 className="text-lg font-bold mb-1">SEO Strategies for 2025</h3>
            <p className="text-gray-600 text-sm mb-3">
              Stay ahead of the competition with the latest SEO strategies and tools...
            </p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>📅 December 28, 2024</span>
              <span>🕒 6 min read</span>
            </div>
            <a href="#" className="text-sm text-blue-600 mt-2 inline-block hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
