import Icon from "@/components/ui/icon";

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
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Contacts row */}
        <div className="flex flex-wrap gap-4 mb-10">
          {contacts.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm transition-colors duration-200 px-4 py-2.5 rounded-xl"
              style={{
                color: "var(--nf-muted)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--nf-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = c.color;
                (e.currentTarget as HTMLElement).style.borderColor = c.color + "40";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--nf-muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--nf-border)";
              }}
            >
              <Icon name={c.icon as any} size={14} style={{ color: c.color, flexShrink: 0 }} />
              {c.label}
            </a>
          ))}
        </div>

        {/* Brand */}
        <div className="mb-10">
          <a
            href="#"
            onClick={(e) => scrollTo("#", e)}
            className="flex items-center gap-3 mb-3 hover:opacity-90 transition-opacity w-fit"
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
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--nf-muted)" }}>
            ИИ-агентство полного цикла: контент, автоматизация, веб-разработка.
            Запускаем цифровые решения с измеримым ROI.
          </p>
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