import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import {heroData} from '../utils/heroData'; // Adjust the import path as necessary

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroData.backgroundImage}
          alt="Mountain landscape with forest"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 to-forest/30 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {heroData.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {heroData.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={heroData.primaryCTA.link}
              className="inline-flex items-center bg-adventure-orange hover:bg-adventure-orange/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {heroData.primaryCTA.label}
              <ChevronRightIcon size={20} className="ml-2" />
            </Link>
            <Link
              to={heroData.secondaryCTA.link}
              className="inline-flex items-center bg-white hover:bg-white/90 text-forest px-6 py-3 rounded-md font-medium transition-colors"
            >
              {heroData.secondaryCTA.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
