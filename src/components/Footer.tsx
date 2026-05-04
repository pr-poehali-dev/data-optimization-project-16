import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#portfolio" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакт", href: "#contact" },
];

const socials = [
  { icon: "Send", label: "Telegram", href: "https://t.me/Neyrovid" },
  { icon: "Instagram", label: "Instagram", href: "#" },
  { icon: "Linkedin", label: "LinkedIn", href: "#" },
];

const contacts = [
  { icon: "Mail", label: "neuroflow9@gmail.com", href: "mailto:neuroflow9@gmail.com", color: "var(--nf-indigo)" },
  { icon: "Phone", label: "+7 978 686-11-68", href: "tel:+79786861168", color: "var(--nf-cyan)" },
  { icon: "Send", label: "@Neyrovid", href: "https://t.me/Neyrovid", color: "var(--nf-green)" },
];

export function Footer() {
  const scrollTo = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid var(--nf-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#"
              onClick={(e) => scrollTo("#", e)}
              className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity"
            >
              <img
                src="https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/bucket/23ce61da-0272-4004-82f6-d909a64ed510.png"
                alt="NEUROFLOW"
                className="h-9 w-auto"
              />
              <span className="font-bold text-xl" style={{ color: "var(--nf-text)" }}>
                NEURO<span className="gradient-text">FLOW</span>
              </span>
            </a>
            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "var(--nf-muted)" }}
            >
              ИИ-агентство полного цикла: контент, автоматизация, веб-разработка.
              Запускаем цифровые решения с измеримым ROI.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--nf-border)",
                    color: "var(--nf-muted)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--nf-indigo)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--nf-muted)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--nf-border)";
                  }}
                >
                  <Icon name={s.icon as any} size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 mono"
              style={{ color: "var(--nf-text)" }}
            >
              Навигация
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(link.href, e)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--nf-muted)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--nf-text)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--nf-muted)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 mono"
              style={{ color: "var(--nf-text)" }}
            >
              Контакты
            </h4>
            <ul className="space-y-3">
              {contacts.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 text-sm transition-colors duration-200 group"
                    style={{ color: "var(--nf-muted)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = c.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--nf-muted)";
                    }}
                  >
                    <Icon name={c.icon as any} size={14} style={{ color: c.color, flexShrink: 0 }} />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 mono"
              style={{ color: "var(--nf-text)" }}
            >
              В цифрах
            </h4>
            <div className="space-y-4">
              <div
                className="p-4 rounded-xl"
                style={{ background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.15)" }}
              >
                <div className="text-2xl font-bold gradient-text mb-0.5">52</div>
                <div className="text-xs" style={{ color: "var(--nf-muted)" }}>
                  запущено проектов
                </div>
              </div>
              <div
                className="p-4 rounded-xl"
                style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.15)" }}
              >
                <div className="text-2xl font-bold gradient-text-green mb-0.5">1 240ч</div>
                <div className="text-xs" style={{ color: "var(--nf-muted)" }}>
                  сэкономлено клиентам
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--nf-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--nf-muted)" }}>
            © 2025 NEUROFLOW. Все права защищены.
          </p>
          <a
            href="#privacy"
            className="text-xs hover:underline transition-all"
            style={{ color: "var(--nf-muted)" }}
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>

      {/* Mobile bottom bar spacer */}
      <div className="h-16 md:hidden" />
    </footer>
  );
}