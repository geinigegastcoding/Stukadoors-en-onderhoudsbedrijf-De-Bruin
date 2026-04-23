import "./globals.css";

export const metadata = {
  title: "Stukadoors en onderhoudsbedrijf De Bruin | Leiden",
  description:
    "Stukadoors en onderhoudsbedrijf De Bruin in Leiden voor strak stucwerk, onderhoud, renovatie en duidelijke afspraken."
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
