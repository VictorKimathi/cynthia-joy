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
  {
    // LinkedIn not provided in resume, using a placeholder
    icon: React.createElement(LinkedinIcon, { size: 20 }),
    title: 'Connect',
    description: 'LinkedIn Profile (Not provided in resume)',
    link: '#', // Placeholder link
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

// About data for Brittney Thomas's portfolio
export const aboutData = {
    hero: {
      title: "Automotive Copywriting & Content Creation",
      subtitle:
        "A lifelong car enthusiast turned professional copywriter with over three years of experience writing feature content for automotive publications."
    },
  
    author: {
      name: "Brittney Thomas",
      image: "placeholder.jpg", // Placeholder image, replace with actual path if available
      intro: `My passion for vehicle technology, engineering history, and performance culture drives my storytelling. I specialize in crafting in-depth, accessible, and enthusiast-savvy features.`,
      mission: `My work is informed by hands-on experience, deep industry research, and a strong editorial voice, covering everything from vintage muscle cars to EV powertrains.`,
      quote:
        '"My goal is to bring the world of automotive technology and culture to life through compelling and accurate storytelling."'
    },
  
    professionalSummary: [
      `I'm Brittney Thomas, a professional copywriter with over three years of experience specializing in automotive feature content. My expertise spans vehicle technology, engineering history, and performance culture.`,
      `I excel at crafting in-depth, accessible, and enthusiast-savvy features, adapting content for CMS platforms, and ensuring SEO optimization and tone consistency. I am driven by a passion for the automotive industry and a commitment to strong editorial standards.`
    ],
  
    workHistory: [
      {
        role: "Freelance Automotive Copywriter",
        company: "Independent",
        period: "January 2021 – Present",
        location: "Remote", // Inferred as independent/freelance
        achievements: [
          "Researched and wrote long-form automotive articles on topics ranging from combustion engine design to motorsports history.",
          "Delivered editorial features on deadline to clients across digital automotive publications.",
          "Developed a unique narrative voice that balances technical fluency with gearhead appeal.",
          "Adapted content for CMS platforms while ensuring SEO optimization and tone consistency."
        ]
      },
      {
        role: "Contributing Writer",
        company: "Auto Trends Weekly",
        period: "August 2019 – December 2020",
        location: "Remote",
        achievements: [
          "Authored 100+ articles focused on emerging automotive technologies and consumer vehicle insights.",
          "Covered topics like road safety innovation, concept cars, and performance reviews.",
          "Collaborated with editors to shape story angles and refine content.",
          "Maintained AP style and adapted writing to various target audiences."
        ]
      }
    ],
  
    education: {
      institution: "Miami Dade College",
      degree: "Associate of Arts in Communications",
      graduated: "2012"
    },
  
    skills: [
      "Automotive journalism and feature writing",
      "Deep understanding of vehicle engineering and industry trends",
      "CMS proficiency and digital publishing (WordPress, custom platforms)",
      "AP Style and editorial standards",
      "SEO writing and keyword integration",
      "Deadline management and independent research"
    ],
  
    cta: {
      title: "Ready to Drive Your Content Forward?",
      description:
        "Let's discuss how my automotive copywriting expertise can accelerate your publication's success.",
      buttonText: "Contact Me",
      buttonLink: "/contact"
    }
  };

export const portfolioItems = [
    {
      id: 1,
      title: 'All About BYD’s Megawatt Flash Chargers: 400 km in 5 Minutes and 15,000 Stations Coming',
      description:
        'Electric vehicle charging has long been a sticking point for EV adoption. While batterytechnology continues to evolve, charging times remain a barrier for drivers used to five-minutegas station visits. That’s why BYD’s new “Megawatt Flash Chargers”, capable of delivering 400 kilometers of range in just five minutes, represent a seismic leap not just for the company, but for the entire EV ecosystem',
      imageUrl:        'https://placehold.co/600x400/000000/FFFFFF?text=EV+Powertrain', // Placeholder image
      category: 'Electric Vehicle Technology',
      tags: ['EV charging innovation', 'BYD megawatt chargers', 'high-speed infrastructure'],
      href: 'All_About_BYD’s_Megawatt.pdf', // Dummy PDF link
    },
    {
      id: 2,
      title: 'Why Slate Auto’s Minimalist $20K EV Truck May Be the Biggest Disruption in the U.S.',
      description:
        'When Slate Auto unveiled its entry-level electric pickup earlier this year, it didn’t come with a panoramic screen, complex driver-assist features or even power windows. Instead, the Jeff Bezos–backed startup delivered something unexpected: a bare-bones EV truck with a starting price of $20,000 (after incentives), something unheard of in an era where even compact EVs regularly breach $30K.',
      imageUrl:
        'https://placehold.co/600x400/FF0000/FFFFFF?text=Muscle+Car+V8', // Placeholder image
      category: 'EV Startups & Disruptors',
      tags: ['budget EV trucks', 'Slate Auto innovation', 'minimalist electric vehicles'],
      href: 'Why_Slate_Auto’s_Minimalist.pdf', // Dummy PDF link
    },
    {
      id: 3,
      title: 'VW’s H1 2025 EV Boom with 47 % Growth in BEV Deliveries. What’s Fueling the Momentum?',
      description:
        'Volkswagen Group has delivered a standout performance in the first half of 2025: 465,500 BEVs shipped worldwide – a 47 % year-over-year increase compared to H1 2024. This explosive growth didn’t merely save face – it redefined Volkswagen’s trajectory in the electrification era. BEVs now account for 11 % of total deliveries, up from 7 % just a year ago.',
      imageUrl:
        'https://placehold.co/600x400/0000FF/FFFFFF?text=F1+Tech', // Placeholder image
      category: 'EV Market Trends',
      tags: ['Volkswagen BEV sales', 'global EV growth', 'MEB platform strategyh'],
      href: 'F1_Innovations_Road_Cars.pdf', // Dummy PDF link
    }
  ];

export const categories = [
  'all',
  'Electric Vehicles',
  'Classic Cars',
  'Motorsports',
  'Emerging Technologies',
];
