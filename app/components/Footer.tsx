"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    setDate(new Date());
  }, []);

  if (!date) return <p>Chargement...</p>;
  return (
    <footer className="relative overflow-hidden bg-[#191536] text-white">
      {/* Liseré dégradé en haut, assorti à la barre de progression de la navbar */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400"
      />

      {/* Halos lumineux en arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl animate-pulse motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse motion-reduce:animate-none [animation-delay:1.5s]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {/* Marque */}
        <div>
          <Link
            href="/"
            className="group inline-flex items-center gap-3"
            aria-label="MS Code Academy - Accueil"
          >
            <span className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-400 opacity-40 blur-lg transition-opacity duration-500 group-hover:opacity-80"
              />
              <Image
                src="/logo.png"
                alt="Logo MS Code Academy"
                width={48}
                height={48}
                className="relative h-11 w-11 object-contain transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transition-none"
              />
            </span>
            <span className="text-lg font-extrabold tracking-[-0.03em] transition-colors group-hover:text-fuchsia-200">
              MS Code Academy
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-violet-200/80">
            Apprendre l&apos;algorithmique et la programmation avec méthode,
            pratique et confiance.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation du pied de page">
          <h2 className="font-semibold">Navigation</h2>
          <ul className="mt-4 space-y-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 py-1.5 text-sm text-violet-200/80 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-0.5 w-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-300 group-hover:w-4"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="font-semibold">Restons en contact</h2>
          <p className="mt-4 text-sm leading-7 text-violet-200/80">
            Une question sur les formations ? Contacte-nous pour obtenir
            davantage d&apos;informations.
          </p>

          <Link
            href="/contact"
            className="group relative mt-5 inline-flex overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 bg-[length:200%_100%] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition-all duration-500 hover:-translate-y-0.5 hover:bg-right hover:shadow-xl hover:shadow-fuchsia-500/30 active:translate-y-0 active:scale-95"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 transition-transform duration-700 group-hover:translate-x-[400%] motion-reduce:hidden"
            />
            <span className="relative">Nous contacter</span>
            <span
              aria-hidden="true"
              className="relative ml-2 inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-violet-200/70 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {date.getFullYear().toLocaleString()} MS Code Academy. Tous droits
            réservés.
          </p>
          <p>Conçu avec passion pour apprendre le code autrement.</p>

          {/* Un simple ancre "#" ramène en haut de page, sans JavaScript */}
          <a
            href="#"
            aria-label="Retour en haut de la page"
            className="group inline-flex h-9 w-9 items-center justify-center self-start rounded-full border border-white/15 text-sm text-violet-100 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-tr hover:from-violet-500 hover:to-fuchsia-500 hover:text-white sm:self-auto"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
