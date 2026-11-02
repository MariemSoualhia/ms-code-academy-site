import Link from "next/link";
import {
  BookOpen,
  FileText,
  ClipboardCheck,
  Code2,
  Database,
  Laptop,
  GraduationCap,
  ArrowRight,
  FolderOpen,
  Sparkles,
} from "lucide-react";
import Reveal from "../components/Reveal";

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Cours & résumés",
    subtitle: "Comprendre les notions essentielles",
    description:
      "Des supports pédagogiques structurés pour apprendre, réviser et retenir les notions importantes du programme.",
    examples: [
      "Cours d'algorithmique",
      "Résumés des chapitres",
      "Fiches de révision",
    ],
    color: "bg-violet-100 text-violet-700",
    number: "01",
  },
  {
    icon: FileText,
    title: "Séries d'exercices",
    subtitle: "Apprendre en pratiquant",
    description:
      "Des exercices progressifs pour appliquer les notions étudiées et développer votre raisonnement.",
    examples: [
      "Exercices d'application",
      "Problèmes d'algorithmique",
      "Travaux pratiques",
    ],
    color: "bg-blue-100 text-blue-700",
    number: "02",
  },
  {
    icon: ClipboardCheck,
    title: "Évaluations",
    subtitle: "Tester vos connaissances",
    description:
      "Des évaluations pour mesurer votre niveau, vous entraîner et vous préparer aux devoirs et aux examens.",
    examples: [
      "Évaluations par chapitre",
      "Devoirs de synthèse",
      "Préparation au Bac",
    ],
    color: "bg-pink-100 text-pink-700",
    number: "03",
  },
  {
    icon: GraduationCap,
    title: "Corrections",
    subtitle: "Comprendre ses erreurs",
    description:
      "Des corrections détaillées pour comprendre les démarches, améliorer vos solutions et progresser.",
    examples: [
      "Corrections des exercices",
      "Corrections des évaluations",
      "Explications des algorithmes",
    ],
    color: "bg-emerald-100 text-emerald-700",
    number: "04",
  },
];

const learningResources = [
  {
    icon: Code2,
    title: "Algorithmique",
    description:
      "Variables, conditions, boucles, tableaux, matrices, fonctions, procédures et fichiers.",
    tag: "Bac Informatique",
  },
  {
    icon: Laptop,
    title: "Programmation Python",
    description:
      "Syntaxe Python, structures de contrôle, fonctions, fichiers et programmation graphique.",
    tag: "Débutant à intermédiaire",
  },
  {
    icon: Database,
    title: "Bases de données & SQL",
    description:
      "Modélisation, création des tables, requêtes SQL, jointures, regroupements et sous-requêtes.",
    tag: "Cours & exercices",
  },
];

