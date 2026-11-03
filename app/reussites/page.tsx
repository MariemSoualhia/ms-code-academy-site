"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  BookOpen,
  Camera,
  GraduationCap,
  Quote,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Reveal from "../components/Reveal";

type Student = {
  id: number;
  name: string;
  year: "2025" | "2026";
  score: string;
  photo: string;
  testimonial?: string; // facultatif : le bloc n'apparaît que s'il est rempli
};

// ⚠️ Témoignages rédigés comme brouillons : à faire valider (ou remplacer)
// par chaque élève avant publication, puisqu'ils sont attribués à son nom.
const students: Student[] = [
  {
    id: 1,
    name: "Islem Tayari",
    year: "2026",
    score: "19.09/20",
    photo: "/eleves/islem.png",
    testimonial:
      "Franchement, je ne pensais jamais arriver à ce niveau ! Au début, l'algorithmique me faisait un peu peur, ama avec Mariem, kol chay walla awdha7. Elle ne se contente pas de donner la correction, elle nous pousse à réfléchir et à trouver la solution par nous-mêmes. Même quand on pose la même question plusieurs fois, elle garde toujours sa patience 😅. Merci pour tous les encouragements, les conseils et surtout pour avoir cru en nous. Cette réussite, c'est aussi grâce à vous ! ❤️",
  },
  {
    id: 2,
    name: "Wajdi Daaji",
    year: "2026",
    score: "18.66/20",
    photo: "/eleves/wajdi.png",
    testimonial:
      "Ce que je retiens le plus de cette expérience, c'est que j'ai appris à réfléchir avant de programmer. Avant, je cherchais directement une correction, ama taw wallit nhalel l'exercice étape par étape. Mariem a toujours su nous motiver, même dans les moments où on était fatigués ou stressés. Les séances, les évaluations et les petites remarques qui nous poussaient à faire mieux ont vraiment fait la différence. Merci pour votre confiance et votre soutien, vous êtes plus qu'une enseignante ! ❤️",
  },
  {
    id: 3,
    name: "Adem Jlassi",
    year: "2026",
    score: "17.91/20",
    photo: "/eleves/profil.jpg",
    testimonial:
      "Avec Mariem, on apprend sérieusement, mais on passe aussi de bons moments ! 😄 Elle sait exactement comment nous expliquer les choses et surtout comment nous encourager à ne jamais abandonner. Au début, certains exercices me semblaient impossibles, mais avec la pratique, wallit nواجه les problèmes avec plus de confiance. Et bien sûr, ses remarques quand on fait une petite erreur nous restent toujours en tête 😂. Merci pour votre patience, votre énergie et tous les efforts que vous avez faits pour nous.",
  },
  {
    id: 4,
    name: "Rayen Jlassi",
    year: "2026",
    score: "17.33/20",
    photo: "/eleves/profil.jpg",
    testimonial:
      "Les cours avec Mariem m'ont beaucoup apporté, pas seulement en programmation, mais aussi dans ma façon de travailler. Elle nous apprend à être organisés, à vérifier chaque étape et à ne jamais laisser une erreur sans comprendre pourquoi elle est arrivée. Avec elle, on peut poser toutes les questions sans avoir peur. Dima تشجع فينا et elle nous pousse à donner le meilleur de nous-mêmes. Merci pour votre disponibilité, vos conseils et cette belle année passée ensemble !",
  },
  {
    id: 5,
    name: "Rahma Boukid",
    year: "2026",
    score: "16/20",
    photo: "/eleves/rahma.jpg",
    testimonial:
      "Je suis très contente d'avoir vécu cette expérience avec Mariem. Au début, j'avais parfois des difficultés à suivre certains exercices, ama elle prenait toujours le temps de réexpliquer jusqu'à ce qu'on comprenne. Ce que j'aime chez elle, c'est qu'elle croit en ses élèves et qu'elle sait trouver les mots pour nous redonner confiance. Même quand on doute de nous-mêmes, elle nous rappelle qu'on est capables de réussir. Merci pour votre gentillesse, votre patience et tous ces beaux souvenirs. ❤️",
  },
  {
    id: 6,
    name: "Sinda Ben Slimen",
    year: "2025",
    score: "16/20",
    photo: "/eleves/sinda",
    testimonial:
      "Une expérience que je n'oublierai jamais ! Les cours étaient bien organisés, les exercices progressifs et les corrections très utiles pour comprendre nos erreurs. Mais ce qui a rendu cette expérience spéciale, c'est surtout la relation avec Mariem. On se sent à l'aise avec elle, on peut discuter, poser des questions et même plaisanter tout en travaillant sérieusement. Chwaya chwaya, les notions difficiles sont devenues plus faciles. Merci pour tout ce que vous nous avez appris et pour votre soutien jusqu'au Bac ! ❤️",
  },
  {
    id: 7,
    name: "Koussay Boudhina",
    year: "2025",
    score: "15.58/20",
    photo: "/eleves/koussay.jpg",
    testimonial:
      "Avec Mariem, impossible de rester sans rien faire ! 😅 Elle nous pousse toujours à réfléchir, à chercher et à ne pas abandonner dès qu'un exercice devient compliqué. J'ai beaucoup apprécié sa manière de travailler avec nous : elle est sérieuse quand il le faut, mais toujours proche de ses élèves. Grâce aux entraînements, j'ai amélioré ma méthode et ma confiance. Merci pour tous les conseils, les encouragements et surtout pour cette belle complicité. On ne vous oubliera pas !",
  },
  {
    id: 8,
    name: "Zaineb Jawadi",
    year: "2025",
    score: "13/20",
    photo: "/eleves/zaineb.png",
    testimonial:
      "Ce que j'ai appris avec Mariem dépasse les cours d'algorithmique. J'ai appris à être plus autonome, à ne pas paniquer devant un exercice et surtout à chercher mes erreurs au lieu d'attendre directement la réponse. Elle a toujours été à l'écoute et proche de nous, même quand on avait besoin d'un petit encouragement. Marra marra on était stressés, mais elle savait toujours nous rassurer et nous redonner le sourire. Merci pour votre patience et pour avoir été à nos côtés jusqu'au bout ! ❤️",
  },
  {
    id: 9,
    name: "Hiba Bechewech",
    year: "2025",
    score: "14.5/20",
    photo: "/eleves/profil.jpg",
    testimonial:
      "Je garde de très beaux souvenirs de cette année ! Avec Mariem, on ne vient pas seulement pour assister à un cours, on vient pour apprendre, participer, poser des questions et progresser ensemble. Elle nous connaît bien, comprend nos difficultés et sait comment nous motiver. Grâce à ses explications et aux nombreux exercices, j'ai appris à mieux raisonner et à travailler avec plus de confiance. Merci pour votre cœur, votre patience et votre façon de nous accompagner. Rabbi yfadhelik, et nchallah toujours plus de réussite ! ❤️",
  },
];

