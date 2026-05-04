import { useState } from "react";
import Icon from "@/components/ui/icon";

const plans = [
  {
    icon: "Newspaper",
    label: "Новостной дайджест",
    subtitle: "для руководителя",
    price: "3 000–5 000 ₽",
    period: "/ мес. с клиента",
    accentColor: "var(--nf-indigo)",
    bullets: [
      "Парсинг новостей по ключевым словам (отрасль + регион)",
      "ИИ делает краткое саммари каждого материала",
      "Доставка в Telegram ежедневно в 9:00",
    ],
    badge: null,
  },
  {
    icon: "BarChart2",
    label: "Мониторинг конкурентов",
    subtitle: "цены, акции, контент",
    price: "7 000–15 000 ₽",
    period: "/ мес.",
    accentColor: "var(--nf-cyan)",
    bullets: [
      "Парсинг сайтов и соцсетей конкурентов",
      "Анализ изменений цен, акций и контента",
      "Еженедельный отчёт в удобном формате",
    ],
    badge: "Популярное",
  },
  {
    icon: "BotMessageSquare",
    label: "Авто-ответчик для заявок",
    subtitle: "квалификация лидов",
    price: "20 000 ₽",
    period: "настройка + 3 000 ₽/мес.",
    accentColor: "var(--nf-green)",
    bullets: [
      "Интеграция сайта и мессенджеров с ИИ",
      "Автоматическая квалификация входящих лидов",
      "Передача «тёплых» клиентов прямо в CRM",
    ],
    badge: null,
  },
];

export function AutomationPlans() {
  const [active, setActive] = useState(0);

  const scrollTo = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const renderCard = (plan: typeof plans[0], compact = false) => (
    <>
      {/* Icon + badge */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: `${plan.accentColor}18`, border: `1px solid ${plan.accentColor}30` }}
        >
          <Icon name={plan.icon as any} size={22} style={{ color: plan.accentColor }} />
        </div>
        {plan.badge && (
          <span
            className="px-3 py-1 rounded-full text-xs font-bold mono"
            style={{ background: `${plan.accentColor}18`, color: plan.accentColor, border: `1px solid ${plan.accentColor}30` }}
          >
            {plan.badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-0.5" style={{ color: "var(--nf-text)" }}>
        {plan.label}
      </h3>
      <p className="text-sm mb-5" style={{ color: "var(--nf-muted)" }}>{plan.subtitle}</p>

      {/* Price */}
      <div className="mb-5">
        <span className="text-2xl font-bold" style={{ color: "var(--nf-text)" }}>{plan.price}</span>
        <span className="text-sm ml-1.5" style={{ color: "var(--nf-muted)" }}>{plan.period}</span>
      </div>

      <div className="h-px mb-5" style={{ background: "var(--nf-border)" }} />

      {/* Bullets */}
      <ul className={`space-y-3 ${compact ? "mb-6" : "flex-1 mb-8"}`}>
        {plan.bullets.map((b, j) => (
          <li key={j} className="flex items-start gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${plan.accentColor}18` }}
            >
              <Icon name="Check" size={11} style={{ color: plan.accentColor }} />
            </div>
            <span className="text-sm leading-relaxed" style={{ color: "var(--nf-text)" }}>{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        onClick={(e) => scrollTo("#contact", e)}
        className="block text-center font-semibold py-3.5 px-6 rounded-xl transition-all duration-200"
        style={{ color: plan.accentColor, border: `1px solid ${plan.accentColor}40` }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${plan.accentColor}12`; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
      >
        Подключить
      </a>
    </>
  );

  return (
    <section
      id="automation-plans"
      className="section-padding"
      style={{ background: "var(--nf-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mono text-xs"
            style={{
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.2)",
              color: "var(--nf-cyan)",
            }}
          >
            ИИ-автоматизация
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "var(--nf-text)" }}>
            Готовые решения —{" "}
            <span className="gradient-text">подключай и работай</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--nf-muted)" }}>
            Настраиваем один раз, работает автоматически. Экономия от 20 часов в месяц.
          </p>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div key={i} className="glass-card p-8 flex flex-col">
              {renderCard(plan)}
            </div>
          ))}
        </div>

        {/* Mobile: slider */}
        <div className="md:hidden">
          <div className="glass-card p-7 flex flex-col">
            {renderCard(plans[active], true)}
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  background: i === active ? "var(--nf-cyan)" : "var(--nf-border)",
                }}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm mt-10" style={{ color: "var(--nf-muted)" }}>
          Все решения настраиваются под ваш бизнес.{" "}
          <a
            href="#contact"
            onClick={(e) => scrollTo("#contact", e)}
            className="underline underline-offset-2 transition-colors"
            style={{ color: "var(--nf-cyan)" }}
          >
            Обсудите задачу
          </a>{" "}
          — подберём оптимальный вариант.
        </p>
      </div>
    </section>
  );
}
