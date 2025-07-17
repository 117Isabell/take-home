"use client";

import Image from "next/image";
import { useTheme } from "@/app/providers";
import { useEffect, useState } from "react";

interface ThemeAwareLogoProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export function ThemeAwareLogo({
  width = 500,
  height = 500,
  className = "",
  alt = "Sustainly Logo",
}: ThemeAwareLogoProps) {
  const [mounted, setMounted] = useState(false);
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemPrefersDark(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPrefersDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <Image
        src="/dark-theme-logo.png"
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  try {
    const { theme } = useTheme();

    const getLogoSrc = () => {
      switch (theme) {
        case "light":
          return "/light-logo.png";
        case "dark":
          return "/dark-logo.png";
        case "system":
          return systemPrefersDark ? "/dark-logo.png" : "/light-logo.png";
        default:
          return "/dark-logo.png";
      }
    };

    const logoSrc = getLogoSrc();

    return (
      <Image
        src={logoSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.src !== "/dark-theme-logo.png") {
            target.src = "/dark-theme-logo.png";
          }
        }}
      />
    );
  } catch (error) {
    // Fallback if theme context is not available
    return (
      <Image
        src="/dark-theme-logo.png"
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }
}
