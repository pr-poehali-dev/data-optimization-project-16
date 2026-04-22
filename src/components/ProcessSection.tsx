import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, PaletteIcon, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Бриф и стратегия",
    description: "Обсуждаем задачи и цели. Вы получаете чёткое техзадание и понимаете каждый шаг.",
    number: "01",
  },
  {
    icon: PaletteIcon,
    title: "Дизайн и разработка",
    description: "Создаём макеты, согласовываем с вами и уходим в код. Никаких сюрпризов на финише.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Запуск и поддержка",
    description: "Тестируем, настраиваем хостинг и выкатываем проект. Остаёмся на связи после старта.",
    number: "03",
  },
]

export function ProcessSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block mb-3 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            Наш процесс
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-balance">
            Как мы <span className="text-primary">работаем</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
            Три шага — и ваш проект живёт в сети.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background"
            >
              <div className="absolute top-0 right-0 text-[80px] font-bold text-primary/5 leading-none p-3 select-none">
                {step.number}
              </div>
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit">
                  <step.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
