import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import B1 from '../../assets/blogs/B1.jpg';
import B2 from '../../assets/blogs/B2.jpg';
import B3 from '../../assets/blogs/B3.jpg';
import B4 from '../../assets/blogs/B4.jpg';

// Blog data with detailed content
const blogData = {
  'web-design-trends-2025': {
    image: B1,
    category: 'Web Design',
    tagColor: 'bg-blue-100 text-blue-600',
    title: '5 Web Design Trends Dominating 2025',
    description: 'Discover the cutting-edge design trends that are shaping the digital landscape — from AI-driven personalization to ultra-minimalistic interfaces...',
    date: 'January 13, 2025',
    readTime: '5 min read',
    author: 'VAR PIXELS Team',
    content: {
      intro: 'Artificial intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically personalize content, layout, and even color schemes based on user behavior, preferences, and demographics.',
      sections: [
        {
          title: '1. AI-Driven Personalization',
          content: 'Artificial intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically personalize content, layout, and even color schemes based on user behavior, preferences, and demographics.'
        },
        {
          title: '2. Ultra-Minimalistic Interfaces',
          content: 'The trend towards minimalism continues to evolve, with designers focusing on essential elements while removing any unnecessary clutter. This approach not only improves user experience but also enhances website performance.'
        },
        {
          title: '3. Advanced Micro-interactions',
          content: 'Micro-interactions are becoming more sophisticated, providing instant feedback and creating delightful user experiences that guide users through their journey.'
        },
        {
          title: '4. Dark Mode as Standard',
          content: 'Dark mode interfaces continue to gain popularity, with many websites offering both light and dark themes, with many preferring dark interfaces for reduced eye strain and battery conservation on mobile devices.'
        },
        {
          title: '5. Voice User Interface Integration',
          content: 'With the rise of voice assistants, websites are beginning to integrate voice commands and audio feedback, making them more accessible and convenient for users on the go.'
        }
      ],
      conclusion: 'These trends represent the future of web design, focusing on user experience, accessibility, and technological innovation. By incorporating these elements, businesses can create websites that not only look modern but also provide exceptional user experiences.'
    }
  },
  'ai-digital-marketing': {
    image: B2,
    category: 'Digital Marketing',
    tagColor: 'bg-teal-100 text-teal-600',
    title: 'The Rise of AI in Digital Marketing',
    description: 'Explore how artificial intelligence is revolutionizing digital marketing and helping businesses...',
    date: 'January 10, 2025',
    readTime: '6 min read',
    author: 'VAR PIXELS Team',
    content: {
      intro: 'Artificial intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically personalize content, layout, and even color schemes based on user behavior, preferences, and demographics.',
      sections: [
        {
          title: '1. AI-Driven Personalization',
          content: 'Artificial intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically personalize content, layout, and even color schemes based on user behavior, preferences, and demographics.'
        },
        {
          title: '2. Ultra-Minimalistic Interfaces',
          content: 'The trend towards minimalism continues to evolve, with designers focusing on essential elements while removing any unnecessary clutter. This approach not only improves user experience but also enhances website performance.'
        },
        {
          title: '3. Advanced Micro-interactions',
          content: 'Micro-interactions are becoming more sophisticated, providing instant feedback and creating delightful user experiences that guide users through their journey.'
        },
        {
          title: '4. Dark Mode as Standard',
          content: 'Dark mode interfaces continue to gain popularity, with many websites offering both light and dark themes, with many preferring dark interfaces for reduced eye strain and battery conservation on mobile devices.'
        },
        {
          title: '5. Voice User Interface Integration',
          content: 'With the rise of voice assistants, websites are beginning to integrate voice commands and audio feedback, making them more accessible and convenient for users on the go.'
        }
      ],
      conclusion: 'These trends represent the future of web design, focusing on user experience, accessibility, and technological innovation. By incorporating these elements, businesses can create websites that not only look modern but also provide exceptional user experiences.'
    }
  },
  'mobile-first-design': {
    image: B3,
    category: 'Mobile Development',
    tagColor: 'bg-green-100 text-green-600',
    title: 'Mobile-First Design: Best Practices',
    description: 'Learn the essential principles of mobile-first design and how to create seamless UX...',
    date: 'January 5, 2025',
    readTime: '5 min read',
    author: 'VAR PIXELS Team',
    content: {
      intro: 'Artificial intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically personalize content, layout, and even color schemes based on user behavior, preferences, and demographics.',
      sections: [
        {
          title: '1. AI-Driven Personalization',
          content: 'Artificial intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically personalize content, layout, and even color schemes based on user behavior, preferences, and demographics.'
        },
        {
          title: '2. Ultra-Minimalistic Interfaces',
          content: 'The trend towards minimalism continues to evolve, with designers focusing on essential elements while removing any unnecessary clutter. This approach not only improves user experience but also enhances website performance.'
        },
        {
          title: '3. Advanced Micro-interactions',
          content: 'Micro-interactions are becoming more sophisticated, providing instant feedback and creating delightful user experiences that guide users through their journey.'
        },
        {
          title: '4. Dark Mode as Standard',
          content: 'Dark mode interfaces continue to gain popularity, with many websites offering both light and dark themes, with many preferring dark interfaces for reduced eye strain and battery conservation on mobile devices.'
        },
        {
          title: '5. Voice User Interface Integration',
          content: 'With the rise of voice assistants, websites are beginning to integrate voice commands and audio feedback, making them more accessible and convenient for users on the go.'
        }
      ],
      conclusion: 'These trends represent the future of web design, focusing on user experience, accessibility, and technological innovation. By incorporating these elements, businesses can create websites that not only look modern but also provide exceptional user experiences.'
    }
  },
  'seo-strategies-2025': {
    image: B4,
    category: 'SEO',
    tagColor: 'bg-indigo-100 text-indigo-600',
    title: 'SEO Strategies for 2025',
    description: 'Stay ahead of the competition with the latest SEO strategies and tools...',
    date: 'December 28, 2024',
    readTime: '6 min read',
    author: 'VAR PIXELS Team',
    content: {
      intro: 'Artificial intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically personalize content, layout, and even color schemes based on user behavior, preferences, and demographics.',
      sections: [
        {
          title: '1. AI-Driven Personalization',
          content: 'Artificial intelligence is revolutionizing how websites adapt to individual users. Modern websites now use AI to dynamically personalize content, layout, and even color schemes based on user behavior, preferences, and demographics.'
        },
        {
          title: '2. Ultra-Minimalistic Interfaces',
          content: 'The trend towards minimalism continues to evolve, with designers focusing on essential elements while removing any unnecessary clutter. This approach not only improves user experience but also enhances website performance.'
        },
        {
          title: '3. Advanced Micro-interactions',
          content: 'Micro-interactions are becoming more sophisticated, providing instant feedback and creating delightful user experiences that guide users through their journey.'
        },
        {
          title: '4. Dark Mode as Standard',
          content: 'Dark mode interfaces continue to gain popularity, with many websites offering both light and dark themes, with many preferring dark interfaces for reduced eye strain and battery conservation on mobile devices.'
        },
        {
          title: '5. Voice User Interface Integration',
          content: 'With the rise of voice assistants, websites are beginning to integrate voice commands and audio feedback, making them more accessible and convenient for users on the go.'
        }
      ],
      conclusion: 'These trends represent the future of web design, focusing on user experience, accessibility, and technological innovation. By incorporating these elements, businesses can create websites that not only look modern but also provide exceptional user experiences.'
    }
  }
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData[slug];

  if (!blog) {
    return <div className="text-center py-20 text-red-600">Blog post not found.</div>;
  }

  return (
    <div className="bg-[#f4f8ff] min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/blog" className="text-sm text-teal-600 mb-4 hover:underline inline-block">
          ← Back to Blog
        </Link>
        
        <span className={`inline-block ${blog.tagColor} text-xs font-medium rounded px-2 py-1 mb-4`}>
          {blog.category}
        </span>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>📅 {blog.date}</span>
          <span className="mx-2">·</span>
          <span>🕒 {blog.readTime}</span>
          <span className="mx-2">·</span>
          <span>✍️ {blog.author}</span>
          <button className="ml-auto text-blue-600 hover:text-blue-800">
            Share
          </button>
        </div>
        
        {/* Featured Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
        
        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {blog.content.intro}
          </p>
          
          {blog.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
          
          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed">
              {blog.content.conclusion}
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Implement These Trends?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let our expert team help you create a modern, trend-setting website for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              View Our Services
            </button>
            <button className="px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