const promotions = ["Toutes", "2025", "2026"] as const;
type Promotion = (typeof promotions)[number];

const memories = [
  {
    src: "/eleves/moments-1.jpeg",
    alt: "Moment de partage entre les élèves",
  },
  {
    src: "/eleves/moments-2.jpeg",
    alt: "Séance de travail avec les élèves",
  },
  {
    src: "/eleves/moments-3.jpeg",
    alt: "Souvenir de MS Code Academy",
  },
];

/* Compteur animé : démarre quand il entre à l'écran */
function CountUp({ to, duration = 1200 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(to * eased));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return <span ref={ref}>{value}</span>;
}

/* Bouton principal : dégradé animé + reflet + flèche */
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
      : "bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-700 bg-[length:200%_100%] text-white shadow-lg shadow-violet-300/60 hover:bg-right hover:shadow-fuchsia-300/60";
  const shine = variant === "white" ? "bg-violet-300/40" : "bg-white/30";

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-semibold transition-all duration-500 hover:-translate-y-1 active:translate-y-0 active:scale-95 ${styles}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 -left-full w-1/2 -skew-x-12 transition-transform duration-700 group-hover:translate-x-[400%] motion-reduce:hidden ${shine}`}
      />
      <span className="relative">{children}</span>
      <ArrowRight
        size={18}
        className="relative transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function ReussitesPage() {
  const [selectedYear, setSelectedYear] = useState<Promotion>("Toutes");

  const filteredStudents = useMemo(() => {
    if (selectedYear === "Toutes") return students;
    return students.filter((student) => student.year === selectedYear);
  }, [selectedYear]);

  const totalStudents = students.length;
  const total2025 = students.filter((s) => s.year === "2025").length;
  const total2026 = students.filter((s) => s.year === "2026").length;

  const countFor = (year: Promotion) =>
    year === "Toutes"
      ? totalStudents
      : students.filter((s) => s.year === year).length;

  return (
    <main className="overflow-hidden bg-white text-[#191536]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-50 via-white to-white"
        />
        <div
          aria-hidden="true"
          className="animate-float absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-violet-300/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float absolute -right-32 top-40 -z-10 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl [animation-delay:2s]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(124,58,237,0.12)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        />

        <div className="mx-auto max-w-5xl text-center">
          <div className="animate-rise mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-5 py-2 text-sm font-semibold text-violet-700 shadow-sm">
            <Trophy size={17} aria-hidden="true" />
            Nos réussites
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span
              className="animate-rise inline-block"
              style={{ animationDelay: "150ms" }}
            >
              Chaque réussite raconte
            </span>{" "}
            <span
              className="animate-rise animate-gradient-x inline-block bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-700 bg-[length:200%_auto] bg-clip-text text-transparent"
              style={{ animationDelay: "300ms" }}
            >
              une histoire.
            </span>
          </h1>

          <p
            className="animate-rise mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg"
            style={{ animationDelay: "450ms" }}
          >
            Derrière chaque note, il y a du travail, de la persévérance et une
            belle progression. Découvrons ensemble les parcours de nos élèves et
            leurs réussites au Bac Informatique.
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap justify-center gap-3"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#eleves"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-700 bg-[length:200%_100%] px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-300/60 transition-all duration-500 hover:-translate-y-1 hover:bg-right hover:shadow-fuchsia-300/60 active:scale-95"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 transition-transform duration-700 group-hover:translate-x-[400%] motion-reduce:hidden"
              />
              <span className="relative">Découvrir nos élèves</span>
              <ArrowRight
                size={18}
                className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-90"
                aria-hidden="true"
              />
            </a>

            <Link
              href="/contact"
              className="rounded-full border border-violet-200 bg-white px-7 py-3.5 font-semibold text-violet-800 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-100 active:scale-95"
            >
              Nous rejoindre
            </Link>
          </div>
        </div>
      </section>

      {/* GALERIE COLLECTIVE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                <Camera size={16} aria-hidden="true" />
                Nos souvenirs
              </span>

              <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
                Une aventure, des souvenirs,{" "}
                <span className="bg-gradient-to-r from-violet-700 to-fuchsia-500 bg-clip-text text-transparent">
                  une famille.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                Bien plus que des cours, MS Code Academy, c&apos;est aussi des
                moments de partage, de motivation et de belles rencontres.
              </p>
            </div>
          </Reveal>

          {/* PHOTOS DES PROMOTIONS */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* PROMOTION 2025 */}
            <Reveal direction="left" className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-300/50">
                <div className="relative h-[300px] shrink-0 overflow-hidden md:h-[380px]">
                  <Image
                    src="/eleves/eleve-1.jpeg"
                    alt="Photo collective de la promotion 2025"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#191536]/90 via-transparent to-transparent transition-opacity duration-500 group-hover:from-violet-900/90" />

                  <div className="absolute bottom-0 left-0 p-7 text-white">
                    <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-md">
                      Promotion
                    </span>
                    <h3 className="mt-3 text-3xl font-extrabold">Bac 2025</h3>
                    <p className="mt-1 text-sm text-violet-100">
                      Une année de travail et de réussite.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* PROMOTION 2026 */}
            <Reveal direction="right" delay={150} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-300/50">
                <div className="grid h-[300px] shrink-0 grid-cols-2 gap-1 md:h-[380px]">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/eleves/eleve-2.jpeg"
                      alt="Photo 1 de la promotion 2026"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="relative overflow-hidden">
                    <Image
                      src="/eleves/eleve-3.jpeg"
                      alt="Photo 2 de la promotion 2026"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="animate-gradient-x flex flex-1 flex-col justify-center bg-gradient-to-r from-[#191536] via-violet-800 to-[#191536] bg-[length:200%_100%] p-7 text-white">
                  <span className="w-fit rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-md">
                    Promotion
                  </span>

                  <h3 className="mt-3 text-3xl font-extrabold">Bac 2026</h3>

                  <p className="mt-1 text-sm text-violet-100">
                    Des efforts, des progrès et de beaux souvenirs.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* GALERIE DE SOUVENIRS */}
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {memories.map((photo, index) => (
              <Reveal
                key={photo.src}
                delay={index * 100}
                direction="scale"
                className={index === 2 ? "col-span-2 md:col-span-1" : ""}
              >
                <div className="group relative h-44 overflow-hidden rounded-2xl bg-violet-100 shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-violet-200/60 md:h-64">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-violet-900/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  >
                    <Camera
                      size={28}
                      className="translate-y-3 text-white transition-transform duration-500 group-hover:translate-y-0"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTIQUES */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0} className="h-full">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-200/60">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-violet-700 group-hover:text-white">
                <Users size={23} aria-hidden="true" />
              </div>
              <p className="text-3xl font-extrabold">
                {totalStudents ? <CountUp to={totalStudents} /> : "—"}
              </p>
              <p className="mt-2 text-sm text-gray-500">Élèves présentés</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl hover:shadow-violet-200/60">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-purple-600 to-violet-500 transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-purple-700 group-hover:text-white">
                <GraduationCap size={23} aria-hidden="true" />
              </div>
              <p className="text-3xl font-extrabold">2025</p>
              <p className="mt-2 text-sm text-gray-500">
                Promotion ·{" "}
                {total2025 ? (
                  <>
                    <CountUp to={total2025} /> élève{total2025 > 1 ? "s" : ""}
                  </>
                ) : (
                  "À compléter"
                )}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="h-full sm:col-span-2 lg:col-span-1">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-300 hover:shadow-2xl hover:shadow-fuchsia-200/60">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-fuchsia-600 to-orange-400 transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-fuchsia-700 group-hover:text-white">
                <Award size={23} aria-hidden="true" />
              </div>
              <p className="text-3xl font-extrabold">2026</p>
              <p className="mt-2 text-sm text-gray-500">
                Promotion ·{" "}
                {total2026 ? (
                  <>
                    <CountUp to={total2026} /> élève{total2026 > 1 ? "s" : ""}
                  </>
                ) : (
                  "À compléter"
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Le fruit du travail
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              La réussite se construit{" "}
              <span className="animate-gradient-x bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-700 bg-[length:200%_auto] bg-clip-text text-transparent">
                ensemble.
              </span>
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Nous sommes fiers du chemin parcouru par nos élèves. Ces résultats
              témoignent de leurs efforts, de leur sérieux et de leur engagement
              tout au long de leur préparation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ELEVES */}
      <section
        id="eleves"
        className="relative scroll-mt-24 overflow-hidden bg-violet-50/70 px-6 py-20 md:py-24"
      >
        <div
          aria-hidden="true"
          className="animate-float absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl [animation-delay:2s]"
        />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Nos anciens élèves
              </span>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                Ils ont écrit leur{" "}
                <span className="bg-gradient-to-r from-violet-700 to-fuchsia-500 bg-clip-text text-transparent">
                  histoire.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Retrouvez les élèves des promotions 2025 et 2026, leurs
                résultats et les mots qu&apos;ils souhaitent partager avec vous.
              </p>
            </div>
          </Reveal>

          {/* FILTRES */}
          <Reveal delay={100}>
            <div
              className="mt-10 flex flex-wrap justify-center gap-3"
              role="group"
              aria-label="Filtrer par promotion"
            >
              {promotions.map((year) => {
                const active = selectedYear === year;
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(year)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                      active
                        ? "bg-gradient-to-r from-violet-700 to-fuchsia-500 text-white shadow-lg shadow-violet-300/60"
                        : "border border-violet-200 bg-white text-violet-800 hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-100"
                    }`}
                  >
                    {year === "Toutes"
                      ? "Toutes les promotions"
                      : `Bac ${year}`}
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
                        active
                          ? "bg-white/25 text-white"
                          : "bg-violet-100 text-violet-700"
                      }`}
                    >
                      {countFor(year)}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <p className="sr-only" aria-live="polite">
            {filteredStudents.length} élève
            {filteredStudents.length > 1 ? "s" : ""} affiché
            {filteredStudents.length > 1 ? "s" : ""}
          </p>

          {/* CARTES ELEVES */}
          {filteredStudents.length > 0 ? (
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStudents.map((student, index) => (
                <Reveal
                  key={student.id}
                  delay={(index % 3) * 100}
                  className="h-full"
                >
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-200/70">
                    {/* PHOTO */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-violet-200 via-purple-100 to-fuchsia-100">
                      {student.photo ? (
                        <Image
                          src={student.photo}
                          alt={`Photo de ${student.name}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-violet-500">
                          <Users size={65} strokeWidth={1.2} />
                        </div>
                      )}

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-violet-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />

                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-violet-800 shadow-sm backdrop-blur-sm">
                        Bac {student.year}
                      </span>
                    </div>

                    {/* INFORMATIONS */}
                    <div className="relative p-6">
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-transform duration-500 group-hover:scale-x-100"
                      />

                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-extrabold transition-colors duration-300 group-hover:text-violet-700">
                          {student.name}
                        </h3>
                        <div className="flex shrink-0 items-center gap-1 rounded-xl bg-violet-100 px-3 py-2 font-bold text-violet-800 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-violet-700 group-hover:to-fuchsia-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-300/60">
                          <Star
                            size={15}
                            className="transition-transform duration-500 group-hover:rotate-[360deg]"
                            aria-hidden="true"
                          />
                          {student.score}
                        </div>
                      </div>

                      {student.testimonial && (
                        <>
                          <div className="my-5 h-px bg-violet-100" />

                          <div className="flex items-start gap-3">
                            <Quote
                              className="mt-1 shrink-0 text-violet-500"
                              size={20}
                              aria-hidden="true"
                            />
                            <p className="text-sm leading-7 text-gray-600">
                              {student.testimonial}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={150}>
              <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-dashed border-violet-300 bg-white px-7 py-14 text-center">
                <div className="animate-float mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                  <GraduationCap size={32} aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Les réussites arrivent bientôt !
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
                  Les parcours, photos, notes et témoignages de nos élèves
                  seront bientôt présentés ici. Revenez découvrir leurs belles
                  réussites !
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-50 px-5 py-2 text-sm font-semibold text-violet-700">
                  <BookOpen size={16} aria-hidden="true" />
                  Promotion{" "}
                  {selectedYear === "Toutes" ? "2025 et 2026" : selectedYear}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal direction="scale">
            <div className="animate-gradient-x relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#191536] via-violet-800 to-fuchsia-700 bg-[length:200%_200%] px-7 py-14 text-center text-white shadow-2xl shadow-violet-300/50 md:px-16 md:py-16">
              <div
                aria-hidden="true"
                className="animate-spin-slow absolute -right-16 -top-20 h-64 w-64 rounded-full border-[36px] border-dashed border-white/10"
              />
              <div
                aria-hidden="true"
                className="animate-float absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl"
              />

              <div className="relative">
                <div className="animate-float mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                  <Quote size={28} aria-hidden="true" />
                </div>

                <h2 className="mt-7 text-3xl font-extrabold md:text-4xl">
                  Leurs mots, notre plus belle récompense.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-violet-100">
                  Chaque témoignage représente une expérience, un parcours et
                  une histoire humaine. Merci à nos élèves pour leur confiance
                  et pour avoir partagé cette aventure avec MS Code Academy.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {["Confiance", "Persévérance", "Réussite"].map((word) => (
                    <span
                      key={word}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="animate-float mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 shadow-lg shadow-violet-200/60">
              <Trophy size={28} aria-hidden="true" />
            </div>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Et si la prochaine réussite était{" "}
              <span className="animate-gradient-x bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-700 bg-[length:200%_auto] bg-clip-text text-transparent">
                la vôtre ?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              Rejoignez MS Code Academy et avancez pas à pas vers vos objectifs
              grâce à un accompagnement et un apprentissage adaptés.
            </p>

            <div className="mt-8">
              <ShimmerLink href="/contact">Commencer mon parcours</ShimmerLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
