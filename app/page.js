"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Brush,
  CalendarCheck,
  Clock3,
  FileCheck2,
  Hammer,
  Home as HomeIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X
} from "lucide-react";

const business = {
  name: "Stukadoors en onderhoudsbedrijf De Bruin",
  phone: "06 29152077",
  phoneHref: "tel:+31629152077",
  email: "info@debruin-stukadoors.nl",
  emailHref: "mailto:info@debruin-stukadoors.nl",
  address: "Tacitusstraat 13, 2314 CJ Leiden",
  area: "Leiden en omgeving",
  rating: "5,0",
  reviewCount: "2 Google reviews",
  hours: "Geopend tot 18:00"
};

const images = {
  hero: "https://images.pexels.com/photos/5493658/pexels-photo-5493658.jpeg?auto=compress&cs=tinysrgb&w=1600",
  wall: "https://images.pexels.com/photos/5691637/pexels-photo-5691637.jpeg?auto=compress&cs=tinysrgb&w=1000",
  tools: "https://images.pexels.com/photos/5767932/pexels-photo-5767932.jpeg?auto=compress&cs=tinysrgb&w=1000",
  renovation: "https://images.pexels.com/photos/5493665/pexels-photo-5493665.jpeg?auto=compress&cs=tinysrgb&w=1100",
  finish: "https://images.pexels.com/photos/5493667/pexels-photo-5493667.jpeg?auto=compress&cs=tinysrgb&w=1000",
  detail: "https://images.pexels.com/photos/36495702/pexels-photo-36495702.jpeg?auto=compress&cs=tinysrgb&w=1000"
};

const quoteText = "Vraag een offerte aan";
const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2";

const stats = [
  [business.rating, "Google beoordeling"],
  ["2", "Reviews"],
  ["18:00", "Vandaag geopend tot"],
  ["Leiden", "Werkgebied"]
];

const services = [
  {
    icon: Brush,
    title: "Strak stucwerk",
    copy: "Gladde wanden en plafonds met een nette, egale afwerking voor renovatie en nieuw werk."
  },
  {
    icon: Sparkles,
    title: "Sausklaar opleveren",
    copy: "Ondergronden worden zorgvuldig voorbereid, afgewerkt en schoon achtergelaten."
  },
  {
    icon: HomeIcon,
    title: "Onderhoud in huis",
    copy: "Kleine herstelwerkzaamheden, afwerking en onderhoud worden praktisch en netjes uitgevoerd."
  },
  {
    icon: Hammer,
    title: "Renovatiebegeleiding",
    copy: "Meedenken over de beste oplossing, planning en volgorde zodat de klus soepel verloopt."
  },
  {
    icon: ShieldCheck,
    title: "Vakmanschap",
    copy: "Ervaren uitvoering met oog voor details, duidelijke afspraken en een professionele werkhouding."
  },
  {
    icon: FileCheck2,
    title: "Heldere offerte",
    copy: "Vooraf duidelijkheid over de werkzaamheden, planning en aanpak van jouw project."
  }
];

const testimonials = [
  {
    initials: "NS",
    name: "Nikkie Schaasberg",
    role: "Google review",
    quote:
      "Wij zijn ontzettend tevreden over het werk van deze stukadoor. Vanaf het eerste contact verliep de communicatie duidelijk en prettig. Hij kwam afspraken netjes na en werkte zeer professioneel."
  },
  {
    initials: "JB",
    name: "Joyce Booy",
    role: "Google review",
    quote:
      "Het team leverde een keurig afgewerkt resultaat en nam ruim de tijd om met mij alle mogelijkheden te bespreken. De perfectionistische instelling en grondige aanpak resulteren in een hoogwaardige afwerking."
  }
];

