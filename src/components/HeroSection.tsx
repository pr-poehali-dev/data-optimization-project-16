import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-muted/40 blur-3xl animate-pulse"
          style={{ top: "20%", left: "10%", animationDuration: "4s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-muted/30 blur-3xl animate-pulse"
          style={{ bottom: "10%", right: "15%", animationDuration: "6s", animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto text-center max-w-4xl relative z-10 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-5 animate-fade-in-up text-balance">
          Сайты, которые{" "}
          <span className="text-primary relative inline-block">
            продают
            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
              <path d="M2 8C50 3 150 3 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />
            </svg>
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-muted-foreground mb-7 sm:mb-9 max-w-xl mx-auto animate-fade-in-up leading-relaxed">
          От идеи до запуска — под ключ, в срок, с результатом.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up mb-8 sm:mb-10">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto px-7 py-5 text-base group shadow-lg shadow-primary/25 transition-all"
            asChild
          >
            <a href="#contact">
              Обсудить проект
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold w-full sm:w-auto px-7 py-5 text-base bg-transparent"
            asChild
          >
            <a href="#portfolio">Смотреть работы</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-in-up">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>50+ проектов</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>45+ клиентов</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>3+ года опыта</span>
          </div>
        </div>
      </div>
    </section>
  )
}
