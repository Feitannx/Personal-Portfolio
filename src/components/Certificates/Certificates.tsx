import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent, WheelEvent } from "react";
import "./Certificates.css";

import coaImage from "../../assets/Certificates/COA.jfif";
import intelImage from "../../assets/Certificates/Intel.jfif";
import digiBayanihanImage from "../../assets/Certificates/DigiBayanihan.jfif";
import ciscoDAImage from "../../assets/Certificates/CiscoDA.jfif";

type Certificate = {
  number: string;
  category: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  status: string;
  image: string;
  imageAlt: string;
};

type PanPosition = {
  x: number;
  y: number;
};

const certificates: Certificate[] = [
  {
    number: "01",
    category: "Appreciation",
    title: "Certificate of Appreciation",
    issuer: "CvSU - Bacoor City, Department of Computer Studies",
    date: "April 13, 2024",
    description:
      "Awarded for serving as the BSIT 2-6 Class Representative in recognition of outstanding service in fostering a positive learning environment and a strong classroom community during DCS Week 2024, themed “Hello World: Refresh. Reconnect. Reload.”",
    status: "Awarded",
    image: coaImage,
    imageAlt:
      "Certificate of Appreciation from Cavite State University – Bacoor Campus, Department of Computer Studies, recognizing service as BSIT 2-6 Class Representative, awarded April 13, 2024, during DCS Week 2024.",
  },
  {
    number: "02",
    category: "Training",
    title: "Intel Easy Steps – Certificate of Completion",
    issuer: "TEVSAPHIL – Intel Easy Steps, ACTEC Bacoor",
    date: "July 2, 2021",
    description:
      "Successfully completed the TEVSAPHIL – Intel Easy Steps Computer Applying Skills to Business and Entrepreneurship program, covering Introduction to Entrepreneurship, Money Management and Finances, Developing a Marketing Plan, Branding, Marketing Material, Online Marketing, and Collecting Feedback Online.",
    status: "Completed",
    image: intelImage,
    imageAlt:
      "Certificate of Completion for the TEVSAPHIL – Intel Easy Steps Computer Applying Skills to Business and Entrepreneurship program, issued at ACTEC Bacoor, Province of Cavite, Philippines, on July 2, 2021.",
  },
  {
    number: "03",
    category: "Training",
    title: "DigiBayanihan Basic Digital Literacy Workshop",
    issuer: "DigiBayanihan, ACTEC Bacoor, supported by Google.org",
    date: "July 2, 2021",
    description:
      "Successfully completed the DigiBayanihan Basic Digital Literacy Workshop, covering the basic use of YouTube and Google Productivity Tools. The program was supported by Google.org.",
    status: "Completed",
    image: digiBayanihanImage,
    imageAlt:
      "Certificate of Completion for the DigiBayanihan Basic Digital Literacy Workshop, covering the basic use of YouTube and Google Productivity Tools, issued at ACTEC Bacoor, Province of Cavite, Philippines, on July 2, 2021, with support from Google.org.",
  },
  {
    number: "04",
    category: "Certification",
    title: "Digital Awareness",
    issuer: "Cisco Networking Academy",
    date: "October 22, 2025",
    description:
      "Successfully completed the Digital Awareness course offered by Networking Academy through the Cisco Networking Academy Program.",
    status: "Completed",
    image: ciscoDAImage,
    imageAlt:
      "Certificate of Completion for the Digital Awareness course offered through the Cisco Networking Academy Program, completed on October 22, 2025.",
  },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.2;

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const [zoomLevel, setZoomLevel] = useState(MIN_ZOOM);
  const [pan, setPan] = useState<PanPosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef<{
    pointerX: number;
    pointerY: number;
    panX: number;
    panY: number;
  } | null>(null);

  const isZoomed = zoomLevel > MIN_ZOOM;

  const resetViewer = () => {
    setZoomLevel(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
    dragStartRef.current = null;
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    resetViewer();
  };

  const openModal = (certificate: Certificate) => {
    resetViewer();
    setSelectedCertificate(certificate);
  };

  const zoomTo = (nextZoom: number) => {
    const clampedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));

    setZoomLevel(clampedZoom);

    if (clampedZoom === MIN_ZOOM) {
      setPan({ x: 0, y: 0 });
      setIsDragging(false);
      dragStartRef.current = null;
    }
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    const zoomChange = event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
    const nextZoom = Math.min(
      MAX_ZOOM,
      Math.max(MIN_ZOOM, zoomLevel + zoomChange),
    );

    zoomTo(Number(nextZoom.toFixed(2)));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (zoomLevel <= MIN_ZOOM) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);

    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };

    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current || zoomLevel <= MIN_ZOOM) return;

    const drag = dragStartRef.current;

    setPan({
      x: drag.panX + event.clientX - drag.pointerX,
      y: drag.panY + event.clientY - drag.pointerY,
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    dragStartRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
        setZoomLevel(MIN_ZOOM);
        setPan({ x: 0, y: 0 });
        setIsDragging(false);
        dragStartRef.current = null;
        return;
      }

      if (event.key === "+" || event.key === "=") {
        setZoomLevel((previous) =>
          Math.min(MAX_ZOOM, Number((previous + ZOOM_STEP).toFixed(2))),
        );
      }

      if (event.key === "-") {
        const nextZoom = Math.max(
          MIN_ZOOM,
          Number((zoomLevel - ZOOM_STEP).toFixed(2)),
        );

        setZoomLevel(nextZoom);

        if (nextZoom === MIN_ZOOM) {
          setPan({ x: 0, y: 0 });
          setIsDragging(false);
          dragStartRef.current = null;
        }
      }

      if (event.key === "0") {
        setZoomLevel(MIN_ZOOM);
        setPan({ x: 0, y: 0 });
        setIsDragging(false);
        dragStartRef.current = null;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate, zoomLevel]);

  return (
    <section className="certificates-section" id="certificates">
      {/* ABSTRACT GEOMETRIC BACKGROUND */}
      <div className="certificates-background" aria-hidden="true">
        <div className="certificates-background-circle" />
        <div className="certificates-background-square" />
        <div className="certificates-background-dots" />
      </div>

      <div className="certificates-container">
        {/* Section Header */}
        <header className="certificates-header">
          <span className="certificates-eyebrow">
            LEARNING &amp; DEVELOPMENT
          </span>

          <h1 className="certificates-title">
            Certificates<span>.</span>
          </h1>

          <p className="certificates-subtitle">
            A collection of certificates, training programs, and learning
            experiences that reflect my commitment to continuous growth in
            technology and professional development.
          </p>
        </header>

        {/* Section Toolbar */}
        <div className="certificates-toolbar">
          <div className="certificates-toolbar-label">
            <span className="certificates-toolbar-line" />
            <span>MY CREDENTIALS</span>
          </div>

          <span className="certificates-count">
            {String(certificates.length).padStart(2, "0")} CERTIFICATES
          </span>
        </div>

        {/* Certificate Grid */}
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.number}>
              {/* Certificate Image */}
              <button
                type="button"
                className="certificate-image-button"
                onClick={() => openModal(certificate)}
                aria-label={`Preview ${certificate.title}`}
              >
                <div className="certificate-image-wrapper">
                  <img
                    className="certificate-image"
                    src={certificate.image}
                    alt={certificate.imageAlt}
                    loading="lazy"
                  />

                  <span className="certificate-image-overlay">
                    <span className="certificate-image-overlay-icon">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M15 3h6v6M10 14 21 3M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span>Preview Certificate</span>
                  </span>
                </div>
              </button>

              {/* Card Content */}
              <div className="certificate-card-content">
                <div className="certificate-card-meta">
                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                  <span className="certificate-number">
                    {certificate.number}
                  </span>
                </div>

                <h2 className="certificate-name">{certificate.title}</h2>

                {/* Issuer and Date */}
                <div className="certificate-card-info">
                  <div className="certificate-info-item">
                    <span className="certificate-info-label">ISSUED BY</span>

                    <span className="certificate-info-value">
                      {certificate.issuer}
                    </span>
                  </div>

                  <div className="certificate-info-item certificate-info-date">
                    <span className="certificate-info-label">DATE</span>

                    <span className="certificate-info-value">
                      {certificate.date}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="certificate-card-footer">
                  <span className="certificate-status">
                    <span className="certificate-status-dot" />
                    {certificate.status}
                  </span>

                  <button
                    className="certificate-view-button"
                    type="button"
                    onClick={() => openModal(certificate)}
                    aria-label={`View details for ${certificate.title}`}
                  >
                    <span>View Certificate</span>

                    <span
                      className="certificate-button-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <footer className="certificates-footer">
          <span className="certificates-footer-mark" aria-hidden="true">
            +
          </span>

          <p>
            Always learning, always improving. More credentials coming soon.
          </p>
        </footer>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertificate &&
        createPortal(
          <div
            className="certificate-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <section
              className="certificate-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
            >
              {/* Modal Header */}
              <header className="certificate-modal-header">
                <div className="certificate-modal-heading">
                  <span className="certificate-modal-eyebrow">
                    MY PORTFOLIO
                  </span>

                  <h2
                    className="certificate-modal-title"
                    id="certificate-modal-title"
                  >
                    Certificate Details
                  </h2>
                </div>

                <button
                  type="button"
                  className="certificate-modal-close"
                  onClick={closeModal}
                  aria-label="Close certificate viewer"
                  autoFocus
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="m18 6-12 12M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </header>

              {/* Modal Main Content */}
              <div className="certificate-modal-main">
                {/* Left: Certificate Preview */}
                <div className="certificate-viewer-panel">
                  <div className="certificate-viewer-toolbar">
                    <div className="certificate-viewer-label">
                      <span className="certificate-viewer-live-dot" />
                      <span>DOCUMENT PREVIEW</span>
                    </div>

                    <div className="certificate-viewer-actions">
                      <span className="certificate-viewer-format">IMAGE</span>

                      <span className="certificate-zoom-level">
                        {Math.round(zoomLevel * 100)}%
                      </span>

                      <button
                        type="button"
                        className={`certificate-zoom-button ${
                          isZoomed ? "is-active" : ""
                        }`}
                        onClick={() => zoomTo(isZoomed ? MIN_ZOOM : 2)}
                        aria-pressed={isZoomed}
                        aria-label={
                          isZoomed
                            ? "Fit certificate to viewer"
                            : "Zoom in on certificate"
                        }
                      >
                        {isZoomed ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              cx="10.8"
                              cy="10.8"
                              r="6.8"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />
                            <path
                              d="m16 16 4.5 4.5M10.8 7.8v6M7.8 10.8h6"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        <span>{isZoomed ? "Fit" : "Zoom"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Zoomable and Draggable Certificate Canvas */}
                  <div
                    className={`certificate-viewer-canvas ${
                      isZoomed ? "is-zoomed" : ""
                    } ${isDragging ? "is-dragging" : ""}`}
                    onWheel={handleWheel}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onLostPointerCapture={() => {
                      dragStartRef.current = null;
                      setIsDragging(false);
                    }}
                    role="group"
                    aria-label="Certificate preview. Use the mouse wheel to zoom and drag to move the image."
                  >
                    <div className="certificate-viewer-image-frame">
                      <img
                        className="certificate-viewer-image"
                        src={selectedCertificate.image}
                        alt={selectedCertificate.imageAlt}
                        draggable={false}
                        style={{
                          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="certificate-viewer-caption">
                    <span className="certificate-viewer-caption-icon">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect
                          x="4"
                          y="3"
                          width="16"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M8 8h8M8 12h8M8 16h5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>

                    <span>
                      {isZoomed
                        ? "Scroll to zoom · Drag to inspect details"
                        : "Scroll to zoom in or out"}
                    </span>
                  </div>
                </div>

                {/* Right: Certificate Details */}
                <aside className="certificate-details-panel">
                  <div className="certificate-details-panel-top">
                    <span className="certificate-details-eyebrow">
                      CERTIFICATE INFORMATION
                    </span>

                    <span className="certificate-details-index">
                      NO. {selectedCertificate.number}
                    </span>
                  </div>

                  {/* Certificate Information */}
                  <div className="certificate-detail-list">
                    <div className="certificate-detail-row">
                      <span className="certificate-detail-row-icon">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M12 3 4 7v5c0 5 3.4 7.8 8 9 4.6-1.2 8-4 8-9V7l-8-4Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                          <path
                            d="m9 12 2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <div className="certificate-detail-row-content">
                        <span className="certificate-detail-label">
                          ISSUING ORGANIZATION
                        </span>

                        <span className="certificate-detail-value">
                          {selectedCertificate.issuer}
                        </span>
                      </div>
                    </div>

                    <div className="certificate-detail-row">
                      <span className="certificate-detail-row-icon">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <rect
                            x="3"
                            y="5"
                            width="18"
                            height="16"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                          <path
                            d="M16 3v4M8 3v4M3 10h18"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>

                      <div className="certificate-detail-row-content">
                        <span className="certificate-detail-label">
                          DATE EARNED
                        </span>

                        <span className="certificate-detail-value">
                          {selectedCertificate.date}
                        </span>
                      </div>
                    </div>

                    <div className="certificate-detail-row">
                      <span className="certificate-detail-row-icon">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20M8 7h8M8 10h6"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>

                      <div className="certificate-detail-row-content">
                        <span className="certificate-detail-label">
                          CATEGORY
                        </span>

                        <span className="certificate-detail-value">
                          {selectedCertificate.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Description */}
                  <div className="certificate-description-panel">
                    <span className="certificate-description-eyebrow">
                      ABOUT THIS CERTIFICATE
                    </span>

                    <p>{selectedCertificate.description}</p>
                  </div>
                </aside>
              </div>
            </section>
          </div>,
          document.body,
        )}
    </section>
  );
}

export default Certificates;
