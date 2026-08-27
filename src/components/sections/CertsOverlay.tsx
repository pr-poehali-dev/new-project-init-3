import { useState } from "react";

const CERTS = [
  {
    title: "XR School × SYNTX",
    sub: "Креативный контент в нейросетях",
    img: "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/62dcb54b-b7c0-478c-ae43-0f88c29307f2.png",
  },
  {
    title: "SYNTX.AI · 37 часов",
    sub: "Практический курс по нейросетям, Creator Pro",
    img: "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/254c6e2d-e03a-4e24-ab91-96109347835b.jpg",
  },
  {
    title: "«Хакни Нейросети» Сергея Черникова",
    sub: "Нейросети для бизнеса, 72 часа",
    img: "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/f646591f-17ab-4488-aa12-3bf6b5186ace.jpg",
  },
  {
    title: "Школа Саши Комович",
    sub: "Filmmaker.AI — профессия будущего",
    img: "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/bf61d91c-68be-4523-bcb8-764eb4d61360.jpg",
  },
];

interface CertsOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function CertsOverlay({ open, onClose }: CertsOverlayProps) {
  const [zoomImg, setZoomImg] = useState<string | null>(null);

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
              <div className="cert-card" key={c.title} onClick={() => setZoomImg(c.img)}>
                <img src={c.img} alt={c.title} loading="lazy" />
                <div className="cc-meta">
                  {c.title}
                  <span>{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`cert-zoom ${zoomImg ? "open" : ""}`} onClick={() => setZoomImg(null)}>
        <img src={zoomImg || ""} alt="Сертификат" />
      </div>
    </>
  );
}
