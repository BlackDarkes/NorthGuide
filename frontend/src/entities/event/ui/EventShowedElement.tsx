"use client";

import { formatDate } from "@/shared/model/formatDate";
import { IEvent } from "@/shared/types";
import { cn } from "@/shared/lib/utils";
import {
  CalendarDays,
  Users,
  Banknote,
  Clock,
  FileText,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/shared/ui";
import { getDaysWord } from "@/shared/model/getDaysWord";
import { MetricCard } from "./EventMetricCard";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface IEventShowedElementProps {
  event: IEvent | undefined;
  children: ReactNode;
}

export const EventShowedElement = ({
  event,
  children,
}: IEventShowedElementProps) => {
  const { back } = useRouter();

  if (!event) {
    return (
      <div className="animate-pulse space-y-4 text-muted-foreground">
        Загрузка данных...
      </div>
    ); // Skeleton
  }

  const isGet = event.type === "GET";
  const formattedDate = formatDate(event.dateEvent || new Date());

  const handleBack = () => {
    back();
  };

  return (
    <div className="space-y-8">
      <Button
        variant="ghost"
        size="sm"
        className="w-fit -ml-2 text-muted-foreground hover:text-foreground hover:bg-muted/50"
        onClick={handleBack}
      >
        <ArrowLeft className="size-4 mr-1.5" />
        Назад
      </Button>

      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                isGet
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-primary/10 text-primary",
              )}
            >
              {isGet ? "Отдам" : "Возьму"}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CalendarDays className="size-4" />
              {formattedDate}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground wrap-break-word">
            {event.title}
          </h1>
        </div>

        {children}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard
          icon={<Banknote className="size-5" />}
          label="Цена за человека"
          value={`${event.price} ₽`}
        />
        <MetricCard
          icon={<Users className="size-5" />}
          label="Кол-во человек"
          value={`${event.countPeople} чел.`}
        />
        <MetricCard
          icon={<Clock className="size-5" />}
          label="Длительность"
          value={`${event.days} ${getDaysWord(event.days)}`}
        />
      </div>

      <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <FileText className="size-4" />
          Описание
        </h3>
        <p className="text-foreground leading-relaxed whitespace-pre-wrap">
          {event.description || "Описание отсутствует."}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          size="lg"
          className="w-full sm:flex-1 py-5 text-base font-medium shadow-sm hover:shadow-md transition-all"
          onClick={() => console.log("Купить", event.id)}
        >
          Купить за {event.price} ₽
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto py-5">
          Поделиться
        </Button>
      </div>
    </div>
  );
};
