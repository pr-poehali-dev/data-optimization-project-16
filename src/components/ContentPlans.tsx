import { useState } from "react";
import Icon from "@/components/ui/icon";

const plans = [
  {
    icon: "ImagePlay",
    label: "Стартовый",
    subtitle: "контент для соцсетей",
    price: "15 000 ₽",
    period: "пакет",
    accentColor: "var(--nf-indigo)",
    bullets: [
      "3 поста с ИИ-картинками под ваш бренд",
      "1 рилс с говорящим аватаром",
      "1 джингл для бренда",
    ],
    badge: null,
  },
  {
    icon: "Music2",
    label: "Музыкальный",
    subtitle: "корпоративный гимн",
    price: "10 000 ₽",
    period: "пакет",
    accentColor: "var(--nf-cyan)",
    bullets: [
      "Текст песни/гимна под ваш бренд",
      "Написание музыки в выбранном жанре",
      "Готовая обложка для трека",
    ],
    badge: "Хит",
  },
  {
    icon: "GraduationCap",
    label: "Обучающий",
    subtitle: "онбординг сотрудников",
    price: "25 000 ₽",
    period: "за 5 роликов",
    accentColor: "var(--nf-green)",
    bullets: [
      "5 видеороликов с говорящим аватаром",
      "Сценарии и озвучка под каждый урок",
      "Готово к загрузке на любую платформу",
    ],
    badge: null,
  },
];

export function ContentPlans() {
  const [active, setActive] = useState(0);

  const scrollTo = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const renderCard = (plan: typeof plans[0], compact = false) => (
    <>
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

      <h3 className="text-xl font-bold mb-0.5" style={{ color: "var(--nf-text)" }}>
        {plan.label}
      </h3>
      <p className="text-sm mb-5" style={{ color: "var(--nf-muted)" }}>{plan.subtitle}</p>

      <div className="mb-5">
        <span className="text-2xl font-bold" style={{ color: "var(--nf-text)" }}>{plan.price}</span>
        <span className="text-sm ml-1.5" style={{ color: "var(--nf-muted)" }}>{plan.period}</span>
      </div>

      <div className="h-px mb-5" style={{ background: "var(--nf-border)" }} />

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

      <a
        href="#contact"
        onClick={(e) => scrollTo("#contact", e)}
        className="block text-center font-semibold py-3.5 px-6 rounded-xl transition-all duration-200"
        style={{ color: plan.accentColor, border: `1px solid ${plan.accentColor}40` }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${plan.accentColor}12`; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
      >
        Заказать
      </a>
    </>
  );

  return (
    <section
      id="content-plans"
      className="section-padding"
      style={{ background: "rgba(255,255,255,0.015)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mono text-xs"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "var(--nf-indigo)",
            }}
          >
            ИИ-контент
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "var(--nf-text)" }}>
            Контент без студий —{" "}
            <span className="gradient-text">быстро и в бренде</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--nf-muted)" }}>
            Видео, музыка, аватары — создаём за дни, а не недели.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div key={i} className="glass-card p-8 flex flex-col">
              {renderCard(plan)}
            </div>
          ))}
        </div>

        {/* Mobile slider */}
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
                  background: i === active ? "var(--nf-indigo)" : "var(--nf-border)",
                }}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm mt-10" style={{ color: "var(--nf-muted)" }}>
          Нужен индивидуальный пакет?{" "}
          <a
            href="#contact"
            onClick={(e) => scrollTo("#contact", e)}
            className="underline underline-offset-2"
            style={{ color: "var(--nf-indigo)" }}
          >
            Обсудите задачу
          </a>{" "}
          — соберём под вас.
        </p>
      </div>
    </section>
  );
}
