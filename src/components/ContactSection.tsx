import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block mb-3 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            Контакты
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-balance">
            Готовы <span className="text-primary">стартовать?</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
            Напишите нам — ответим в течение нескольких часов.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl bg-background">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">Имя *</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">E-mail *</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.ru" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+7 900 123-45-67" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">Сообщение *</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Расскажите о вашем проекте..." rows={4} required />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            {[
              { icon: Mail, label: "E-mail", value: "hello@codecraft.dev" },
              { icon: Phone, label: "Телефон", value: "+7 900 123-45-67" },
              { icon: MapPin, label: "Время работы", value: "Пн–Пт: 9:00–18:00" },
            ].map(({ icon: Icon, label, value }) => (
              <Card key={label} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{label}</h3>
                      <p className="text-xs text-muted-foreground">{value}</p>
                    </div>
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
