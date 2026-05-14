import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/files/4e3ca4c3-1c22-46d5-817a-f449680d5e68.jpg";

const TAGS = ["Лендинги", "AI-видео", "Изображения", "Ассистенты", "Музыка", "Консалтинг"];

interface ServiceItem {
  emoji: string;
  title: string;
  desc: string;
  price: string;
  span: string;
  accent?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    emoji: "🎬",
    title: "AI-видео и анимация",
    desc: "Рекламные ролики, клипы, мультфильмы",
    price: "от 15 000 ₽",
    span: "col-span-12 md:col-span-6",
    accent: true,
  },
  {
    emoji: "🖼",
    title: "Изображения и баннеры",
    desc: "Рекламные фото продуктов, серии для соцсетей",
    price: "от 5 000 ₽",
    span: "col-span-12 md:col-span-6",
    accent: true,
  },
  {
    emoji: "💻",
    title: "Лендинги под ключ",
    desc: "Продающие сайты с AI-визуалами и маркетинговой структурой",
    price: "от 35 000 ₽",
    span: "col-span-12 md:col-span-7",
  },
  {
    emoji: "🤖",
    title: "AI-ассистенты и чат-боты",
    desc: "Telegram-боты и ассистенты для бизнеса",
    price: "от 15 000 ₽",
    span: "col-span-12 md:col-span-5",
  },
  {
    emoji: "🎵",
    title: "AI-треки и джинглы",
    desc: "Музыка и джинглы для брендов в Suno",
    price: "от 10 000 ₽",
    span: "col-span-12 md:col-span-3",
  },
  {
    emoji: "🐾",
    title: "Видео с питомцами",
    desc: "AI-анимация и видео для владельцев животных",
    price: "от 5 000 ₽",
    span: "col-span-12 md:col-span-3",
  },
  {
    emoji: "📊",
    title: "Презентации",
    desc: "AI-презентации до 30 слайдов",
    price: "от 12 000 ₽",
    span: "col-span-12 md:col-span-3",
  },
  {
    emoji: "🧠",
    title: "Консалтинг по AI",
    desc: "Подбор инструментов и внедрение нейросетей в бизнес",
    price: "от 8 000 ₽",
    span: "col-span-12 md:col-span-3",
  },
];

const IMG_UDEGEYKA = "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/files/4c024f37-67f9-4793-b6b0-7a3065716836.jpg";
const IMG_JAZZ = "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/files/8117c713-1485-4a72-9741-2b3f3228b3ae.jpg";

const STATS = [
  { value: "25+", label: "лет в маркетинге и рекламе" },
  { value: "6+", label: "кейсов для реального бизнеса" },
  { value: "1", label: "победа в конкурсе School Syntx" },
];

const CLIENTS = ["Protech Pacific", "Зоогостиница «В гостях у Маши»"];

interface PortfolioItem {
  title: string;
  desc: string;
  type: string;
  badge?: string;
  link?: string;
  image?: string;
  span: string;
  iconName: string;
  accent?: boolean;
}

const PORTFOLIO_COMMERCIAL: PortfolioItem[] = [
  {
    title: "Protech Pacific",
    desc: "Лендинг для компании технического обеспечения мероприятий",
    type: "Лендинг",
    link: "https://protechvl.ru",
    span: "col-span-12 md:col-span-7",
    iconName: "Monitor",
    accent: true,
  },
  {
    title: "Зоогостиница «В гостях у Маши»",
    desc: "Рекламный ролик + серия баннеров для зоогостиницы",
    type: "Видео + баннеры",
    span: "col-span-12 md:col-span-5",
    iconName: "Video",
  },
];

const PORTFOLIO_AUTHOR: PortfolioItem[] = [
  {
    title: "Девочка-удэгейка с тигром",
    desc: "AI-изображение в стиле Nat Geo. Победитель конкурса School Syntx",
    type: "Изображение",
    badge: "🏆 Победитель конкурса",
    image: IMG_UDEGEYKA,
    span: "col-span-12 md:col-span-7",
    iconName: "Image",
    accent: true,
  },
  {
    title: "Джентльмены из джаза",
    desc: "Авторский AI-мультфильм про собак",
    type: "Анимация",
    image: IMG_JAZZ,
    span: "col-span-12 md:col-span-5",
    iconName: "Film",
  },
  {
    title: "Концепт-ролик Ратимир",
    desc: "Авторский концепт AI-видео для FMCG-бренда",
    type: "Видео",
    badge: "Авторский концепт",
    span: "col-span-12 md:col-span-6",
    iconName: "Clapperboard",
  },
  {
    title: "AI-трек для бренда",
    desc: "Пример AI-музыки, созданной в Suno",
    type: "Музыка",
    span: "col-span-12 md:col-span-6",
    iconName: "Music",
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

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div
      className={`${item.span} relative rounded-2xl overflow-hidden group cursor-default transition-all duration-300`}
      style={{
        background: item.image
          ? "transparent"
          : item.accent
          ? "linear-gradient(135deg, rgba(4,138,129,0.2), rgba(46,64,87,0.35))"
          : "rgba(46,64,87,0.2)",
        border: item.accent
          ? "1px solid rgba(4,138,129,0.35)"
          : "1px solid rgba(255,255,255,0.07)",
        minHeight: item.image ? "260px" : "auto",
      }}
    >
      {item.image && (
        <>
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(26,26,46,0.1) 0%, rgba(26,26,46,0.85) 100%)",
            }}
          />
        </>
      )}
      <div className={`relative z-10 p-7 flex flex-col justify-between h-full ${item.image ? "min-h-[260px]" : ""}`}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: item.image
                  ? "rgba(4,138,129,0.5)"
                  : item.accent
                  ? "rgba(4,138,129,0.3)"
                  : "rgba(255,255,255,0.08)",
              }}
            >
              <Icon name={item.iconName} size={18} className="text-white" />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {item.type}
            </span>
            {item.badge && (
              <span
                className="text-xs font-semibold rounded-full px-3 py-1"
                style={{
                  background: "rgba(4,138,129,0.25)",
                  border: "1px solid rgba(4,138,129,0.4)",
                  color: "var(--brand-accent-light)",
                }}
              >
                {item.badge}
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-white mb-2 leading-snug">{item.title}</h3>
          <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: "var(--brand-accent-light)" }}
            onClick={(e) => e.stopPropagation()}
          >
            Открыть сайт
            <Icon name="ExternalLink" size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

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

