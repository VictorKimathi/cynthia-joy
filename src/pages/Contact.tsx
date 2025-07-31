import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
export function Contact() {
  return <div className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Contact Me
          </h1>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-700">
            I'm always open to discussing psychology research, mental health
            initiatives, or potential collaborations.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MailIcon size={20} className="text-[#0033CC] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-700">
                      cynthia.joy@student.egerton.ac.ke
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon size={20} className="text-[#0033CC] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-700">
                      Egerton University, Njoro Campus
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon size={20} className="text-[#0033CC] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Thursday, 2:00 PM - 4:00 PM
                    </p>
                    <p className="text-gray-700">Student Center, Room 204</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Connect With Me</h3>
                <p className="text-gray-700 mb-4">
                  I'm also active on several academic and professional networks:
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#0033CC] hover:underline">
                    LinkedIn
                  </a>
                  <a href="#" className="text-[#0033CC] hover:underline">
                    ResearchGate
                  </a>
                  <a href="#" className="text-[#0033CC] hover:underline">
                    Academia.edu
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>;
}