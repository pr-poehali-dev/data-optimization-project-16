import { useState } from "react";
import Icon from "@/components/ui/icon";

const SEND_LEAD_URL = "https://functions.poehali.dev/1758bd19-9acb-45c6-bb6a-45210df3c83f";

const serviceOptions = [
  "ИИ-контент (видео, аватары, музыка)",
  "ИИ-автоматизация (боты, парсинг, отчёты)",
  "Лендинг или корпоративный сайт",
  "Мини-приложение / SaaS",
  "Несколько направлений сразу",
  "Не знаю — нужна консультация",
];

const contactInfo = [
  { icon: "Mail", label: "Email", value: "neuroflow9@gmail.com", href: "mailto:neuroflow9@gmail.com", color: "var(--nf-indigo)" },
  { icon: "Phone", label: "Телефон", value: "+7 978 686-11-68", href: "tel:+79786861168", color: "var(--nf-cyan)" },
  { icon: "Send", label: "Telegram", value: "@Neyrovid", href: "https://t.me/Neyrovid", color: "var(--nf-green)" },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", contact: "", service: "", comment: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--nf-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mono text-xs"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "var(--nf-green)" }}
          >
            связаться
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--nf-text)", lineHeight: 1.15 }}
          >
            Напишите нам —{" "}
            <span className="gradient-text">ответим за 2 часа</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: форма */}
          <div className="glass-card p-8">
            {status === "success" ? (
              <div className="text-center py-10">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
                  style={{ background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.4)" }}
                >
                  <Icon name="CheckCircle" size={38} style={{ color: "var(--nf-green)" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--nf-text)" }}>Спасибо!</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--nf-muted)" }}>
                  Заявка отправлена. Мы свяжемся с вами{" "}
                  <span style={{ color: "var(--nf-green)", fontWeight: 600 }}>в течение 2 часов</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--nf-text)" }}>Получить смету</h3>
                  <p className="text-sm" style={{ color: "var(--nf-muted)" }}>Заполните за 2 минуты — ответим быстро</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--nf-text)" }}>Имя *</label>
                  <input className="nf-input" placeholder="Александр" required autoFocus value={form.name} onChange={set("name")} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--nf-text)" }}>Телефон *</label>
                  <input className="nf-input" placeholder="+7 978 686-11-68" required value={form.contact} onChange={set("contact")} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--nf-text)" }}>Что интересует?</label>
                  <select
                    className="nf-input"
                    value={form.service}
                    onChange={set("service")}
                    style={{ appearance: "none", cursor: "pointer", background: "rgba(255,255,255,0.04)" }}
                  >
                    <option value="" style={{ background: "#0B0F19" }}>Выберите направление...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} style={{ background: "#0B0F19" }}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--nf-text)" }}>Расскажите подробнее</label>
                  <textarea
                    className="nf-input"
                    placeholder="Опишите задачу, сроки, особые пожелания..."
                    rows={4}
                    value={form.comment}
                    onChange={set("comment")}
                    style={{ resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <div
                    className="flex items-center gap-2 p-3 rounded-xl text-sm"
                    style={{ background: "rgba(239,68,68,0.1)", color: "#F87171", border: "1px solid rgba(239,68,68,0.2)" }}
                  >
                    <Icon name="AlertCircle" size={15} />
                    Не удалось отправить. Напишите напрямую: neuroflow9@gmail.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-cta w-full flex items-center justify-center gap-2"
                  style={{ minHeight: 56 }}
                >
                  {status === "sending" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Отправляем...</>
                  ) : (
                    <>Получить смету за 2 часа<Icon name="Send" size={16} /></>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: "var(--nf-muted)" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Без спама.
                </p>
              </form>
            )}
          </div>

          {/* Right: контакты */}
          <div>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--nf-border)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = item.color + "50";
                    (e.currentTarget as HTMLElement).style.background = item.color + "08";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--nf-border)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.color + "18", border: `1px solid ${item.color}30` }}
                  >
                    <Icon name={item.icon as any} size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs mono mb-0.5" style={{ color: "var(--nf-muted)" }}>{item.label}</p>
                    <p className="text-sm font-semibold" style={{ color: "var(--nf-text)" }}>{item.value}</p>
                  </div>
                  <Icon
                    name="ArrowUpRight"
                    size={14}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: item.color }}
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}