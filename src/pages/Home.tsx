import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, BookOpenIcon } from 'lucide-react';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import { aboutSection, expertiseAreas, testimonials, ctaSection, homeHeroStats } from '../utils/homeData';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
                {aboutSection.heading}
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{aboutSection.paragraph}</p>
              <div className="flex flex-wrap gap-4">
                {homeHeroStats.map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-sage/20 flex items-center justify-center mr-3">
                      {stat.icon}
                    </div>
                    <span className="font-medium">{stat.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center mt-6 text-adventure-orange font-medium hover:underline"
              >
                Learn more about me
                <ChevronRightIcon size={16} className="ml-1" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutSection.image}
                alt="Jasselene writing in a natural setting"
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-forest text-lg">{aboutSection.engagement.time}</p>
                <p className="text-gray-600">{aboutSection.engagement.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              Areas of Expertise
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Specialized content creation across multiple outdoor and lifestyle
              niches, backed by hands-on experience and a passion for nature.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">{area.title}</h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <Link
                  to={area.link}
                  className="text-adventure-orange font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <ChevronRightIcon size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              What Clients Are Saying
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Hear directly from those I've worked with — creators, publishers, and outdoor brands who trust my voice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-cream rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-forest">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {ctaSection.heading}
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">{ctaSection.subheading}</p>
          <Link
            to={ctaSection.buttonLink}
            className="inline-flex items-center bg-adventure-orange hover:bg-adventure-orange/90 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
          >
            {ctaSection.buttonLabel}
            <ChevronRightIcon size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
