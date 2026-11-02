import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import type { ReactNode } from "react";
const values = [
  {
    icon: "🎯",
    title: "La pédagogie",
    description:
      "Expliquer chaque notion simplement, avec des exemples progressifs et adaptés au niveau de chaque apprenant.",
  },
  {
    icon: "💡",
    title: "La pratique",
    description:
      "Apprendre en faisant : exercices, applications, travaux pratiques et situations concrètes.",
  },
  {
    icon: "🤝",
    title: "L'accompagnement",
    description:
      "Accompagner chaque élève dans sa progression, répondre à ses questions et l'aider à dépasser ses difficultés.",
  },
  {
    icon: "🚀",
    title: "La progression",
    description:
      "Construire des compétences solides étape par étape et développer l'autonomie et la confiance.",
  },
];

const steps = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Découvrir les notions et comprendre les concepts à travers des explications claires.",
  },
  {
    number: "02",
    title: "S'entraîner",
    description:
      "Mettre en pratique les connaissances grâce à des exercices progressifs.",
  },
  {
    number: "03",
    title: "Évaluer",
    description:
      "Mesurer les acquis avec des évaluations et identifier les points à améliorer.",
  },
  {
    number: "04",
    title: "Progresser",
    description:
      "Corriger les erreurs, consolider les connaissances et gagner en autonomie.",
  },
];

const domains = [
  {
    icon: "🧠",
    title: "Algorithmique",
    description:
      "Développer la logique, résoudre des problèmes et maîtriser les structures algorithmiques.",
  },
  {
    icon: "🐍",
    title: "Programmation Python",
    description:
      "Découvrir la programmation et créer des solutions concrètes avec Python.",
  },
  {
    icon: "🌐",
    title: "Développement Web",
    description:
      "Apprendre à concevoir des pages et des applications web avec les technologies modernes.",
  },
];

