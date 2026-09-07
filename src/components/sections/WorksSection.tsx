interface WorkItem {
  slot: string;
  icon: "video" | "image";
  n: string;
  cat: string;
  title: string;
  res: string;
  img?: string;
  href?: string;
}

const WORKS: WorkItem[] = [
  { slot: "video-1", icon: "video", n: "01", cat: "Рекламный ролик", title: "Название проекта", res: "Задача → решение → результат" },
  { slot: "video-2", icon: "video", n: "02", cat: "Имиджевое видео", title: "Название проекта", res: "Задача → решение → результат" },
  { slot: "work-3", icon: "image", n: "03", cat: "Ключевой визуал", title: "Название проекта", res: "Задача → решение → результат" },
  { slot: "work-4", icon: "image", n: "04", cat: "Контент для соцсетей", title: "Название проекта", res: "Задача → решение → результат" },
  {
    slot: "work-5",
    icon: "image",
    n: "05",
    cat: "Лендинг",
    title: "Помёт бультерьеров",
    res: "Лендинг питомника → рост заявок на щенков",
    img: "/work-5.webp",
    href: "https://nobleeastbull.ru",
  },
  {
    slot: "work-6",
    icon: "image",
    n: "06",
    cat: "Лендинг",
    title: "Pacific Protec",
    res: "Лендинг бренда → увеличение количества клиентов",
    img: "/work-6.webp",
    href: "https://protechvl.ru",
  },
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
          {WORKS.map((w) => {
            const content = (
              <>
                <div className="work-frame">
                  <div className={`ph-slot${w.img ? " filled" : ""}`} data-slot={w.slot}>
                    {w.img ? (
                      <img src={w.img} alt={w.title} loading="lazy" />
                    ) : (
                      <>
                        <WorkIcon type={w.icon} />
                        <span className="cap">
                          Работа {w.n}
                          <br />
                          замените на файл
                        </span>
                      </>
                    )}
                  </div>
                  <span className="work-shine" />
                  <span className="work-tag">{w.cat}</span>
                </div>
                <div className="meta">
                  <div className="w-num">
                    {w.n} <i>/ 2026</i>
                  </div>
                  <h3>{w.title}</h3>
                  <div className="res">{w.res}</div>
                </div>
              </>
            );
            return w.href ? (
              <a
                className="work reveal"
                key={w.slot}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <article className="work reveal" key={w.slot}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}