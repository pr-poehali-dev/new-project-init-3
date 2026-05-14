import { useState } from "react";
import Icon from "@/components/ui/icon";

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

export default function ServicesSection() {
  return (
    <>
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
              className={`${s.span} service-card ${s.accent ? "service-card-accent" : "service-card-plain"} rounded-2xl p-6 cursor-default flex flex-col justify-between`}
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
                <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">{s.emoji}</div>
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
          className="mt-6 relative rounded-3xl overflow-hidden p-8 md:p-10 animated-border"
          style={{
            background: "linear-gradient(120deg, rgba(26,26,46,0.95) 0%, rgba(46,64,87,0.85) 50%, rgba(26,26,46,0.95) 100%)",
          }}
        >
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
          <div
            className="flex flex-wrap items-center justify-center gap-3 pt-6"
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
    </>
  );
}