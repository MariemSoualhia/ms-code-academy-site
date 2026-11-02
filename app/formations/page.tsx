import Link from "next/link";
import {
  Code2,
  Brain,
  Globe,
  Database,
  Laptop,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Target,
  Rocket,
} from "lucide-react";
import Reveal from "../components/Reveal";
import type { ReactNode } from "react";

/* ================================
   BOUTON ANIMÉ
================================ */

function ShimmerLink({
  href,
  children,
  variant = "gradient",
}: {
  href: string;
  children: ReactNode;
  variant?: "gradient" | "white";
}) {
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

/* ================================
   PROGRAMME ALGORITHMIQUE
================================ */

const algorithmiqueLevels = [
  {
    title: "2ème année Informatique",
    subtitle: "Les bases de l'algorithmique",
    topics: [
      "Variables et types de données",
      "Structures conditionnelles",
      "Structures répétitives",
      "Tableaux",
      "Fonctions et procédures",
    ],
  },
  {
    title: "3ème année Informatique",
    subtitle: "Approfondissement de l'algorithmique",
    topics: [
      "Variables et types de données",
      "Structures conditionnelles",
      "Structures répétitives",
      "Tableaux et matrices",
      "Fonctions et procédures",
    ],
  },
  {
    title: "Bac Informatique",
    subtitle: "Maîtrise et préparation au Bac",
    topics: [
      "Variables et types de données",
      "Structures conditionnelles",
      "Structures répétitives",
      "Tableaux, matrices et fichiers",
      "Fonctions et procédures",
      "Récursivité, récurrence et arithmétique",
    ],
  },
];

/* ================================
   AUTRES FORMATIONS
================================ */

const formations = [
  {
    icon: Code2,
    title: "Programmation Python",
    label: "APPRENDRE À CODER",
    subtitle: "Donner vie à vos idées avec Python",
    description:
      "Initiez-vous à Python et apprenez à concevoir des programmes structurés en mettant en pratique les notions étudiées.",
    topics: [
      "Syntaxe et bases de Python",
      "Conditions et boucles",
      "Fonctions et modules",
      "Listes et dictionnaires",
      "Fichiers et traitement des données",
      "Mini-projets pratiques",
    ],
    level: "Débutant à intermédiaire",
    color: "from-blue-500 to-violet-700",
    tags: ["Python", "Fonctions", "Mini-projets"],
  },
  {
    icon: Globe,
    title: "Développement Web",
    label: "CRÉER DES SITES WEB",
    subtitle: "Créer vos propres sites web",
    description:
      "Apprenez à créer des interfaces web modernes et découvrez les principales technologies du développement web.",
    topics: [
      "HTML : structure des pages",
      "CSS : mise en forme et design",
      "JavaScript : interactions",
      "Responsive Design",
      "PHP : programmation côté serveur",
      "Introduction aux bases de données SQL",
    ],
    level: "Débutant à intermédiaire",
    color: "from-fuchsia-500 to-violet-700",
    tags: ["HTML & CSS", "JavaScript", "Web"],
  },
  {
    icon: Database,
    title: "Bases de données & SQL",
    label: "MAÎTRISER LES DONNÉES",
    subtitle: "Organiser et exploiter les données",
    description:
      "Comprenez le fonctionnement des bases de données et apprenez à manipuler les informations avec le langage SQL.",
    topics: [
      "Modélisation des données",
      "Tables et relations",
      "Création et modification des tables",
      "Requêtes SELECT",
      "Jointures et sous-requêtes",
      "GROUP BY et HAVING",
    ],
    level: "Débutant à intermédiaire",
    color: "from-emerald-500 to-teal-700",
    tags: ["SQL", "Requêtes", "Bases de données"],
  },
  {
    icon: Laptop,
    title: "Python & Interfaces graphiques",
    label: "DÉVELOPPER DES APPLICATIONS",
    subtitle: "Développer des applications interactives",
    description:
      "Découvrez la création d'interfaces graphiques avec Python et apprenez à relier vos interfaces à vos programmes.",
    topics: [
      "Programmation événementielle",
      "Découverte de Qt Designer",
      "Widgets et composants",
      "Gestion des événements",
      "Manipulation de fichiers",
      "Mini-projets avec PyQt5",
    ],
    level: "Intermédiaire",
    color: "from-orange-500 to-pink-600",
    tags: ["Python", "Qt Designer", "PyQt5"],
  },
];

/* ================================
   AVANTAGES PÉDAGOGIQUES
================================ */

const benefits = [
  {
    icon: BookOpen,
    title: "Supports pédagogiques",
    description:
      "Des cours structurés, des résumés et des exemples pour faciliter l'apprentissage.",
  },
  {
    icon: Target,
    title: "Exercices pratiques",
    description:
      "Des séries d'exercices et des applications pour mettre en pratique chaque notion.",
  },
  {
    icon: GraduationCap,
    title: "Préparation aux examens",
    description:
      "Des évaluations et des exercices adaptés aux objectifs du programme scolaire.",
  },
  {
    icon: Rocket,
    title: "Progression continue",
    description:
      "Un accompagnement progressif pour renforcer les compétences et gagner en autonomie.",
  },
];

/* ================================
   MÉTHODE D'APPRENTISSAGE
================================ */

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

/* ================================
   PAGE FORMATIONS
================================ */

export default function FormationsPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =================================
          HERO
      ================================= */}

      <section className="relative isolate overflow-hidden bg-white">
        {/* Décoration animée */}
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
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(124,58,237,0.12)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
        />

        <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:py-28 lg:px-8">
          <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-xs font-semibold tracking-wide text-violet-700 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
            </span>
            NOS FORMATIONS
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#191536] sm:text-5xl lg:text-6xl">
            <span
              className="animate-rise block"
              style={{ animationDelay: "150ms" }}
            >
              Apprends aujourd'hui.
            </span>

            <span
              className="animate-rise animate-gradient-x mt-2 block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-[length:200%_auto] bg-clip-text text-transparent"
              style={{ animationDelay: "300ms" }}
            >
              Construis demain.
            </span>
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            style={{ animationDelay: "450ms" }}
          >
            Développe tes compétences en algorithmique, programmation et
            développement web grâce à un apprentissage progressif, pratique et
            adapté à ton niveau.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "600ms" }}
          >
            <ShimmerLink href="/contact">Nous contacter</ShimmerLink>

            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center rounded-xl border border-violet-200 bg-white px-6 py-4 font-semibold text-violet-800 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-100 active:scale-95"
            >
              Découvrir notre pédagogie
            </Link>
          </div>

          <div
            className="animate-rise mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-600"
            style={{ animationDelay: "750ms" }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-violet-600" />
              Explications structurées
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-violet-600" />
              Exercices pratiques
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-violet-600" />
              Progression adaptée
            </span>
          </div>
        </div>
      </section>

      {/* =================================
          INTRODUCTION
      ================================= */}

      <section className="px-5 py-20 sm:py-24 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Explore nos domaines
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#191536] sm:text-4xl">
              Développe ton potentiel informatique
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Que tu sois élève en 2ème année, en 3ème année, en Bac
              Informatique ou débutant passionné par la programmation, découvre
              les formations qui te permettront de progresser à ton rythme.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =================================
          FORMATIONS
      ================================= */}

      <section className="px-5 pb-20 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* ALGORITHMIQUE */}

          <Reveal direction="scale">
            <article className="group relative overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-6 shadow-sm transition-all duration-500 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-200/60 sm:p-9 lg:p-10">
              {/* Décoration */}
              <span
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl transition-transform duration-700 group-hover:scale-125"
              />

              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-700 transition-transform duration-700 group-hover:scale-x-100"
              />

              <div className="relative">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-300/50 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Brain size={28} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-violet-600">
                        Développer sa logique
                      </p>

                      <h3 className="mt-1 text-2xl font-black text-[#191536] sm:text-3xl">
                        Algorithmique
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Un parcours adapté à chaque niveau scolaire
                      </p>
                    </div>
                  </div>

                  <span className="w-fit rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-bold text-violet-700">
                    2ème année · 3ème année · Bac
                  </span>
                </div>

                <p className="mt-7 max-w-3xl leading-8 text-slate-600">
                  Apprends à raisonner, à analyser les problèmes et à construire
                  des solutions efficaces. Chaque programme est adapté au niveau
                  scolaire avec des explications détaillées et des exercices
                  progressifs.
                </p>

                <div className="my-8 h-px bg-gradient-to-r from-violet-200 via-fuchsia-100 to-transparent" />

                <div className="grid gap-5 md:grid-cols-3">
                  {algorithmiqueLevels.map((level, index) => (
                    <Reveal
                      key={level.title}
                      delay={index * 120}
                      className="h-full"
                    >
                      <div className="group/level relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet-100 bg-[#FAF9FF] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:bg-white hover:shadow-xl hover:shadow-violet-100">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-500 group-hover/level:scale-x-100"
                        />

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-black text-white shadow-md shadow-violet-200 transition-transform duration-300 group-hover/level:rotate-6 group-hover/level:scale-110">
                          0{index + 1}
                        </div>

                        <h4 className="mt-5 text-lg font-bold leading-snug text-[#191536]">
                          {level.title}
                        </h4>

                        <p className="mt-2 min-h-10 text-sm leading-6 text-violet-600">
                          {level.subtitle}
                        </p>

                        <div className="my-5 h-px bg-violet-100" />

                        <ul className="flex-1 space-y-3">
                          {level.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-1 shrink-0 text-violet-600"
                              />
                              {topic}
                            </li>
                          ))}
                        </ul>

                        <Link
                          href="/contact"
                          className="mt-7 inline-flex items-center gap-2 border-t border-violet-100 pt-5 text-sm font-semibold text-violet-700 transition-colors hover:text-fuchsia-600"
                        >
                          Demander des informations
                          <span className="transition-transform duration-300 group-hover/level:translate-x-2">
                            →
                          </span>
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {/* AUTRES FORMATIONS */}

          <div className="mt-16">
            <Reveal>
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                  Autres domaines
                </p>

                <h2 className="mt-4 text-3xl font-black text-[#191536] sm:text-4xl">
                  Explore d'autres univers du code
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Découvre les technologies et les outils qui te permettront de
                  transformer tes idées en réalisations concrètes.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {formations.map((formation, index) => {
                const Icon = formation.icon;

                return (
                  <Reveal
                    key={formation.title}
                    delay={index * 100}
                    className="h-full"
                  >
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-200/70 sm:p-7">
                      {/* Barre animée */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r ${formation.color} transition-transform duration-500 group-hover:scale-x-100`}
                      />

                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-fuchsia-50/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-50 group-hover:to-fuchsia-50 group-hover:opacity-100"
                      />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-3">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${formation.color} text-white shadow-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110`}
                          >
                            <Icon size={27} />
                          </div>

                          <span className="rounded-full bg-violet-50 px-3 py-2 text-center text-[10px] font-bold text-violet-700 sm:text-xs">
                            {formation.level}
                          </span>
                        </div>

                        <p className="mt-7 text-xs font-bold tracking-[0.15em] text-violet-600">
                          {formation.label}
                        </p>

                        <h3 className="mt-3 text-xl font-bold text-[#191536]">
                          {formation.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-violet-600">
                          {formation.subtitle}
                        </p>

                        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                          {formation.description}
                        </p>

                        <div className="my-6 h-px bg-slate-100" />

                        <h4 className="mb-4 text-sm font-bold text-[#191536]">
                          Au programme :
                        </h4>

                        <ul className="space-y-3">
                          {formation.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-1 shrink-0 text-violet-600"
                              />
                              {topic}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2">
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
                          href="/contact"
                          className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-violet-700 transition-colors group-hover:text-fuchsia-600"
                        >
                          Demander des informations
                          <span className="transition-transform duration-300 group-hover:translate-x-2">
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =================================
          NOTRE MÉTHODE
      ================================= */}

      <section className="overflow-hidden bg-[#F8F7FC] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal direction="left">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Notre approche pédagogique
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#191536] sm:text-4xl">
              Comprendre avant de mémoriser.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              En algorithmique comme en programmation, savoir expliquer une
              solution est aussi important que savoir l'écrire. Notre objectif
              est de développer progressivement ton raisonnement, ta logique et
              ton autonomie.
            </p>

            <Link
              href="/a-propos"
              className="group mt-7 inline-flex items-center gap-2 font-semibold text-violet-700 transition-colors hover:text-fuchsia-600"
            >
              Découvrir notre pédagogie
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </Reveal>

          {/* Les 3 étapes */}

          <div className="relative space-y-4">
            <span
              aria-hidden="true"
              className="absolute bottom-8 left-[43px] top-8 w-0.5 rounded-full bg-gradient-to-b from-violet-400 via-fuchsia-400 to-violet-200"
            />

            {method.map((step, index) => (
              <Reveal key={step.number} direction="right" delay={index * 150}>
                <article className="group relative flex gap-5 rounded-2xl border border-violet-100 bg-white p-5 transition-all duration-300 hover:translate-x-2 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100">
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
      </section>

      {/* =================================
          AVANTAGES
      ================================= */}

      <section className="px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Pourquoi MS Code Academy ?
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#191536] sm:text-4xl">
                Un apprentissage pensé pour ta réussite
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Des ressources et un accompagnement pour apprendre, pratiquer et
                progresser avec confiance.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  delay={index * 100}
                  className="h-full"
                >
                  <article className="group h-full rounded-2xl border border-violet-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-200 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={24} />
                    </div>

                    <h3 className="mb-3 font-bold text-[#191536]">
                      {benefit.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================
          CTA FINAL
      ================================= */}

      <section className="px-5 pb-20 sm:pb-24 lg:px-8">
        <Reveal direction="scale">
          <div className="animate-gradient-x relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-fuchsia-600 to-violet-800 bg-[length:200%_200%] px-6 py-14 text-center sm:px-12 sm:py-16">
            {/* Décorations */}
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
                Découvre nos formations et contacte MS Code Academy pour obtenir
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
    </main>
  );
}
