import React from 'react';
import { MailIcon, PhoneIcon, ClockIcon, LinkedinIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { contactInfo, faqs, preferredProjects } from '../utils/contactData';

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Let's Work Together</h1>
            <p className="text-xl text-gray-300">
              Ready to discuss your finance content needs? I'm here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div className="flex items-start" key={index}>
                      <div className="bg-blue-600 p-3 rounded text-white mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-gray-700 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                            {info.description}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="mt-10 bg-gray-50 p-6 rounded">
                  <h3 className="font-bold text-lg mb-3">Preferred Projects</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {preferredProjects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div> */}
              </div>

              {/* Contact Form */}
              {/* <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div className="bg-white p-6 rounded shadow-sm" key={index}>
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
