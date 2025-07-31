import React, { Children, Component } from 'react';
import { CTABanner } from '../components/CTABanner';
import { BarChartIcon, BookIcon } from 'lucide-react';
export function Projects() {
  return <div className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-12 text-center">Projects</h1>
          <div className="space-y-16">
            {/* Campus Stress Survey */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BarChartIcon size={24} className="text-[#0033CC]" />
                <h2 className="text-2xl font-medium">
                  Campus Stress Survey (2024)
                </h2>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  A comprehensive research study examining stress factors among
                  university students at Egerton University, with a focus on
                  identifying key stressors and effective coping mechanisms.
                </p>
                <h3 className="text-xl font-medium">Methodology</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Designed and distributed a survey to 150 undergraduate
                    students across various departments
                  </li>
                  <li>
                    Collected data on academic pressures, financial concerns,
                    social factors, and mental health resources
                  </li>
                  <li>
                    Utilized SPSS for statistical analysis of quantitative data
                  </li>
                  <li>
                    Conducted thematic analysis of qualitative responses to
                    open-ended questions
                  </li>
                </ul>
                <h3 className="text-xl font-medium">Key Findings</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Academic deadlines and exam periods represented the most
                    significant sources of stress (78% of respondents)
                  </li>
                  <li>
                    Financial concerns were cited by 65% of students as a
                    constant or frequent source of stress
                  </li>
                  <li>
                    Only 23% of students reported awareness of campus mental
                    health resources
                  </li>
                  <li>
                    Students who practiced regular physical activity reported
                    lower average stress levels
                  </li>
                </ul>
                <h3 className="text-xl font-medium">Impact</h3>
                <p className="leading-relaxed text-gray-700">
                  The findings from this study were presented to the
                  university's Student Affairs department, resulting in
                  increased promotion of campus mental health resources and the
                  development of a stress management workshop series during exam
                  periods.
                </p>
              </div>
            </div>
            {/* Mental Health Mondays Blog Series */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookIcon size={24} className="text-[#0033CC]" />
                <h2 className="text-2xl font-medium">
                  Mental Health Mondays Blog Series
                </h2>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  A weekly blog series published on the university's student
                  platform addressing common mental health challenges faced by
                  students and providing evidence-based strategies for
                  wellbeing.
                </p>
                <h3 className="text-xl font-medium">Project Overview</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Created and maintained a weekly blog focused on student
                    mental health topics
                  </li>
                  <li>
                    Researched and synthesized psychological literature to
                    ensure evidence-based content
                  </li>
                  <li>
                    Developed accessible, engaging writing style to communicate
                    complex concepts
                  </li>
                  <li>
                    Collaborated with campus counseling services to provide
                    accurate resource information
                  </li>
                </ul>
                <h3 className="text-xl font-medium">Featured Topics</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    "Managing Exam Anxiety: Cognitive Strategies for Academic
                    Success"
                  </li>
                  <li>
                    "Social Connection in a Digital Age: Combating Isolation on
                    Campus"
                  </li>
                  <li>
                    "Sleep Hygiene for Students: The Psychology Behind Better
                    Rest"
                  </li>
                  <li>
                    "Recognizing Depression vs. Normal Sadness: When to Seek
                    Help"
                  </li>
                  <li>
                    "Mindfulness Practices for Busy Students: 5-Minute
                    Techniques"
                  </li>
                </ul>
                <h3 className="text-xl font-medium">Impact</h3>
                <p className="leading-relaxed text-gray-700">
                  The blog series has reached over 500 unique readers and
                  received positive feedback from both students and faculty.
                  Several posts have been incorporated into the university's
                  orientation materials for new students.
                </p>
              </div>
            </div>
            {/* Children's Emotional Literacy Workshop */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookIcon size={24} className="text-[#0033CC]" />
                <h2 className="text-2xl font-medium">
                  Children's Emotional Literacy Workshop
                </h2>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  Developed and implemented a workshop series for primary school
                  children focused on identifying, expressing, and managing
                  emotions in healthy ways.
                </p>
                <h3 className="text-xl font-medium">Project Overview</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Created age-appropriate activities and materials for
                    children ages 7-10
                  </li>
                  <li>
                    Designed four workshop sessions covering basic emotions,
                    emotional expression, coping strategies, and empathy
                  </li>
                  <li>
                    Collaborated with local primary school teachers to implement
                    the program
                  </li>
                  <li>
                    Conducted pre- and post-workshop assessments to measure
                    impact
                  </li>
                </ul>
                <h3 className="text-xl font-medium">Workshop Components</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    "Emotion Detective" activities to help children identify
                    emotional states
                  </li>
                  <li>Art-based exercises for expressing complex feelings</li>
                  <li>
                    Role-playing scenarios to practice emotional regulation
                  </li>
                  <li>
                    Simplified mindfulness techniques adapted for children
                  </li>
                </ul>
                <h3 className="text-xl font-medium">Impact</h3>
                <p className="leading-relaxed text-gray-700">
                  Teachers reported improved emotional vocabulary and decreased
                  emotional outbursts among participating students. The workshop
                  materials have been adapted for use in two additional local
                  schools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner title="Interested in Collaboration?" description="I'm always open to discussing new research projects or community initiatives related to psychology and mental health." />
    </div>;
}