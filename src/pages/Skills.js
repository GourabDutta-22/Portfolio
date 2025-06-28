import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGithub, FaPython, FaJava
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiC
} from "react-icons/si";
import '../styles/Skills.css';

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      <FaPython title="Python" color="#3776AB" />
      <FaJava title="Java" color="#f89820" />
      <SiC title="C" color="#00599C" />
      <FaHtml5 title="HTML5" color="#e34c26" />
      <FaCss3Alt title="CSS3" color="#264de4" />
      <FaJs title="JavaScript" color="#f0db4f" />
      <FaReact title="React.js" color="#61DBFB" />
      <FaNodeJs title="Node.js" color="#3C873A" />
      <SiMongodb title="MongoDB" color="#4DB33D" />
      <SiTailwindcss title="Tailwind CSS" color="#38BDF8" />
      <FaGithub title="GitHub" color="#171515" />
    </div>
  </section>
);

export default Skills;
