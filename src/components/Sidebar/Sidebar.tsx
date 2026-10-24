import "./Sidebar.css";
import type { SectionId } from "../../App";
import logo from "../../assets/logo.png";

const navigation: {
  label: string;
  id: SectionId;
  icon: string;
}[] = [
  { label: "Home", id: "home", icon: "⌂" },
  { label: "About", id: "about", icon: "◎" },
  { label: "Skills", id: "skills", icon: "◇" },
  { label: "Projects", id: "projects", icon: "▤" },
  { label: "Certificates", id: "certificates", icon: "✦" },
  { label: "Contact", id: "contact", icon: "✉" },
];

type SidebarProps = {
  activeSection: SectionId;
  onSectionChange: (id: SectionId) => void;
  isCollapsed: boolean;
  onToggle: () => void;
};

function Sidebar({
  activeSection,
  onSectionChange,
  isCollapsed,
  onToggle,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${isCollapsed ? "is-collapsed" : ""}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        {!isCollapsed && (
          <div className="sidebar-brand">
            <img
              src={logo}
              alt="JN Portfolio Logo"
              className="sidebar-brand-logo"
            />

            <div className="sidebar-intro">
              <h2 className="sidebar-title">Personal Portfolio</h2>

              <p className="sidebar-description">
                Explore my work, skills, and experience.
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          className="sidebar-toggle"
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!isCollapsed}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? "☰" : "‹"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav" aria-label="Main navigation">
        {!isCollapsed && <span className="sidebar-section-label">MENU</span>}

        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`sidebar-link ${
              activeSection === item.id ? "is-active" : ""
            }`}
            onClick={(event) => {
              event.preventDefault();
              onSectionChange(item.id);
            }}
            title={isCollapsed ? item.label : undefined}
            aria-label={isCollapsed ? item.label : undefined}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            <span className="sidebar-icon" aria-hidden="true">
              {item.icon}
            </span>

            {!isCollapsed && (
              <span className="sidebar-link-label">{item.label}</span>
            )}
          </a>
        ))}
      </nav>

      {/* Availability Status */}
      <div className="sidebar-bottom" title="Available for opportunities">
        <span className="status-dot" aria-hidden="true" />

        {!isCollapsed && (
          <span className="sidebar-status-label">Open to opportunities</span>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
