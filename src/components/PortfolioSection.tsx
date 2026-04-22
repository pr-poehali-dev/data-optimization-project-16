import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Путешествия по Крыму",
    category: "Туризм и тревел-гайд",
    image: "https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/files/fbeedf04-c064-4048-b096-ff9630606058.jpg",
    description:
      "Туристический портал-путеводитель по Крымскому полуострову. Помогает путешественникам открыть лучшие маршруты, достопримечательности и получить незабываемые впечатления.",
    url: "https://project-alpha-update-2--preview.poehali.dev/",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Легенды Баку",
    category: "Ресторан азербайджанской кухни",
    image: "https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/files/9adb031e-a59d-439a-b836-8131e602294f.jpg",
    description:
      "Сайт ресторана азербайджанской кухни в Севастополе. Уютная атмосфера, фирменные блюда — люля-кебаб, плов, шашлык — и онлайн-бронирование столика.",
    url: "https://legendybaku.ru/",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "СоседМастер",
    category: "Маркетплейс услуг",
    image: "https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/files/f5d670f5-07fb-4273-bf50-c2edf6d68158.jpg",
    description:
      "Гиперлокальный маркетплейс проверенных мастеров в вашем районе. Соединяет жителей с надёжными специалистами по ремонту и бытовым услугам.",
    url: "https://neighbor-help-app-1--preview.poehali.dev/",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "NeuraMind",
    category: "EdTech и AI-платформа",
    image: "https://cdn.poehali.dev/projects/3ac90158-e371-49c9-8dba-507fa6fdb827/files/972920c6-57da-49f1-ba7a-0899e3140f3d.jpg",
    description:
      "Образовательная платформа будущего по искусственному интеллекту, психологии и мотивации. Интерактивные курсы с персонализированным подходом для каждого студента.",
    url: "https://ai-learning-app--preview.poehali.dev/",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
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