import React from 'react';
export function Skills() {
  return <div className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-12 text-center">Skills</h1>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Research & Academic Skills */}
            <div>
              <h2 className="text-2xl font-medium mb-6">
                Research & Academic Skills
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    🧠
                  </span>
                  <div>
                    <h3 className="font-medium">APA Writing & Documentation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Proficient in academic writing following American
                      Psychological Association standards for research papers,
                      literature reviews, and case studies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    📊
                  </span>
                  <div>
                    <h3 className="font-medium">SPSS & Data Analysis</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Experienced in using SPSS for statistical analysis,
                      including descriptive statistics, correlation analysis,
                      t-tests, and ANOVA.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    📚
                  </span>
                  <div>
                    <h3 className="font-medium">Literature Review</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Skilled in conducting comprehensive literature reviews to
                      identify relevant research, synthesize findings, and
                      identify gaps in existing knowledge.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    📝
                  </span>
                  <div>
                    <h3 className="font-medium">Research Design</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Trained in developing research questions, selecting
                      appropriate methodologies, and designing studies that
                      adhere to ethical guidelines.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Clinical & Interpersonal Skills */}
            <div>
              <h2 className="text-2xl font-medium mb-6">
                Clinical & Interpersonal Skills
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    🤝
                  </span>
                  <div>
                    <h3 className="font-medium">Empathy & Active Listening</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Developed strong empathetic response capabilities and
                      active listening skills through peer counseling and
                      volunteer work.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    💬
                  </span>
                  <div>
                    <h3 className="font-medium">Communication</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Effective in clear, compassionate communication with
                      diverse populations, including children, students, and
                      community members.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    🎤
                  </span>
                  <div>
                    <h3 className="font-medium">
                      Public Speaking & Facilitation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Experienced in leading workshops, facilitating group
                      discussions, and presenting psychological concepts to
                      non-specialist audiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    🧩
                  </span>
                  <div>
                    <h3 className="font-medium">Crisis Management</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Trained in basic crisis intervention techniques,
                      recognizing warning signs, and appropriate referral
                      protocols for mental health emergencies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Additional Skills */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-medium mb-6">Additional Skills</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    📱
                  </span>
                  <div>
                    <h3 className="font-medium">Digital Literacy</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Proficient with digital tools for research, communication,
                      and content creation, including survey platforms,
                      collaborative software, and basic content management
                      systems.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl" aria-hidden="true">
                    🌍
                  </span>
                  <div>
                    <h3 className="font-medium">Cultural Sensitivity</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Awareness of and respect for cultural differences in
                      mental health expression, help-seeking behaviors, and
                      treatment preferences.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>;
}