function PortfolioSection() {
  const [tab, setTab] = useState<"commercial" | "author">("commercial");
  const items = tab === "commercial" ? PORTFOLIO_COMMERCIAL : PORTFOLIO_AUTHOR;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-light)" }}>
          Портфолио
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
          Работы
        </h2>
        {/* Tabs */}
        <div
          className="inline-flex rounded-2xl p-1 gap-1"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {(["commercial", "author"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: tab === t ? "var(--brand-accent)" : "transparent",
                color: tab === t ? "#fff" : "rgba(255,255,255,0.45)",
              }}
            >
              {t === "commercial" ? "Коммерческие проекты" : "Авторские работы"}
            </button>
          ))}
        </div>
      </div>

      <div className="bento-grid">
        {items.map((item) => (
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>
    </section>
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
              className={`${s.span} rounded-2xl p-6 transition-all duration-300 group cursor-default flex flex-col justify-between`}
              style={{
                background: s.accent
                  ? "linear-gradient(135deg, rgba(4,138,129,0.18), rgba(46,64,87,0.3))"
                  : "rgba(46,64,87,0.18)",
                border: s.accent
                  ? "1px solid rgba(4,138,129,0.3)"
                  : "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div>
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="text-base font-bold text-white mb-1.5 leading-snug">{s.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
              </div>
              <div
                className="mt-4 inline-block text-sm font-bold rounded-xl px-3 py-1.5 self-start"
                style={{
                  background: s.accent ? "rgba(4,138,129,0.25)" : "rgba(255,255,255,0.06)",
                  color: s.accent ? "var(--brand-accent-light)" : "rgba(255,255,255,0.6)",
                  border: s.accent ? "1px solid rgba(4,138,129,0.3)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {s.price}
              </div>
            </div>
          ))}
        </div>

        {/* PACKAGE BLOCK */}
        <div
          className="mt-6 relative rounded-3xl overflow-hidden p-8 md:p-10"
          style={{
            background: "linear-gradient(120deg, rgba(4,138,129,0.25) 0%, rgba(46,64,87,0.5) 50%, rgba(4,138,129,0.15) 100%)",
            border: "1px solid rgba(4,138,129,0.45)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(4,138,129,0.25) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-bold"
                style={{
                  background: "rgba(255,180,0,0.15)",
                  border: "1px solid rgba(255,180,0,0.35)",
                  color: "#FFB400",
                }}
              >
                🔥 Лучший выбор
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                Система привлечения клиентов под ключ
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl mb-4">
                Лендинг + AI-ассистент в Telegram. Человек заходит на сайт → бот принимает заявку → вы получаете готового клиента.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Лендинг", "AI-бот в Telegram", "Интеграция", "Поддержка"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium rounded-full px-3 py-1"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <div>
                <div className="text-4xl font-extrabold text-white leading-none">от 60 000 ₽</div>
                <div className="text-xs text-white/35 mt-1">полная система под ключ</div>
              </div>
              <a
                href="https://t.me/ВАШ_TELEGRAM"
                className="cta-btn inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold whitespace-nowrap"
              >
                <span>Хочу такую систему</span>
                <Icon name="ArrowRight" size={16} className="relative z-10" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + CLIENTS */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(90deg, rgba(4,138,129,0.08) 0%, rgba(46,64,87,0.3) 50%, rgba(4,138,129,0.08) 100%)",
          borderTop: "1px solid rgba(4,138,129,0.15)",
          borderBottom: "1px solid rgba(4,138,129,0.15)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-white/45 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-xs text-white/30 uppercase tracking-widest mr-2">Клиенты:</span>
            {CLIENTS.map((c) => (
              <span
                key={c}
                className="text-sm font-medium rounded-full px-4 py-1.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <PortfolioSection />

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