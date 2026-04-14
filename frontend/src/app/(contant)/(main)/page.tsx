import { EventsList } from "@/widgets/events-list";
import { SearchToolbar } from "@/widgets/search-toolbar/ui/SearchToolbar";

export default function ContentPage() {
  return (
    <>
      <SearchToolbar />
      <EventsList />
    </>
  )
}