export default function RessourcesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#191536] px-6 py-24 text-center text-white md:py-28">
        <div className="absolute -left-24 top-0 -z-10 h-72 w-72 animate-float rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-72 w-72 animate-float rounded-full bg-fuchsia-500/20 blur-3xl" />

        <Reveal direction="scale">
          <div className="mx-auto max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/10 px-5 py-2 text-sm font-medium text-violet-200">
              <Sparkles size={16} />
              ESPACE APPRENTISSAGE
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Apprenez, entraînez-vous
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
                et progressez.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Retrouvez les ressources pédagogiques de MS Code Academy pour
              accompagner votre apprentissage et vous préparer à réussir.
            </p>

            <Link
              href="#categories"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50"
            >
              Explorer les ressources
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-violet-600">
                Notre espace pédagogique
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#191536] md:text-4xl">
                Toutes les ressources pour mieux apprendre
              </h2>

              <p className="mt-5 leading-8 text-gray-500">
                Parce que la réussite passe par la compréhension et la pratique,
                nous proposons différents supports pour vous accompagner tout au
                long de votre parcours.
              </p>
            </div>
          </Reveal>

          {/* RESOURCE CATEGORIES */}
          <div
            id="categories"
            className="grid scroll-mt-28 gap-7 md:grid-cols-2"
          >
            {resourceCategories.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <Reveal
                  key={resource.title}
                  delay={index * 120}
                  className="h-full"
                >
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg shadow-violet-100/40 transition-all duration-500 hover:-translate-y-2 hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-100">
                    <span className="absolute right-7 top-5 text-5xl font-black text-violet-50 transition-colors duration-300 group-hover:text-violet-100">
                      {resource.number}
                    </span>

                    <div
                      className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${resource.color} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon size={27} />
                    </div>

                    <h3 className="relative text-2xl font-bold text-[#191536] transition-colors group-hover:text-violet-700">
                      {resource.title}
                    </h3>

                    <p className="mt-2 font-semibold text-violet-600">
                      {resource.subtitle}
                    </p>

                    <p className="mt-4 leading-7 text-gray-500">
                      {resource.description}
                    </p>

                    <div className="mt-6 border-t border-gray-100 pt-5">
                      <p className="mb-3 text-sm font-bold text-[#191536]">
                        Ce que vous trouverez :
                      </p>

                      <ul className="space-y-3">
                        {resource.examples.map((example) => (
                          <li
                            key={example}
                            className="flex items-center gap-3 text-sm text-gray-600"
                          >
                            <span className="h-2 w-2 rounded-full bg-violet-500" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="bg-violet-50/70 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-14 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-violet-600">
                Nos domaines
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#191536] md:text-4xl">
                Explorez nos matières
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                Des ressources adaptées à votre niveau pour développer vos
                compétences en informatique et en programmation.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-3">
            {learningResources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <Reveal
                  key={resource.title}
                  delay={index * 150}
                  className="h-full"
                >
                  <article className="group h-full rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-200/50">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-violet-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                      {resource.tag}
                    </span>

                    <h3 className="mt-5 text-xl font-bold text-[#191536] transition-colors group-hover:text-violet-700">
                      {resource.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-500">
                      {resource.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING METHOD */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-3xl bg-[#191536] px-8 py-12 text-white md:px-14 md:py-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

              <div className="relative grid items-center gap-12 md:grid-cols-2">
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-violet-300">
                    Notre méthode
                  </span>

                  <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                    Comprendre avant de mémoriser.
                  </h2>

                  <p className="mt-5 leading-8 text-gray-300">
                    Chez MS Code Academy, chaque ressource a un objectif : vous
                    aider à comprendre les notions, les appliquer à travers des
                    exercices et gagner progressivement en autonomie.
                  </p>

                  <Link
                    href="/formations"
                    className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-violet-800 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50"
                  >
                    Voir nos formations
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      number: "01",
                      title: "Comprendre",
                      text: "Découvrir les notions avec des explications claires.",
                    },
                    {
                      number: "02",
                      title: "Pratiquer",
                      text: "Appliquer les connaissances avec des exercices.",
                    },
                    {
                      number: "03",
                      title: "S'évaluer",
                      text: "Tester ses acquis et identifier ses difficultés.",
                    },
                    {
                      number: "04",
                      title: "Progresser",
                      text: "Corriger ses erreurs et gagner en autonomie.",
                    },
                  ].map((step, index) => (
                    <Reveal
                      key={step.number}
                      direction="right"
                      delay={index * 120}
                    >
                      <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:translate-x-2 hover:bg-white/10">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 font-bold text-violet-200 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                          {step.number}
                        </span>

                        <div>
                          <h3 className="font-bold">{step.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-gray-300">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20">
        <Reveal direction="scale">
          <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 bg-[length:200%_100%] px-8 py-14 text-center text-white shadow-xl shadow-violet-200 transition-all duration-700 hover:bg-right md:px-16">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative">
              <FolderOpen size={42} className="mx-auto mb-5 text-violet-100" />

              <h2 className="text-3xl font-bold md:text-4xl">
                Besoin d'informations sur nos ressources ?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-violet-100">
                Contactez MS Code Academy pour en savoir plus sur nos supports
                pédagogiques et nos formations.
              </p>

              <Link
                href="/contact"
                className="group/link mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50"
              >
                Nous contacter
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
