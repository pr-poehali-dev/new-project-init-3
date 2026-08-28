import { useCallback, useEffect, useState } from "react";

const CERTS = [
  {
    title: "XR School × SYNTX",
    sub: "Креативный контент в нейросетях",
    year: "2026",
    img: "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/9645a18f-4238-4d4b-b39f-e1f7d037afc1.jpg",
  },
  {
    title: "SYNTX.AI",
    sub: "Практический курс, Creator Pro · 37 часов",
    year: "2026",
    img: "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/f9de9068-f76e-4917-834c-a66a82087528.jpg",
  },
  {
    title: "«Хакни Нейросети»",
    sub: "Сергей Черников · нейросети для бизнеса, 72 часа",
    year: "2026",
    img: "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/66449200-791f-468b-9253-7ba51c9caf79.jpg",
  },
  {
    title: "Школа Саши Комович",
    sub: "Filmmaker.AI — профессия будущего",
    year: "2026",
    img: "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/b540b794-609e-484e-b84f-898264b8e1e1.jpg",
  },
];

interface CertsOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function CertsOverlay({ open, onClose }: CertsOverlayProps) {
  const [zoom, setZoom] = useState<number | null>(null);

  const go = useCallback((dir: number) => {
    setZoom((z) => (z === null ? z : (z + dir + CERTS.length) % CERTS.length));
  }, []);

  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, go]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const cur = zoom !== null ? CERTS[zoom] : null;

  return (
    <>
      <div
        className={`certs-overlay ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Дипломы и сертификаты"
        onClick={handleOverlayClick}
      >
        <div className="certs-box">
          <div className="certs-head">
            <div>
              <div className="certs-kicker">Подтверждённая квалификация</div>
              <h3>
                Дипломы и <span className="grad">сертификаты</span>
              </h3>
            </div>
            <button className="certs-close" aria-label="Закрыть" onClick={onClose} type="button">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="certs-grid">
            {CERTS.map((c, i) => (
              <button className="cert-card" key={c.title} onClick={() => setZoom(i)} type="button">
                <span className="cc-frame">
                  <img src={c.img} alt={c.title} loading="lazy" />
                  <span className="cc-shine" />
                  <span className="cc-zoom">
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M20 20l-3.5-3.5M11 8.5v5M8.5 11h5" />
                    </svg>
                  </span>
                </span>
                <span className="cc-meta">
                  <span className="cc-num">
                    {String(i + 1).padStart(2, "0")} <i>/ {c.year}</i>
                  </span>
                  <span className="cc-title">{c.title}</span>
                  <span className="cc-sub">{c.sub}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`cert-zoom ${cur ? "open" : ""}`} onClick={() => setZoom(null)}>
        {cur && (
          <>
            <button
              className="cz-nav prev"
              aria-label="Предыдущий"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              type="button"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>

            <figure className="cz-fig" onClick={(e) => e.stopPropagation()}>
              <img src={cur.img} alt={cur.title} />
              <figcaption>
                <b>{cur.title}</b>
                <span>{cur.sub}</span>
              </figcaption>
            </figure>

            <button
              className="cz-nav next"
              aria-label="Следующий"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              type="button"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="cz-close" aria-label="Закрыть" onClick={() => setZoom(null)} type="button">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </>
        )}
      </div>
    </>
  );
}
