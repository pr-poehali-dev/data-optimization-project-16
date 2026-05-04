import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollTo = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--nf-bg)" }}
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Orbs */}
      <div
        className="orb orb-indigo"
        style={{ width: 500, height: 500, top: "-10%", left: "-10%", opacity: 0.25 }}
      />
      <div
        className="orb orb-cyan"
        style={{ width: 400, height: 400, bottom: "-5%", right: "-5%", opacity: 0.2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-32 md:pb-20 text-center">

        {/* Mobile logo */}
        <div className="flex justify-center mb-6 md:hidden">
          <img
            src="https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/bucket/23ce61da-0272-4004-82f6-d909a64ed510.png"
            alt="NEUROFLOW"
            className="h-12 w-auto"
          />
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.25)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--nf-green)" }}
          />
          <span className="mono text-xs" style={{ color: "var(--nf-cyan)" }}>
            AI-агентство полного цикла
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up delay-100"
          style={{ color: "var(--nf-text)", lineHeight: 1.1 }}
        >
          Контент. Автоматизация.{" "}
          <br className="hidden md:block" />
          <span className="gradient-text">Цифровые решения.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed"
          style={{ color: "var(--nf-muted)" }}
        >
          Запускаем цифровые решения за 7 дней.{" "}
          <span style={{ color: "var(--nf-text)" }}></span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a
            href="#contact"
            onClick={(e) => scrollTo("#contact", e)}
            className="btn-cta flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Рассчитать проект
            <Icon name="ArrowRight" size={18} />
          </a>
          <a
            href="#portfolio"
            onClick={(e) => scrollTo("#portfolio", e)}
            className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Icon name="Play" size={16} />
            Смотреть кейсы
          </a>
        </div>


      </div>
    </section>
  );
}