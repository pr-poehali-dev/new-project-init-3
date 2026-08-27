const TG_USER = "USERNAME";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const task = (form.elements.namedItem("task") as HTMLTextAreaElement).value.trim();
    const text = `Здравствуйте! Меня зовут ${name}.\n\nЗадача: ${task}`;
    window.open(`https://t.me/${TG_USER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-aurora">
        <span className="c1"></span>
        <span className="c2"></span>
      </div>
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="tag reveal" style={{ justifyContent: "center" }}>
          Контакт
        </div>
        <h2 className="big reveal">
          Расскажите
          <br />о <span className="grad">задаче</span>
        </h2>
        <p className="reveal">Напишите пару слов о проекте — отвечу в течение дня и предложу формат работы.</p>
        <form className="cform reveal" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Ваше имя" required />
          <textarea
            name="task"
            rows={3}
            placeholder="Пара слов о задаче: что за проект, для кого, к какому сроку"
            required
          />
          <button type="submit" className="btn">
            Отправить в Telegram →
          </button>
          <span className="cform-note">
            Нажимая кнопку, вы перейдёте в Telegram — сообщение уже будет готово, останется нажать «отправить».
          </span>
        </form>
      </div>
    </section>
  );
}
