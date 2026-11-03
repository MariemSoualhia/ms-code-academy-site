import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  MessageCircle,
  AtSign,
  MapPin,
  ArrowRight,
  Send,
  Mail,
} from "lucide-react";
import Reveal from "../components/Reveal";

type SocialIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const FacebookIcon = ({ size = 24, ...props }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    />
  </svg>
);

const InstagramIcon = ({ size = 24, ...props }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <rect
      width="17"
      height="17"
      x="3.5"
      y="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      rx="5.5"
    />
    <circle
      cx="12"
      cy="12"
      r="3.606"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <circle cx="16.894" cy="7.106" r="1.03" fill="currentColor" />
  </svg>
);

type ContactItem = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  label: string;
  href: string;
  color: string;
};

const contacts: ContactItem[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Pour toute question ou demande d'information.",
    label: "Nous contacter",
    href: "https://wa.me/21658167988",
    color: "bg-green-500",
  },
  {
    icon: FacebookIcon,
    title: "Facebook",
    description: "Retrouvez nos annonces et nos activités.",
    label: "Voir notre Facebook",
    href: "https://www.facebook.com/maryem.sh.5074/",
    color: "bg-blue-600",
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    description: "Suivez nos actualités, conseils et publications.",
    label: "Voir notre Instagram",
    href: "https://www.instagram.com/mariem.sh/",
    color: "bg-pink-500",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Pour toute demande d'information ou collaboration.",
    label: "Envoyer un e-mail",
    href: "mailto:soualhiamariem@gmail.com",
    color: "bg-violet-600",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#191536] px-6 py-24 text-center text-white md:py-28">
        <div className="absolute -left-24 top-0 -z-10 h-72 w-72 animate-float rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-72 w-72 animate-float rounded-full bg-purple-500/20 blur-3xl" />

        <Reveal direction="scale">
          <div className="relative mx-auto max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-violet-300/30 bg-violet-400/10 px-5 py-2 text-sm font-medium text-violet-200">
              RESTONS EN CONTACT
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Parlons de votre
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
                avenir informatique.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Une question sur nos formations ? Besoin d'informations ou
              d'accompagnement ? Nous sommes là pour vous répondre.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* SECTION TITLE */}
          <Reveal>
            <div className="mb-14 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-violet-600">
                Nos coordonnées
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#191536] md:text-4xl">
                Comment nous contacter ?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                Choisissez le moyen de communication qui vous convient. Nous
                serons ravis d'échanger avec vous.
              </p>
            </div>
          </Reveal>

          {/* CONTACT CARDS */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <Reveal
                  key={contact.title}
                  delay={index * 100}
                  className="h-full"
                >
                  <article className="group h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-lg shadow-violet-100/40 transition-all duration-500 hover:-translate-y-3 hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-200/50">
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${contact.color} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-[#191536] transition-colors group-hover:text-violet-700">
                      {contact.title}
                    </h3>

                    <p className="mb-7 min-h-14 leading-7 text-gray-500">
                      {contact.description}
                    </p>

                    <a
                      href={contact.href}
                      target={contact.title === "E-mail" ? undefined : "_blank"}
                      rel={
                        contact.title === "E-mail"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="inline-flex items-center gap-2 font-semibold text-violet-700 transition-all duration-300 hover:gap-4"
                    >
                      {contact.label}
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* ADDITIONAL INFORMATION */}
          <div className="relative mt-20 overflow-hidden rounded-3xl bg-violet-50 p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

            <div className="relative grid gap-12 md:grid-cols-2">
              {/* LEFT SIDE */}
              <Reveal direction="left">
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-violet-600">
                    Nous sommes à votre écoute
                  </span>

                  <h2 className="mt-4 text-3xl font-bold leading-tight text-[#191536]">
                    Votre réussite commence par un premier échange.
                  </h2>

                  <p className="mt-5 leading-8 text-gray-600">
                    Que vous soyez élève en Bac Informatique, débutant en
                    programmation ou simplement curieux de découvrir le
                    développement informatique, n'hésitez pas à nous contacter.
                  </p>

                  <a
                    href="https://wa.me/21658167988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-xl bg-[#191536] px-7 py-4 font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-violet-800 hover:shadow-xl"
                  >
                    <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-[400%]" />
                    <Send size={19} className="relative" />
                    <span className="relative">Envoyer un message</span>
                    <ArrowRight
                      size={18}
                      className="relative transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>

              {/* RIGHT SIDE */}
              <div className="flex flex-col justify-center gap-6">
                <Reveal direction="right" delay={100}>
                  <div className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition-transform duration-300 group-hover:scale-110">
                      <MessageCircle size={23} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#191536]">
                        Contact direct
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Échangez avec nous directement sur WhatsApp.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={200}>
                  <div className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition-transform duration-300 group-hover:scale-110">
                      <AtSign size={23} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#191536]">
                        Suivez notre communauté
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Découvrez nos publications, ressources et actualités.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={300}>
                  <a
                    href="mailto:soualhiamariem@gmail.com"
                    className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition-transform duration-300 group-hover:scale-110">
                      <Mail size={23} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#191536]">
                        Notre adresse e-mail
                      </h3>
                      <p className="mt-1 break-all text-sm leading-6 text-gray-500 transition-colors group-hover:text-violet-700">
                        soualhiamariem@gmail.com
                      </p>
                    </div>
                  </a>
                </Reveal>

                <Reveal direction="right" delay={400}>
                  <div className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition-transform duration-300 group-hover:scale-110">
                      <MapPin size={23} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#191536]">
                        MS Code Academy
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Apprendre le code autrement.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20">
        <Reveal direction="scale">
          <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 bg-[length:200%_100%] px-8 py-14 text-center text-white shadow-xl shadow-violet-200 transition-all duration-700 hover:bg-right md:px-16">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-fuchsia-300/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold md:text-4xl">
                Prêt à commencer votre aventure ?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-violet-100">
                Rejoignez MS Code Academy et développez vos compétences en
                algorithmique, programmation et développement web.
              </p>

              <Link
                href="/formations"
                className="group/link mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50 hover:shadow-xl"
              >
                Découvrir nos formations
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
