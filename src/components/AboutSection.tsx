import Icon from "@/components/ui/icon";

const steps = [
  {
    num: "01",
    icon: "Search",
    title: "Диагностика",
    desc: "Разбираем задачу, определяем цели и метрики успеха. Созвон 30 минут — и понятный план на руках.",
    duration: "1 день",
  },
  {
    num: "02",
    icon: "PenTool",
    title: "Прототип",
    desc: "Собираем MVP-прототип или дизайн-макет. Вы видите результат до оплаты финального этапа.",
    duration: "2–3 дня",
  },
  {
    num: "03",
    icon: "Rocket",
    title: "Запуск",
    desc: "Разрабатываем, тестируем и запускаем. Без задержек, без «ещё немного подождите».",
    duration: "3–5 дней",
  },
  {
    num: "04",
    icon: "HeartHandshake",
    title: "Поддержка",
    desc: "После запуска остаёмся на связи. Правки, обновления, новые задачи — всё в рамках договора.",
    duration: "Ongoing",
  },
];

export function AboutSection() {
  return (
    <section
      id="how-we-work"
      className="section-padding"
      style={{ background: "rgba(255,255,255,0.015)" }}
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
            как мы работаем
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--nf-text)" }}
          >
            От задачи до результата —
            <br />
            <span className="gradient-text">прозрачный процесс</span>
          </h2>

        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Connector line */}
          <div className="relative flex items-start justify-between gap-4 mb-0">
            <div
              className="absolute top-7 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg, var(--nf-indigo), var(--nf-cyan))" }}
            />
            {steps.map((step, i) => (
              <div key={i} className="flex-1 text-center relative">
                {/* Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10"
                  style={{
                    background: "var(--nf-bg)",
                    border: "2px solid var(--nf-indigo)",
                    boxShadow: "var(--nf-glow-indigo)",
                  }}
                >
                  <Icon name={step.icon as any} size={22} style={{ color: "var(--nf-indigo)" }} />
                </div>
                <div
                  className="mono text-xs mb-2"
                  style={{ color: "var(--nf-muted)" }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--nf-text)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-3 px-2"
                  style={{ color: "var(--nf-muted)" }}
                >
                  {step.desc}
                </p>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    color: "var(--nf-green)",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical accordion-style */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="glass-card p-6 flex gap-5">
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.3)",
                  }}
                >
                  <Icon name={step.icon as any} size={20} style={{ color: "var(--nf-indigo)" }} />
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 mt-3"
                    style={{ background: "rgba(99,102,241,0.2)", minHeight: 24 }}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="mono text-xs" style={{ color: "var(--nf-muted)" }}>
                    {step.num}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "var(--nf-green)",
                    }}
                  >
                    {step.duration}
                  </span>
                </div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: "var(--nf-text)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--nf-muted)" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}