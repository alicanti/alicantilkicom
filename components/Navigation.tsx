"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: t("home"), exact: true },
    { href: `/${locale}/instantpose`, label: "InstantPose" },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo />
            <span className="font-semibold text-lg text-white">Alican Tilki</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.href, item.exact)
                    ? "text-white bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-2">
              <Link
                href={pathname.replace(`/${locale}`, '/en')}
                className={cn(
                  "px-2 py-1 text-xs font-medium rounded",
                  locale === 'en' ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                )}
              >
                EN
              </Link>
              <Link
                href={pathname.replace(`/${locale}`, '/tr')}
                className={cn(
                  "px-2 py-1 text-xs font-medium rounded",
                  locale === 'tr' ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                )}
              >
                TR
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/50 bg-slate-900/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(item.href, item.exact)
                    ? "text-white bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-3 py-2">
              <Link
                href={pathname.replace(`/${locale}`, '/en')}
                className={cn(
                  "px-3 py-1 text-sm font-medium rounded",
                  locale === 'en' ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                )}
              >
                EN
              </Link>
              <Link
                href={pathname.replace(`/${locale}`, '/tr')}
                className={cn(
                  "px-3 py-1 text-sm font-medium rounded",
                  locale === 'tr' ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                )}
              >
                TR
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

