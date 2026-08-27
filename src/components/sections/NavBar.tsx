import { useEffect, useState } from "react";
import ThemeToggle from "@/components/sections/ThemeToggle";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <a className="logo" href="#top">
          ПИГМЕНТ<em>·И·</em>ПИКСЕЛЬ
        </a>
        <div className="nav-links">
          <a href="#works">Работы</a>
          <a href="#services">Услуги</a>
          <a href="#process">Процесс</a>
          <a href="#about">Обо мне</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <ThemeToggle />
          <a className="btn" href="#contact">
            <span className="btn-full">Обсудить проект</span>
            <span className="btn-short">Написать</span>
          </a>
        </div>
      </div>
    </nav>
  );
}