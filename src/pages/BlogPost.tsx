import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
export function BlogPost() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  // In a real application, this would fetch data from an API
  // Here we're using sample data for demonstration
  const blogPosts = {
    '1': {
      title: 'What Psychology Taught Me About Empathy',
      date: 'May 15, 2024',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      content: `
        <p>Empathy is often described as the ability to understand and share the feelings of another person. As psychology students, we learn about empathy as a concept, a skill, and a fundamental aspect of human connection. But what does psychology really teach us about empathy, and how can we apply these insights in our daily lives?</p>
        <h2>The Science of Empathy</h2>
        <p>Research in cognitive neuroscience has revealed that empathy isn't just an abstract concept—it has neurological underpinnings. When we observe someone experiencing an emotion, our brains activate many of the same neural networks that would activate if we were experiencing that emotion ourselves. This phenomenon, linked to mirror neurons, provides a biological basis for our ability to "feel with" others.</p>
        <p>However, psychology also teaches us that empathy isn't just automatic mirroring. It involves multiple processes:</p>
        <ul>
          <li><strong>Cognitive empathy</strong>: The ability to understand another person's perspective</li>
          <li><strong>Emotional empathy</strong>: The ability to share another's emotional experience</li>
          <li><strong>Compassionate empathy</strong>: The motivation to help based on empathic understanding</li>
        </ul>
        <h2>Barriers to Empathy</h2>
        <p>One of the most valuable insights psychology offers is understanding what blocks empathy. Factors like stress, cognitive load, and group biases can significantly reduce our empathic responses. When we're overwhelmed, our attention narrows, and we have fewer cognitive resources available to consider others' perspectives.</p>
        <p>Social psychology has demonstrated that we tend to feel more empathy for those we perceive as similar to ourselves—a phenomenon known as in-group bias. Recognizing these barriers is the first step toward overcoming them.</p>
        <h2>Developing Empathic Skills</h2>
        <p>The good news is that psychology also shows us that empathy can be cultivated. Practices that psychology research supports include:</p>
        <ul>
          <li>Mindfulness meditation, which helps us become more aware of our own emotions and those of others</li>
          <li>Perspective-taking exercises that challenge us to see situations from different viewpoints</li>
          <li>Active listening techniques that improve our ability to truly hear what others are communicating</li>
        </ul>
        <p>As I've progressed in my psychology studies, I've found these practices invaluable in my role as a peer mentor. The ability to truly listen without immediately jumping to solutions or comparisons has strengthened my connections with fellow students seeking support.</p>
        <h2>The Balance: Empathy Without Burnout</h2>
        <p>Perhaps most importantly, psychology teaches us about the distinction between empathy and emotional contagion. While empathy involves understanding and sharing another's feelings, emotional contagion—becoming overwhelmed by those feelings—can lead to empathic distress and burnout.</p>
        <p>Learning to maintain emotional boundaries while remaining empathically connected is essential, especially for those in helping professions. This balance allows us to sustain our empathic engagement without becoming depleted.</p>
        <h2>Conclusion</h2>
        <p>As I continue my journey in psychology, I've come to see empathy not just as an innate trait but as a skill that can be developed with intention and practice. Understanding the psychological mechanisms behind empathy has made me more aware of my own empathic responses and more deliberate in cultivating this essential human capacity.</p>
        <p>In a world that sometimes seems increasingly divided, the psychological understanding of empathy offers a pathway toward greater connection and understanding—one perspective-taking exercise at a time.</p>
      `
    },
    '2': {
      title: 'Navigating Stress in University: A Psychological Perspective',
      date: 'April 28, 2024',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      content: `
        <p>University life presents a unique set of challenges that can trigger significant stress responses. From academic pressures and financial concerns to social adjustments and future uncertainty, students face multiple stressors that can impact both mental health and academic performance. As a psychology student, I've been fascinated by how psychological research can inform better stress management strategies for university students.</p>
        <h2>Understanding the Stress Response</h2>
        <p>The first step in managing stress is understanding what's happening in our bodies and minds when we experience it. The stress response—often called "fight, flight, or freeze"—evolved as a survival mechanism. When we perceive a threat, our bodies release stress hormones like cortisol and adrenaline, preparing us to respond to danger.</p>
        <p>This response can be helpful in acute situations, providing the energy and focus needed to meet a deadline or perform well on an exam. However, when stress becomes chronic—as it often does during university—it can lead to physical and psychological problems, including:</p>
        <ul>
          <li>Difficulty concentrating and remembering information</li>
          <li>Sleep disturbances</li>
          <li>Weakened immune function</li>
          <li>Increased anxiety and mood fluctuations</li>
        </ul>
        <h2>Evidence-Based Stress Management Strategies</h2>
        <p>Psychological research has identified several effective approaches to managing academic stress:</p>
        <h3>1. Cognitive Reframing</h3>
        <p>How we interpret stressful situations significantly impacts our response to them. Research in cognitive psychology shows that reframing stress as a challenge rather than a threat can improve performance and reduce anxiety. For example, viewing pre-exam nervousness as your body preparing to perform well rather than as a sign of inadequacy can transform your experience.</p>
        <h3>2. Strategic Time Management</h3>
        <p>Psychological studies suggest that perceived control is a crucial factor in stress reduction. Developing realistic schedules and breaking large tasks into manageable steps can increase your sense of control and reduce overwhelming feelings. The Pomodoro Technique—working in focused 25-minute intervals followed by short breaks—is particularly effective for many students.</p>
        <h3>3. Social Connection</h3>
        <p>Social support acts as a buffer against stress. Research consistently shows that students with strong social connections report lower stress levels and better adjustment to university life. Even brief positive social interactions can reduce stress hormone levels and improve mood.</p>
        <h3>4. Mindfulness and Relaxation Techniques</h3>
        <p>A growing body of research supports mindfulness practices for stress reduction among students. Regular meditation, deep breathing exercises, or even mindful walking can activate the parasympathetic nervous system, countering the stress response. Even 5-10 minutes daily can produce meaningful benefits.</p>
        <h2>When to Seek Additional Support</h2>
        <p>While self-management strategies are valuable, it's equally important to recognize when additional support is needed. Warning signs that stress may be developing into something more serious include:</p>
        <ul>
          <li>Persistent changes in sleep or appetite</li>
          <li>Withdrawal from social activities</li>
          <li>Difficulty managing daily responsibilities</li>
          <li>Feelings of hopelessness or being overwhelmed that don't improve</li>
        </ul>
        <p>University counseling services provide valuable resources for students experiencing significant stress. Seeking help is not a sign of weakness but a demonstration of self-awareness and commitment to wellbeing.</p>
        <h2>Conclusion</h2>
        <p>As university students, understanding the psychological dimensions of stress can empower us to develop more effective coping strategies. By applying evidence-based approaches and recognizing when to seek additional support, we can navigate academic challenges while protecting our mental health and wellbeing.</p>
        <p>Remember that stress management is a skill that develops with practice. Small, consistent efforts to incorporate these strategies into daily routines can lead to significant improvements in how we experience and respond to university stress.</p>
      `
    }
  };
  const post = blogPosts[id as keyof typeof blogPosts];
  if (!post) {
    return <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-[#0033CC] hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>;
  }
  return <div className="bg-white">
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-[#0033CC] mb-6 hover:underline">
            <ArrowLeftIcon size={16} className="mr-1" />
            Back to Blog
          </Link>
          <h1 className="text-3xl font-semibold mb-3">{post.title}</h1>
          <p className="text-gray-500 mb-6">{post.date}</p>
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
          <div className="prose max-w-none leading-relaxed" dangerouslySetInnerHTML={{
          __html: post.content
        }} />
        </div>
      </article>
    </div>;
}