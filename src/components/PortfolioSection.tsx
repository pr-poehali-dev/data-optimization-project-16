import { useState } from "react";
import Icon from "@/components/ui/icon";

const cases = [
  {
    title: "Путешествия по Крыму",
    category: "Веб-разработка",
    task: "Путеводитель с маршрутами и бронированием туров",
    result: "Рост заявок на 40% за первый месяц",
    metric: "+40% заявок",
    metricColor: "var(--nf-green)",
    image: "https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/files/fbeedf04-c064-4048-b096-ff9630606058.jpg",
    url: "https://project-alpha-update-2--preview.poehali.dev/",
    tag: "Туризм",
  },
  {
    title: "Легенды Баку",
    category: "Веб-разработка",
    task: "Сайт ресторана с меню и онлайн-бронированием столов",
    result: "Бронирования выросли вдвое за 2 недели",
    metric: "×2 бронирования",
    metricColor: "var(--nf-cyan)",
    image: "https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/files/9adb031e-a59d-439a-b836-8131e602294f.jpg",
    url: "https://legendybaku.ru/",
    tag: "Ресторан",
  },
  {
    title: "СоседМастер",
    category: "Веб-разработка",
    task: "Маркетплейс услуг мастеров для частных заказчиков",
    result: "Запуск за 6 дней, 200 регистраций за неделю",
    metric: "6 дней до запуска",
    metricColor: "var(--nf-indigo)",
    image: "https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/files/f5d670f5-07fb-4273-bf50-c2edf6d68158.jpg",
    url: "https://neighbor-help-app-1--preview.poehali.dev/",
    tag: "Маркетплейс",
  },
  {
    title: "NeuraMind",
    category: "ИИ-Автоматизация",
    task: "EdTech-платформа с ИИ-помощником для студентов",
    result: "Экономия 12 часов/нед на ручной проверке заданий",
    metric: "−12ч/нед рутины",
    metricColor: "var(--nf-green)",
    image: "https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/files/972920c6-57da-49f1-ba7a-0899e3140f3d.jpg",
    url: "https://ai-learning-app--preview.poehali.dev/",
    tag: "EdTech",
  },
];

export function PortfolioSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="portfolio"
      className="section-padding"
      style={{ background: "var(--nf-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mono text-xs"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.2)",
              color: "var(--nf-green)",
            }}
          >
            кейсы
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--nf-text)" }}
          >
            Проекты с{" "}
            <span className="gradient-text-green">измеримым результатом</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--nf-muted)" }}>
            Реальные задачи, реальные цифры. Без стоковых историй успеха.
          </p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => window.open(c.url, "_blank")}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(11,15,25,0.9) 0%, transparent 60%)",
                  }}
                />
                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold mono"
                  style={{
                    background: "rgba(11,15,25,0.7)",
                    border: "1px solid var(--nf-border)",
                    color: "var(--nf-cyan)",
                  }}
                >
                  {c.tag}
                </div>
                {/* Metric */}
                <div
                  className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl text-sm font-bold"
                  style={{
                    background: "rgba(11,15,25,0.85)",
                    color: c.metricColor,
                    border: `1px solid ${c.metricColor}40`,
                  }}
                >
                  {c.metric}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className="text-xs font-semibold mb-1 mono"
                  style={{ color: "var(--nf-indigo)" }}
                >
                  {c.category}
                </p>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--nf-text)" }}
                >
                  {c.title}
                </h3>
                <p className="text-sm mb-1" style={{ color: "var(--nf-muted)" }}>
                  <span style={{ color: "var(--nf-text)", fontWeight: 500 }}>Задача: </span>
                  {c.task}
                </p>
                <p className="text-sm" style={{ color: "var(--nf-muted)" }}>
                  <span style={{ color: "var(--nf-green)", fontWeight: 500 }}>Результат: </span>
                  {c.result}
                </p>
                <div
                  className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--nf-cyan)" }}
                >
                  Открыть проект <Icon name="ExternalLink" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: slider */}
        <div className="md:hidden">
          <div className="glass-card overflow-hidden">
            <div className="relative overflow-hidden h-52">
              <img
                src={cases[active].image}
                alt={cases[active].title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(11,15,25,0.9), transparent 60%)" }}
              />
              <div
                className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl text-sm font-bold"
                style={{
                  background: "rgba(11,15,25,0.85)",
                  color: cases[active].metricColor,
                  border: `1px solid ${cases[active].metricColor}40`,
                }}
              >
                {cases[active].metric}
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold mb-1 mono" style={{ color: "var(--nf-indigo)" }}>
                {cases[active].category}
              </p>
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--nf-text)" }}>
                {cases[active].title}
              </h3>
              <p className="text-sm mb-1" style={{ color: "var(--nf-muted)" }}>
                <span style={{ color: "var(--nf-text)", fontWeight: 500 }}>Задача: </span>
                {cases[active].task}
              </p>
              <p className="text-sm mb-4" style={{ color: "var(--nf-muted)" }}>
                <span style={{ color: "var(--nf-green)", fontWeight: 500 }}>Результат: </span>
                {cases[active].result}
              </p>
              <button
                onClick={() => window.open(cases[active].url, "_blank")}
                className="btn-outline w-full flex items-center justify-center gap-2 text-sm"
              >
                Открыть проект <Icon name="ExternalLink" size={14} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {cases.map((_, i) => (
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
      </div>
    </section>
  );
}
