import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Сколько времени занимает разработка проекта?",
    a: "Лендинг — от 3 до 5 рабочих дней. Многостраничный сайт или ИИ-автоматизация — 7–14 дней. Сложные веб-приложения — от 3 недель. Мы всегда называем точный срок до старта и соблюдаем его.",
  },
  {
    q: "Сколько правок входит в стоимость?",
    a: "В каждый тариф входит 2 раунда правок. Это значит, что вы можете скорректировать дизайн и тексты дважды без доплаты. Дополнительные правки — по прозрачному тарифу.",
  },
  {
    q: "Можете интегрироваться с нашей CRM / системой?",
    a: "Да, работаем с Bitrix24, amoCRM, Google Sheets, Notion, Telegram, WhatsApp и другими сервисами через API и n8n-автоматизации. Если у вас нестандартная система — обсудим на диагностике.",
  },
  {
    q: "Как происходит оплата?",
    a: "50% предоплата при старте работ, 50% после сдачи проекта. Для крупных проектов возможна разбивка на 3 части. Принимаем переводы на карту (РФ) и на расчётный счёт (ИП/ООО).",
  },
  {
    q: "Какую гарантию вы даёте?",
    a: "Гарантируем работоспособность сайта и всех интеграций в течение срока поддержки по договору. Если что-то сломается по нашей вине — починим бесплатно и быстро.",
  },
  {
    q: "Что включает поддержка после запуска?",
    a: "Зависит от тарифа: от 1 до 6 месяцев. Включает техническую поддержку, мелкие правки контента (до 2ч/мес), мониторинг работы сайта. По окончании — переходим на абонентское сопровождение.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: "var(--nf-bg)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mono text-xs"
            style={{
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.2)",
              color: "var(--nf-cyan)",
            }}
          >
            часто спрашивают
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--nf-text)" }}
          >
            Вопросы и{" "}
            <span className="gradient-text">ответы</span>
          </h2>
          <p className="text-lg" style={{ color: "var(--nf-muted)" }}>
            Отвечаем честно — без маркетингового воды.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden cursor-pointer"
              style={{
                borderColor: open === i ? "rgba(99,102,241,0.35)" : "var(--nf-border)",
                transition: "border-color 0.2s ease",
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {/* Question */}
              <div className="flex items-center justify-between gap-4 p-6">
                <h3
                  className="text-base font-semibold leading-snug"
                  style={{ color: "var(--nf-text)" }}
                >
                  {faq.q}
                </h3>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: open === i ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.04)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <Icon
                    name="ChevronDown"
                    size={16}
                    style={{ color: open === i ? "var(--nf-indigo)" : "var(--nf-muted)" }}
                  />
                </div>
              </div>

              {/* Answer */}
              <div
                style={{
                  maxHeight: open === i ? 300 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  className="px-6 pb-6 text-sm leading-relaxed"
                  style={{ color: "var(--nf-muted)" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
