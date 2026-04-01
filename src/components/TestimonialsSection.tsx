import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Быстро и результативно! Искал логотип и лендинг под новый бизнес — НейроВид сделали всё с первого раза, без лишних правок. Очень доволен.",
    name: "Патрик",
    role: "Предприниматель",
  },
  {
    quote:
      "Хотели обновить старый сайт фонда и автоматизировать ручные задачи. Получили продукт, который работает именно так, как нам нужно. Команда слышала с первого слова.",
    name: "Мехмет",
    role: "Председатель НКО",
  },
  {
    quote:
      "Нужен был современный сайт-визитка для нового проекта. Получил красивый, быстрый сайт, который сразу попал в топ Google. Рекомендую без оговорок.",
    name: "Юрий",
    role: "Владелец бизнеса",
  },
  {
    quote:
      "Работали с НейроВид над интернет-магазином. Сдали в срок, сайт летает, поддержка отвечает быстро. Уже планируем следующий проект вместе.",
    name: "Анна",
    role: "Основатель e-commerce",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Клиенты говорят сами за себя
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Для нас важно не просто сдать проект — а сделать так, чтобы он реально работал. Вот что говорят те, кто уже запустился.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}