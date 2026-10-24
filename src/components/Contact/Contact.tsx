import { useState, type ChangeEvent, type FormEvent } from "react";
import "./Contact.css";

const CONTACT_EMAIL = "prof.jeronenaling@gmail.com";
const GITHUB_URL = "https://github.com/Feitannx";
const LINKEDIN_URL = "https://www.linkedin.com/in/jerone-naling/";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Hello Jerone,\n\n${formData.message}\n\n` +
        `Best regards,\n${formData.name}\n\n` +
        `Reply to: ${formData.email}`,
    );

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section" id="contact">
      {/* ABSTRACT GEOMETRIC BACKGROUND */}
      <div className="contact-background" aria-hidden="true">
        <span className="contact-background-circle" />
        <span className="contact-background-square" />
        <span className="contact-background-dots" />
      </div>

      <div className="contact-container">
        {/* Section heading */}
        <header className="contact-header">
          <span className="contact-eyebrow">LET'S CONNECT</span>

          <h1 className="contact-title">
            Get in touch<span>.</span>
          </h1>

          <p className="contact-subtitle">
            Have a project in mind, a job opportunity, or simply want to
            connect? Feel free to reach out. I’d be happy to hear from you.
          </p>
        </header>

        {/* Main contact layout */}
        <div className="contact-layout">
          {/* Left column */}
          <aside className="contact-info">
            <div className="contact-info-top">
              <span className="contact-info-label">CONTACT INFORMATION</span>

              <h2 className="contact-info-title">
                Let’s start a
                <br />
                conversation.
              </h2>

              <p className="contact-info-description">
                I’m open to opportunities where I can contribute my skills,
                learn from others, and build meaningful digital experiences.
              </p>
            </div>

            {/* Email */}
            <a className="contact-detail-card" href={`mailto:${CONTACT_EMAIL}`}>
              <span className="contact-detail-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M4 7L12 13L20 7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="contact-detail-content">
                <span className="contact-detail-label">EMAIL</span>
                <span className="contact-detail-value">{CONTACT_EMAIL}</span>
              </span>

              <span className="contact-detail-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            {/* GitHub */}
            <a
              className="contact-detail-card"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12C2.5 16.2 5.22 19.76 8.99 21.02C9.46 21.1 9.63 20.81 9.63 20.56V18.8C6.99 19.37 6.44 17.68 6.44 17.68C6.01 16.58 5.39 16.29 5.39 16.29C4.53 15.7 5.46 15.71 5.46 15.71C6.41 15.78 6.91 16.69 6.91 16.69C7.75 18.13 9.12 17.72 9.66 17.48C9.75 16.86 9.99 16.44 10.25 16.2C8.14 15.96 5.92 15.14 5.92 11.5C5.92 10.46 6.29 9.61 6.93 8.94C6.83 8.7 6.5 7.73 7.03 6.42C7.03 6.42 7.81 6.17 9.61 7.39C10.35 7.19 11.17 7.09 12 7.09C12.83 7.09 13.65 7.19 14.39 7.39C16.19 6.17 16.97 6.42 16.97 6.42C17.5 7.73 17.17 8.7 17.07 8.94C17.71 9.61 18.08 10.46 18.08 11.5C18.08 15.15 15.86 15.95 13.74 16.19C14.07 16.48 14.37 17.05 14.37 17.92V20.56C14.37 20.81 14.54 21.1 15.02 21.02C18.78 19.76 21.5 16.2 21.5 12C21.5 6.75 17.25 2.5 12 2.5Z"
                  />
                </svg>
              </span>

              <span className="contact-detail-content">
                <span className="contact-detail-label">GITHUB</span>
                <span className="contact-detail-value">
                  github.com/Feitannx
                </span>
              </span>

              <span className="contact-detail-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            {/* LinkedIn */}
            <a
              className="contact-detail-card"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.2 3.5C4.1 3.5 3.2 4.4 3.2 5.5C3.2 6.6 4.1 7.5 5.2 7.5C6.3 7.5 7.2 6.6 7.2 5.5C7.2 4.4 6.3 3.5 5.2 3.5ZM3.6 9H6.8V20.5H3.6V9ZM9.1 9H12.2V10.6H12.3C12.7 9.8 13.8 8.7 15.6 8.7C19 8.7 19.6 10.9 19.6 13.8V20.5H16.4V14.6C16.4 13.2 16.4 11.5 14.6 11.5C12.8 11.5 12.4 13 12.4 14.5V20.5H9.1V9Z" />
                </svg>
              </span>

              <span className="contact-detail-content">
                <span className="contact-detail-label">LINKEDIN</span>
                <span className="contact-detail-value">
                  linkedin.com/in/jerone-naling/
                </span>
              </span>

              <span className="contact-detail-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            {/* Availability */}
            <div className="contact-availability">
              <span className="contact-availability-dot" />

              <span className="contact-availability-text">
                <strong>Open to opportunities</strong>
                <small>Let’s discuss what we can build together.</small>
              </span>
            </div>

            <div className="contact-info-footer">
              <span>LOCATION</span>
              <span>Philippines</span>
            </div>
          </aside>

          {/* Right column */}
          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <span className="contact-form-label">SEND AN INQUIRY</span>

              <h2>Tell me about it.</h2>

              <p>
                Share a few details below, and I’ll be ready to hear what you
                have in mind.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Your name <span>*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Juan Dela Cruz"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Your email <span>*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Subject <span>*</span>
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Job opportunity, project inquiry, etc."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message <span>*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little more about what you have in mind..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-bottom">
                <p className="contact-form-note">
                  <span aria-hidden="true">↳</span>
                  Opens your email application to send the message.
                </p>

                <button className="contact-submit-button" type="submit">
                  <span>Prepare email</span>
                  <span className="contact-submit-arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <footer className="contact-footer">
          <span className="contact-footer-label">HAVE AN IDEA?</span>
          <p>Good things start with a conversation. Let’s make yours happen.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
