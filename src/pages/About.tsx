import React from 'react';
import { CTABanner } from '../components/CTABanner';
export function About() {
  return <div className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-8 text-center">About Me</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" alt="Cynthia Joy, Junior Psychologist" className="rounded-lg shadow-md w-full" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-medium mb-4">Cynthia Joy</h2>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Junior Psychologist | Psychology Student at Egerton University
              </p>
              <p className="text-gray-600 italic mb-4">
                "Committed to fostering mental wellness and human connection
                through evidence-based psychology."
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="leading-relaxed">
              I am a passionate psychology student at Egerton University,
              dedicated to understanding the human mind and helping others
              navigate their mental health journeys. My academic and
              professional focus lies at the intersection of child psychology,
              community mental health, and cognitive development.
            </p>
            <p className="leading-relaxed">
              Throughout my academic journey, I have developed a deep
              appreciation for how psychological principles can be applied to
              real-world challenges. As a peer mentor in our campus Mental
              Wellness Group, I've had the privilege of supporting fellow
              students through difficult transitions and stressful periods,
              reinforcing my belief in the power of empathetic listening and
              evidence-based interventions.
            </p>
            <p className="leading-relaxed">
              My volunteer work with Sunrise Community Outreach has allowed me
              to extend psychological support beyond the university setting,
              working with underserved communities to promote mental health
              awareness and reduce stigma. These experiences have shaped my
              approach to psychology as both a science and a healing practice.
            </p>
            <p className="leading-relaxed">
              I am particularly interested in how early psychological
              interventions can create lasting positive outcomes for children
              and families. My research focuses on stress management techniques
              for academic settings, and I hope to contribute meaningful
              insights to this field through rigorous study and compassionate
              application.
            </p>
            <p className="leading-relaxed">
              When I'm not studying or volunteering, you can find me exploring
              nature trails, practicing mindfulness meditation, or engaging with
              the latest psychological research. I believe in continuous
              learning and personal growth as fundamental aspects of both
              professional development and mental wellness.
            </p>
          </div>
        </div>
      </section>
      <CTABanner title="Connect With Me" description="Interested in discussing psychology, mental health initiatives, or potential collaborations? I'd love to hear from you." />
    </div>;
}