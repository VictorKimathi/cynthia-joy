import React from 'react';
import { Link } from 'react-router-dom';
interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}
export function CTABanner({
  title = 'Get in Touch',
  description = 'Interested in discussing psychology, research opportunities, or mental wellness initiatives?',
  buttonText = 'Contact Me',
  buttonLink = '/contact'
}: CTABannerProps) {
  return <div className="bg-gray-50 py-12 px-4 my-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link to={buttonLink} className="inline-block bg-[#0033CC] text-white px-6 py-3 rounded hover:bg-[#002299] transition-colors">
          {buttonText}
        </Link>
      </div>
    </div>;
}