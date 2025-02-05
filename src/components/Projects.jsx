import { useRef } from 'react'; // Import useRef
import useIntersectionObserver from './useIntersectionObserver';
import './Projects.css';
import KaraokeNight from '../assets/karaoke-night.jpeg';
import PumpkinPatch from '../assets/pumpkin-patch.jpeg';
import InternationalWeek from '../assets/international-week.jpeg';
import ServiceProject from '../assets/service-project.jpeg';
import WildRiceCamp from '../assets/wild-rice-camp.jpeg';

const projects = [
  {
    title: '🎤 Karaoke Night',
    description: 'Organized a fun and inclusive karaoke night with mocktails and snacks to foster student engagement. Managed event planning, logistics, and promotion, ensuring high participation and an enjoyable experience.',
    image: KaraokeNight,
  },
  {
    title: '🎃 Pumpkin Patch Service Project',
    description: 'Volunteered at a local pumpkin patch, assisting with event coordination and community engagement. Strengthened teamwork, leadership, and problem-solving skills while giving back to the community.',
    image: PumpkinPatch,
  },
  {
    title: '🌍 International Education Week',
    description: 'Contributed to International Education Week, promoting cultural exchange and global awareness. Helped organize events, encouraged student participation, and facilitated discussions about diverse cultural experiences.',
    image: InternationalWeek,
  },
  {
    title: '🍽️ Manhomen Service Project (Featured in Local Newspaper)',
    description: 'Participated in a service project in Mahnomen, cooking meals for individuals facing addiction and difficult childhood experiences. Provided compassion, support, and community connection through food. This initiative was featured in the local newspaper.',
    image: ServiceProject,
  },
  {
    title: '🌾 Wild Rice Camp',
    description: 'Engaged in the Wild Rice Camp, an immersive community service and cultural learning experience. Assisted in activities that supported sustainability, teamwork, and cultural appreciation, strengthening leadership and adaptability.',
    image: WildRiceCamp,
  },
];


const Projects = () => {
  const projectsRef = useRef(null);
  const isVisible = useIntersectionObserver(projectsRef);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`section fade-in ${isVisible ? 'visible' : ''}`}
    >
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="project-text">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
