import React from 'react';
import { Link } from 'react-router-dom';
import { CTABanner } from '../components/CTABanner';
export function Home() {
  return <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-6">
            Cynthia Joy – Junior Psychologist | Egerton University
          </h1>
          <p className="text-xl leading-relaxed mb-8 text-gray-700">
            Dedicated to promoting mental wellness, fostering human connection,
            and enhancing cognitive clarity through evidence-based psychological
            practices.
          </p>
          <Link to="/about" className="inline-block bg-[#0033CC] text-white px-6 py-3 rounded hover:bg-[#002299] transition-colors">
            Learn More About Me
          </Link>
        </div>
      </section>
      {/* Featured Sections */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12 text-center">
            Areas of Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="text-xl font-medium mb-3">Child Psychology</h3>
              <p className="text-gray-700 leading-relaxed">
                Specializing in developmental psychology and creating supportive
                environments for children's mental health.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="text-xl font-medium mb-3">Mental Wellness</h3>
              <p className="text-gray-700 leading-relaxed">
                Promoting holistic approaches to mental health and stress
                management for university students.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="text-xl font-medium mb-3">Community Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Developing outreach programs that bring psychological resources
                to underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Projects */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Recent Projects
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-700">
            Exploring the intersection of academic research and practical
            applications in psychology.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-100 p-6 rounded">
              <h3 className="text-xl font-medium mb-3">
                Campus Stress Survey (2024)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Research study examining stress factors among university
                students, using surveys and SPSS data analysis to identify key
                stressors and coping mechanisms.
              </p>
              <Link to="/projects" className="text-[#0033CC] hover:underline">
                Learn more →
              </Link>
            </div>
            <div className="border border-gray-100 p-6 rounded">
              <h3 className="text-xl font-medium mb-3">
                Mental Health Mondays Blog Series
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Weekly reflection series published on the university platform,
                addressing common mental health challenges faced by students.
              </p>
              <Link to="/blog" className="text-[#0033CC] hover:underline">
                Read the series →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>;
}