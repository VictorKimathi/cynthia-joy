import React, { memo } from 'react';
import { BookOpenIcon, BookIcon } from 'lucide-react';
export function Education() {
  return <div className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-12 text-center">
            Education
          </h1>
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="mt-1">
                <div size={24} className="text-[#0033CC]" />
              </div>
              <div>
                <h2 className="text-2xl font-medium">Egerton University</h2>
                <p className="text-gray-600 mb-2">
                  B.A. in Psychology (2022–2026)
                </p>
                <p className="leading-relaxed text-gray-700">
                  Currently pursuing a Bachelor's degree in Psychology with a
                  focus on child development and community mental health.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Key Coursework</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BookOpenIcon size={20} className="text-[#0033CC]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Abnormal Psychology</h3>
                  <p className="leading-relaxed text-gray-700">
                    Study of psychological disorders, their causes, symptoms,
                    and treatment approaches. Focused on evidence-based
                    diagnostic criteria and contemporary therapeutic
                    interventions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BookOpenIcon size={20} className="text-[#0033CC]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Cognitive Science</h3>
                  <p className="leading-relaxed text-gray-700">
                    Exploration of mental processes including perception,
                    attention, memory, language, and problem-solving. Examined
                    cognitive development across the lifespan with emphasis on
                    practical applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BookOpenIcon size={20} className="text-[#0033CC]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Counseling Theories</h3>
                  <p className="leading-relaxed text-gray-700">
                    Comprehensive overview of major therapeutic approaches
                    including cognitive-behavioral, humanistic, psychodynamic,
                    and family systems. Developed foundational counseling skills
                    through role-play and case studies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BookOpenIcon size={20} className="text-[#0033CC]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    Research Methods in Psychology
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    Training in quantitative and qualitative research design,
                    data collection, statistical analysis, and ethical
                    considerations. Completed independent research projects
                    using SPSS and other analytical tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BookOpenIcon size={20} className="text-[#0033CC]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    Developmental Psychology
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    Study of human development across the lifespan with special
                    focus on childhood and adolescence. Explored physical,
                    cognitive, emotional, and social development theories and
                    their practical applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}