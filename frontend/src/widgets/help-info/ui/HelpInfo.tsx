"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Container,
} from "@/shared/ui";
import { CreditCard, Handshake, MessageSquare } from "lucide-react";

export const HelpInfo = () => {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Справочная информация
            </h2>
            <p className="text-sm text-muted-foreground">Полезные материалы</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem
              value="tariff_plan"
              className="border border-border/60 rounded-lg px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <CreditCard className="size-5 text-muted-foreground shrink-0" />
                  <span className="font-medium text-foreground">
                    Тарифный план
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4 pl-8">
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    Здесь будет подробное описание тарифов: условия, лимиты,
                    преимущества.
                  </p>
                  <div className="overflow-x-auto rounded-md border">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="px-3 py-2 text-left font-medium">Тариф</th>
                          <th className="px-3 py-2 text-left font-medium">Цена</th>
                          <th className="px-3 py-2 text-left font-medium">Лимиты</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-3 py-2">TEST</td>
                          <td className="px-3 py-2">FREE</td>
                          <td className="px-3 py-2">LIMIT</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2">TEST2</td>
                          <td className="px-3 py-2">499 ₽/мес</td>
                          <td className="px-3 py-2">NO LIMIT</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="cooperation"
              className="border border-border/60 rounded-lg px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <Handshake className="size-5 text-muted-foreground shrink-0" />
                  <span className="font-medium text-foreground">
                    Сотрудничество
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4 pl-8">
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    Информация для партнёров, гидов и организаций. Условия
                    подключения, документы, контакты.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Заполните анкету партнёра</li>
                    <li>Предоставьте реквизиты организации</li>
                    <li>После модерации получите доступ к панели управления</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="feedback"
              className="border border-border/60 rounded-lg px-4 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <MessageSquare className="size-5 text-muted-foreground shrink-0" />
                  <span className="font-medium text-foreground">
                    Обратная связь
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4 pl-8">
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    Напишите нам, если у вас есть вопрос, предложение или вы
                    нашли ошибку.
                  </p>
                  <form className="space-y-3 pt-2">
                    <div className="grid gap-2">
                      <label className="text-xs font-medium text-foreground">
                        Ваше сообщение
                      </label>
                      <textarea
                        className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Опишите ваш вопрос..."
                      />
                    </div>
                    <Button type="submit" size="sm">
                      Отправить
                    </Button>
                  </form>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
