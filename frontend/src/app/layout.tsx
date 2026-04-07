import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./providers/AppProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "North Guide",
  description: "North Guide",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "North Guide",
    description: "North Guide",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  authors: {
    url: "-",
    name: "DaniilGordeev(BlackDarkes)",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
