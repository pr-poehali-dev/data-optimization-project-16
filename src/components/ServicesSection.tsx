import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Share2, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Лендинги и сайты",
    description: "Продающие лендинги и корпоративные сайты с уникальным дизайном под ваш бизнес.",
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    description: "Интерфейсы, в которых пользователь совершает нужное действие легко и интуитивно.",
  },
  {
    icon: Share2,
    title: "Брендинг и соцсети",
    description: "Фирменный стиль, логотипы и визуалы для соцсетей — профессионально на любой платформе.",
  },
  {
    icon: Search,
    title: "SEO-оптимизация",
    description: "Технический аудит и оптимизация контента — ваш сайт заметен в поиске с первых дней.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block mb-3 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            Наша экспертиза
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-balance">
            Всё для <span className="text-primary">роста онлайн</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Один партнёр — полный результат.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg bg-background/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
