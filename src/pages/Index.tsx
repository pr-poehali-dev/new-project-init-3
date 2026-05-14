import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/files/4e3ca4c3-1c22-46d5-817a-f449680d5e68.jpg";

const TAGS = ["Лендинги", "AI-видео", "Изображения", "Ассистенты", "Музыка", "Консалтинг"];

const SERVICES = [
  {
    icon: "FileText",
    title: "Лендинги",
    desc: "Конвертирующие страницы с AI-визуалом, анимацией и продающей структурой. От брифа до готового сайта.",
    span: "col-span-12 md:col-span-5",
    accent: true,
    wide: false,
  },
  {
    icon: "Video",
    title: "AI-видео",
    desc: "Рекламные ролики, reels, презентации — сгенерированные и смонтированные с помощью нейросетей.",
    span: "col-span-12 md:col-span-7",
    accent: false,
    wide: false,
  },
  {
    icon: "Image",
    title: "Изображения",
    desc: "Уникальный визуал для соцсетей, рекламы и брендбуков. Каждый образ — под вашу айдентику.",
    span: "col-span-12 md:col-span-4",
    accent: false,
    wide: false,
  },
  {
    icon: "Bot",
    title: "AI-ассистенты",
    desc: "Чат-боты и голосовые ассистенты для бизнеса: продажи, поддержка, автоматизация процессов.",
    span: "col-span-12 md:col-span-4",
    accent: false,
    wide: false,
  },
  {
    icon: "Music",
    title: "Музыка",
    desc: "Оригинальные джинглы, фоновые треки и подкасты. AI-продакшн без роялти.",
    span: "col-span-12 md:col-span-4",
    accent: false,
    wide: false,
  },
  {
    icon: "LineChart",
    title: "Консалтинг",
    desc: "Аудит ваших задач, подбор AI-инструментов, стратегия внедрения. 25 лет маркетинговой экспертизы.",
    span: "col-span-12 md:col-span-12",
    accent: true,
    wide: true,
  },
];

const FAQ_ITEMS = [
  {
    q: "Как выглядит процесс работы?",
    a: "Начинаем с брифинга — 30-минутный звонок или заполнение анкеты. Затем я готовлю концепцию, согласовываем правки и выдаю финальный результат. Всё общение через Telegram.",
  },
  {
    q: "Сколько времени занимает создание контента?",
    a: "Лендинг — от 3 до 7 дней. AI-видео — 2-5 дней. Изображения и музыка — 1-2 дня. Консалтинговая сессия — по согласованию, обычно в течение недели.",
  },
  {
    q: "Чем AI-контент отличается от обычного?",
    a: "Скорость создания в 5-10 раз выше, стоимость в разы ниже, возможности практически безграничны. При этом я контролирую каждый шаг: бизнес-задача всегда важнее инструмента.",
  },
  {
    q: "Нужно ли мне разбираться в AI?",
    a: "Нет. Вы рассказываете о своём бизнесе и задаче — я берусь за всё остальное. Нейросети — это мой инструментарий, не ваш.",
  },
  {
    q: "Как рассчитывается стоимость?",
    a: "Стоимость зависит от типа контента, объёма и сроков. После брифинга я выставляю конкретное предложение. Возможна оплата по этапам.",
  },
  {
    q: "Могу ли я использовать контент в рекламе?",
    a: "Да. Вы получаете все права на созданный контент. Файлы передаются в нужных форматах для любых каналов распространения.",
  },
];

