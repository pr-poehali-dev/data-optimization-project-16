import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Лендинги и сайты",
    description:
      "Создаём продающие лендинги, корпоративные сайты и визитки с нуля. Каждый проект — уникальный дизайн, адаптированный под вашу аудиторию и бизнес-цели.",
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    description:
      "Продумываем каждый экран: от логики переходов до деталей интерфейса. Делаем так, чтобы пользователь совершал нужное действие легко и интуитивно.",
  },
  {
    icon: Code,
    title: "Веб-разработка",
    description:
      "Разрабатываем на React, Next.js и TypeScript. Код — чистый, сайты — быстрые. Настраиваем хостинг, CI/CD и поддерживаем после запуска.",
  },
  {
    icon: Share2,
    title: "Брендинг и соцсети",
    description:
      "Разрабатываем фирменный стиль, логотипы и визуальные материалы для соцсетей. Ваш бренд будет выглядеть профессионально на любой платформе.",
  },
  {
    icon: Target,
    title: "Конверсия и аналитика",
    description:
      "Настраиваем цели, воронки и A/B-тесты. Работаем над тем, чтобы сайт не просто выглядел хорошо, но и приводил реальных клиентов.",
  },
  {
    icon: Search,
    title: "SEO-оптимизация",
    description:
      "Технический SEO-аудит, оптимизация скорости загрузки и структуры контента. Ваш сайт будет заметен в поиске с первых дней после запуска.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё, что нужно для <span className="text-primary">роста онлайн</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-sm sm:text-lg">
          Закрываем весь цикл: от стратегии и дизайна до разработки и вывода в топ поисковиков. Один партнёр — полный результат.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}