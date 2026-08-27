const SERVICES_LOOP = [
  "AI-видео",
  "Саунд-продакшн",
  "Изображения",
  "Креативные концепции",
  "Ролики для брендов",
  "Презентации",
  "Лендинги",
];

const TOOLS_LOOP = [
  "Midjourney",
  "Nano Banana",
  "Seedance",
  "Kling",
  "Sora",
  "Veo",
  "Runway",
  "Pika",
  "Hailuo",
  "Luma",
  "Flux",
  "Stable Diffusion",
  "DALL-E",
  "Ideogram",
  "Recraft",
  "Udio",
  "ElevenLabs",
  "ChatGPT",
  "Claude",
  "Gemini",
  "DeepSeek",
  "Kimi",
  "GigaChat",
  "YandexGPT",
  "Perplexity",
  "HeyGen",
  "Topaz",
  "Magnific",
];

export default function Marquees() {
  return (
    <>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...SERVICES_LOOP, ...SERVICES_LOOP].map((item, i) => (
            <span className="mq-item" key={i}>
              {item} <i>◆</i>
            </span>
          ))}
        </div>
      </div>

      <div className="marquee tools" aria-hidden="true">
        <div className="marquee-track">
          {[...TOOLS_LOOP, ...TOOLS_LOOP].map((item, i) => (
            <span className="mq-item tool" key={i}>
              {item} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
