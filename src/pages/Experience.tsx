import React from 'react';
import { UsersIcon, HeartIcon } from 'lucide-react';
export function Experience() {
  return <div className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-12 text-center">
            Experience
          </h1>
          <div className="space-y-16">
            {/* Peer Mentor Role */}
            <div className="border-l-4 border-[#0033CC] pl-6 py-2">
              <div className="flex items-center mb-4">
                <UsersIcon size={24} className="text-[#0033CC] mr-3" />
                <h2 className="text-2xl font-medium">Peer Mentor</h2>
              </div>
              <p className="text-gray-600 mb-3">
                Campus Mental Wellness Group | 2023 - Present
              </p>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  As a peer mentor for the Campus Mental Wellness Group, I
                  provide support to fellow students navigating academic stress,
                  personal challenges, and mental health concerns.
                </p>
                <h3 className="text-lg font-medium">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Facilitate weekly counseling circles for groups of 5-8
                    students, creating a safe space for open discussion about
                    mental health challenges.
                  </li>
                  <li>
                    Organize and lead stress-management workshops during
                    high-pressure academic periods.
                  </li>
                  <li>
                    Collaborate with university counseling services to develop
                    resources for student mental wellness.
                  </li>
                  <li>
                    Connect students with professional mental health resources
                    when needed.
                  </li>
                  <li>
                    Participate in ongoing training to enhance supportive
                    communication skills and crisis response protocols.
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-700">
                  This role has strengthened my ability to practice active
                  listening, demonstrate empathy, and apply psychological
                  principles in real-world settings while maintaining
                  appropriate boundaries.
                </p>
              </div>
            </div>
            {/* Volunteer Role */}
            <div className="border-l-4 border-[#0033CC] pl-6 py-2">
              <div className="flex items-center mb-4">
                <HeartIcon size={24} className="text-[#0033CC] mr-3" />
                <h2 className="text-2xl font-medium">Volunteer</h2>
              </div>
              <p className="text-gray-600 mb-3">
                Sunrise Community Outreach | 2022 - Present
              </p>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  At Sunrise Community Outreach, I contribute to mental health
                  advocacy and support initiatives that serve underresourced
                  communities surrounding Egerton University.
                </p>
                <h3 className="text-lg font-medium">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Assist in coordinating monthly mental health awareness
                    events in local community centers.
                  </li>
                  <li>
                    Develop age-appropriate activities for children's emotional
                    wellness programs.
                  </li>
                  <li>
                    Support the creation of informational materials about mental
                    health resources.
                  </li>
                  <li>
                    Participate in community needs assessments to identify gaps
                    in mental health services.
                  </li>
                  <li>
                    Help facilitate support groups for parents and caregivers of
                    children with behavioral challenges.
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-700">
                  This volunteer work has deepened my understanding of how
                  socioeconomic factors impact mental health access and
                  outcomes, while allowing me to apply classroom knowledge in
                  community settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}