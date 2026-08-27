export default function HeroSection() {
  return (
    <header className="hero" id="top">
      <div className="hero-aurora">
        <span className="a1"></span>
        <span className="a2"></span>
        <span className="a3"></span>
      </div>
      <div className="hero-badge">
        <svg viewBox="0 0 100 100">
          <defs>
            <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text>
            <textPath href="#circ" textLength="238">
              Пигмент · и · Пиксель ·
            </textPath>
          </text>
        </svg>
        <svg className="hero-star" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
        </svg>
      </div>
      <div className="wrap hero-inner">
        <div className="tag">Пигмент и Пиксель · AI-продакшн</div>
        <h1>
          <span className="row">
            <span>Каждой</span>
          </span>
          <span className="row">
            <span className="stroke">задаче —</span>
          </span>
          <span className="row">
            <span>
              свой <span className="grad">креатив.</span>
            </span>
          </span>
        </h1>
        <p className="hero-sub">
          Видео и рекламные ролики, изображения и визуалы кампаний, музыка и саундтреки, презентации и лендинги —
          всё это я создаю с помощью нейросетей <b>индивидуально под вашу задачу и вашего клиента</b>. 25 лет в
          рекламе — мой фундамент. Ни один проект не похож на другой.
        </p>
        <div className="hero-cta">
          <a className="btn" href="#contact">
            Обсудить проект →
          </a>
          <a className="btn ghost" href="#works">
            Смотреть работы
          </a>
        </div>
        <p className="hero-note">
          Пигмент — творчество художника. Пиксель — точность нейросетей. Вместе — индивидуальный и точный результат
          под вашу задачу.
        </p>
      </div>
      <div className="hero-scroll">листайте ↓</div>
    </header>
  );
}
