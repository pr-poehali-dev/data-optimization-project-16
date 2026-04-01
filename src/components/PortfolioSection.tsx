import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Интернет-магазин «Вкусвилл»",
    category: "E-commerce и веб-разработка",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop",
    description:
      "Современный интернет-магазин натуральных продуктов с удобным каталогом, фильтрацией по составу и системой быстрой доставки. Высокая конверсия и скорость загрузки.",
    url: "https://vkusvill.ru/",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Онлайн-банк «Тинькофф»",
    category: "Финтех и веб-приложение",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    description:
      "Личный кабинет клиента с управлением счетами, картами и инвестициями. Интуитивный интерфейс, моментальные переводы и сводка финансов в одном окне.",
    url: "https://www.tinkoff.ru/",
    tags: ["React", "TypeScript", "Node.js", "GraphQL"],
  },
  {
    title: "Маркетплейс «Авито»",
    category: "Маркетплейс и платформа",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    description:
      "Крупнейшая платформа объявлений в России. Умный поиск с фильтрами, геолокация, встроенный мессенджер и безопасная сделка — всё в одном сервисе.",
    url: "https://www.avito.ru/",
    tags: ["React", "Redux", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Образовательный портал «Яндекс Практикум»",
    category: "EdTech и веб-платформа",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
    description:
      "Платформа онлайн-обучения с интерактивными тренажёрами, системой проверки кода, трекером прогресса и личным наставником для каждого студента.",
    url: "https://practicum.yandex.ru/",
    tags: ["React", "Python", "Django", "PostgreSQL"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            Наши работы
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Проекты, которыми <span className="text-primary">мы гордимся</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные проекты для реального бизнеса — от лендингов до AI-приложений. Каждый сделан с душой и нацелен на результат.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Desktop: показывается при hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-6 hidden sm:flex">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Открыть проект <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-primary font-semibold mb-1.5 sm:mb-2">{project.category}</p>
                <h3 className="text-base sm:text-xl font-bold mb-1.5 sm:mb-2 leading-snug">{project.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-0.5 sm:py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Mobile: кнопка всегда видна */}
                <div className="mt-4 sm:hidden">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Открыть проект <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}