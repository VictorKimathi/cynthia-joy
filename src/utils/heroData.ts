import {
    CarIcon,
    FileTextIcon,
    SparklesIcon, // For innovation/emerging tech
    BoltIcon, // For EVs/performance
    HistoryIcon, // For automotive history
    UsersIcon, // For collaboration
    ClipboardCheckIcon // For quality/editorial
  } from 'lucide-react';
import React from 'react';
  import { JSX } from 'react';
  
  export interface HeroData {
      name: string;
      description: string;
      backgroundImage: string;
      primaryCTA: {
        label: string;
        link: string;
      };
      secondaryCTA: {
        label: string;
        link: string;
      };
    }
    
    export const heroData: HeroData = {
      name: "Brittney Thomas",
      description:
        "A lifelong car enthusiast turned professional copywriter, bringing over three years of experience writing feature content for automotive publications.",
      backgroundImage:
        "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/524000/800/524833.jpg", // Placeholder automotive background image
      primaryCTA: {
        label: "Explore My Portfolio",
        link: "/portfolio",
      },
      secondaryCTA: {
        label: "Let's Talk Cars & Content",
        link: "/contact",
      },
    };