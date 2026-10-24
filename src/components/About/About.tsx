import "./About.css";

const approaches = [
  {
    number: "01",
    title: "User-Focused",
    description:
      "Creating clean layouts, intuitive navigation, and responsive interfaces that are easy to use.",
  },
  {
    number: "02",
    title: "Problem-Solving",
    description:
      "Breaking challenges into smaller steps and developing practical, reliable solutions.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Improving my skills through hands-on projects, new tools, and constructive feedback.",
  },
];

const internshipHighlights = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Developed responsive web interfaces and frontend features.",
    technologies: ["React", "TypeScript", "Vite"],
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Created interface concepts and design proposals for better user experiences.",
    technologies: ["Figma", "UI Design"],
  },
  {
    number: "03",
    title: "Manual Testing",
    description:
      "Checked application features, interface behavior, and responsiveness.",
    technologies: ["UI Testing", "Feature Testing"],
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Assisted with website deployment and collaborated on development tasks.",
    technologies: ["cPanel", "Collaboration"],
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      {/* ABSTRACT GEOMETRIC BACKGROUND */}
      <div className="about-background" aria-hidden="true">
        <div className="about-background-circle" />
        <div className="about-background-square" />
        <div className="about-background-dots" />
      </div>

      <div className="about-container">
        {/* Page Header */}
        <header className="about-page-header">
          <span className="about-eyebrow">GET TO KNOW ME</span>

          <h1 className="about-page-title">
            More than just <span>code.</span>
          </h1>

          <p className="about-page-description">
            My background, professional experience, and approach to building
            meaningful digital experiences.
          </p>
        </header>

        {/* Introduction and Education */}
        <div className="about-intro-education-grid">
          {/* Introduction */}
          <section className="about-intro">
            <div className="about-intro-heading">
              <span className="about-section-number">01 / INTRODUCTION</span>
              <h2>Who I am</h2>
            </div>

            <div className="about-intro-content">
              <p className="about-intro-lead">
                I’m an Information Technology graduate passionate about{" "}
                <strong>web development</strong> and building useful,
                user-friendly digital experiences.
              </p>

              <p>
                My experience includes developing web applications, creating
                responsive interfaces, managing databases, and deploying
                projects. I enjoy combining thoughtful design with practical
                functionality to build websites that are both clear and
                effective.
              </p>

              <p>
                I’m eager to apply my technical skills, collaborate with a team,
                and continue growing as a software professional.
              </p>
            </div>

            {/* Highlighted Specialties */}
            <div className="about-specialties">
              <span className="about-specialties-label">AREAS OF INTEREST</span>

              <span className="about-specialty-tag">Web Development</span>
              <span className="about-specialty-tag">UI/UX</span>
              <span className="about-specialty-tag">Software Testing</span>
            </div>
          </section>

          {/* Education */}
          <section className="about-section-block education-section">
            <div className="about-section-heading">
              <span className="about-section-number">02 / EDUCATION</span>
              <h2>Education</h2>
            </div>

            <article className="education-card">
              <div className="education-document">
                {/* Diploma Header */}
                <div className="education-document-header">
                  <span className="education-document-overline">
                    ACADEMIC CREDENTIAL
                  </span>
                  <span className="education-document-year">2022 — 2026</span>
                </div>

                {/* Diploma Emblem */}
                <div className="education-seal" aria-hidden="true">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="24"
                      cy="20"
                      r="15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="24"
                      cy="20"
                      r="11"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M15 17.5L24 13L33 17.5L24 22L15 17.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5 19.5V24L24 27L29.5 24V19.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 33L16 43L24 39L32 43L29 33"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Academic Details */}
                <div className="education-document-body">
                  <span className="education-degree-label">
                    BACHELOR'S DEGREE
                  </span>

                  <h3>Bachelor of Science in Information Technology</h3>

                  <div className="education-ornament" aria-hidden="true">
                    <span />
                    <span className="education-ornament-diamond" />
                    <span />
                  </div>

                  <p className="education-school">Cavite State University</p>
                  <p className="education-campus">Bacoor City Campus</p>
                </div>

                {/* Diploma Footer */}
                <div className="education-document-footer">
                  <div className="education-footer-rule" />

                  <span className="education-footer-caption">
                    KNOWLEDGE · GROWTH · EXCELLENCE
                  </span>

                  <span className="education-status">
                    <span aria-hidden="true" />
                    INFORMATION TECHNOLOGY
                  </span>
                </div>
              </div>
            </article>
          </section>
        </div>

        {/* Internship Experience */}
        <section className="about-section-block internship-section">
          <div className="about-section-heading">
            <span className="about-section-number">
              03 / INTERNSHIP EXPERIENCE
            </span>

            <h2>Professional experience</h2>

            <p className="about-section-description">
              Practical experience in frontend development, interface design,
              application testing, and website deployment.
            </p>
          </div>

          <article className="internship-card">
            {/* Internship Header */}
            <div className="internship-card-header">
              <div className="internship-heading-main">
                <span className="internship-label">
                  <span className="internship-label-dot" aria-hidden="true" />
                  PROFESSIONAL EXPERIENCE
                </span>

                <h3>Frontend Developer Intern</h3>

                <a
                  href="https://kmti.com.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="internship-company-link"
                >
                  Kusakabe &amp; Maeno Tech., Inc.
                  <span className="internship-link-icon" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <div className="internship-meta">
                  <svg
                    className="internship-date-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="3.5"
                      y="5"
                      width="17"
                      height="15.5"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M7.5 3.5V7M16.5 3.5V7M3.5 9.5H20.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span>March — May 2025</span>
                </div>
              </div>

              <div className="internship-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="15"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path d="M3 8H21" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="6" cy="6" r=".7" fill="currentColor" />
                  <circle cx="8.5" cy="6" r=".7" fill="currentColor" />
                  <path
                    d="M8 12L6 14L8 16M12 16L14 12M16 12L18 14L16 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Internship Highlights */}
            <div className="internship-highlights">
              <div className="internship-highlights-heading">
                <h4>Areas of experience</h4>
                <p>
                  Key skills and responsibilities developed during my
                  internship.
                </p>
              </div>

              <div className="internship-highlights-grid">
                {internshipHighlights.map((item) => (
                  <article className="internship-highlight" key={item.number}>
                    <span className="internship-highlight-number">
                      {item.number}
                    </span>

                    <div className="internship-highlight-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>

                    <div className="internship-tags">
                      {item.technologies.map((technology) => (
                        <span className="internship-tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </article>
        </section>

        {/* Development Approach */}
        <section className="about-section-block approach-section">
          <div className="about-section-heading">
            <span className="about-section-number">04 / MY APPROACH</span>

            <h2>How I approach my work</h2>

            <p className="about-section-description">
              The principles that guide how I build, solve problems, and improve
              with every project.
            </p>
          </div>

          <div className="approach-grid">
            {approaches.map((approach) => (
              <article className="approach-card" key={approach.number}>
                <span className="approach-number">{approach.number}</span>
                <h3>{approach.title}</h3>
                <p>{approach.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
