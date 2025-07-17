"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark" | "system") ||
      "system";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.toggle("dark", systemTheme === "dark");
    } else {
      root.classList.toggle("dark", theme === "dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="border-b border-border bg-[#122E44]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Sustainly Logo"
            width={500}
            height={500}
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("solutions")}
            className="text-white hover:text-blue-200 transition-colors"
          >
            Our Solutions
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-blue-200 transition-colors"
          >
            Who We Are
          </button>
          <a
            href="mailto:info@sustainly.tech"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Contact Us
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
