import React from 'react';
import { Link } from 'react-router-dom';
export function Blog() {
  // Sample blog posts data
  const blogPosts = [{
    id: '1',
    title: 'What Psychology Taught Me About Empathy',
    date: 'May 15, 2024',
    excerpt: 'Exploring how psychological concepts can enhance our understanding of empathy and its role in human connection.',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: '2',
    title: 'Navigating Stress in University: A Psychological Perspective',
    date: 'April 28, 2024',
    excerpt: 'Examining evidence-based strategies for managing academic stress and maintaining mental wellness during university.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: '3',
    title: 'The Psychology of Effective Study Habits',
    date: 'April 10, 2024',
    excerpt: 'How cognitive science research can inform better learning strategies and study techniques for students.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  }, {
    id: '4',
    title: 'Mindfulness for Beginners: Simple Practices for Students',
    date: 'March 22, 2024',
    excerpt: 'An introduction to mindfulness techniques that can be easily incorporated into a busy student schedule.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80'
  }, {
    id: '5',
    title: 'Understanding Anxiety: When to Seek Help',
    date: 'March 5, 2024',
    excerpt: 'Differentiating between normal stress responses and clinical anxiety, with guidance on when professional support is beneficial.',
    image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80'
  }];
  return <div className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-4 text-center">Blog</h1>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-700">
            Thoughts, insights, and research on psychology, mental wellness, and
            student life.
          </p>
          <div className="space-y-12">
            {blogPosts.map(post => <article key={post.id} className="border-b border-gray-100 pb-12 last:border-0">
                <div className="md:flex gap-6">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <img src={post.image} alt={post.title} className="rounded-lg w-full h-48 object-cover" />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-medium mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-[#0033CC] transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`} className="text-[#0033CC] font-medium hover:underline">
                      Continue reading →
                    </Link>
                  </div>
                </div>
              </article>)}
          </div>
        </div>
      </section>
    </div>;
}