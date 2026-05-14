const PHOTO_PLACEHOLDER = "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/files/98c7a67a-4061-4549-aef3-b36c0cf3c50d.jpg";

const ABOUT_BADGES = [
  "Школа «Хакни нейросети» — Сергей Черников",
  "Курс по AI-видео — Саша Комович",
  "School Syntx",
];

const PROCESS_STEPS = [
  { num: "01", title: "Бесплатная консультация", desc: "Разбираем вашу задачу и цели" },
  { num: "02", title: "Предложение и стоимость", desc: "Без скрытых платежей и неожиданностей" },
  { num: "03", title: "Создаю результат", desc: "Правки включены в стоимость" },
  { num: "04", title: "Передаю готовый материал", desc: "Все файлы и исходники — ваши" },
];

export default function AboutSection() {
  return (
    <>
      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30"
              style={{ background: "radial-gradient(circle, rgba(4,138,129,0.4) 0%, transparent 70%)", filter: "blur(30px)" }}
            />
            <div
              className="relative rounded-3xl overflow-hidden aspect-square"
              style={{ border: "1px solid rgba(4,138,129,0.2)" }}
            >
              <img
                src={PHOTO_PLACEHOLDER}
                alt="Фото специалиста"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 50%, rgba(26,26,46,0.6) 100%)" }}
              />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-white/50 italic text-center">
                Здесь будет ваше фото
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--brand-accent-light)" }}>
              Обо мне
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              25+ лет в маркетинге.<br />Теперь — с&nbsp;нейросетями.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              25+ лет в маркетинге и рекламе. Понимаю бизнес-задачи — не только инструменты. Соединяю опыт в рекламной индустрии с возможностями нейросетей.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-xs text-white/35 uppercase tracking-widest mb-1">Обучение и сертификаты</p>
              {ABOUT_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: "var(--brand-accent)" }}
                  />
                  <span className="text-sm text-white/70 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-light)" }}>
            Процесс
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Как мы работаем
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* вертикальная линия */}
          <div
            className="absolute left-[22px] top-8 bottom-8 w-px"
            style={{ background: "linear-gradient(180deg, rgba(4,138,129,0.6) 0%, rgba(4,138,129,0.1) 100%)" }}
          />

          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Dot */}
              <div className="relative shrink-0 flex flex-col items-center" style={{ width: 44 }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center z-10 relative"
                  style={{
                    background: i === 0
                      ? "var(--brand-accent)"
                      : "rgba(4,138,129,0.15)",
                    border: "2px solid rgba(4,138,129,0.5)",
                    boxShadow: i === 0 ? "0 0 16px rgba(4,138,129,0.5)" : "none",
                    transition: "all 0.3s",
                  }}
                >
                  <span
                    className="text-xs font-extrabold"
                    style={{ color: i === 0 ? "#fff" : "var(--brand-accent-light)" }}
                  >
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className="flex-1 rounded-2xl p-5 mb-0"
                style={{
                  background: "rgba(46,64,87,0.2)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3 className="text-base font-bold text-white mb-1.5 leading-snug">{step.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}