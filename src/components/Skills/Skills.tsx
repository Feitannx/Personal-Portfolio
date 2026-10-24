import "./Skills.css";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { FaCode, FaDatabase, FaLaptopCode, FaTools } from "react-icons/fa";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Languages used to build application logic and functionality.",
    icon: <FaCode />,
    skills: [
      { name: "Python", icon: <SiPython />, level: "Comfortable" },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        level: "Working knowledge",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: "Working knowledge",
      },
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Technologies for responsive, user-friendly interfaces.",
    icon: <FaLaptopCode />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, level: "Comfortable" },
      { name: "CSS3", icon: <SiCss />, level: "Comfortable" },
      { name: "React", icon: <SiReact />, level: "Working knowledge" },
      { name: "Vite", icon: <SiVite />, level: "Working knowledge" },
    ],
  },
  {
    number: "03",
    title: "Backend & Databases",
    description: "Tools for server-side development and data management.",
    icon: <FaDatabase />,
    skills: [
      { name: "Django", icon: <SiDjango />, level: "Working knowledge" },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        level: "Working knowledge",
      },
      { name: "MySQL", icon: <SiMysql />, level: "Working knowledge" },
      { name: "SQLite", icon: <SiSqlite />, level: "Working knowledge" },
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Tools for version control, collaboration, and design.",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <SiGit />, level: "Working knowledge" },
      { name: "GitHub", icon: <SiGithub />, level: "Working knowledge" },
      { name: "Figma", icon: <SiFigma />, level: "Familiar" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* ABSTRACT GEOMETRIC BACKGROUND */}
      <div className="skills-background" aria-hidden="true">
        <div className="skills-background-circle" />
        <div className="skills-background-square" />
        <div className="skills-background-dots" />
      </div>

      <div className="skills-container">
        {/* Page Header */}
        <header className="skills-header">
          <span className="skills-eyebrow">WHAT I WORK WITH</span>

          <h1 className="skills-title">
            My technical <span>skills.</span>
          </h1>

          <p className="skills-subtitle">
            The technologies and tools I use to build applications, create
            responsive interfaces, and solve development problems.
          </p>
        </header>

        {/* Skills Categories */}
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <section
              className="skills-group"
              key={group.number}
              aria-labelledby={`skills-group-${group.number}`}
            >
              <div className="skills-group-header">
                <div className="skills-group-icon" aria-hidden="true">
                  {group.icon}
                </div>

                <div className="skills-group-heading">
                  <span className="skills-group-number">
                    {group.number} / SKILL CATEGORY
                  </span>

                  <h2 id={`skills-group-${group.number}`}>{group.title}</h2>

                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {group.skills.map((skill) => (
                  <article className="skill-card" key={skill.name}>
                    <span className="skill-icon" aria-hidden="true">
                      {skill.icon}
                    </span>

                    <div className="skill-info">
                      <h3>{skill.name}</h3>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="skills-closing">
          <span className="skills-closing-mark" aria-hidden="true">
            +
          </span>

          <p>
            Always learning, always improving. I'm committed to strengthening my
            skills and finding better ways to build software.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
