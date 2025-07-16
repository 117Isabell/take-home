import "./globals.css";
import type { Metadata, Viewport } from "next";
import { getUser, getTeamForUser } from "@/lib/db/queries";
import { SWRConfig } from "swr";

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
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              "/api/user": getUser(),
              "/api/team": getTeamForUser(),
            },
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
