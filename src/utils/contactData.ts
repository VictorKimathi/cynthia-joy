import { MailIcon, PhoneIcon, ClockIcon, LinkedinIcon } from 'lucide-react';
import React from 'react';

// Contact information for Brittney Thomas
export const contactInfo = [
  {
    icon: React.createElement(MailIcon, { size: 20 }),
    title: 'Email',
    description: 'brittneythomas765@gmail.com',
    link: 'mailto:brittneythomas765@gmail.com',
  },
  {
    icon: React.createElement(PhoneIcon, { size: 20 }),
    title: 'Phone',
    description: '305-897-5629',
    link: 'tel:3058975629',
  },
  {
    // Assuming a typical response time for a freelance professional
    icon: React.createElement(ClockIcon, { size: 20 }),
    title: 'Response Time',
    description: 'I typically respond to all inquiries within 24-48 hours during business days.',
    link: null,
  },

];

// Preferred projects inferred from Brittney's profile and skills
export const preferredProjects = [
  'Long-form automotive feature articles',
  'In-depth vehicle technology explanations',
  'Automotive engineering history content',
  'Performance culture storytelling',
  'EV powertrain analysis and features',
  'Vintage muscle car profiles',
  'Motorsports history articles',
  'Emerging automotive technologies insights',
  'Consumer vehicle reviews and insights',
  'Road safety innovation discussions',
  'Concept car analyses',
];

// FAQs tailored to automotive copywriting services
export const faqs = [
  {
    question: 'What types of automotive content do you specialize in?',
    answer:
      'I specialize in long-form feature content for automotive publications, covering topics from combustion engine design and vehicle technology to motorsports history, EV powertrains, and vintage muscle cars. My work balances technical fluency with enthusiast appeal.',
  },
  {
    question: 'How do you ensure factual accuracy in your automotive articles?',
    answer:
      'All content is informed by hands-on experience, deep industry research, and verification against reputable automotive sources to ensure accuracy and currency.',
  },
  {
    question: 'Are you familiar with SEO and CMS platforms?',
    answer:
      'Yes, I have proficiency in CMS platforms (like WordPress) and can adapt content while ensuring SEO optimization and tone consistency, including keyword integration.',
  },
  {
    question: 'What is your typical turnaround time for articles?',
    answer:
      'Turnaround times vary based on project scope, research requirements, and content length. For standard feature articles, I aim for timely delivery as per agreed deadlines. Rush delivery can be arranged if needed.',
  },
  {
    question: 'Do you offer revisions for your work?',
    answer:
      'Yes, client satisfaction is key. I include revisions to ensure the content perfectly meets your editorial needs and aligns with your publication\'s voice and standards.',
  },
];
