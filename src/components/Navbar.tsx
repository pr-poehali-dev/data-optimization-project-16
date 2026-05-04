import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#portfolio" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          scrolled
            ? "shadow-lg"
            : "bg-transparent"
        }`}
        style={scrolled ? { background: "rgba(11,15,25,0.94)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--nf-border)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => scrollTo("#", e)}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img
              src="https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/bucket/23ce61da-0272-4004-82f6-d909a64ed510.png"
              alt="NEUROFLOW"
              className="h-8 w-auto"
            />
            <span
              className="font-bold text-lg tracking-wide"
              style={{ color: "var(--nf-text)" }}
            >
              NEURO<span className="gradient-text">FLOW</span>
            </span>
          </a>

          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(link.href, e)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: "var(--nf-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--nf-text)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--nf-muted)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => scrollTo("#contact", e)}
            className="btn-primary text-sm"
            style={{ padding: "10px 22px" }}
          >
            Рассчитать проект
          </a>
        </div>
      </header>

      {/* Mobile Bottom Bar */}
      <nav className="mobile-bottom-bar md:hidden">
        <div className="flex items-center justify-around px-2">
          {[
            { label: "Главная", icon: "Home", href: "#" },
            { label: "Услуги", icon: "Layers", href: "#services" },
            { label: "Тарифы", icon: "CreditCard", href: "#services" },
            { label: "Кейсы", icon: "Briefcase", href: "#portfolio" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(item.href, e)}
              className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors min-w-[56px]"
              style={{ color: "var(--nf-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--nf-indigo)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--nf-muted)";
              }}
            >
              <Icon name={item.icon as any} size={20} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}