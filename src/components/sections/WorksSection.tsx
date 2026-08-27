interface WorkItem {
  slot: string;
  icon: "video" | "image";
  n: string;
}

const WORKS: WorkItem[] = [
  { slot: "video-1", icon: "video", n: "01" },
  { slot: "video-2", icon: "video", n: "02" },
  { slot: "work-3", icon: "image", n: "03" },
  { slot: "work-4", icon: "image", n: "04" },
  { slot: "work-5", icon: "image", n: "05" },
  { slot: "work-6", icon: "image", n: "06" },
];

function WorkIcon({ type }: { type: "video" | "image" }) {
  if (type === "video") {
    return (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M10 9l5 3-5 3z" />
      </svg>
    );
  }
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5-9 9" />
    </svg>
  );
}

export default function WorksSection() {
  return (
    <section className="works" id="works">
      <div className="wrap">
        <div className="works-head reveal">
          <div>
            <div className="tag">Портфолио</div>
            <h2 className="sec-h">
              Креатив, который
              <br />
              <span className="grad">решает задачу</span>
            </h2>
          </div>
          <p>
            Креатив здесь — не самоцель, а инструмент. Каждый проект начинается с вашей бизнес-задачи: рост
            конверсии и продаж, узнаваемость бренда, упаковка продукта, презентация для инвесторов, охваты и
            вовлечение в соцсетях. Результат оценивается не красотой кадра, а достигнутой целью.
          </p>
        </div>
        <div className="works-grid">
          {WORKS.map((w) => (
            <div className="work reveal" key={w.slot}>
              <div className="ph-slot" data-slot={w.slot}>
                <WorkIcon type={w.icon} />
                <span className="cap">
                  Работа {w.n} · видео или серия кадров
                  <br />
                  замените на файл работы
                </span>
              </div>
              <div className="meta">
                <div className="cat">Категория проекта</div>
                <h3>Название проекта</h3>
                <div className="res">Задача → решение → результат</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
