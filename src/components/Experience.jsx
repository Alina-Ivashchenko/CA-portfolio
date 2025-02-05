import { useRef } from 'react'; // Import useRef
import useIntersectionObserver from './useIntersectionObserver';
import './Animations.css';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null); // Use useRef
  const isVisible = useIntersectionObserver(experienceRef);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className={`section fade-in ${isVisible ? 'visible' : ''}`}
    >
      <section id="work-experience">
  <h2>Work Experience</h2>
  <ul className="work-list">
    <li className="work-item">
      <h3><b>International Student Ambassador</b> – University of Minnesota Crookston (2024 - Present)</h3>
      <ul>
        <li>Facilitate smooth integration of international students into campus life by providing <b>support and guidance</b>.</li>
        <li>Organize <b>cultural events</b> to enhance the student experience and promote diversity.</li>
        <li>Serve as a <b>liaison</b> between students and university departments, ensuring effective communication and engagement.</li>
        <li>Develop <b>strong interpersonal skills</b> by assisting students from diverse backgrounds.</li>
      </ul>
    </li>
    <li className="work-item">
      <h3><b>Computer Help Desk</b> – University of Minnesota Crookston (2024 - Present)</h3>
      <ul>
        <li>Assisted students and faculty with <b>technical support</b> for computer and software-related issues.</li>
        <li>Demonstrated patience and problem-solving abilities, providing timely <b>solutions</b>.</li>
        <li>Improved <b>communication skills</b> by explaining technical issues to non-technical users.</li>
      </ul>
    </li>
    <li className="work-item">
        <h3><b>Student Tutor</b> – Student Success Center (2023 - Present)</h3>
        <ul>
          <li>Tutor students in <b>major-specific courses</b> like Programming, Website Development, and Discrete Math.</li>
          <li>Provide <b>support for assignments, projects, and exams</b> to ensure student success.</li>
          <li>Enhance <b>communication and problem-solving</b> skills through personalized teaching methods.</li>
        </ul>
    </li>
    <li className="work-item">
      <h3><b>Receptionist</b> – Wellness Center (2024 - Present)</h3>
      <ul>
        <li>Provided <b>exceptional customer service</b> to students, staff, and faculty members.</li>
        <li>Answered inquiries, scheduled appointments, and maintained an organized reception area.</li>
        <li>Developed <b>strong organizational</b> and <b>communication skills</b> by managing multiple tasks.</li>
      </ul>
    </li>
    <li className="work-item">
      <h3><b>Cook</b> – Drafts Sports Bar (2023)</h3>
      <ul>
        <li>Prepared meals and maintained kitchen cleanliness while adhering to health and safety standards.</li>
        <li>Demonstrated excellent <b>organizational</b> and <b>multitasking</b> abilities during peak hours.</li>
        <li>Worked efficiently with a diverse team, improving <b>collaboration</b> and <b>communication</b>.</li>
      </ul>
    </li>
    <li className="work-item">
      <h3><b>Baker</b> – University Dining Services (2023)</h3>
      <ul>
        <li>Prepared baked goods, maintaining consistent quality and <b>attention to detail</b> in a busy dining environment.</li>
        <li>Worked as part of a team to meet high-volume demands, demonstrating <b>teamwork</b> and <b>time management</b> skills.</li>
        <li>Interacted with customers, improving <b>communication</b> skills and customer satisfaction.</li>
      </ul>
    </li>
    <li className="work-item">
      <h3><b>Chef de Partie</b> – Hart of Hartford, England (2022 - 2023)</h3>
      <ul>
        <li>Worked under <b>pressure</b> in a fast-paced kitchen environment, maintaining efficiency and quality.</li>
        <li>Ensured high standards of <b>attention to detail</b> in food preparation and presentation.</li>
        <li>Collaborated with kitchen staff to <b>maintain organization</b> and meet tight deadlines.</li>
        <li>Showed leadership and teamwork in <b>managing kitchen operations</b>.</li>
      </ul>
    </li>
  </ul>
</section>
      <section id="club-experience">
  <h2>Club Experience</h2>
  <ul className="club-list">
    <li className="club-item">
      <h3><b>Vice President</b> – Multicultural International Club (2023 - Present)</h3>
      <ul>
        <li>Lead and organize <b>events promoting diversity and inclusion</b> on campus.</li>
        <li>Collaborate with a team to foster a sense of belonging and community for <b>international students</b>.</li>
        <li>Develop strong <b>communication</b> and <b>leadership skills</b> while working to increase membership and participation.</li>
      </ul>
    </li>
    <li className="club-item">
      <h3><b>Secretary</b> – IT Club (2023 - Present)</h3>
      <ul>
        <li>Manage <b>meeting records</b> and handle communication with members to ensure smooth operations.</li>
        <li>Assist in planning <b>workshops</b> and <b>networking events</b>, focusing on professional growth and development for students.</li>
      </ul>
    </li>
    <li className="club-item">
      <h3><b>Social Media Manager</b> – Futbol Club (2023 - Present)</h3>
      <ul>
        <li>Manage the club`s <b>online presence</b> and engage with members through posts, event promotions, and updates.</li>
        <li>Coordinate with the team to <b>boost participation</b> in soccer-related activities and social events.</li>
      </ul>
    </li>
  </ul>
</section>

    </section>
  );
};

export default Experience;