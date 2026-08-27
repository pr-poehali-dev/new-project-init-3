const PHOTO_URL = "https://cdn.poehali.dev/projects/ccf6d923-8e06-4ebd-b300-23f09990c16e/bucket/62dcb54b-b7c0-478c-ae43-0f88c29307f2.png";

interface AboutSectionProps {
  onOpenCerts: () => void;
}

export default function AboutSection({ onOpenCerts }: AboutSectionProps) {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-text reveal">
          <div className="tag">Обо мне</div>
          <h2 className="sec-h">
            Опыт, усиленный
            <br />
            <span className="grad">инновациями</span>
          </h2>
          <p className="lead">
            Я более <b>25 лет</b> проработала в рекламном агентстве полного цикла. Вела проекты, защищала идеи перед
            клиентами и отвечала за результат.
          </p>
          <p>
            Поэтому я не «генерирую картинки». Я решаю задачу бизнеса: умею разговаривать на языке цифр и задач,
            сдаю работу в срок и в формате, с которым удобно работать дальше.
          </p>
          <p>
            Нейросети стали дополнением к моим компетенциям — не заменой, а расширением возможностей. Теперь я могу
            воплотить то, что раньше требовало студии и недель производства.
          </p>
          <div className="stats">
            <div className="stat">
              <div className="num grad">25+</div>
              <div className="lbl">лет в рекламе и работе с корпоративными клиентами</div>
            </div>
            <div className="stat">
              <div className="num grad">4</div>
              <div className="lbl">профильные школы нейросетей и AI-продакшна</div>
            </div>
            <div className="stat">
              <div className="num grad">4000</div>
              <div className="lbl">органических просмотров одного ролика</div>
            </div>
          </div>
          <button className="btn ghost certs-btn" type="button" onClick={onOpenCerts}>
            Дипломы и сертификаты →
          </button>
        </div>
        <div className="ph-slot about-photo reveal filled" data-slot="photo">
          <img src={PHOTO_URL} alt="Анна — основатель студии «Пигмент и Пиксель»" />
        </div>
      </div>
    </section>
  );
}