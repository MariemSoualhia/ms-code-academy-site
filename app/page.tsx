import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";
import type { ReactNode } from "react";
const formations = [
  {
    icon: "⌘",
    title: "Algorithmique",
    label: "BAC INFORMATIQUE",
    description:
      "Maîtrise la logique algorithmique, les structures conditionnelles, les boucles, les tableaux, les matrices et les fichiers.",
    tags: ["Algorithmes", "Exercices", "Préparation Bac"],
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: "</>",
    title: "Programmation Python",
    label: "APPRENDRE À CODER",
    description:
      "Découvre Python progressivement, comprends les concepts essentiels et développe tes compétences grâce à la pratique.",
    tags: ["Débutants", "Fonctions", "Mini-projets"],
    color: "from-fuchsia-500 to-violet-700",
  },
  {
    icon: "◈",
    title: "Développement Web",
    label: "CRÉER DES SITES WEB",
    description:
      "Apprends à construire des pages modernes avec HTML, CSS et JavaScript, et donne vie à tes premières idées.",
    tags: ["HTML & CSS", "JavaScript", "Projets"],
    color: "from-indigo-500 to-violet-700",
  },
];

const method = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Découvre les concepts avec des explications claires et des exemples adaptés à ton niveau.",
  },
  {
    number: "02",
    title: "Pratiquer",
    description:
      "Applique tes connaissances avec des exercices progressifs et des problèmes concrets.",
  },
  {
    number: "03",
    title: "Progresser",
    description:
      "Analyse tes erreurs, consolide tes acquis et gagne en autonomie au fil des exercices.",
  },
];

