import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { QuoteFormDialog } from "@/components/QuoteFormDialog"

const pricingTiers = [
  {
    name: "Старт",
    price: "25 000",
    features: [
      "Лендинг до 5 секций",
      "Адаптивный дизайн",
      "Базовая SEO-оптимизация",
      "Форма обратной связи",
      "Настройка хостинга",
      "1 месяц поддержки",
    ],
    highlighted: false,
  },
  {
    name: "Бизнес",
    price: "80 000",
    features: [
      "Многостраничный сайт",
      "Уникальный UI/UX дизайн",
      "Расширенная SEO-оптимизация",
      "CMS для управления контентом",
      "Аналитика и цели",
      "3 месяца поддержки",
    ],
    highlighted: true,
  },
  {
    name: "Про",
    price: "По запросу",
    features: [
      "Веб-приложение / SaaS",
      "Кастомный функционал",
      "API-интеграции и автоматизация",
      "Персональный менеджер",
      "CI/CD и DevOps",
      "6 месяцев поддержки",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Прозрачные цены
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-balance">
            Честные цены — <span className="text-primary">никаких сюрпризов</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
            Выберите пакет или напишите — подберём решение под вашу задачу
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group ${
                tier.highlighted
                  ? "border-primary shadow-xl sm:scale-105 bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-0.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-xl mb-1">{tier.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">
                    {tier.price === "По запросу" ? (
                      <span className="text-2xl">{tier.price}</span>
                    ) : (
                      <>
                        <span className="text-sm font-normal text-muted-foreground">от </span>
                        {tier.price}
                        <span className="text-sm font-normal text-muted-foreground"> ₽</span>
                      </>
                    )}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <QuoteFormDialog
                  packageName={tier.name}
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full ${tier.highlighted ? "shadow-lg shadow-primary/20" : ""}`}
                >
                  {tier.price === "По запросу" ? "Связаться с нами" : "Выбрать тариф"}
                </QuoteFormDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Все тарифы включают <span className="text-primary font-semibold">бесплатную настройку хостинга</span> и{" "}
            <span className="text-primary font-semibold">SSL-сертификат</span>
          </p>
        </div>
      </div>
    </section>
  )
}
