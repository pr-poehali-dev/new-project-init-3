import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/files/4e3ca4c3-1c22-46d5-817a-f449680d5e68.jpg";
const TAGS = ["Лендинги", "AI-видео", "Изображения", "Ассистенты", "Музыка", "Консалтинг"];

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

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
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
    </>
  );
}