/* Bouton principal : dégradé animé + reflet + flèche (même style que la navbar) */
type ShimmerLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "gradient" | "white";
};
function ShimmerLink({
  href,
  children,
  variant = "gradient",
}: ShimmerLinkProps) {
  const styles =
    variant === "white"
      ? "bg-white text-violet-800 shadow-xl shadow-black/20 hover:bg-violet-50"
      : "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-[length:200%_100%] text-white shadow-xl shadow-violet-300/60 hover:bg-right hover:shadow-fuchsia-300/60";
  const shine = variant === "white" ? "bg-violet-300/40" : "bg-white/30";

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl px-6 py-4 font-semibold transition-all duration-500 hover:-translate-y-1 active:translate-y-0 active:scale-95 ${styles}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 -left-full w-1/2 -skew-x-12 transition-transform duration-700 group-hover:translate-x-[400%] motion-reduce:hidden ${shine}`}
      />
      <span className="relative">{children}</span>
      <span
        aria-hidden="true"
        className="relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12"
      >
        ↗
      </span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="animate-float absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-violet-300/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float absolute -bottom-40 left-0 -z-10 h-80 w-80 rounded-full bg-fuchsia-200/60 blur-3xl [animation-delay:2s]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(124,58,237,0.12)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold tracking-wide text-violet-700 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
              </span>
              ALGORITHMIQUE · PROGRAMMATION · WEB
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#191536] sm:text-5xl lg:text-6xl">
              <span
                className="animate-rise block"
                style={{ animationDelay: "150ms" }}
              >
                Apprends à coder.
              </span>
              <span
                className="animate-rise animate-gradient-x mt-2 block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                style={{ animationDelay: "300ms" }}
              >
                Comprends la logique.
              </span>
            </h1>

            <p
              className="animate-rise mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
              style={{ animationDelay: "450ms" }}
            >
              Tu prépares le Bac Informatique ou tu souhaites découvrir la
              programmation ? MS Code Academy t&apos;accompagne avec des
              explications claires, des exercices pratiques et une méthode
              adaptée à ton niveau.
            </p>

            <div
              className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "600ms" }}
            >
              <ShimmerLink href="/formations">
                Découvrir les formations
              </ShimmerLink>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-violet-200 bg-white px-6 py-4 font-semibold text-violet-800 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-100 active:scale-95"
              >
                Parlons de ton objectif
              </Link>
            </div>

            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600"
              style={{ animationDelay: "750ms" }}
            >
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                  ✓
                </span>
                Explications structurées
              </span>
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                  ✓
                </span>
                Apprentissage pratique
              </span>
            </div>
          </div>

          {/* Illustration construite en CSS */}
          <div
            className="animate-rise relative mx-auto w-full max-w-lg"
            style={{ animationDelay: "400ms" }}
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-300/70 via-fuchsia-200/60 to-orange-100/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-5 shadow-2xl shadow-violet-300/50 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-medium text-slate-400">
                  apprendre.py
                </span>
              </div>

              {/* Le code s'écrit ligne par ligne */}
              <div className="py-7 font-mono text-sm leading-8 sm:text-base">
                <p
                  className="animate-line-in text-slate-400"
                  style={{ animationDelay: "900ms" }}
                >
                  # Chaque étape compte
                </p>
                <p
                  className="animate-line-in"
                  style={{ animationDelay: "1200ms" }}
                >
                  <span className="text-fuchsia-600">def</span>{" "}
                  <span className="font-semibold text-violet-700">
                    apprendre
                  </span>
                  ():
                </p>
                <p
                  className="animate-line-in pl-6"
                  style={{ animationDelay: "1500ms" }}
                >
                  <span className="text-violet-600">notions</span> ={" "}
                  <span className="text-emerald-600">
                    &quot;comprendre&quot;
                  </span>
                </p>
                <p
                  className="animate-line-in pl-6"
                  style={{ animationDelay: "1800ms" }}
                >
                  <span className="text-violet-600">exercices</span> ={" "}
                  <span className="text-emerald-600">
                    &quot;pratiquer&quot;
                  </span>
                </p>
                <p
                  className="animate-line-in pl-6"
                  style={{ animationDelay: "2100ms" }}
                >
                  <span className="text-fuchsia-600">return</span>{" "}
                  <span className="text-emerald-600">
                    &quot;progresser&quot;
                  </span>
                  <span
                    aria-hidden="true"
                    className="animate-blink ml-1 inline-block h-5 w-0.5 translate-y-1 bg-violet-600"
                  />
                </p>
              </div>

              <div className="group rounded-2xl bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl text-white shadow-lg shadow-violet-300/60 transition-transform duration-500 group-hover:rotate-[360deg]">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-[#191536]">
                      Une étape à la fois
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Comprendre, pratiquer, progresser.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {["Logique", "Code", "Projets"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-violet-100 px-2 py-3 text-center text-xs font-semibold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-500 hover:text-white hover:shadow-lg hover:shadow-violet-300/60 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pastilles flottantes */}
            <div className="animate-float absolute -right-3 top-16 hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-xl shadow-violet-200/60 sm:block">
              <p className="text-xs text-slate-500">Ton objectif</p>
              <p className="mt-1 text-sm font-bold text-violet-700">
                Réussir avec méthode ✨
              </p>
            </div>
            <div className="animate-float absolute -left-4 bottom-24 hidden rounded-2xl border border-fuchsia-100 bg-white px-4 py-3 shadow-xl shadow-fuchsia-200/60 [animation-delay:1.5s] sm:block">
              {/* <p className="text-sm font-bold text-fuchsia-600">
                Bac Informatique
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Nos formations
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#191536] sm:text-4xl">
                Développe tes compétences en informatique
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Des apprentissages ciblés pour comprendre les bases,
                t&apos;entraîner et construire tes premiers projets.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {formations.map((formation, i) => (
              <Reveal key={formation.title} delay={i * 120} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-200/70 sm:p-7">
                  {/* Barre de couleur qui se déploie + fond teinté au survol */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r ${formation.color} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-fuchsia-50/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-50 group-hover:to-fuchsia-50 group-hover:opacity-100"
                  />

                  <div className="relative">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${formation.color} font-mono text-xl font-bold text-white shadow-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      {formation.icon}
                    </div>
                  </div>

                  <p className="relative mt-7 text-xs font-bold tracking-[0.15em] text-violet-600">
                    {formation.label}
                  </p>

                  <h3 className="relative mt-3 text-xl font-bold text-[#191536]">
                    {formation.title}
                  </h3>

                  <p className="relative mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {formation.description}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {formation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-colors duration-300 group-hover:bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/formations"
                    className="relative mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-violet-700 transition-colors group-hover:text-fuchsia-600"
                  >
                    En savoir plus
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal direction="left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Notre approche
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#191536] sm:text-4xl">
                Le bon réflexe : comprendre avant de mémoriser.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                En algorithmique comme en programmation, savoir expliquer une
                solution est aussi important que savoir l&apos;écrire.
                L&apos;objectif est de développer progressivement ton
                raisonnement et ton autonomie.
              </p>

              <Link
                href="/a-propos"
                className="group mt-7 inline-flex items-center gap-2 font-semibold text-violet-700 transition-colors hover:text-fuchsia-600"
              >
                Découvrir notre pédagogie
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  →
                </span>
              </Link>
            </Reveal>

            {/* Les 3 étapes forment une vraie séquence : on les relie par un fil */}
            <div className="relative space-y-4">
              <span
                aria-hidden="true"
                className="absolute bottom-8 left-[43px] top-8 w-0.5 rounded-full bg-gradient-to-b from-violet-400 via-fuchsia-400 to-violet-200"
              />
              {method.map((step, i) => (
                <Reveal key={step.number} direction="right" delay={i * 150}>
                  <article className="group relative flex gap-5 rounded-2xl border border-violet-100 bg-[#F8F7FC] p-5 transition-all duration-300 hover:translate-x-2 hover:border-violet-300 hover:bg-white hover:shadow-lg hover:shadow-violet-100">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 font-bold text-white shadow-md shadow-violet-300/60 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#191536]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal direction="scale">
            <div className="group relative overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-white via-white to-violet-50 p-7 shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-violet-200/60 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-200/50 blur-3xl transition-transform duration-700 group-hover:scale-125"
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="relative shrink-0">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-400 opacity-40 blur-xl"
                  />
                  <Image
                    src="/logo.png"
                    alt="Logo MS Code Academy"
                    width={72}
                    height={72}
                    className="animate-float relative h-16 w-16 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-600">
                    À propos de l&apos;académie
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-[#191536]">
                    Bienvenue chez MS Code Academy
                  </h2>
                  <p className="mt-5 leading-8 text-slate-600">
                    Fondée autour de la passion de l&apos;informatique et de la
                    transmission des connaissances, MS Code Academy propose une
                    approche structurée de l&apos;algorithmique et de la
                    programmation. Chaque notion est abordée progressivement,
                    avec des explications et des exercices pour mettre en
                    pratique les acquis.
                  </p>
                  <Link
                    href="/a-propos"
                    className="group/link mt-6 inline-flex items-center gap-2 font-semibold text-violet-700 transition-colors hover:text-fuchsia-600"
                  >
                    En savoir plus sur MS Code Academy
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-2"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:pb-24 lg:px-8">
        <Reveal direction="scale">
          <div className="animate-gradient-x relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-fuchsia-600 to-violet-800 bg-[length:200%_200%] px-6 py-14 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="animate-spin-slow absolute -right-20 -top-24 h-64 w-64 rounded-full border-[40px] border-dashed border-white/10"
            />
            <div
              aria-hidden="true"
              className="animate-float absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-orange-300/25 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-100">
                Prêt à commencer ?
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Ton prochain progrès commence par une première étape.
              </h2>
              <p className="mt-5 leading-7 text-violet-50">
                Découvre les formations et contacte MS Code Academy pour obtenir
                des informations adaptées à tes objectifs.
              </p>
              <div className="mt-8">
                <ShimmerLink href="/contact" variant="white">
                  Nous contacter
                </ShimmerLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
