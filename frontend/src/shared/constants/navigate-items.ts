export interface INavigateItems {
  id: string;
  title: string;
  path?: string;
  isButton: boolean;
  isLogout?: boolean;
}

export const NAVIGATE_ITEMS: INavigateItems[] = [
  {
    id: "1",
    title: "Объявления",
    path: "/",
    isButton: false,
  },
  {
    id: "2",
    title: "Профиль",
    path: "/profile",
    isButton: false,
  },
  {
    id: "3",
    title: "Избранное",
    path: "/favorites",
    isButton: false,
  },
  {
    id: "4",
    title: "Полезная информация",
    path: "/help",
    isButton: false,
  },
  {
    id: "5",
    title: "Выйти",
    path: "/login",
    isLogout: true,
    isButton: true,
  }
]