import { useRef } from 'react'; // Import useRef
import useIntersectionObserver from './useIntersectionObserver'; // Import the hook
import './Animations.css'; // Import animations
import './Education.css'; // Import Education-specific styles
import UofM from '../assets/UofM.png';

const Education = () => {
  const educationRef = useRef(null); // Use useRef
  const isVisible = useIntersectionObserver(educationRef);

  return (
    <section
      id="education"
      ref={educationRef}
      className={`section fade-in ${isVisible ? 'visible' : ''}`}
    >
      <h2>Education</h2>
      <div className="education-content">
        <div className="education-text">
        <ul>
        <li><strong>Pursuing Bachelor`s Degree in Software Engineering</strong> with minors in 
            <strong> IT Management</strong> and <strong>Cybersecurity</strong> - 
            <strong> University of Minnesota Crookston (2027)</strong></li>
        <li><strong>Sixth Form College</strong> - Sir John Deane’s (England) <strong>(2022-2023)</strong></li>
        <li><strong>High School</strong> - Boryspil Academic Lyceum (Ukraine) <strong>(2011-2022)</strong></li>
        </ul>

        </div>
        <div className="education-image">
          <img src={UofM} alt="University Logo" /> {/* Update with the correct path */}
        </div>
      </div>
    </section>
  );
};

export default Education;