/* Bouton principal : dégradé animé + reflet + flèche (même style que le reste du site) */
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
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-500 hover:-translate-y-1 active:translate-y-0 active:scale-95 ${styles}`}
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

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
        <div
          aria-hidden="true"
          className="animate-float absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl [animation-delay:2s]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(124,58,237,0.12)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
              </span>
              Découvrez notre académie
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-[#191536] sm:text-5xl lg:text-6xl">
              <span
                className="animate-rise block"
                style={{ animationDelay: "150ms" }}
              >
                Apprendre le code
              </span>
              <span
                className="animate-rise animate-gradient-x block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                style={{ animationDelay: "300ms" }}
              >
                autrement.
              </span>
            </h1>

            <p
              className="animate-rise mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
              style={{ animationDelay: "450ms" }}
            >
              Bienvenue chez MS Code Academy ! Un espace d&apos;apprentissage
              dédié à l&apos;algorithmique, à la programmation et au
              développement informatique, où chaque notion devient une nouvelle
              opportunité d&apos;apprendre et de progresser.
            </p>

            <div
              className="animate-rise mt-9 flex flex-wrap gap-4"
              style={{ animationDelay: "600ms" }}
            >
              <ShimmerLink href="/formations">
                Découvrir nos formations
              </ShimmerLink>

              <Link
                href="/contact"
                className="rounded-xl border border-violet-200 bg-white px-6 py-3.5 text-sm font-bold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-100 active:scale-95"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          <div
            className="animate-rise relative mx-auto w-full max-w-lg"
            style={{ animationDelay: "400ms" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-300/50 via-fuchsia-300/40 to-orange-200/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-5 shadow-2xl shadow-violet-300/50 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#191536]">
                    MS Code Academy
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Apprendre • Pratiquer • Réussir
                  </p>
                </div>

                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-400 opacity-40 blur-lg"
                  />
                  <Image
                    src="/logo.png"
                    alt="Logo MS Code Academy"
                    width={60}
                    height={60}
                    className="animate-float relative h-14 w-14 object-contain"
                  />
                </div>
              </div>

              <div className="animate-gradient-x mt-8 rounded-2xl bg-gradient-to-br from-[#191536] via-[#2b1f63] to-[#191536] bg-[length:200%_200%] p-6 text-white">
                <p className="text-xs font-semibold tracking-widest text-violet-300">
                  NOTRE PHILOSOPHIE
                </p>

                <h2 className="mt-4 text-2xl font-bold leading-relaxed">
                  Comprendre aujourd&apos;hui,
                  <span className="block text-fuchsia-300">
                    réussir demain.
                  </span>
                </h2>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Algorithmique", "Python", "Web"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-violet-100 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300/60 hover:bg-white/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-center text-sm font-medium text-slate-500">
                Chaque étape compte dans votre apprentissage.
              </p>
            </div>

            <div
              className="animate-float absolute -bottom-5 -left-5 hidden rounded-2xl border border-violet-100 bg-white px-5 py-4 shadow-xl shadow-violet-200/60 sm:block"
              style={{ animationDelay: "1s" }}
            >
              <p className="text-sm font-bold text-violet-700">
                Apprendre autrement ✨
              </p>
              <p className="mt-1 text-xs text-slate-500">
                À votre rythme, étape par étape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="group relative">
              <div className="animate-spin-slow absolute -left-5 -top-5 h-28 w-28 rounded-3xl border-2 border-dashed border-violet-300" />

              <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-100 to-fuchsia-100 p-8 sm:p-12">
                <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-violet-300/50">
                  <div className="inline-block text-5xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
                    👩‍💻
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-[#191536]">
                    La passion de transmettre
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Partager les connaissances, rendre l&apos;informatique
                    accessible et aider chaque apprenant à révéler son
                    potentiel.
                  </p>

                  <div className="mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-500 group-hover:w-32" />
                </div>
              </div>

              <div className="animate-float absolute -bottom-5 -right-4 h-24 w-24 rounded-full bg-fuchsia-300/50 blur-2xl" />
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Qui sommes-nous ?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#191536] sm:text-4xl">
              Une académie dédiée à l&apos;apprentissage de l&apos;informatique.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              MS Code Academy est un espace de formation et
              d&apos;accompagnement conçu pour les élèves et les débutants
              souhaitant découvrir ou approfondir leurs compétences en
              informatique.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Notre approche repose sur des explications accessibles, des
              exercices adaptés et une pratique régulière pour transformer les
              connaissances théoriques en véritables compétences.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Notre objectif est simple : aider chaque apprenant à comprendre,
              pratiquer et progresser avec confiance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NOTRE FONDATRICE */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-100/60 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          {/* Présentation visuelle */}
          <Reveal direction="left" className="mx-auto w-full max-w-md">
            <div className="relative">
              <div className="animate-spin-slow absolute -left-5 -top-5 h-32 w-32 rounded-3xl border-2 border-dashed border-violet-300" />

              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-100 via-fuchsia-50 to-violet-200 p-8 sm:p-12">
                <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-white/70 bg-white/70 p-8 text-center shadow-xl backdrop-blur-sm">
                  {/* Avatar avec anneau en dégradé qui tourne */}
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="animate-spin-slow absolute -inset-1.5 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 blur-sm"
                      style={{ animationDuration: "8s" }}
                    />
                    <span
                      aria-hidden="true"
                      className="animate-spin-slow absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400"
                      style={{ animationDuration: "8s" }}
                    />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 text-4xl font-extrabold text-white ring-4 ring-white">
                      MS
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-[#191536]">
                    Mariem Soualhia
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-violet-600">
                    Ingénieure en informatique & enseignante
                  </p>

                  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" />

                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    Fondatrice de MS Code Academy
                  </p>
                </div>
              </div>

              <div className="animate-float absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-fuchsia-300/50 blur-2xl" />
            </div>
          </Reveal>

          {/* Présentation personnelle */}
          <Reveal direction="right" delay={150}>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Un mot de la fondatrice
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#191536] sm:text-4xl">
              Bonjour, je suis
              <span className="animate-gradient-x block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-[length:200%_auto] bg-clip-text text-transparent">
                Mariem Soualhia.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Ingénieure en informatique et multimédia, spécialisée en génie
              logiciel, et passionnée par l&apos;enseignement et les nouvelles
              technologies.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Au fil de mon parcours, j&apos;ai développé un intérêt particulier
              pour l&apos;algorithmique, la programmation et le développement
              web. J&apos;ai choisi de mettre mes connaissances et mes
              compétences au service de la formation et de l&apos;accompagnement
              des apprenants.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              C&apos;est ainsi qu&apos;est née MS Code Academy : un projet qui
              me permet de partager ma passion, de transmettre mes connaissances
              et d&apos;aider les élèves à progresser à travers des cours
              structurés, des exercices pratiques et un accompagnement
              personnalisé.
            </p>

            <blockquote className="group relative mt-7 overflow-hidden rounded-r-2xl bg-gradient-to-r from-violet-50 to-fuchsia-50 px-6 py-5 transition-shadow duration-500 hover:shadow-lg hover:shadow-violet-100">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-600 to-fuchsia-500 transition-all duration-500 group-hover:w-1.5"
              />
              <span
                aria-hidden="true"
                className="absolute -right-1 -top-6 select-none text-8xl font-black text-violet-200/70"
              >
                «
              </span>
              <p className="relative text-base font-semibold italic leading-8 text-[#191536]">
                « Mon objectif n&apos;est pas seulement de vous apprendre à
                coder, mais de vous aider à comprendre, réfléchir et devenir
                autonomes. »
              </p>
            </blockquote>

            <p className="mt-6 text-sm font-bold text-violet-700">
              Mariem Soualhia
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Fondatrice de MS Code Academy
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative overflow-hidden bg-[#191536] py-20 text-white lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400"
        />
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl [animation-delay:2s]"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-300">
                Notre mission
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Rendre l&apos;apprentissage du code plus simple, plus pratique
                et plus accessible.
              </h2>

              <p className="mt-5 leading-8 text-violet-200/80">
                Nous croyons que chaque personne peut apprendre à programmer
                lorsqu&apos;elle bénéficie d&apos;une méthode claire, d&apos;un
                bon accompagnement et d&apos;un entraînement régulier.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 120} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-fuchsia-500/20">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <span className="inline-block text-3xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-125">
                    {value.icon}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{value.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-violet-200/75">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE PÉDAGOGIQUE */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Notre méthode
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#191536] sm:text-4xl">
              Un apprentissage organisé en quatre étapes.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Chaque étape est pensée pour accompagner l&apos;apprenant de la
              découverte des notions jusqu&apos;à leur maîtrise.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 130}
              className="relative h-full"
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-violet-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-200/60">
                <span className="bg-gradient-to-br from-violet-200 to-fuchsia-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent transition-all duration-500 group-hover:from-violet-600 group-hover:to-fuchsia-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#191536]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>

              {/* Flèche de liaison vers l'étape suivante (desktop) */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-[26px] top-10 z-10 hidden h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xs text-white shadow-md shadow-violet-300/60 lg:flex"
                >
                  →
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* DOMAINES */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Nos domaines
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-[#191536] sm:text-4xl">
                Les compétences que nous développons
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {domains.map((item, i) => (
              <Reveal key={item.title} delay={i * 120} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-violet-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-200/60">
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-200 to-fuchsia-200 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                  />

                  <span className="relative inline-block text-4xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-125">
                    {item.icon}
                  </span>

                  <h3 className="relative mt-5 text-xl font-bold text-[#191536]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:py-24">
        <Reveal direction="scale">
          <div className="animate-gradient-x relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-800 bg-[length:200%_200%] px-7 py-14 text-center text-white shadow-2xl shadow-violet-300/60 sm:px-14">
            <div
              aria-hidden="true"
              className="animate-spin-slow absolute -right-20 -top-24 h-64 w-64 rounded-full border-[35px] border-dashed border-white/10"
            />
            <div
              aria-hidden="true"
              className="animate-float absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-orange-300/25 blur-3xl"
            />

            <div className="relative">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Prêt(e) à commencer votre parcours ?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-violet-100">
                Découvrez nos formations et faites le premier pas vers une
                meilleure maîtrise de l&apos;informatique.
              </p>

              <div className="mt-8">
                <ShimmerLink href="/contact" variant="white">
                  Rejoindre MS Code Academy
                </ShimmerLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
