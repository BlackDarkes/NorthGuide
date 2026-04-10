"use client"

import { SearchField } from "@/features/event-search";
import { Container } from "@/shared/ui";
import { Settings2 } from "lucide-react";

export const SearchToolbar = () => {
  return (
    <article>
      <Container>
        <div>
          <SearchField  />
          <Settings2 />
        </div>
      </Container>
    </article>
  );
}