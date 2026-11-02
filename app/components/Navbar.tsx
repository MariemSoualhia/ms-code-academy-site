"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Ressources", href: "/ressources" },
  {
    label: "Nos réussites",
    href: "/reussites",
  },
  { label: "Contact", href: "/contact" },
];

type Pill = {
  left: number;
  width: number;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pill, setPill] = useState<Pill | null>(null);

  const progressRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  // Gestion du scroll et de la barre de progression
  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);

        const max = document.documentElement.scrollHeight - window.innerHeight;

        const ratio = max > 0 ? Math.min(y / max, 1) : 0;

        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${ratio})`;
        }
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setMenuOpen(false);
    setPill(null);
  }, [pathname]);

  // Fermer le menu avec la touche Échap
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Position de la pastille de navigation
  const movePill = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.FocusEvent<HTMLAnchorElement>,
  ) => {
    const nav = navLinksRef.current;
    const element = e.currentTarget;

    if (!nav) return;

    const navRect = nav.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    setPill({
      left: elementRect.left - navRect.left,
      width: elementRect.width,
    });
  };

  const pillStyle: CSSProperties = {
    width: pill?.width ?? 0,
    transform: `translateX(${pill?.left ?? 0}px)`,
    opacity: pill ? 1 : 0,
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "border-violet-200/70 bg-white/85 shadow-[0_10px_40px_-12px_rgba(124,58,237,0.35)]"
          : "border-violet-100/80 bg-white/95"
      }`}
    >
      {/* Barre de progression */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400"
      />

      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 lg:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
        aria-label="Navigation principale"
      >
        {/* Logo et identité */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
          aria-label="MS Code Academy - Accueil"
        >
          <span className="relative">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-400 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60"
            />

            <Image
              src="/logo.png"
              alt="Logo MS Code Academy"
              width={55}
              height={55}
              priority
              className={`relative object-contain transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 motion-reduce:transition-none ${
                scrolled ? "h-10 w-10" : "h-12 w-12"
              }`}
            />
          </span>

          <span className="flex flex-col">
            <span className="text-lg font-bold tracking-[-0.04em] text-[#191536] transition-colors group-hover:text-violet-700">
              MS Code Academy
            </span>

            <span
              className={`overflow-hidden text-[10px] font-semibold tracking-[0.12em] text-violet-600 transition-all duration-500 ${
                scrolled ? "max-h-0 opacity-0" : "max-h-4 opacity-100"
              }`}
            >
              APPRENDRE LE CODE AUTREMENT
            </span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <div
          ref={navLinksRef}
          className="relative hidden items-center lg:flex"
          onMouseLeave={() => setPill(null)}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 transition-[transform,width,opacity] duration-300 ease-out motion-reduce:transition-none"
            style={pillStyle}
          />

          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onMouseEnter={movePill}
                onFocus={movePill}
                onBlur={() => setPill(null)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  active
                    ? "text-violet-700"
                    : "text-slate-600 hover:text-violet-700"
                }`}
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 bottom-0.5 h-[3px] origin-left rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-transform duration-500 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Bouton desktop */}
        <Link
          href="/contact"
          className="group relative hidden overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-[length:200%_100%] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-300/60 transition-all duration-500 hover:-translate-y-0.5 hover:bg-right hover:shadow-xl hover:shadow-fuchsia-300/60 active:translate-y-0 active:scale-95 lg:inline-flex"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 transition-transform duration-700 group-hover:translate-x-[400%] motion-reduce:hidden"
          />

          <span className="relative">Rejoindre l&apos;académie</span>

          <span
            className="relative ml-2 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12"
            aria-hidden="true"
          >
            ↗
          </span>
        </Link>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 active:scale-90 lg:hidden ${
            menuOpen
              ? "border-transparent bg-violet-600 text-white shadow-lg shadow-violet-300/60"
              : "border-violet-100 text-violet-800 hover:bg-violet-50"
          }`}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-[7px] rotate-45" : "top-0"
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`grid transition-[grid-template-rows] duration-500 ease-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden ${
            menuOpen
              ? "visible"
              : "invisible transition-[visibility] delay-500 duration-0"
          }`}
        >
          <div className="border-t border-violet-100 bg-white px-5 py-4">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {links.map((link, i) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    style={{
                      transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-500 ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    } ${
                      active
                        ? "bg-gradient-to-r from-violet-100 to-fuchsia-50 text-violet-700"
                        : "text-slate-600 hover:bg-violet-50 hover:pl-6 hover:text-violet-700"
                    }`}
                  >
                    {link.label}

                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-500"
                      />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen
                    ? `${100 + links.length * 60}ms`
                    : "0ms",
                }}
                className={`mt-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-300/60 transition-all duration-500 active:scale-95 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                Rejoindre l&apos;académie ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
