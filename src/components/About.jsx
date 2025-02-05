import { useRef } from 'react'; // Import useRef
import useIntersectionObserver from './useIntersectionObserver';
import './Animations.css';
import './About.css';

const About = () => {
  const aboutRef = useRef(null); // Use useRef
  const isVisible = useIntersectionObserver(aboutRef);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`section fade-in ${isVisible ? 'visible' : ''}`}
    >
      <div className="section-container">
        <h2>About Me</h2>
        <p>
          I am a <strong>dedicated and proactive university student</strong> with a passion for 
          <strong> fostering inclusive communities</strong> and supporting fellow students. I have experience in 
          <strong>organizing cultural and social events</strong>, leading <strong>community service projects</strong>, and creating 
          engaging activities that promote student well-being. My skills include <strong>leadership, communication, 
          and problem-solving</strong>, all of which help me build a welcoming and supportive residential experience. 
          I am adept at <strong>event coordination, conflict resolution, and encouraging student engagement</strong> 
          in campus life.
        </p>
      </div>
    </section>
  );
};

export default About;
