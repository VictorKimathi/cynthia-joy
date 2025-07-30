import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import Button from '../components/Button';
import { aboutData } from '../utils/portfolioData';

const About: React.FC = () => {
  const {
    hero,
    professionalSummary,
    workHistory,
    education,
    skills,
    cta,
    profilePicture // 👈 New field added
  } = aboutData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">{hero.title}</h1>
            <p className="text-xl text-gray-300">{hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Profile Picture Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="rounded-full overflow-hidden shadow-lg w-48 h-48 md:w-56 md:h-56">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {professionalSummary.map((para, index) => (
              <p key={index} className="text-gray-700 text-lg mb-4">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Work History</h2>
            {workHistory.map((job, index) => (
              <ExperienceItem
                key={index}
                role={job.role}
                company={job.company}
                period={job.period}
                location={job.location}
                achievements={job.achievements}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <h3 className="text-xl font-semibold">{education.institution}</h3>
              <p className="text-blue-600">{education.degree} – Class of {education.graduated}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center bg-gray-100 p-3 rounded">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
            <p className="text-lg mb-8">{cta.description}</p>
            <Button to={cta.buttonLink} variant="secondary" size="lg">
              {cta.buttonText}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
