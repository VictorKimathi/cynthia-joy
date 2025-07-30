import { FileTextIcon, SearchIcon, WrenchIcon, GaugeIcon, MegaphoneIcon, EditIcon, CarIcon, BookOpenIcon } from 'lucide-react';
import React from 'react';
import { JSX } from 'react';

export type ServiceItem = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export const serviceItems: ServiceItem[] = [
  {
    title: 'Automotive Feature Writing',
    description:
      'Crafting comprehensive, long-form articles (typically 1,500-3,000 words) on diverse automotive topics, from engineering deep-dives to historical analyses.',
    icon: React.createElement(FileTextIcon, { size: 32 }),
  },
  {
    title: 'SEO-Optimized Automotive Content',
    description:
      'Developing content that ranks highly in search results for automotive keywords, ensuring maximum visibility and engagement for your target audience.',
    icon: React.createElement(SearchIcon, { size: 32 }),
  },
  {
    title: 'Vehicle Technology Explanations',
    description:
      'Translating complex automotive technologies (e.g., EV powertrains, advanced driver-assistance systems) into accessible and engaging content for enthusiasts and general readers alike.',
    icon: React.createElement(WrenchIcon, { size: 32 }),
  },
  {
    title: 'Performance & Culture Storytelling',
    description:
      'Capturing the essence of automotive performance culture, including motorsports history, iconic vehicles, and the stories behind their development and impact.',
    icon: React.createElement(GaugeIcon, { size: 32 }),
  },
  {
    title: 'Editorial Content & Adaptation',
    description:
      'Delivering editorial features on deadline, adapting content for various CMS platforms (e.g., WordPress), and maintaining consistent tone and AP style.',
      icon: React.createElement(EditIcon, { size: 32 }),
    
  },
  {
    title: 'Market Trends & Consumer Insights',
    description:
      'Authoring articles focused on emerging automotive technologies, consumer vehicle insights, road safety innovations, and concept car analyses.',
      icon: React.createElement(MegaphoneIcon, { size: 32 }),
    
  },
];

export type Specialty = {
  title: string;
  description: string;
};

export const writingSpecialties: Specialty[] = [
  {
    title: 'Electric Vehicles (EVs)',
    description:
      'In-depth content on EV powertrains, battery technology, charging infrastructure, and the future of electric mobility.',
  },
  {
    title: 'Classic & Vintage Cars',
    description:
      'Features on iconic muscle cars, historical automotive engineering, restoration projects, and the cultural significance of classic vehicles.',
  },
  {
    title: 'Motorsports & Racing History',
    description:
      'Articles covering various racing disciplines, legendary drivers, technological advancements in motorsport, and their influence on production cars.',
  },
  {
    title: 'Automotive Engineering & Design',
    description:
      'Explorations of combustion engine design, chassis dynamics, aerodynamic principles, and the art and science of vehicle aesthetics.',
  },
  {
    title: 'Emerging Automotive Technologies',
    description:
      'Analysis of autonomous driving, connected car features, advanced safety systems, and other innovations shaping the automotive landscape.',
  },
];

export type ProcessStep = {
  step: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 'Briefing & Research',
    description:
      'I begin by thoroughly understanding your content objectives and target audience. This is followed by in-depth industry research and, when necessary, expert interviews to ensure factual accuracy and unique insights.',
  },
  {
    step: 'Drafting & Development',
    description:
      'I craft engaging and well-structured content, focusing on a narrative voice that balances technical fluency with enthusiast appeal, while adhering to your editorial guidelines.',
  },
  {
    step: 'Optimization & Review',
    description:
      'The content is then optimized for SEO and refined for clarity, conciseness, and impact. I incorporate your feedback through revision rounds to ensure the final piece meets your exact requirements.',
  },
  {
    step: 'Delivery & Integration',
    description:
      'Finalized content is delivered on schedule, ready for publication. I am proficient in adapting content for various CMS platforms to facilitate a smooth integration into your digital presence.',
  },
];
