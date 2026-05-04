import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Video",
    color: "var(--nf-indigo)",
    label: "ИИ-Контент",
    desc: "Видео, музыка, аватары и креативы — создаём контент без студий и фотографов.",
    bullets: ["Видео и анимации для соцсетей", "ИИ-аватары и дикторы", "Музыка и озвучка под задачу"],
    id: "ai-content",
  },
  {
    icon: "Zap",
    color: "var(--nf-cyan)",
    label: "ИИ-Автоматизация",
    desc: "Боты, парсинг, отчёты и интеграции — автоматизируем рутину, экономя сотни часов.",
    bullets: ["Telegram-боты и чат-помощники", "Парсинг и авто-отчёты", "Интеграции с CRM и ERP"],
    id: "ai-automation",
  },
  {
    icon: "Globe",
    color: "var(--nf-green)",
    label: "Веб-разработка",
    desc: "Лендинги, корпоративные сайты и мини-приложения — от дизайна до запуска за 7 дней.",
    bullets: ["Лендинги с высокой конверсией", "Корпоративные сайты", "Мини-приложения и SPA"],
    id: "web-dev",
  },
];

export function ServicesSection() {
  const scrollTo = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: "var(--nf-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mono text-xs"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "var(--nf-cyan)",
            }}
          >
            03 направления
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--nf-text)" }}
          >
            Всё, что нужно для{" "}
            <span className="gradient-text">цифрового роста</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--nf-muted)" }}
          >
            Один партнёр закрывает три направления. Никакого зоопарка подрядчиков.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass-card p-8 flex flex-col group">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
              >
                <Icon name={s.icon as any} size={26} style={{ color: s.color }} />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--nf-text)" }}
              >
                {s.label}
              </h3>

              {/* Desc */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--nf-muted)" }}
              >
                {s.desc}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 flex-1 mb-8">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: s.color }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--nf-text)" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollTo("#contact", e)}
                className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                style={{ color: s.color }}
              >
                Подробнее
                <Icon name="ArrowRight" size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
