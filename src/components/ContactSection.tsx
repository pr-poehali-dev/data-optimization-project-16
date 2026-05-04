import { useState } from "react";
import Icon from "@/components/ui/icon";

const taskTypes = [
  "ИИ-контент (видео, аватары, музыка)",
  "ИИ-автоматизация (боты, парсинг, отчёты)",
  "Лендинг или корпоративный сайт",
  "Мини-приложение / SaaS",
  "Несколько направлений сразу",
  "Не знаю — нужна консультация",
];

const budgetLabels = ["до 30k", "30–75k", "75–150k", "150k+"];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    task: "",
    budget: 1,
    sent: false,
    sending: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForm((f) => ({ ...f, sending: true }));
    await new Promise((r) => setTimeout(r, 800));
    setForm((f) => ({ ...f, sending: false, sent: true }));
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--nf-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mono text-xs"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "var(--nf-green)",
              }}
            >
              связаться
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-5"
              style={{ color: "var(--nf-text)", lineHeight: 1.15 }}
            >
              Готовы обсудить{" "}
              <span className="gradient-text">ваш проект?</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--nf-muted)" }}>
              Заполните форму — пришлём смету в течение 24 часов.
              Отвечаем лично. Без шаблонных ответов и спама.
            </p>

            <div className="space-y-5">
              {[
                { icon: "MessageSquare", title: "Telegram", val: "@neuroflow_ai", color: "var(--nf-cyan)" },
                { icon: "Mail", title: "Email", val: "hello@neuroflow.ai", color: "var(--nf-indigo)" },
                { icon: "Clock", title: "Ответ", val: "В течение 24 часов", color: "var(--nf-green)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <Icon name={item.icon as any} size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs mono mb-0.5" style={{ color: "var(--nf-muted)" }}>
                      {item.title}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--nf-text)" }}>
                      {item.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-card p-8">
            {form.sent ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
                >
                  <Icon name="Check" size={32} style={{ color: "var(--nf-green)" }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--nf-text)" }}>
                  Заявка отправлена!
                </h3>
                <p className="text-sm" style={{ color: "var(--nf-muted)" }}>
                  Свяжемся с вами в течение 24 часов.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--nf-text)" }}>
                  Получить смету
                </h3>
                <p className="text-sm mb-5" style={{ color: "var(--nf-muted)" }}>
                  Заполните за 2 минуты — ответим лично
                </p>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--nf-text)" }}>
                    Имя *
                  </label>
                  <input
                    className="nf-input"
                    placeholder="Алексей"
                    required
                    autoFocus
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--nf-text)" }}>
                    Telegram или Email *
                  </label>
                  <input
                    className="nf-input"
                    placeholder="@username или email@mail.ru"
                    required
                    value={form.contact}
                    onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                  />
                </div>

                {/* Task type */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--nf-text)" }}>
                    Тип задачи *
                  </label>
                  <select
                    className="nf-input"
                    required
                    value={form.task}
                    onChange={(e) => setForm((f) => ({ ...f, task: e.target.value }))}
                    style={{ appearance: "none", cursor: "pointer" }}
                  >
                    <option value="" disabled>Выберите направление...</option>
                    {taskTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#0B0F19" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium" style={{ color: "var(--nf-text)" }}>
                      Бюджет
                    </label>
                    <span
                      className="text-sm font-bold px-3 py-1 rounded-lg mono"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        color: "var(--nf-indigo)",
                      }}
                    >
                      {budgetLabels[form.budget]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={3}
                    step={1}
                    value={form.budget}
                    onChange={(e) => setForm((f) => ({ ...f, budget: +e.target.value }))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, var(--nf-indigo) 0%, var(--nf-indigo) ${(form.budget / 3) * 100}%, rgba(255,255,255,0.1) ${(form.budget / 3) * 100}%, rgba(255,255,255,0.1) 100%)`,
                      outline: "none",
                    }}
                  />
                  <div className="flex justify-between mt-1">
                    {budgetLabels.map((l) => (
                      <span key={l} className="text-[10px]" style={{ color: "var(--nf-muted)" }}>
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={form.sending}
                  className="btn-cta w-full flex items-center justify-center gap-2 mt-2"
                  style={{ minHeight: 56 }}
                >
                  {form.sending ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      Получить смету за 24ч
                      <Icon name="Send" size={16} />
                    </>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: "var(--nf-muted)" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
