import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Projects.css";

type ProjectScreenshot = {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
};

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  projectType: string;
  organization: string;
  organizationDescription: string;
  highlights: string[];
  screenshots: ProjectScreenshot[];
  previewLabel: string;
  githubUrl: string;
};

/* OSAS MIS screenshots */
const osasImageModules = import.meta.glob<string>(
  "/src/assets/Projects/osas/*.jfif",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getOsasImage(filename: string): string {
  return osasImageModules[`/src/assets/Projects/osas/${filename}.jfif`] ?? "";
}

const osasScreenshots: ProjectScreenshot[] = [
  {
    id: 1,
    title: "Home Page",
    description: "The OSAS MIS landing page and main public-facing homepage.",
    src: getOsasImage("home"),
    alt: "OSAS MIS homepage",
  },
  {
    id: 2,
    title: "About Page",
    description:
      "Information about the Office of Student Affairs and Services.",
    src: getOsasImage("about"),
    alt: "OSAS MIS about page",
  },
  {
    id: 3,
    title: "Announcements",
    description: "Campus announcements and important student information.",
    src: getOsasImage("announcements"),
    alt: "OSAS MIS announcements page",
  },
  {
    id: 4,
    title: "Sample Announcement",
    description: "An example announcement displayed on the website.",
    src: getOsasImage("sampleannouncement"),
    alt: "OSAS MIS sample announcement",
  },
  {
    id: 5,
    title: "Downloadables",
    description:
      "A page for accessing downloadable forms and student resources.",
    src: getOsasImage("downloadables"),
    alt: "OSAS MIS downloadables page",
  },
  {
    id: 6,
    title: "Student Discipline Unit",
    description: "Information and resources for the Student Discipline Unit.",
    src: getOsasImage("studentdisciplineunit"),
    alt: "OSAS MIS Student Discipline Unit page",
  },
  {
    id: 7,
    title: "OJT Program",
    description: "Information about the on-the-job training program.",
    src: getOsasImage("ojtprogram"),
    alt: "OSAS MIS OJT program page",
  },
  {
    id: 8,
    title: "Scholarship",
    description: "Scholarship information and related student opportunities.",
    src: getOsasImage("scholarship"),
    alt: "OSAS MIS scholarship page",
  },
  {
    id: 9,
    title: "Admission",
    description: "Admission information and related student guidance.",
    src: getOsasImage("admission"),
    alt: "OSAS MIS admission page",
  },
  {
    id: 10,
    title: "NSTP",
    description: "National Service Training Program information and resources.",
    src: getOsasImage("nstp"),
    alt: "OSAS MIS NSTP page",
  },
  {
    id: 11,
    title: "Clinic",
    description:
      "Campus clinic information and student health service details.",
    src: getOsasImage("clinic"),
    alt: "OSAS MIS clinic page",
  },
  {
    id: 12,
    title: "Student Development Services",
    description: "Information about student development programs and services.",
    src: getOsasImage("studentdevelopmentservices"),
    alt: "OSAS MIS Student Development Services page",
  },
  {
    id: 13,
    title: "Organizational Chart",
    description: "A visual overview of the OSAS organization and structure.",
    src: getOsasImage("orgchart"),
    alt: "OSAS MIS organizational chart",
  },
  {
    id: 14,
    title: "Login Page",
    description: "The login screen for authorized system users.",
    src: getOsasImage("login"),
    alt: "OSAS MIS login page",
  },
  {
    id: 15,
    title: "Registration Page",
    description: "The account registration interface for new users.",
    src: getOsasImage("register"),
    alt: "OSAS MIS registration page",
  },
  {
    id: 16,
    title: "Admin Newsfeed",
    description:
      "The admin workspace for reviewing and managing newsfeed content.",
    src: getOsasImage("newsfeed"),
    alt: "OSAS MIS admin newsfeed page",
  },
  {
    id: 17,
    title: "Edit Content Pages",
    description:
      "The admin interface for editing and maintaining website content pages.",
    src: getOsasImage("editcontentpages"),
    alt: "OSAS MIS admin edit content pages interface",
  },
  {
    id: 18,
    title: "Archived Records",
    description:
      "The admin archive for accessing archived system content and records.",
    src: getOsasImage("archived"),
    alt: "OSAS MIS admin archived records page",
  },
];

/* Elevate Auto screenshots */
const elevateAutoImageModules = import.meta.glob<string>(
  "/src/assets/Projects/elevate_auto/*.jfif",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getElevateAutoImage(filename: string): string {
  return (
    elevateAutoImageModules[
      `/src/assets/Projects/elevate_auto/${filename}.jfif`
    ] ?? ""
  );
}

const elevateAutoScreenshots: ProjectScreenshot[] = [
  {
    id: 1,
    title: "Home Page",
    description:
      "The Elevate Auto homepage introduces the luxury automotive brand with a premium visual presentation and a focus on automotive excellence.",
    src: getElevateAutoImage("home"),
    alt: "Elevate Auto luxury automotive homepage",
  },
  {
    id: 2,
    title: "About Page",
    description:
      "The company story highlights Elevate Auto's vision, commitment to excellence, carefully curated vehicles, and personalized customer experience.",
    src: getElevateAutoImage("about"),
    alt: "Elevate Auto company story and about page",
  },
  {
    id: 3,
    title: "Our Team — First View",
    description:
      "A team presentation introducing the people behind the Elevate Auto luxury automotive experience.",
    src: getElevateAutoImage("ourteam1"),
    alt: "Elevate Auto team section first view",
  },
  {
    id: 4,
    title: "Our Team — Second View",
    description:
      "An additional view of the team section showcasing the people who contribute to the brand's customer service and automotive vision.",
    src: getElevateAutoImage("ourteam2"),
    alt: "Elevate Auto team section second view",
  },
  {
    id: 5,
    title: "Showroom",
    description:
      "The showroom page presents the luxury vehicle collection through an automotive-focused browsing experience.",
    src: getElevateAutoImage("showroom"),
    alt: "Elevate Auto luxury vehicle showroom",
  },
  {
    id: 6,
    title: "Contact Page",
    description:
      "The contact page provides a dedicated interface for visitors to connect with the Elevate Auto team.",
    src: getElevateAutoImage("contact"),
    alt: "Elevate Auto contact page",
  },
  {
    id: 7,
    title: "Login Page",
    description:
      "The login interface provides a frontend entry point for returning users.",
    src: getElevateAutoImage("login"),
    alt: "Elevate Auto login interface",
  },
  {
    id: 8,
    title: "Registration Page",
    description:
      "The registration interface presents a frontend account sign-up experience for new users.",
    src: getElevateAutoImage("register"),
    alt: "Elevate Auto registration interface",
  },
];

/* Suite Dreams screenshots */
const suiteDreamsImageModules = import.meta.glob<string>(
  "/src/assets/Projects/suite_dreams/*.jfif",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getSuiteDreamsImage(filename: string): string {
  return (
    suiteDreamsImageModules[
      `/src/assets/Projects/suite_dreams/${filename}.jfif`
    ] ?? ""
  );
}

const suiteDreamsScreenshots: ProjectScreenshot[] = [
  {
    id: 1,
    title: "Home Page",
    description:
      "The Suite Dreams homepage introduces the hotel booking website and gives visitors an overview of its accommodation experience.",
    src: getSuiteDreamsImage("home"),
    alt: "Suite Dreams hotel booking homepage",
  },
  {
    id: 2,
    title: "About Page",
    description:
      "The about page presents information about Suite Dreams and its hotel experience.",
    src: getSuiteDreamsImage("about"),
    alt: "Suite Dreams about page",
  },
  {
    id: 3,
    title: "Rooms Page",
    description:
      "The rooms page showcases available room categories and helps visitors explore accommodation options before arranging an appointment.",
    src: getSuiteDreamsImage("rooms"),
    alt: "Suite Dreams hotel rooms page",
  },
  {
    id: 4,
    title: "Contact Page",
    description:
      "The contact page gives visitors a dedicated place to find contact information and make inquiries about the hotel.",
    src: getSuiteDreamsImage("contact"),
    alt: "Suite Dreams contact page",
  },
  {
    id: 5,
    title: "Frequently Asked Questions",
    description:
      "The FAQ page provides helpful information to address common questions about the hotel and its booking process.",
    src: getSuiteDreamsImage("faqs"),
    alt: "Suite Dreams frequently asked questions page",
  },
  {
    id: 6,
    title: "Privacy Policy",
    description:
      "The privacy policy page explains the website's approach to handling visitor information and privacy.",
    src: getSuiteDreamsImage("privacy_policy"),
    alt: "Suite Dreams privacy policy page",
  },
  {
    id: 7,
    title: "Terms and Conditions",
    description:
      "The terms and conditions page presents the policies and guidelines visitors should review when using the website.",
    src: getSuiteDreamsImage("terms_conditions"),
    alt: "Suite Dreams terms and conditions page",
  },
  {
    id: 8,
    title: "User Feedback",
    description:
      "The user feedback page provides an interface for visitors to share their comments and experiences with Suite Dreams.",
    src: getSuiteDreamsImage("user_feedback"),
    alt: "Suite Dreams user feedback page",
  },
  {
    id: 9,
    title: "Login Page",
    description:
      "The login page provides the account access interface for registered users.",
    src: getSuiteDreamsImage("login"),
    alt: "Suite Dreams login interface",
  },
  {
    id: 10,
    title: "Registration Page",
    description:
      "The registration page provides an interface for new users to create an account.",
    src: getSuiteDreamsImage("register"),
    alt: "Suite Dreams registration interface",
  },
];

/* Featured projects */
const projects: Project[] = [
  {
    number: "01",
    category: "Capstone Project",
    title: "Management Information System - CvSU Bacoor City, OSAS",
    description:
      "A centralized web-based Management Information System developed for the Office of Student Affairs and Services at Cavite State University–Bacoor City Campus. The platform brings together public-facing campus information, student services, announcements, downloadable resources, and administrative content management. It also provides login and registration pages and admin-side tools for managing newsfeed content, editing website pages, and accessing archived records.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    status: "Completed Capstone Project",
    projectType: "Academic Capstone Project",
    organization: "Office of Student Affairs and Services",
    organizationDescription: "Cavite State University–Bacoor City Campus",
    highlights: [
      "Centralized campus announcements, public information and management information",
      "Dedicated pages for all OSAS services",
      "Downloadable resources",
      "Login and registration interfaces for system users",
    ],
    screenshots: osasScreenshots,
    previewLabel: "OSAS PORTAL",
    githubUrl:
      "https://github.com/Feitannx/Management-Information-Sytem-CvSU-Bacoor-City-OSAS",
  },
  {
    number: "02",
    category: "Academic Project",
    title: "Frontend Development Project - Elevate Auto",
    description:
      "A luxury automotive company website developed as a frontend-only school project. Built around the tagline 'Where innovation meets passion in automotive excellence,' Elevate Auto presents a premium brand experience through its homepage, company story, team presentation, luxury vehicle showroom, and contact page. It also includes login and registration interfaces. The website emphasizes premium quality assurance, comprehensive vehicle history, and personalized client service. This project focuses on frontend design and implementation without a connected backend.",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    status: "Completed Academic Project",
    projectType: "Academic Frontend Development Project",
    organization: "Elevate Auto",
    organizationDescription:
      "A luxury automotive company website created as a school project.",
    highlights: [
      "Frontend-only implementation using HTML, CSS, and JavaScript",
      "Luxury automotive homepage and brand presentation",
      "Luxury vehicle showroom presentation",
      "Login and registration interfaces",
    ],
    screenshots: elevateAutoScreenshots,
    previewLabel: "ELEVATE AUTO",
    githubUrl:
      "https://github.com/Feitannx/Frontend-Development-Project-Elevate-Auto",
  },
  {
    number: "03",
    category: "Academic Project",
    title: "Booking Appointment Project - Hotel Suite Dreams",
    description:
      "Suite Dreams is an academic web development project focused on hotel appointments and booking. The website provides visitors with a dedicated platform to explore hotel rooms, learn about the hotel, and find information before arranging an appointment. It includes home, about, rooms, contact, frequently asked questions, privacy policy, terms and conditions, and user feedback pages, along with login and registration interfaces. The project demonstrates the design and development of a hotel-focused website that brings accommodation information and guest-facing features together in one place.",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
    status: "Completed Academic Project",
    projectType: "Academic Booking Appointment Project",
    organization: "Suite Dreams",
    organizationDescription:
      "An academic hotel website project centered on hotel appointments and booking.",
    highlights: [
      "Hotel appointment and booking-focused website",
      "Room browsing and accommodation information",
      "Contact page and frequently asked questions",
      "Login and registration interfaces",
      "Privacy policy and terms and conditions pages",
      "User feedback page for visitor comments",
    ],
    screenshots: suiteDreamsScreenshots,
    previewLabel: "SUITE DREAMS",
    githubUrl:
      "https://github.com/Feitannx/Booking-Appointment-Project-Hotel-Suite-Dreams",
  },
];

/* Decorative screenshot placeholder for projects without images */
function ScreenshotPlaceholder({
  compact = false,
  label = "OSAS PORTAL",
}: {
  compact?: boolean;
  label?: string;
}) {
  return (
    <div
      className={`project-screen-placeholder ${
        compact ? "project-screen-placeholder-compact" : ""
      }`}
      aria-hidden="true"
    >
      <div className="project-screen-topbar">
        <span className="project-screen-brand">
          <span className="project-screen-brand-mark">P</span>
          <span>{label}</span>
        </span>

        <span className="project-screen-topbar-dots">
          <i />
          <i />
          <i />
        </span>
      </div>

      <div className="project-screen-body">
        <aside className="project-screen-sidebar">
          <span className="project-screen-sidebar-logo">MENU</span>
          <span className="project-screen-nav active" />
          <span className="project-screen-nav" />
          <span className="project-screen-nav" />
          <span className="project-screen-nav" />
          <span className="project-screen-nav short" />
        </aside>

        <div className="project-screen-main">
          <div className="project-screen-heading">
            <div>
              <span className="project-screen-kicker">WORKSPACE</span>
              <span className="project-screen-title-line" />
            </div>
            <span className="project-screen-avatar" />
          </div>

          <div className="project-screen-welcome">
            <span className="project-screen-welcome-label">
              PROJECT OVERVIEW
            </span>
            <span className="project-screen-welcome-line" />
            <span className="project-screen-welcome-line small" />
          </div>

          <div className="project-screen-stats">
            {["A", "S", "R"].map((item) => (
              <div className="project-screen-stat" key={item}>
                <span className="project-screen-stat-icon">{item}</span>
                <span className="project-screen-stat-line" />
                <span className="project-screen-stat-number" />
              </div>
            ))}
          </div>

          <div className="project-screen-lower">
            <div className="project-screen-panel">
              <span className="project-screen-panel-heading" />
              <span className="project-screen-panel-line" />
              <span className="project-screen-panel-line" />
              <span className="project-screen-panel-line short" />
            </div>

            <div className="project-screen-panel second">
              <span className="project-screen-panel-heading" />
              <div className="project-screen-chart">
                {Array.from({ length: 7 }, (_, index) => (
                  <i key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeProjectNumber, setActiveProjectNumber] = useState<string | null>(
    null,
  );
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  /* Overview See More / See Less state */
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

  const activeProject =
    projects.find((item) => item.number === activeProjectNumber) ?? null;

  const currentScreenshots = activeProject?.screenshots ?? [];
  const currentScreenshot = currentScreenshots[activeScreenshot];

  const openProject = (projectNumber: string) => {
    setActiveProjectNumber(projectNumber);
    setActiveScreenshot(0);
    setIsOverviewExpanded(false);
  };

  const closeProject = useCallback(() => {
    setActiveProjectNumber(null);
    setIsOverviewExpanded(false);
  }, []);

  const showPreviousScreenshot = useCallback(() => {
    const screenshotCount = currentScreenshots.length;

    if (screenshotCount < 2) return;

    setActiveScreenshot((current) =>
      current === 0 ? screenshotCount - 1 : current - 1,
    );
  }, [currentScreenshots.length]);

  const showNextScreenshot = useCallback(() => {
    const screenshotCount = currentScreenshots.length;

    if (screenshotCount < 2) return;

    setActiveScreenshot((current) =>
      current === screenshotCount - 1 ? 0 : current + 1,
    );
  }, [currentScreenshots.length]);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      } else if (event.key === "ArrowLeft") {
        showPreviousScreenshot();
      } else if (event.key === "ArrowRight") {
        showNextScreenshot();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, closeProject, showNextScreenshot, showPreviousScreenshot]);

  return (
    <section className="projects-section" id="projects">
      {/* ABSTRACT GEOMETRIC BACKGROUND — MATCHES HOME */}
      <div className="projects-background" aria-hidden="true">
        <span className="projects-background-circle" />
        <span className="projects-background-square" />
        <span className="projects-background-dots" />
      </div>

      <div className="projects-container">
        {/* SECTION HEADER */}
        <header className="projects-header">
          <span className="projects-eyebrow">SELECTED WORK</span>

          <h1 className="projects-title">
            Projects<span>.</span>
          </h1>

          <p className="projects-subtitle">
            A closer look at my projects, the systems behind them, and the
            technologies used to bring them to life.
          </p>
        </header>

        {/* PROJECT ARCHIVE TOOLBAR */}
        <div className="projects-toolbar">
          <div className="projects-toolbar-label">
            <span className="projects-toolbar-line" />
            <span>FEATURED PROJECTS</span>
          </div>

          <span className="projects-count">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {projects.map((item) => (
            <article className="project-card" key={item.number}>
              <div className="project-card-top">
                <span
                  className={`project-category ${
                    item.number === "01"
                      ? "project-category-capstone"
                      : "project-category-sample"
                  }`}
                >
                  {item.category}
                </span>

                <span className="project-number">{item.number}</span>
              </div>

              <button
                className="project-preview-button"
                type="button"
                onClick={() => openProject(item.number)}
                aria-label={`View screenshots of ${item.title}`}
              >
                <div className="project-card-preview">
                  {item.screenshots[0]?.src ? (
                    <img
                      className="project-card-preview-image"
                      src={item.screenshots[0].src}
                      alt={item.screenshots[0].alt}
                      loading="lazy"
                    />
                  ) : (
                    <ScreenshotPlaceholder label={item.previewLabel} />
                  )}

                  <span className="project-preview-overlay">
                    <span className="project-preview-icon" aria-hidden="true">
                      ↗
                    </span>
                    <span>Explore Project</span>
                  </span>
                </div>
              </button>

              <div className="project-card-content">
                <span className="project-status">
                  <span className="project-status-dot" />
                  {item.status}
                </span>

                <h2 className="project-name">{item.title}</h2>
              </div>

              <div className="project-tech-area">
                <span className="project-tech-heading">TECHNOLOGIES USED</span>

                <div className="project-technologies">
                  {item.technologies.map((technology) => (
                    <span className="project-tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                {/* PROJECT DETAILS AND GITHUB REPOSITORY ACTIONS */}
                <div className="project-card-actions">
                  <button
                    className="project-view-button"
                    type="button"
                    onClick={() => openProject(item.number)}
                    aria-label={`View details for ${item.title}`}
                  >
                    <span>View Project Details</span>
                    <span className="project-button-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </button>

                  <a
                    className="project-github-button"
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open GitHub repository for ${item.title}`}
                  >
                    <svg
                      className="project-github-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.31 3.43 1.74.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.6 5.23-5.08 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <footer className="projects-footer">
          <span className="projects-footer-mark" aria-hidden="true">
            +
          </span>

          <p>
            Focused on building practical web solutions through thoughtful
            design and development.
          </p>
        </footer>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {activeProject &&
        currentScreenshot &&
        createPortal(
          <div
            className="project-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >
            <section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              {/* MODAL HEADER */}
              <header className="project-modal-header">
                <div className="project-modal-heading">
                  <span className="project-modal-eyebrow">
                    PROJECT DETAILS / {activeProject.number}
                  </span>

                  <h2 id="project-modal-title">{activeProject.title}</h2>

                  <p>
                    {activeProject.projectType} ·{" "}
                    {activeProject.organizationDescription}
                  </p>
                </div>

                <button
                  className="project-modal-close"
                  type="button"
                  onClick={closeProject}
                  aria-label="Close project details"
                  autoFocus
                >
                  ×
                </button>
              </header>

              {/* MODAL BODY */}
              <div className="project-modal-body">
                {/* SCREENSHOT GALLERY */}
                <div className="project-gallery">
                  <div className="project-gallery-heading">
                    <div>
                      <span className="project-detail-label">
                        PROJECT GALLERY
                      </span>
                    </div>

                    <span className="project-gallery-count">
                      {String(activeScreenshot + 1).padStart(2, "0")} /{" "}
                      {String(currentScreenshots.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="project-gallery-stage">
                    {currentScreenshot.src ? (
                      <img
                        className="project-gallery-image"
                        src={currentScreenshot.src}
                        alt={currentScreenshot.alt}
                      />
                    ) : (
                      <ScreenshotPlaceholder
                        label={activeProject.previewLabel}
                      />
                    )}

                    <button
                      className="project-gallery-arrow project-gallery-previous"
                      type="button"
                      onClick={showPreviousScreenshot}
                      aria-label="Previous screenshot"
                      disabled={currentScreenshots.length < 2}
                    >
                      ‹
                    </button>

                    <button
                      className="project-gallery-arrow project-gallery-next"
                      type="button"
                      onClick={showNextScreenshot}
                      aria-label="Next screenshot"
                      disabled={currentScreenshots.length < 2}
                    >
                      ›
                    </button>

                    <span className="project-gallery-stage-label">
                      {currentScreenshot.title}
                    </span>
                  </div>

                  {/* CENTERED SCREENSHOT CAPTION */}
                  <div className="project-gallery-caption">
                    <span className="project-gallery-caption-number">
                      SCREEN {String(activeScreenshot + 1).padStart(2, "0")}
                    </span>

                    <p>{currentScreenshot.description}</p>
                  </div>

                  {/* SHOW UP TO EIGHT SCREENSHOT THUMBNAILS */}
                  <div
                    className="project-gallery-thumbnails"
                    aria-label="Choose a project screenshot"
                  >
                    {currentScreenshots.slice(0, 8).map((screenshot, index) => {
                      const remainingCount = currentScreenshots.length - 8;
                      const showMoreOverlay = index === 7 && remainingCount > 0;

                      return (
                        <button
                          className={`project-gallery-thumbnail ${
                            activeScreenshot === index
                              ? "project-gallery-thumbnail-active"
                              : ""
                          } ${
                            showMoreOverlay
                              ? "project-gallery-thumbnail-more"
                              : ""
                          }`}
                          type="button"
                          key={screenshot.id}
                          onClick={() => setActiveScreenshot(index)}
                          aria-label={
                            showMoreOverlay
                              ? `View screenshot 8. ${remainingCount} additional screenshots available.`
                              : `View screenshot ${index + 1}: ${screenshot.title}`
                          }
                          aria-pressed={activeScreenshot === index}
                        >
                          <span className="project-thumbnail-preview">
                            {screenshot.src ? (
                              <img src={screenshot.src} alt="" loading="lazy" />
                            ) : (
                              <ScreenshotPlaceholder
                                compact
                                label={activeProject.previewLabel}
                              />
                            )}

                            {showMoreOverlay && (
                              <span className="project-thumbnail-more-overlay">
                                +{remainingCount}
                              </span>
                            )}
                          </span>

                          <span className="project-thumbnail-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* PROJECT INFORMATION */}
                <aside className="project-detail-panel">
                  {/* PROJECT OVERVIEW — SEE MORE / SEE LESS */}
                  <div className="project-detail-block">
                    <span className="project-detail-label">OVERVIEW</span>

                    <p
                      className={`project-detail-description ${
                        isOverviewExpanded
                          ? "project-detail-description-expanded"
                          : ""
                      }`}
                    >
                      {activeProject.description}
                    </p>

                    {activeProject.description.length > 220 && (
                      <button
                        className="project-overview-toggle"
                        type="button"
                        onClick={() =>
                          setIsOverviewExpanded((current) => !current)
                        }
                        aria-expanded={isOverviewExpanded}
                      >
                        <span>
                          {isOverviewExpanded ? "See Less" : "See More"}
                        </span>

                        <span
                          className={`project-overview-toggle-icon ${
                            isOverviewExpanded
                              ? "project-overview-toggle-icon-expanded"
                              : ""
                          }`}
                          aria-hidden="true"
                        >
                          ↓
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="project-detail-divider" />

                  <div className="project-detail-block">
                    <span className="project-detail-label">PROJECT TYPE</span>
                    <p className="project-detail-value">
                      {activeProject.projectType}
                    </p>
                  </div>

                  <div className="project-detail-block">
                    <span className="project-detail-label">ORGANIZATION</span>
                    <p className="project-detail-value">
                      {activeProject.organization}
                    </p>
                    <p className="project-detail-muted">
                      {activeProject.organizationDescription}
                    </p>
                  </div>

                  <div className="project-detail-block">
                    <span className="project-detail-label">KEY FEATURES</span>

                    <ul className="project-feature-list">
                      {activeProject.highlights.map((highlight) => (
                        <li key={highlight}>
                          <span aria-hidden="true">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-detail-divider" />

                  <div className="project-detail-block">
                    <span className="project-detail-label">TECH STACK</span>

                    <div className="project-detail-technologies">
                      {activeProject.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-detail-bottom">
                    <span className="project-detail-bottom-mark">JN.</span>
                    <span>DESIGNED & DEVELOPED AS A PROJECT</span>
                  </div>
                </aside>
              </div>

              {/* MODAL FOOTER */}
              <footer className="project-modal-footer">
                <span className="project-modal-footer-status">
                  <span className="project-modal-footer-dot" />
                  {activeProject.status}
                </span>

                {/* PROMINENT GITHUB REPOSITORY LINK */}
                <a
                  className="project-modal-github-button"
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open GitHub repository for ${activeProject.title}`}
                >
                  <svg
                    className="project-github-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.31 3.43 1.74.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.6 5.23-5.08 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  <span>View GitHub Repository</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </footer>
            </section>
          </div>,
          document.body,
        )}
    </section>
  );
}

export default Projects;
