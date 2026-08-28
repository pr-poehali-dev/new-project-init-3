import Icon from "@/components/ui/icon";

const CONTACTS = [
  { icon: "Send", label: "@abba1458", href: "https://t.me/abba1458" },
  { icon: "Phone", label: "+7 914 706-69-00", href: "tel:+79147066900" },
  { icon: "Mail", label: "abba1458@gmail.com", href: "mailto:abba1458@gmail.com" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="foot-logo">
              Пигмент<i>·и·</i>Пиксель
            </div>
            <p>Креатив под задачу бизнеса. Отвечаю лично, обычно в течение дня.</p>
          </div>
          <div className="foot-contacts">
            {CONTACTS.map((c) => {
              const ext = c.href.startsWith("http");
              return (
                <a
                  key={c.href}
                  href={c.href}
                  target={ext ? "_blank" : undefined}
                  rel={ext ? "noreferrer" : undefined}
                >
                  <Icon name={c.icon} size={17} />
                  <span>{c.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Пигмент и Пиксель</span>
          <span>Этот лендинг — тоже моя работа: от идеи до кода</span>
        </div>
      </div>
    </footer>
  );
}