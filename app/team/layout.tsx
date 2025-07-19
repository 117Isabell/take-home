import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
