import { useEffect } from "react";
import "./PrivacyPolicy.css";

type PrivacyPolicyProps = {
  isOpen: boolean;
  onClose: () => void;
};

function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="privacy-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="privacy-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
        aria-describedby="privacy-modal-description"
      >
        <header className="privacy-modal-header">
          <div className="privacy-modal-heading">
            <span className="privacy-eyebrow">YOUR PRIVACY MATTERS</span>

            <h2 id="privacy-modal-title">Privacy Policy</h2>

            <p id="privacy-modal-description">
              Learn how your information is handled when you visit my portfolio
              or get in touch.
            </p>
          </div>

          <button
            type="button"
            className="privacy-modal-close"
            onClick={onClose}
            aria-label="Close Privacy Policy"
            autoFocus
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="privacy-modal-content">
          <div className="privacy-policy-updated">
            <span className="privacy-updated-dot" />
            <span>Last updated: October 21, 2026</span>
          </div>

          <p className="privacy-intro">
            This Privacy Policy explains how information may be handled when you
            visit my personal portfolio website, explore my projects, or contact
            me about a professional opportunity. My goal is to respect your
            privacy and handle information responsibly.
          </p>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">01</span>
            <div className="privacy-section-body">
              <h3>Information You Provide</h3>
              <p>
                If you contact me through the email link or contact form, you
                may choose to provide your name, email address, subject, and
                message. Please avoid including sensitive personal information
                that is not necessary for your inquiry.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">02</span>
            <div className="privacy-section-body">
              <h3>How Contact Works</h3>
              <p>
                The contact form uses your device's configured email application
                to prepare a message. It does not directly submit information to
                a portfolio database or send a message through a portfolio
                server. You decide whether to send the prepared email.
              </p>
              <p>
                If you send an email, the information in it will be processed by
                the email services involved in delivering and receiving that
                message.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">03</span>
            <div className="privacy-section-body">
              <h3>How Information Is Used</h3>
              <p>
                Information you voluntarily send may be used to respond to your
                inquiry, discuss a project or job opportunity, and maintain
                relevant professional communication.
              </p>
              <p>
                Your information is not intentionally collected through the
                portfolio contact form for advertising or sold to third parties.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">04</span>
            <div className="privacy-section-body">
              <h3>Data Storage and Security</h3>
              <p>
                The portfolio contact form does not store submissions in a
                website database. However, messages you send may remain in your
                email account, the recipient's inbox, backups, or the systems of
                email and hosting providers.
              </p>
              <p>
                Reasonable care is taken to protect information within my
                control, but no website or electronic communication method can
                be guaranteed completely secure.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">05</span>
            <div className="privacy-section-body">
              <h3>Cookies and Technical Data</h3>
              <p>
                This portfolio is not designed to request sensitive personal
                information. Hosting infrastructure or your browser may process
                technical information, such as IP addresses, browser details, or
                server logs, for security, reliability, and troubleshooting
                purposes.
              </p>
              <p>
                If analytics, cookies, or other tracking technologies are added
                in the future, this policy should be updated to explain their
                use.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">06</span>
            <div className="privacy-section-body">
              <h3>Third-Party Websites</h3>
              <p>
                This website may link to external services such as GitHub,
                LinkedIn, or other project websites. Those services operate
                under their own privacy policies and terms. I do not control how
                third-party websites collect or use your information.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">07</span>
            <div className="privacy-section-body">
              <h3>Data Retention</h3>
              <p>
                Emails and other communications may be retained for as long as
                reasonably necessary to respond to inquiries, maintain
                professional records, or meet applicable legal obligations. You
                may request that I delete information under my control, subject
                to any applicable retention requirements.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">08</span>
            <div className="privacy-section-body">
              <h3>Your Privacy Rights</h3>
              <p>
                Depending on applicable law, you may have rights to request
                access to, correction of, or deletion of personal information
                that I hold about you, or to raise a concern about how it is
                handled.
              </p>
              <p>
                Where applicable, the Philippine Data Privacy Act of 2012
                (Republic Act No. 10173) and its implementing rules may apply.
                Requests can be sent using the contact details below.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">09</span>
            <div className="privacy-section-body">
              <h3>Children's Privacy</h3>
              <p>
                This portfolio is intended for general professional and
                informational use. Please do not submit personal information
                belonging to a child unless you are authorized to provide it and
                the information is necessary for your inquiry.
              </p>
            </div>
          </article>

          <article className="privacy-policy-section">
            <span className="privacy-section-number">10</span>
            <div className="privacy-section-body">
              <h3>Changes to This Policy</h3>
              <p>
                This Privacy Policy may be updated when the website's features,
                services, or applicable requirements change. The latest revision
                date will be displayed at the top of this policy.
              </p>
            </div>
          </article>

          <div className="privacy-policy-contact">
            <div className="privacy-contact-icon" aria-hidden="true">
              @
            </div>

            <div className="privacy-contact-copy">
              <h3>Questions about your privacy?</h3>
              <p>
                For questions or privacy-related requests, contact me using the
                email address below.
              </p>
              <a href="mailto:prof.jeronenaling@gmail.com">
                prof.jeronenaling@gmail.com
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="privacy-modal-footer">
          <span>Jerone Naling · Personal Portfolio</span>

          <button
            type="button"
            className="privacy-done-button"
            onClick={onClose}
          >
            Close policy
            <span aria-hidden="true">✓</span>
          </button>
        </footer>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
