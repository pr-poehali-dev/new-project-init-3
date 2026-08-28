interface ServiceItem {
  idx: string;
  title: string;
  desc: string;
}

const SERVICES: ServiceItem[] = [
  {
    idx: "01",
    title: "Фирменные AI-ролики",
    desc: "Рекламные и имиджевые видео: от идеи и сценария до готового ролика. Качество студийного продакшна — быстрее и доступнее.",
  },
  {
    idx: "02",
    title: "Изображения и ключевые визуалы",
    desc: "Рекламные кадры, ключевые образы кампаний, контент для соцсетей и карточек товаров. Серия работ в едином стиле вашего бренда.",
  },
  {
    idx: "03",
    title: "Саунд-продакшн",
    desc: "Авторская музыка, джинглы и саундтреки, созданные под ваш проект. От гимна компании до аудиосопровождения ролика — звук, который запоминается.",
  },
  {
    idx: "04",
    title: "Презентации",
    desc: "Презентации компании, продуктов и рекламных кампаний, материалы для инвесторов. Больше 25 лет я готовила такие документы для клиентов агентства — и знаю: решают не слайды, а логика и подача.",
  },
  {
    idx: "05",
    title: "Лендинги",
    desc: "Страница, которая продаёт: структура, тексты, дизайн и визуал в едином стиле с вашей кампанией.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="tag reveal">Услуги</div>
        <h2 className="sec-h reveal">Что я делаю</h2>
        <div className="svc-list">
          {SERVICES.map((s) => (
            <a className="svc reveal" href="#contact" key={s.idx}>
              <span className="idx">{s.idx}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#F4F1EA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}