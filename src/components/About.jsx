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
            I am a <strong>dedicated and proactive university student</strong> passionate about 
            <strong> fostering inclusive and globally connected communities</strong>. I have experience in 
            <strong> organizing cultural and social events</strong>, leading <strong> community service projects</strong>, 
            and creating initiatives that <strong>promote diversity, equity, and inclusion</strong>. My skills include 
            <strong> leadership, communication, and cross-cultural engagement</strong>, enabling me to build 
            welcoming spaces where students from all backgrounds feel valued and supported. I am adept at 
            <strong> event coordination, conflict resolution, and advocating for internationalization </strong>  
            by bridging cultural differences and empowering students to engage in meaningful global experiences.
          </p>
      </div>
    </section>
  );
};

export default About;