function KineticHeadline({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div>
      {lines.map((line, li) => (
        <div key={li} className="overflow-hidden block">
          <span
            className="block animate-char"
            style={{ animationDelay: `${0.1 + li * 0.15}s` }}
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="glass-card rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <span className="text-base font-semibold text-white/90 leading-snug">{q}</span>
        <div
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "var(--brand-accent)" : "rgba(4,138,129,0.15)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <Icon name="Plus" size={14} className="text-white" />
        </div>
      </div>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div className="px-6 pb-5 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-manrope" style={{ background: "var(--brand-bg)" }}>

      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(26,26,46,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(4,138,129,0.15)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "var(--brand-accent)" }}
            >
              <Icon name="Sparkles" size={14} className="text-white" />
            </div>
            <span className="text-white font-bold text-sm tracking-wide">AI SPECIALIST</span>
          </div>
          <a
            href="https://t.me/ВАШ_TELEGRAM"
            className="cta-btn rounded-full px-5 py-2 text-sm font-semibold"
          >
            <span>Написать</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
        style={{
          background: `linear-gradient(135deg, #1A1A2E 0%, #2E4057 60%, #1A1A2E 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(26,26,46,0.3) 0%, rgba(26,26,46,0.7) 60%, rgba(26,26,46,1) 100%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-glow-pulse"
          style={{
            background: "radial-gradient(circle, rgba(4,138,129,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-medium animate-fade-up"
            style={{
              background: "rgba(4,138,129,0.15)",
              border: "1px solid rgba(4,138,129,0.35)",
              color: "var(--brand-accent-light)",
              animationDelay: "0.05s",
            }}
          >
            <Icon name="Sparkles" size={12} />
            25 лет в маркетинге и рекламе
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight">
            <KineticHeadline text={"AI-контент для брендов.\nВизуал, видео, музыка — под ключ."} />
          </h1>

          <p
            className="text-base md:text-lg text-white/55 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Понимаю бизнес-задачи — не только инструменты.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {TAGS.map((tag, i) => (
              <span
                key={tag}
                className="animate-tag-rise text-sm font-medium rounded-full px-4 py-1.5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.75)",
                  animationDelay: `${0.5 + i * 0.07}s`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.95s" }}>
            <a
              href="https://t.me/ВАШ_TELEGRAM"
              className="cta-btn inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-bold"
            >
              <span>Обсудить проект</span>
              <Icon name="ArrowRight" size={18} className="relative z-10" />
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-2 opacity-30 animate-float">
            <Icon name="ChevronsDown" size={20} className="text-white" />
          </div>
        </div>
      </section>

      {/* SERVICES — BENTO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-light)" }}>
            Услуги
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Что я делаю
          </h2>
        </div>

        <div className="bento-grid">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`${s.span} glass-card rounded-2xl p-7 transition-all duration-300 group cursor-default ${s.wide ? "flex flex-col md:flex-row md:items-center md:gap-8" : ""}`}
              style={{
                background: s.accent
                  ? "linear-gradient(135deg, rgba(4,138,129,0.2), rgba(46,64,87,0.3))"
                  : "rgba(46,64,87,0.2)",
                border: s.accent
                  ? "1px solid rgba(4,138,129,0.35)"
                  : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${s.wide ? "md:mb-0 md:shrink-0" : ""}`}
                style={{
                  background: s.accent
                    ? "rgba(4,138,129,0.3)"
                    : "rgba(255,255,255,0.07)",
                }}
              >
                <Icon name={s.icon} size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(90deg, rgba(4,138,129,0.08) 0%, rgba(46,64,87,0.3) 50%, rgba(4,138,129,0.08) 100%)",
          borderTop: "1px solid rgba(4,138,129,0.15)",
          borderBottom: "1px solid rgba(4,138,129,0.15)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "25+", label: "лет в маркетинге" },
              { val: "200+", label: "реализованных проектов" },
              { val: "6", label: "направлений AI" },
              { val: "48ч", label: "средний отклик" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text">
                  {stat.val}
                </div>
                <div className="text-sm text-white/45 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-light)" }}>
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Часто задаваемые<br />вопросы
          </h2>
          <p className="mt-4 text-sm text-white/45">
            Всё о процессе создания AI-контента и сроках
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(4,138,129,0.18) 0%, rgba(26,26,46,0.9) 50%, rgba(46,64,87,0.3) 100%)",
            border: "1px solid rgba(4,138,129,0.3)",
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(4,138,129,0.2) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative z-10">
            <div className="flex justify-center mb-5">
              <Icon name="Sparkles" size={32} className="text-[#06c4b8]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Готовы запустить AI-контент<br />для вашего бренда?
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-lg mx-auto">
              Напишите мне в Telegram — расскажите о задаче, получите ответ в течение 48 часов.
            </p>
            <a
              href="https://t.me/ВАШ_TELEGRAM"
              className="cta-btn inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-bold"
            >
              <Icon name="Send" size={18} className="relative z-10" />
              <span>Обсудить проект</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="border-t py-8 text-center text-xs text-white/25 font-medium"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        © 2024 AI Specialist. Все права защищены.
      </footer>
    </div>
  );
}