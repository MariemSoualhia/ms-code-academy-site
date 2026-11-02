"use client";
import { Camera } from "lucide-react";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Quote,
  Star,
  Trophy,
  Users,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Reveal from "../components/Reveal";

type Student = {
  id: number;
  name: string;
  year: "2025" | "2026";
  score: string;
  photo: string;
  testimonial: string;
};

const students: Student[] = [
  {
    id: 1,
    name: "Islem tayari",
    year: "2026",
    score: "19/20",
    photo: "/eleves/profil.jpg",
    testimonial: "Votre témoignage ici...",
  },
  {
    id: 2,
    name: "Wajdi Daaji",
    year: "2026",
    score: "19/20",
    photo: "/eleves/profil.jpg",
    testimonial: "Votre témoignage ici...",
  },
  {
    id: 3,
    name: "Adem Jlassi",
    year: "2026",
    score: "18/20",
    photo: "/eleves/profil.jpg",
    testimonial: "Votre témoignage ici...",
  },
  {
    id: 4,
    name: "Rayen Jlassi",
    year: "2026",
    score: "17/20",
    photo: "/eleves/profil.jpg",
    testimonial: "Votre témoignage ici...",
  },
  {
    id: 5,
    name: "Rahma boukid",
    year: "2026",
    score: "16/20",
    photo: "/eleves/profil.jpg",
    testimonial: "Votre témoignage ici...",
  },
  {
    id: 6,
    name: "Sinda ben slimen",
    year: "2025",
    score: "17/20",
    photo: "/eleves/profil.jpg",
    testimonial: "Votre témoignage ici...",
  },
  {
    id: 7,
    name: "koussay boudhina",
    year: "2025",
    score: "16/20",
    photo: "/eleves/profil.jpg",
    testimonial: "Votre témoignage ici...",
  },
  {
    id: 8,
    name: "zaineb jawadi",
    year: "2025",
    score: "14/20",
    photo: "/eleves/profil.jpg",
    testimonial: "Votre témoignage ici...",
  },
];

const promotions = ["Toutes", "2025", "2026"] as const;
type Promotion = (typeof promotions)[number];

