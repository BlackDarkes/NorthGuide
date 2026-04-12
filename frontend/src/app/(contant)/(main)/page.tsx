import { EventsList } from "@/widgets/events-list";
import { Header } from "@/widgets/header/ui/Header";
import { SearchToolbar } from "@/widgets/search-toolbar/ui/SearchToolbar";

export default function ContentPage() {
  return (
    <>
      <Header />
      <SearchToolbar />
      <EventsList />
    </>
  )
}