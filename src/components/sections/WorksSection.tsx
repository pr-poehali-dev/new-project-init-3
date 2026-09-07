interface WorkItem {
  slot: string;
  icon: "video" | "image" | "nda";
  n: string;
  cat: string;
  title: string;
  res: string;
  img?: string;
  href?: string;
  nda?: boolean;
}

const WORKS: WorkItem[] = [
  {
    slot: "video-1",
    icon: "video",
    n: "01",
    cat: "Концепт-ролик · одежда для охоты",
    title: "В стиле бренда Remington",
    res: "Учебный проект: от идеи до готового видео",
  },
  {
    slot: "video-2",
    icon: "video",
    n: "02",
    cat: "Концепт-ролик · мясопродукты",
    title: "В стиле бренда Ратимир",
    res: "Учебный проект: от идеи до готового видео",
  },
  { slot: "work-3", icon: "image", n: "03", cat: "Категория проекта", title: "Название проекта", res: "Задача → решение → результат" },
  {
    slot: "nda-1",
    icon: "nda",
    n: "04",
    cat: "NDA · музыка и видео",
    title: "Гимн и фильм для госпроекта",
    res: "Авторская музыка и 4-минутный фильм → 4000 органических просмотров без продвижения",
    nda: true,
  },
  {
    slot: "nda-2",
    icon: "nda",
    n: "05",
    cat: "NDA · категория проекта",
    title: "Масштаб клиента",
    res: "Задача → решение → результат в цифрах",
    nda: true,
  },
  { slot: "work-6", icon: "image", n: "06", cat: "Категория проекта", title: "Название проекта", res: "Задача → решение → результат" },
  {
    slot: "work-7",
    icon: "image",
    n: "07",
    cat: "Лендинг",
    title: "NOBLE EAST BULL kennel",
    res: "Лендинг питомника → рост заявок на щенков",
    img: "/work-5.webp",
    href: "https://nobleeastbull.ru",
  },
  {
    slot: "work-8",
    icon: "image",
    n: "08",
    cat: "Лендинг",
    title: "Pacific Protec",
    res: "Лендинг бренда → увеличение количества клиентов",
    img: "/work-6.webp",
    href: "https://protechvl.ru",
  },
];

function WorkIcon({ type }: { type: "video" | "image" | "nda" }) {
  if (type === "video") {
    return (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M10 9l5 3-5 3z" />
      </svg>
    );
  }
  if (type === "nda") {
    return (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
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
                  <div className={`ph-slot${w.img ? " filled" : ""}${w.nda ? " nda-slot" : ""}`} data-slot={w.slot}>
                    {w.img ? (
                      <img src={w.img} alt={w.title} loading="lazy" />
                    ) : w.nda ? (
                      <>
                        <WorkIcon type={w.icon} />
                        <span className="cap">Проект под NDA</span>
                      </>
                    ) : (
                      <>
                        <WorkIcon type={w.icon} />
                        <span className="cap">
                          {w.icon === "video" ? "Замените на кадр или видео ролика" : (
                            <>
                              Работа {w.n} · видео или серия кадров
                              <br />
                              замените на файл работы
                            </>
                          )}
                        </span>
                      </>
                    )}
                  </div>
                  <span className="work-shine" />
                  <span className="work-tag">{w.cat}</span>
                </div>
                <div className="meta">
                  <div className="cat">{w.cat}</div>
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
              <article className={`work reveal${w.nda ? " nda" : ""}`} key={w.slot}>
                {content}
              </article>
            );
          })}
        </div>
        <p className="works-note reveal">
          Часть проектов я не могу показывать публично — условия NDA. Расскажу о них лично при созвоне.
        </p>
      </div>
    </section>
  );
}