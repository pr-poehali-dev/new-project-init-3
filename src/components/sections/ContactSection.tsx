import { useState } from "react";
import Icon from "@/components/ui/icon";

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

function FaqItem({ q, a }: { q: string; a: string; index: number }) {
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

function ContactForm() {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return sent ? (
    <div
      className="flex flex-col items-center justify-center gap-4 py-10 rounded-2xl text-center"
      style={{ background: "rgba(4,138,129,0.1)", border: "1px solid rgba(4,138,129,0.25)" }}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(4,138,129,0.25)" }}>
        <Icon name="Check" size={22} className="text-[#06c4b8]" />
      </div>
      <p className="text-white font-semibold">Заявка отправлена!</p>
      <p className="text-sm text-white/45">Свяжусь с вами в течение 48 часов</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(4,138,129,0.6)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
      />
      <textarea
        placeholder="Опишите задачу"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        rows={4}
        className="w-full rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 outline-none resize-none transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(4,138,129,0.6)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
      />
      <button type="submit" className="cta-btn rounded-xl px-6 py-4 text-sm font-bold w-full">
        <span>Отправить заявку</span>
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <>
      {/* CONTACTS */}
      <section className="max-w-6xl mx-auto px-6 py-16 pb-24" id="contacts">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--brand-accent-light)" }}>
              Контакты
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Давайте создадим ваш следующий проект
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Напишите в мессенджер или заполните форму — отвечу в течение 48 часов.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/ВАШ_TELEGRAM"
                className="flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-300 group"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(4,138,129,0.2)" }}
                >
                  ✈️
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Telegram</div>
                  <div className="text-white/35 text-xs">Написать в Telegram</div>
                </div>
                <Icon name="ArrowRight" size={16} className="ml-auto text-white/20 group-hover:text-[#06c4b8] transition-colors" />
              </a>
              <a
                href="https://wa.me/ВАШТЕЛЕФОН"
                className="flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-300 group"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(37,211,102,0.15)" }}
                >
                  💬
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">WhatsApp</div>
                  <div className="text-white/35 text-xs">Написать в WhatsApp</div>
                </div>
                <Icon name="ArrowRight" size={16} className="ml-auto text-white/20 group-hover:text-[#06c4b8] transition-colors" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-3xl p-7"
            style={{
              background: "rgba(46,64,87,0.2)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(16px)",
            }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Отправить заявку</h3>
            <ContactForm />
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
    </>
  );
}