export default function ReussitesPage() {
  const [selectedYear, setSelectedYear] = useState<Promotion>("Toutes");

  const filteredStudents = useMemo(() => {
    if (selectedYear === "Toutes") return students;
    return students.filter((student) => student.year === selectedYear);
  }, [selectedYear]);

  const totalStudents = students.length;
  const total2025 = students.filter(
    (student) => student.year === "2025",
  ).length;
  const total2026 = students.filter(
    (student) => student.year === "2026",
  ).length;

  return (
    <main className="overflow-hidden bg-white text-[#191536]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-50 via-white to-white" />

        <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -right-32 top-40 -z-10 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-5 py-2 text-sm font-semibold text-violet-700 shadow-sm">
              <Trophy size={17} />
              Nos réussites
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Chaque réussite raconte{" "}
              <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                une histoire.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              Derrière chaque note, il y a du travail, de la persévérance et une
              belle progression. Découvrons ensemble les parcours de nos élèves
              et leurs réussites au Bac Informatique.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#eleves"
                className="inline-flex items-center gap-2 rounded-full bg-violet-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-800"
              >
                Découvrir nos élèves
                <ArrowRight size={18} />
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-violet-200 bg-white px-7 py-3.5 font-semibold text-violet-800 transition hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50"
              >
                Nous rejoindre
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERIE COLLECTIVE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                <Camera size={16} />
                Nos souvenirs
              </span>

              <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
                Une aventure, des souvenirs,{" "}
                <span className="text-violet-700">une famille.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                Bien plus que des cours, MS Code Academy, c'est aussi des
                moments de partage, de motivation et de belles rencontres.
              </p>
            </div>
          </Reveal>

          {/* PHOTOS DES PROMOTIONS */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* PROMOTION 2025 */}
            <Reveal direction="left">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-[300px] shrink-0 overflow-hidden md:h-[380px]">
                  <Image
                    src="/eleves/eleve-1.jpeg"
                    alt="Photo collective de la promotion 2025"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#191536]/90 via-transparent to-transparent" />

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
            <Reveal direction="right" delay={150}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
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

                <div className="flex flex-1 flex-col justify-center bg-gradient-to-r from-[#191536] to-violet-800 p-7 text-white">
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
            {[
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
            ].map((photo, index) => (
              <Reveal key={photo.src} delay={index * 100}>
                <div className="group relative h-44 overflow-hidden rounded-2xl bg-violet-100 shadow-sm md:h-64">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTIQUES */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <div className="group rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                <Users size={23} />
              </div>
              <p className="text-3xl font-extrabold">{totalStudents || "—"}</p>
              <p className="mt-2 text-sm text-gray-500">Élèves présentés</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="group rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
                <GraduationCap size={23} />
              </div>
              <p className="text-3xl font-extrabold">2025</p>
              <p className="mt-2 text-sm text-gray-500">
                Promotion · {total2025 || "À compléter"} élève(s)
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="group rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100 sm:col-span-2 lg:col-span-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700 transition group-hover:bg-fuchsia-700 group-hover:text-white">
                <Award size={23} />
              </div>
              <p className="text-3xl font-extrabold">2026</p>
              <p className="mt-2 text-sm text-gray-500">
                Promotion · {total2026 || "À compléter"} élève(s)
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
              <span className="text-violet-700">ensemble.</span>
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
      <section id="eleves" className="bg-violet-50/70 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Nos anciens élèves
              </span>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                Ils ont écrit leur{" "}
                <span className="text-violet-700">histoire.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Retrouvez les élèves des promotions 2025 et 2026, leurs
                résultats et les mots qu'ils souhaitent partager avec vous.
              </p>
            </div>
          </Reveal>

          {/* FILTRES */}
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {promotions.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition duration-300 ${
                    selectedYear === year
                      ? "bg-violet-700 text-white shadow-lg shadow-violet-200"
                      : "border border-violet-200 bg-white text-violet-800 hover:border-violet-500 hover:bg-violet-100"
                  }`}
                >
                  {year === "Toutes" ? "Toutes les promotions" : `Bac ${year}`}
                </button>
              ))}
            </div>
          </Reveal>

          {/* CARTES ELEVES */}
          {filteredStudents.length > 0 ? (
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStudents.map((student, index) => (
                <Reveal key={student.id} delay={index * 100}>
                  <article className="group h-full overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-200/60">
                    {/* PHOTO */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-violet-200 via-purple-100 to-fuchsia-100">
                      {student.photo ? (
                        <Image
                          src={student.photo}
                          alt={`Photo de ${student.name}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-violet-500">
                          <Users size={65} strokeWidth={1.2} />
                        </div>
                      )}

                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-violet-800 shadow-sm">
                        Bac {student.year}
                      </span>
                    </div>

                    {/* INFORMATIONS */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-extrabold">
                          {student.name}
                        </h3>
                        <div className="flex shrink-0 items-center gap-1 rounded-xl bg-violet-100 px-3 py-2 font-bold text-violet-800">
                          <Star size={15} />
                          {student.score}
                        </div>
                      </div>

                      <div className="my-5 h-px bg-violet-100" />

                      <div className="flex items-start gap-3">
                        <Quote
                          className="mt-1 shrink-0 text-violet-500"
                          size={20}
                        />
                        <p className="text-sm leading-7 text-gray-600">
                          {student.testimonial}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={150}>
              <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-dashed border-violet-300 bg-white px-7 py-14 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                  <GraduationCap size={32} />
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
                  <BookOpen size={16} />
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
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#191536] via-violet-900 to-violet-700 px-7 py-14 text-center text-white shadow-xl md:px-16 md:py-16">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <Quote size={28} />
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
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                    Confiance
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                    Persévérance
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                    Réussite
                  </span>
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
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
              <Trophy size={28} />
            </div>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Et si la prochaine réussite était{" "}
              <span className="text-violet-700">la vôtre ?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              Rejoignez MS Code Academy et avancez pas à pas vers vos objectifs
              grâce à un accompagnement et un apprentissage adaptés.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-700 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-800"
            >
              Commencer mon parcours
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
