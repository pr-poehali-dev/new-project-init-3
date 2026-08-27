const CHIPS = [
  "Рекламные и digital-агентства",
  "Бренды и локальный бизнес",
  "Государственные проекты и события",
  "Артисты и музыканты",
  "Эксперты и онлайн-школы",
  "Продавцы маркетплейсов",
  "Частные клиенты",
];

export default function ClientsSection() {
  return (
    <section className="clients">
      <div className="wrap">
        <div className="tag reveal">Клиенты</div>
        <h2 className="sec-h reveal">С кем работаю</h2>
        <div className="client-chips reveal">
          {CHIPS.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
        <p className="clients-note reveal">
          Работаю и с бизнесом, и с личными историями: клип для артиста, фильм к юбилею, мультфильм про любимого
          питомца — видео о самом дорогом. Каждой задаче — свой креатив и полное внимание.
        </p>
      </div>
    </section>
  );
}
