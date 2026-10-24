import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Footer from "./components/Footer/Footer";

export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "certificates"
  | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  // Change the displayed section and scroll back to the top.
  const handleSectionChange = (id: SectionId) => {
    setActiveSection(id);

    // Allow the browser to process the section change before scrolling.
    window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  };

  const sections = {
    home: <Home onNavigate={handleSectionChange} />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    certificates: <Certificates />,
    contact: <Contact />,
  };

  return (
    <div
      className={`portfolio-layout ${
        isSidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((previous) => !previous)}
      />

      <main className="portfolio-main">
        {sections[activeSection]}

        <Footer
          onSectionChange={handleSectionChange}
          onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)}
        />
      </main>

      <PrivacyPolicy
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
    </div>
  );
}

export default App;
