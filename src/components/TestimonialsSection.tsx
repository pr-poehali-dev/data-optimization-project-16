import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Быстро и результативно! Лендинг и логотип сделали с первого раза, без лишних правок.",
    name: "Патрик",
    role: "Предприниматель",
  },
  {
    quote: "Получили продукт, который работает именно так, как нам нужно. Команда слышала с первого слова.",
    name: "Мехмет",
    role: "Председатель НКО",
  },
  {
    quote: "Красивый, быстрый сайт, который сразу попал в топ Google. Рекомендую без оговорок.",
    name: "Юрий",
    role: "Владелец бизнеса",
  },
  {
    quote: "Сдали в срок, сайт летает, поддержка отвечает быстро. Уже планируем следующий проект.",
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
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-balance">
            Клиенты говорят сами за себя
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
            Вот что говорят те, кто уже запустился.
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-4 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[85vw] sm:w-[380px] border-none shadow-lg">
                <CardContent className="p-5 sm:p-6">
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <p className="text-sm sm:text-base mb-4 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">{testimonial.role}</p>
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
