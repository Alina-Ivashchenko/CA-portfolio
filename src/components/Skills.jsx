import { useRef } from 'react'; // Import useRef
import useIntersectionObserver from './useIntersectionObserver';
import './Skills.css'; // Add separate styling for skills

const Skills = () => {
  const skillsRef = useRef(null); // Use useRef
  const isVisible = useIntersectionObserver(skillsRef);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`section fade-in ${isVisible ? 'visible' : ''}`}
    >
      <h2>Skills</h2>
      <ul className="skills-list">
        <li><b>Leadership</b></li>
        <li><b>Communication</b></li>
        <li><b>Conflict Resolution</b></li>
        <li><b>Event Planning</b></li>
        <li><b>Team Collaboration</b></li>
        <li><b>Time Management</b></li>
        <li><b>Cultural Competency</b></li>
        <li><b>Problem-Solving</b></li>
        <li><b>Empathy</b></li>
        <li><b>Mentorship</b></li>
      </ul>
    </section>
  );
};

export default Skills;
