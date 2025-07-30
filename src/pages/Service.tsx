import React from 'react';
import { serviceItems, writingSpecialties, processSteps } from '../utils/serviceData';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const Service = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Services & Expertise</h1>
            <p className="text-xl text-gray-300">
              Specialized outdoor and lifestyle writing services tailored to inspire, inform, and engage your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">How I Can Help</h2>
            <p className="text-gray-700 text-lg">
              I create clear, engaging outdoor and lifestyle content that helps your audience explore new hobbies, connect with nature, and tackle home projects with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item, idx) => (
              <ServiceCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Writing Specialties</h2>
            <div className="space-y-8">
              {writingSpecialties.map((spec, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold mb-3">{spec.title}</h3>
                  <p className="text-gray-700">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Process</h2>
            <div className="space-y-12">
              {processSteps.map((step, idx) => (
                <div className="flex" key={idx}>
                  <div className="mr-6">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Elevate Your Outdoor & Lifestyle Content?
            </h2>
            <p className="text-xl mb-8">
              Let’s discuss your content needs and how my services can help you inspire and inform your audience.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
