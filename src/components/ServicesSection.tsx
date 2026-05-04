import { useState } from "react";
import Icon from "@/components/ui/icon";

// ── Тарифы ИИ-контента ──────────────────────────────────────────────
const contentPlans = [
  {
    icon: "ImagePlay",
    label: "Стартовый",
    price: "15 000 ₽",
    period: "пакет",
    bullets: [
      "3 поста с ИИ-картинками под ваш бренд",
      "1 рилс с говорящим аватаром",
      "1 джингл для бренда",
    ],
  },
  {
    icon: "Music2",
    label: "Музыкальный",
    price: "10 000 ₽",
    period: "пакет",
    bullets: [
      "Текст корпоративного гимна / песни",
      "Написание музыки в выбранном жанре",
      "Готовая обложка для трека",
    ],
  },
  {
    icon: "GraduationCap",
    label: "Обучающий",
    price: "25 000 ₽",
    period: "за 5 роликов",
    bullets: [
      "5 роликов с говорящим аватаром",
      "Сценарии и озвучка под каждый урок",
      "Готово к загрузке на любую платформу",
    ],
  },
];

// ── Тарифы ИИ-автоматизации ─────────────────────────────────────────
const automationPlans = [
  {
    icon: "Newspaper",
    label: "Новостной дайджест",
    price: "3 000–5 000 ₽",
    period: "/ мес.",
    bullets: [
      "Парсинг новостей по ключевым словам",
      "ИИ-саммари каждого материала",
      "Доставка в Telegram ежедневно в 9:00",
    ],
  },
  {
    icon: "BarChart2",
    label: "Мониторинг конкурентов",
    price: "7 000–15 000 ₽",
    period: "/ мес.",
    bullets: [
      "Парсинг сайтов и соцсетей конкурентов",
      "Анализ изменений цен, акций, контента",
      "Еженедельный отчёт в удобном формате",
    ],
  },
  {
    icon: "BotMessageSquare",
    label: "Авто-ответчик для заявок",
    price: "20 000 ₽",
    period: "настройка + 3 000 ₽/мес.",
    bullets: [
      "Интеграция сайта и мессенджеров с ИИ",
      "Автоквалификация входящих лидов",
      "Передача тёплых клиентов в CRM",
    ],
  },
];

// ── Тарифы Веб-разработки ───────────────────────────────────────────
const webPlans = [
  {
    icon: "Zap",
    label: "Старт",
    price: "от 25 000 ₽",
    period: "одна выплата",
    bullets: [
      "Лендинг до 6 секций",
      "Адаптивный дизайн",
      "Форма + уведомление в Telegram",
      "Поддержка 1 месяц",
    ],
  },
  {
    icon: "Briefcase",
    label: "Бизнес",
    price: "от 75 000 ₽",
    period: "одна выплата",
    bullets: [
      "Многостраничный сайт или лендинг",
      "Уникальный UI/UX дизайн",
      "ИИ-автоматизация одного процесса",
      "Поддержка 3 месяца",
    ],
  },
  {
    icon: "Crown",
    label: "Премиум",
    price: "По запросу",
    period: "обсуждается",
    bullets: [
      "Веб-приложение или SaaS",
      "Полная ИИ-автоматизация",
      "Персональный менеджер",
      "Поддержка 6 месяцев",
    ],
  },
];

const services = [
  {
    icon: "Video",
    color: "var(--nf-indigo)",
    label: "ИИ-Контент",
    desc: "Видео, музыка, аватары и креативы — создаём контент без студий и фотографов.",
    bullets: ["Видео и анимации для соцсетей", "ИИ-аватары и дикторы", "Музыка и озвучка под задачу"],
    plans: contentPlans,
    accentColor: "var(--nf-indigo)",
  },
  {
    icon: "Zap",
    color: "var(--nf-cyan)",
    label: "ИИ-Автоматизация",
    desc: "Боты, парсинг, отчёты и интеграции — автоматизируем рутину, экономя сотни часов.",
    bullets: ["Telegram-боты и чат-помощники", "Парсинг и авто-отчёты", "Интеграции с CRM и ERP"],
    plans: automationPlans,
    accentColor: "var(--nf-cyan)",
  },
  {
    icon: "Globe",
    color: "var(--nf-green)",
    label: "Веб-разработка",
    desc: "Лендинги, корпоративные сайты и мини-приложения — от дизайна до запуска за 7 дней.",
    bullets: ["Лендинги с высокой конверсией", "Корпоративные сайты", "Мини-приложения и SPA"],
    plans: webPlans,
    accentColor: "var(--nf-green)",
  },
];

