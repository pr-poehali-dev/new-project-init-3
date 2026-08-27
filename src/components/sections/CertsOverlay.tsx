import { useState } from "react";

const CERT_IMG = "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/files/25c431c0-1d88-47f9-a3b7-6fbd3b01c7d5.jpg";

const CERTS = [
  { title: "Filmmaker.AI — профессия будущего", sub: "Школа Саши Комович" },
  { title: "Нейросети для бизнеса, 72 часа", sub: "«Хакни Нейросети» Сергея Черникова" },
  { title: "Практический курс по нейросетям, Creator Pro", sub: "SYNTX.AI · 37 часов" },
  { title: "Креативный контент в нейросетях", sub: "XR School × SYNTX" },
];

interface CertsOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function CertsOverlay({ open, onClose }: CertsOverlayProps) {
  const [zoomOpen, setZoomOpen] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <div className={`certs-overlay ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Дипломы и сертификаты" onClick={handleOverlayClick}>
        <div className="certs-box">
          <div className="certs-head">
            <h3>
              Дипломы и <span className="grad">сертификаты</span>
            </h3>
            <button className="certs-close" aria-label="Закрыть" onClick={onClose} type="button">
              ✕
            </button>
          </div>
          <div className="certs-grid">
            {CERTS.map((c) => (
              <div className="cert-card" key={c.title} onClick={() => setZoomOpen(true)}>
                <img src={CERT_IMG} alt={c.title} loading="lazy" />
                <div className="cc-meta">
                  {c.title}
                  <span>{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`cert-zoom ${zoomOpen ? "open" : ""}`} onClick={() => setZoomOpen(false)}>
        <img src={zoomOpen ? CERT_IMG : ""} alt="Сертификат" />
      </div>
    </>
  );
}
