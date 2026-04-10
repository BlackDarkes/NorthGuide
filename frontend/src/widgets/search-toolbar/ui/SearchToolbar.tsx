"use client"

import { SearchField } from "@/features/event-search";
import { Container } from "@/shared/ui";
import { Settings2 } from "lucide-react";

export const SearchToolbar = () => {
  return (
    <article className="py-4 md:py-6">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-3xl mx-auto">
          <div className="w-full md:flex-1">
            <SearchField />
          </div>
          
          <button
            type="button"
            className="p-2.5 rounded-lg border border-gray-600 bg-foreground text-background  hover:bg-gray-50 dark:hover:bg-foreground/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors"
            aria-label="Настройки поиска"
          >
            <Settings2 className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </article>
  );
}