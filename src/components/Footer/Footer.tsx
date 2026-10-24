import "./Footer.css";
import type { SectionId } from "../../App";
import myLogo from "../../assets/trans-logo.png";

type FooterProps = {
  onSectionChange?: (id: SectionId) => void;
  onOpenPrivacyPolicy?: () => void;
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Feitannx",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jerone-naling/",
  },
];

function Footer({ onSectionChange, onOpenPrivacyPolicy }: FooterProps) {
  const year = new Date().getFullYear();

  const goToHome = () => {
    onSectionChange?.("home");
  };

  const goToContact = () => {
    onSectionChange?.("contact");
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-inner">
        {/* BRAND */}
        <div className="footer-brand">
          <a
            href="#home"
            className="footer-logo"
            onClick={(event) => {
              event.preventDefault();
              goToHome();
            }}
            aria-label="Jerone Naling - Back to home"
          >
            <img src={myLogo} alt="JN. Logo" className="footer-logo-image" />
          </a>

          <p className="footer-tagline">
            Turning ideas into functional, user-friendly digital experiences.
          </p>

          <div className="footer-availability">
            <span className="footer-status-dot" />
            Open to opportunities
          </div>
        </div>

        {/* CONTACT CALL TO ACTION */}
        <div className="footer-contact">
          <p className="footer-eyebrow">HAVE A PROJECT IN MIND?</p>

          <h3 className="footer-contact-title">
            Let's build something useful.
          </h3>

          <p className="footer-contact-description">
            Have a project, opportunity, or idea to discuss? I'd be happy to
            hear from you.
          </p>

          <button
            type="button"
            className="footer-contact-button"
            onClick={goToContact}
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </button>
        </div>

        {/* SOCIAL LINKS */}
        <div className="footer-connect">
          <h3 className="footer-heading">Find me online</h3>

          <ul className="footer-social-list">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            className="footer-email-link"
            href="mailto:prof.jeronenaling@gmail.com"
          >
            prof.jeronenaling@gmail.com
          </a>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="footer-bottom">
        <p className="footer-copy">© {year} Jerone Naling. Built with care.</p>

        <button
          type="button"
          className="footer-privacy-link"
          onClick={onOpenPrivacyPolicy}
          aria-haspopup="dialog"
        >
          Privacy Policy
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
