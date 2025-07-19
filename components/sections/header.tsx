"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeAwareLogo } from "@/components/ui/theme-aware-logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToTeam = () => {
    router.push("/team");
  };

  return (
    <header className="border-b border-border bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <ThemeAwareLogo width={160} height={160} />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("solutions")}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Our Solutions
          </button>
          <button
            onClick={navigateToTeam}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Who We Are
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Contact Us
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
