import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

const values = [
  { title: "Качество", description: "Высококлассные решения, соответствующие самым высоким стандартам" },
  { title: "Доступность", description: "Профессиональные сайты по честным и прозрачным ценам" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            О нас
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-balance">
            Команда, которой{" "}
            <span className="text-primary relative">
              доверяют
              <svg className="absolute -bottom-1.5 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                <path d="M0 3C50 1 150 5 200 3" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Небольшая команда разработчиков и дизайнеров. Без лишних процессов — напрямую к результату.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
