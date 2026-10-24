import "./Home.css";
import profileImage from "../../assets/profile/me1.jfif";

import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

type HomeProps = {
  onNavigate: (section: "projects" | "contact") => void;
};

const technologies = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "Django", Icon: SiDjango },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Figma", Icon: SiFigma },
];

function Home({ onNavigate }: HomeProps) {
  return (
    <section id="home" className="home-section">
      {/* ABSTRACT GEOMETRIC BACKGROUND */}
      <div className="home-background" aria-hidden="true">
        <span className="home-background-circle" />
        <span className="home-background-square" />
        <span className="home-background-dots" />
      </div>

      <div className="home-container">
        {/* Introduction */}
        <div className="home-content">
          <div className="home-availability">
            <span className="home-status-dot" />
            Open to Opportunities
          </div>

          <p className="home-greeting">Hello, I'm</p>

          <h1 className="home-name">
            Jerone <span>Naling.</span>
          </h1>

          <h2 className="home-role">Web Developer</h2>

          <p className="home-description">
            I build responsive, user-friendly web applications with a focus on
            clean interfaces and practical functionality. From frontend
            development to Django-powered systems, I enjoy turning ideas into
            digital solutions that solve real problems.
          </p>

          <div className="home-actions">
            <button
              type="button"
              className="home-button home-button-primary"
              onClick={() => onNavigate("projects")}
            >
              View My Projects
              <span aria-hidden="true">↗</span>
            </button>

            <button
              type="button"
              className="home-button home-button-secondary"
              onClick={() => onNavigate("contact")}
            >
              Contact Me
            </button>
          </div>

          {/* Technology logos */}
          <div className="home-technologies">
            <p className="home-technologies-label">TOOLS & TECHNOLOGIES</p>

            <div className="home-tech-list">
              {technologies.map(({ name, Icon }) => (
                <div className="home-tech-item" key={name} title={name}>
                  <Icon className="home-tech-icon" aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile visual */}
        <div className="home-visual">
          <div className="home-profile-card">
            <div className="home-profile-top">
              <span className="home-profile-label">PROFILE</span>

              <span className="home-profile-indicator">
                <span />
                Developer
              </span>
            </div>

            <div className="home-avatar">
              <img
                src={profileImage}
                alt="Jerone Naling"
                className="home-avatar-image"
              />
            </div>

            <div className="home-profile-info">
              <h3>Jerone Naling</h3>
              <p>Web Developer</p>
            </div>

            <div className="home-profile-divider" />

            <div className="home-profile-details">
              <div>
                <span>EXPERIENCE</span>
                <strong>Frontend Developer Intern</strong>
              </div>

              <div>
                <span>FEATURED PROJECT</span>
                <strong>OSAS Management Information System</strong>
              </div>
            </div>

            <div className="home-profile-footer">
              <span className="home-footer-mark">JN.</span>
              <span>Design. Develop. Improve.</span>
            </div>
          </div>

          <div
            className="home-decoration home-decoration-one"
            aria-hidden="true"
          />

          <div
            className="home-decoration home-decoration-two"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="home-bottom">
        <span>INFORMATION TECHNOLOGY</span>
        <span className="home-bottom-divider" />
        <span>BASED IN THE PHILIPPINES</span>
      </div>
    </section>
  );
}

export default Home;
