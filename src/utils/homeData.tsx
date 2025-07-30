import {
    CarIcon,
    FileTextIcon,
    SparklesIcon, // For innovation/emerging tech
    BoltIcon, // For EVs/performance
    HistoryIcon, // For automotive history
    UsersIcon, // For collaboration
    ClipboardCheckIcon, // For quality/editorial
    BookOpenIcon
  } from 'lucide-react';
import React from 'react';
  import { JSX } from 'react';
  
  export const homeHeroStats = [
    {
      icon: React.createElement(FileTextIcon, { size: 20, className: "text-blue-600" }), // Changed icon and color
      text: '3+ years of experience' // Updated based on resume
    },
    {
      icon: React.createElement(BookOpenIcon, { size: 20, className: "text-blue-600" }), // Changed icon and color
      text: '100+ published articles' // Updated based on resume (from Auto Trends Weekly)
    }
  ];
  
  export const aboutSection = {
    heading: 'Bringing the Automotive World to Life Through Expert Copywriting',
    paragraph:
      'I craft in-depth, accessible, and enthusiast-savvy features that cover everything from vintage muscle cars to cutting-edge EV powertrains, driven by a passion for vehicle technology and performance culture.',
    image:
      'https://placehold.co/600x400/3366FF/FFFFFF?text=Automotive+Content', // Placeholder automotive image
    engagement: {
      time: 'Strong', // Placeholder for engagement, as specific data isn't in resume
      note: 'Reader Engagement' // Placeholder
    }
  };
  
  export const expertiseAreas = [
    {
      icon: React.createElement(CarIcon, { size: 28, className: "text-blue-600" }), // Automotive icon
      title: 'Vehicle Technology & Engineering',
      description:
        'In-depth explanations of complex automotive systems, from combustion engines to advanced EV powertrains.',
      link: '/services#technology' // Dummy link
    },
    {
      icon: React.createElement(HistoryIcon, { size: 28, className: "text-blue-600" }), // History icon
      title: 'Automotive History & Culture',
      description:
        'Engaging narratives on vintage muscle cars, motorsports history, and the cultural impact of iconic vehicles.',
      link: '/services#history' // Dummy link
    },
    {
      icon: React.createElement(SparklesIcon, { size: 28, className: "text-blue-600" }), // Innovation icon
      title: 'Emerging Trends & Insights',
      description:
        'Articles on road safety innovation, concept cars, consumer vehicle insights, and the future of mobility.',
      link: '/services#trends' // Dummy link
    }
  ];
  
  export const testimonials = [
    {
      quote:
        'Brittney has a remarkable ability to translate complex automotive concepts into engaging and accessible content. Her passion for cars truly shines through.',
      name: 'Michael Chen',
      title: 'Editor-in-Chief, Auto Enthusiast Magazine',
      avatar: 'https://randomuser.me/api/portraits/men/77.jpg' // Dummy avatar
    },
    {
      quote:
        'Her articles are always well-researched and delivered on time. Brittney’s unique narrative voice perfectly balances technical fluency with gearhead appeal.',
      name: 'Sarah Jenkins',
      title: 'Content Manager, DriveLine Digital',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg' // Dummy avatar
    },
    {
      quote:
        'Brittney consistently provides high-quality content that resonates with our readers. Her understanding of industry trends is invaluable.',
      name: 'David Lee',
      title: 'Publisher, Performance Car Weekly',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg' // Dummy avatar
    }
  ];
  
  export const ctaSection = {
    heading: 'Ready to Accelerate Your Automotive Content Strategy?',
    subheading:
      "Let's collaborate on your next feature, review, or in-depth analysis to captivate your automotive audience.",
    buttonLabel: 'Commission Your Next Article',
    buttonLink: '/contact'
  };
