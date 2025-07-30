import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';
import { portfolioItems, categories } from '../utils/portfolioDta';
const Portfolio = () => {
  const [filter, setFilter] = useState('all');





  const filteredItems =
    filter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Portfolio & Writing Samples</h1>
            <p className="text-xl text-gray-300">
              A showcase of my published outdoor and science articles.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded ${
                  filter === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <PortfolioItem
                  key={item.id}
                  title={item.title}
                  publisher={item.publisher}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  link={item.href}
                  tags={item.tags}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Client Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Client Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-700">Client retention rate with repeat assignments</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-700">On-time delivery for all client projects</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">90+</div>
                <p className="text-gray-700">Articles published on major platforms</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded shadow-sm text-left">
              <blockquote className="text-gray-700 text-lg italic mb-4">
                "Emmanuel consistently delivers high-quality finance content that resonates with our audience. His ability to explain complex topics clearly while maintaining reader engagement is exceptional."
              </blockquote>
              <div className="font-bold">- Finance Editor, Major Publication</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Similar Content for Your Platform?
            </h2>
            <p className="text-xl mb-8">
              I can create engaging, accurate content tailored to your specific audience and goals.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Request a Writing Sample
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
