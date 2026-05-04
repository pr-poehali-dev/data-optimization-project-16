import Icon from "@/components/ui/icon";

const tiers = [
  {
    name: "Старт",
    price: "от 25 000 ₽",
    period: "одна выплата",
    desc: "Идеально для быстрого выхода в онлайн",
    features: [
      "Лендинг до 6 секций",
      "Адаптивный дизайн",
      "Базовая SEO-оптимизация",
      "Форма с уведомлением в Telegram",
      "Настройка хостинга + SSL",
      "Поддержка 1 месяц",
    ],
    cta: "Начать",
    popular: false,
    accentColor: "var(--nf-indigo)",
    duration: "3–5 дней",
  },
  {
    name: "Бизнес",
    price: "от 75 000 ₽",
    period: "одна выплата",
    desc: "Для компаний, которым важен результат",
    features: [
      "Многостраничный сайт или сложный лендинг",
      "Уникальный UI/UX дизайн",
      "ИИ-автоматизация одного процесса",
      "CRM-интеграция или бот",
      "Аналитика: Яндекс.Метрика + GA4",
      "Поддержка 3 месяца",
    ],
    cta: "Выбрать",
    popular: true,
    accentColor: "var(--nf-cyan)",
    duration: "7–10 дней",
  },
  {
    name: "Премиум",
    price: "По запросу",
    period: "обсуждается",
    desc: "Комплексный проект под ключ",
    features: [
      "Веб-приложение или SaaS",
      "Полная ИИ-автоматизация бизнес-процессов",
      "ИИ-контент пакет (видео, аватары)",
      "Персональный менеджер",
      "API-интеграции любой сложности",
      "Поддержка 6 месяцев",
    ],
    cta: "Обсудить",
    popular: false,
    accentColor: "var(--nf-green)",
    duration: "от 14 дней",
  },
];

export function PricingSection() {
  const scrollTo = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="section-padding"
      style={{ background: "rgba(255,255,255,0.015)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--nf-green)" }}
            />
            <span className="mono text-xs" style={{ color: "var(--nf-cyan)" }}>
              прозрачные цены
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--nf-text)" }}
          >
            Честные пакеты —{" "}
            <span className="gradient-text">без скрытых платежей</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--nf-muted)" }}>
            Выберите подходящий или напишите — подберём индивидуально.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`glass-card p-8 flex flex-col relative ${t.popular ? "pricing-popular" : ""}`}
              style={t.popular ? { transform: "scale(1.03)", transformOrigin: "center" } : {}}
            >
              {/* Popular badge */}
              {t.popular && (
                <div
                  className="badge-popular absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  Популярный выбор
                </div>
              )}

              {/* Duration */}
              <div
                className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full w-fit mono text-xs"
                style={{
                  background: `${t.accentColor}15`,
                  color: t.accentColor,
                  border: `1px solid ${t.accentColor}25`,
                }}
              >
                <Icon name="Clock" size={11} />
                {t.duration}
              </div>

              {/* Tier name */}
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "var(--nf-text)" }}
              >
                {t.name}
              </h3>
              <p className="text-sm mb-5" style={{ color: "var(--nf-muted)" }}>
                {t.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="text-3xl font-bold"
                  style={{ color: "var(--nf-text)" }}
                >
                  {t.price}
                </span>
                <span
                  className="text-sm ml-2"
                  style={{ color: "var(--nf-muted)" }}
                >
                  {t.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{ background: "var(--nf-border)" }}
              />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${t.accentColor}18` }}
                    >
                      <Icon name="Check" size={11} style={{ color: t.accentColor }} />
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--nf-text)" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollTo("#contact", e)}
                className="block text-center font-semibold py-3.5 px-6 rounded-xl transition-all duration-200"
                style={
                  t.popular
                    ? {
                        background: "var(--nf-gradient)",
                        color: "white",
                      }
                    : {
                        background: "transparent",
                        color: t.accentColor,
                        border: `1px solid ${t.accentColor}40`,
                      }
                }
                onMouseEnter={(e) => {
                  if (!t.popular) {
                    (e.currentTarget as HTMLElement).style.background = `${t.accentColor}12`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!t.popular) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm mt-10"
          style={{ color: "var(--nf-muted)" }}
        >
          Все тарифы включают{" "}
          <span style={{ color: "var(--nf-indigo)", fontWeight: 600 }}>бесплатный хостинг</span>{" "}
          и{" "}
          <span style={{ color: "var(--nf-indigo)", fontWeight: 600 }}>SSL-сертификат</span>.
          Оплата частями — 50% предоплата.
        </p>
      </div>
    </section>
  );
}
