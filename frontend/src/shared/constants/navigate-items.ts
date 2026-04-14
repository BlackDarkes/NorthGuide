export interface INavigateItems {
  id: string;
  title: string;
  path: string;
}

export const NAVIGATE_ITEMS: INavigateItems[] = [
  {
    id: "1",
    title: "Объявления",
    path: "/",
  },
  {
    id: "2",
    title: "Профиль",
    path: "/profile",
  },
  {
    id: "3",
    title: "Избранное",
    path: "/",
  },
]