function Brand({ footer = false }) {
  return (
    <a
      className={`inline-flex items-center gap-2.5 text-lg font-black tracking-tight ${
        footer ? "mb-5 text-white" : "text-navy"
      }`}
      href="#home"
      aria-label={`${business.name} home`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500 text-white">
        <Brush className="h-5 w-5 stroke-2" aria-hidden="true" />
      </span>
      <span className="leading-tight">De Bruin</span>
    </a>
  );
}

function Eyebrow({ children }) {
  return <p className="mb-3 text-xs font-black uppercase tracking-wide text-orange-500">{children}</p>;
}

function QuoteButton({ href = "#contact", className = "" }) {
  return (
    <a className={`${buttonClass} ${className}`} href={href}>
      {quoteText}
      <ArrowRight className="h-5 w-5 stroke-2" aria-hidden="true" />
    </a>
  );
}

function ImageFill({ src, alt, priority = false, sizes = "100vw", className = "" }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Diensten", "#services"],
    ["Over ons", "#about"],
    ["Reviews", "#reviews"],
    ["Werk", "#work"],
    ["Contact", "#contact"]
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <Brand />

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-navy transition hover:border-orange-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 md:hidden"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-6 w-6 stroke-2" /> : <Menu className="h-6 w-6 stroke-2" />}
          </button>

          <nav
            className={`items-center gap-8 text-sm font-bold text-slate-700 md:flex ${
              menuOpen
                ? "absolute left-5 right-5 top-20 grid rounded-lg border border-slate-200 bg-white p-5 shadow-lg"
                : "hidden"
            }`}
            aria-label="Hoofdnavigatie"
          >
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                className="transition hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4"
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              className="inline-flex items-center gap-2 font-black text-navy transition hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4"
              href={business.phoneHref}
            >
              <Phone className="h-5 w-5 stroke-2 text-orange-500" aria-hidden="true" />
              {business.phone}
            </a>
            <QuoteButton />
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-navy py-24 text-white lg:min-h-[680px]">
          <ImageFill src={images.hero} alt="Stukadoor werkt een wand strak af" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-transparent" />
          <div className="section-shell relative z-10 grid gap-12 lg:min-h-[500px] lg:grid-cols-2 lg:items-center">
            <div className="animate-soft-rise">
              <Eyebrow>Stukadoorsbedrijf in Leiden</Eyebrow>
              <h1 className="mb-6 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {business.name}
              </h1>
              <p className="max-w-xl text-lg text-white/80">
                Strak stucwerk, zorgvuldig onderhoud en heldere communicatie voor woningen en projecten in
                Leiden en omgeving.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <QuoteButton />
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 font-bold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-navy"
                  href={business.phoneHref}
                >
                  <Phone className="h-5 w-5 stroke-2" aria-hidden="true" />
                  Bel direct
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/85">
                <span className="rounded-md border border-white/20 bg-white/10 px-3 py-2">{business.rating} sterren</span>
                <span className="rounded-md border border-white/20 bg-white/10 px-3 py-2">{business.reviewCount}</span>
                <span className="rounded-md border border-white/20 bg-white/10 px-3 py-2">{business.hours}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24" aria-label="Bedrijfsgegevens">
          <div className="section-shell grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map(([stat, label]) => (
              <article
                key={label}
                className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <strong className="block text-4xl font-black leading-none tracking-tight text-navy">{stat}</strong>
                <span className="mt-3 block text-sm font-bold uppercase tracking-wide text-slate-500">{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="booking" className="bg-soft py-24">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>Snel aanvragen</Eyebrow>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-navy">
                Bespreek je stuc- of onderhoudsklus
              </h2>
              <p className="text-slate-600">
                Deel kort wat er moet gebeuren. De Bruin denkt mee over de beste aanpak en plant de klus
                met duidelijke afspraken.
              </p>
            </div>
            <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
              {[
                ["Naam", "Je naam", "text"],
                ["E-mail", "email@voorbeeld.nl", "email"],
                ["Telefoon", "Telefoonnummer", "tel"],
                ["Plaats", "Leiden", "text"]
              ].map(([label, placeholder, type]) => (
                <label key={label}>
                  <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
                  <input
                    className="min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    type={type}
                    placeholder={placeholder}
                  />
                </label>
              ))}
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-slate-700">Bericht</span>
                <textarea
                  className="min-h-32 w-full resize-y rounded-md border border-slate-300 bg-white p-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                  placeholder="Beschrijf kort de muren, plafonds of onderhoudsklus"
                />
              </label>
              <button className={`${buttonClass} w-full md:col-span-2`} type="submit">
                {quoteText}
                <ArrowRight className="h-5 w-5 stroke-2" aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>

        <section id="about" className="bg-white py-24">
          <div className="section-shell grid items-center gap-12 md:grid-cols-2">
            <div className="image-hover-zoom relative aspect-video overflow-hidden rounded-lg shadow-sm">
              <ImageFill
                src={images.wall}
                alt="Gladde wand wordt voorbereid voor afwerking"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div>
              <Eyebrow>Over De Bruin</Eyebrow>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-navy">
                Net werk, duidelijke communicatie en een grondige aanpak
              </h2>
              <p className="text-slate-600">
                Vanuit Leiden helpt De Bruin met stucwerk en onderhoud dat tot in detail klopt. Klanten
                waarderen vooral de professionele werkwijze, het meedenken en de nette oplevering.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Strak en glad afgewerkt", "Afspraken netjes nagekomen", "Schoon achtergelaten", "Meedenken over oplossingen"].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-bold text-navy">
                    <ShieldCheck className="h-5 w-5 stroke-2 text-orange-500" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-soft py-24">
          <div className="section-shell">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>Diensten</Eyebrow>
                <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-navy">
                  Stucwerk en onderhoud met oog voor afwerking
                </h2>
              </div>
              <QuoteButton />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: ServiceIcon, title, copy }) => (
                <article
                  key={title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-orange-500/10 text-orange-500">
                    <ServiceIcon className="h-6 w-6 stroke-2" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-black tracking-tight text-navy">{title}</h3>
                  <p className="mb-0 text-slate-600">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="section-shell grid items-center gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>Waarom kiezen</Eyebrow>
              <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-navy">
                Een vakman die de tijd neemt voor het juiste resultaat
              </h2>
              <div className="image-hover-zoom relative aspect-video overflow-hidden rounded-lg shadow-sm">
                <ImageFill
                  src={images.tools}
                  alt="Gereedschap voor stucwerk en renovatie"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-slate-950/15" />
              </div>
            </div>
            <div className="grid gap-6">
              {[
                [CalendarCheck, "Duidelijke afspraken", "Vanaf het eerste contact weet je wat er gebeurt en wanneer."],
                [Sparkles, "Keurig afgewerkt", "Glad stucwerk en onderhoud worden netjes tot in de puntjes afgerond."],
                [Clock3, "Rustige aanpak", "Er wordt ruim de tijd genomen om mogelijkheden en oplossingen te bespreken."]
              ].map(([ReasonIcon, title, copy]) => (
                <article key={title} className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-orange-500/10 text-orange-500">
                    <ReasonIcon className="h-6 w-6 stroke-2" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-black tracking-tight text-navy">{title}</h3>
                    <p className="mb-0 text-slate-600">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-navy py-24 text-white">
          <div className="section-shell">
            <div className="mb-10 text-center">
              <Eyebrow>Reviews</Eyebrow>
              <h2 className="mx-auto max-w-2xl text-4xl font-black leading-tight tracking-tight">
                Klanten geven De Bruin {business.rating} sterren
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {testimonials.map(({ initials, name, role, quote }) => (
                <article
                  key={name}
                  className="rounded-lg border border-slate-200 bg-white p-6 text-ink shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex gap-1" aria-label="Vijf van vijf sterren">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-orange-500 stroke-2 text-orange-500" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-slate-600">{quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="grid aspect-square h-12 place-items-center rounded-full bg-navy font-black text-white">
                      {initials}
                    </span>
                    <div>
                      <strong>{name}</strong>
                      <small className="block text-slate-500">{role}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-white py-24">
          <div className="section-shell text-center">
            <Eyebrow>Werk</Eyebrow>
            <h2 className="mx-auto max-w-2xl text-4xl font-black leading-tight tracking-tight text-navy">
              Afwerking waar je woning zichtbaar van opknapt
            </h2>
          </div>
          <div className="section-shell mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              [images.finish, "Wanden strak maken", "Stukadoor werkt een binnenwand glad af"],
              [images.renovation, "Renovatie en onderhoud", "Interieur wordt voorbereid voor renovatie"],
              [images.detail, "Net detailwerk", "Afwerking van muur en hoeken tijdens onderhoud"]
            ].map(([src, title, alt]) => (
              <article key={title} className="image-hover-zoom relative aspect-video overflow-hidden rounded-lg shadow-sm">
                <ImageFill src={src} alt={alt} sizes="(min-width: 768px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/75" />
                <h3 className="absolute inset-x-5 bottom-5 text-xl font-black tracking-tight text-white">{title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white">
          <ImageFill src={images.renovation} alt="Renovatiewerk in een woning" sizes="100vw" />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="section-shell relative z-10 grid items-center gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight">
                Vraag vandaag nog een offerte aan
              </h2>
              <p className="text-white/75">
                Bel De Bruin of stuur een bericht voor stucwerk, afwerking en onderhoud in Leiden en omgeving.
              </p>
              <div className="mt-8 grid gap-4 text-white/85">
                <a className="flex items-center gap-3 font-bold hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500" href={business.phoneHref}>
                  <Phone className="h-5 w-5 stroke-2 text-orange-500" aria-hidden="true" />
                  {business.phone}
                </a>
                <a className="flex items-center gap-3 font-bold hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500" href={business.emailHref}>
                  <Mail className="h-5 w-5 stroke-2 text-orange-500" aria-hidden="true" />
                  {business.email}
                </a>
                <span className="flex items-center gap-3 font-bold">
                  <MapPin className="h-5 w-5 stroke-2 text-orange-500" aria-hidden="true" />
                  {business.address}
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 text-ink shadow-lg">
              <h3 className="mb-3 text-2xl font-black tracking-tight text-navy">Direct contact</h3>
              <p className="mb-5 text-slate-600">
                {business.hours}. Bel voor de snelste reactie of stuur een aanvraag voor een offerte.
              </p>
              <div className="grid gap-3">
                <a className={buttonClass} href={business.phoneHref}>
                  <Phone className="h-5 w-5 stroke-2" aria-hidden="true" />
                  Bel {business.phone}
                </a>
                <QuoteButton className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-soft py-24">
          <div className="section-shell mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Aanpak</Eyebrow>
              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-navy">
                Van eerste contact tot schoon opgeleverd werk
              </h2>
            </div>
            <QuoteButton />
          </div>
          <div className="section-shell grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              [images.tools, "Bespreken", "We nemen de mogelijkheden door en kijken wat de ruimte nodig heeft."],
              [images.wall, "Voorbereiden", "Ondergrond, randen en details worden netjes voorbereid voor strak werk."],
              [images.finish, "Opleveren", "Het resultaat wordt glad afgewerkt en de ruimte schoon achtergelaten."]
            ].map(([src, category, title]) => (
              <article
                key={title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video">
                  <ImageFill src={src} alt={title} sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <span className="mb-2 block text-xs font-black uppercase tracking-wide text-orange-500">{category}</span>
                  <h3 className="mb-0 text-xl font-black leading-tight tracking-tight text-navy">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-navy pb-24 pt-20 text-white lg:pb-8">
        <div className="section-shell grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <Brand footer />
            <p className="max-w-sm text-white/70">
              Stukadoors- en onderhoudswerk met een strakke afwerking voor Leiden en omgeving.
            </p>
          </div>
          {[
            ["Links", ["Diensten", "Over ons", "Reviews", "Werk"]],
            ["Diensten", ["Stucwerk", "Sausklaar opleveren", "Onderhoud", "Renovatie"]]
          ].map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h3 className="mb-3 text-lg font-black tracking-tight">{title}</h3>
              {links.map((link) => (
                <a key={link} className="mb-2.5 block text-white/70 transition hover:text-orange-500" href="#services">
                  {link}
                </a>
              ))}
            </nav>
          ))}
          <div>
            <h3 className="mb-3 text-lg font-black tracking-tight">Contact</h3>
            <p className="text-white/70">{business.address}</p>
            <a className="mb-2.5 block text-white/70 transition hover:text-orange-500" href={business.emailHref}>
              {business.email}
            </a>
            <a className="block text-white/70 transition hover:text-orange-500" href={business.phoneHref}>
              {business.phone}
            </a>
          </div>
        </div>
        <div className="section-shell mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          Copyright 2026 {business.name}. Alle rechten voorbehouden.
        </div>
      </footer>

      <a
        className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 lg:hidden"
        href={business.phoneHref}
      >
        <Phone className="h-5 w-5 stroke-2" aria-hidden="true" />
        Bel nu: {business.phone}
      </a>
    </>
  );
}
