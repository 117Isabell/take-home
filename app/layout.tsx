import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "./providers";

export const metadata: Metadata = {
  title: "Sustianly - Uhlíková stopa vašej spoločnosti",
  description:
    "Spočítame za Vás uhlíkovú stopu Vašeho podniku pomocou informácií, s ktorými už dnes pracujete.",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className="bg-background text-foreground">
      <body className="min-h-[100dvh] bg-background">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