// ── Модальный слайдер ────────────────────────────────────────────────
function PlansModal({
  open,
  onClose,
  title,
  color,
  plans,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  color: string;
  plans: typeof contentPlans;
}) {
  const [idx, setIdx] = useState(0);

  const scrollTo = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  if (!open) return null;

  const plan = plans[idx];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl p-7 relative"
        style={{
          background: "#0f1423",
          border: "1px solid var(--nf-border)",
          boxShadow: `0 0 60px ${color}25`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all"
          style={{ background: "rgba(255,255,255,0.06)", color: "var(--nf-muted)" }}
        >
          <Icon name="X" size={16} />
        </button>

        {/* Modal header */}
        <p className="mono text-xs mb-1" style={{ color }}>тарифы</p>
        <h3 className="text-xl font-bold mb-6" style={{ color: "var(--nf-text)" }}>{title}</h3>

        {/* Plan card */}
        <div
          className="rounded-xl p-5 mb-5"
          style={{ background: `${color}08`, border: `1px solid ${color}20` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${color}18` }}
            >
              <Icon name={plan.icon as any} size={18} style={{ color }} />
            </div>
            <div>
              <p className="font-bold text-base" style={{ color: "var(--nf-text)" }}>{plan.label}</p>
              <p className="text-xs" style={{ color: "var(--nf-muted)" }}>{plan.period}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-bold text-lg" style={{ color }}>{plan.price}</p>
            </div>
          </div>

          <ul className="space-y-2.5">
            {plan.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2.5">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${color}20` }}
                >
                  <Icon name="Check" size={10} style={{ color }} />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "var(--nf-text)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mb-5">
          {plans.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === idx ? 24 : 8,
                height: 8,
                background: i === idx ? color : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-3 mb-5">
          <button
            onClick={() => setIdx((i) => (i - 1 + plans.length) % plans.length)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm transition-all"
            style={{ background: "rgba(255,255,255,0.05)", color: "var(--nf-muted)", border: "1px solid var(--nf-border)" }}
          >
            <Icon name="ChevronLeft" size={16} /> Назад
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % plans.length)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm transition-all"
            style={{ background: "rgba(255,255,255,0.05)", color: "var(--nf-muted)", border: "1px solid var(--nf-border)" }}
          >
            Вперёд <Icon name="ChevronRight" size={16} />
          </button>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => scrollTo("#contact", e)}
          className="btn-cta w-full flex items-center justify-center gap-2"
          style={{ background: color, minHeight: 48 }}
        >
          Заказать этот пакет
          <Icon name="ArrowRight" size={16} />
        </a>
      </div>
    </div>
  );
}

// ── Основной компонент ───────────────────────────────────────────────
export function ServicesSection() {
  const [modal, setModal] = useState<number | null>(null);

  const scrollTo = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--nf-muted)" }}>
              Один партнёр закрывает три направления. Никакого зоопарка подрядчиков.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass-card p-8 flex flex-col group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                >
                  <Icon name={s.icon as any} size={26} style={{ color: s.color }} />
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--nf-text)" }}>
                  {s.label}
                </h3>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--nf-muted)" }}>
                  {s.desc}
                </p>

                <ul className="space-y-3 flex-1 mb-8">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                      <span className="text-sm" style={{ color: "var(--nf-text)" }}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA: кнопка открывает слайдер */}
                <button
                  onClick={() => setModal(i)}
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                  style={{ color: s.color }}
                >
                  Посмотреть тарифы
                  <Icon name="ArrowRight" size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modal !== null && (
        <PlansModal
          open
          onClose={() => setModal(null)}
          title={services[modal].label}
          color={services[modal].accentColor}
          plans={services[modal].plans}
        />
      )}
    </>
  );
}
