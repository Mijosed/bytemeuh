import Link from "next/link";

export const metadata = {
  title: "Bytemeuh Zoo - Découvrez le Monde des Animaux",
  description:
    "Bytemeuh Zoo est votre destination incontournable pour explorer la faune et passer un moment inoubliable en famille. Découvrez nos animaux, activités et événements spéciaux.",
  keywords: "Bytemeuh, Bytemeuh Zoo,zoo, animaux, faune, nature, visites guidées, activités",
  alternates: {
    canonical: "https://www.bytemeuh-zoo.fr/",
  },
  openGraph: {
    title: "Bytemeuh Zoo - Découvrez le Monde des Animaux",
    description:
      "Plongez dans l'univers du Bytemeuh Zoo, une expérience unique pour petits et grands. Rencontrez nos animaux, participez à des activités éducatives et bien plus.",
    url: "https://www.bytemeuh-zoo.fr/",
    siteName: "Bytemeuh Zoo",
    images: [
      {
        url: "https://www.bytemeuh-zoo.fr/images/logo.jpg", // Remplacez par votre image
        width: 1200,
        height: 630,
        alt: "Bienvenue au Bytemeuh Zoo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytemeuh Zoo - Découvrez le Monde des Animaux",
    description:
      "Découvrez Bytemeuh Zoo, un lieu magique où la faune, les activités et la famille se rencontrent pour une expérience inoubliable.",
    images: ["https://www.bytemeuh-zoo.fr/images/logo.jpg"], // Remplacez par votre image
  },
};


export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-16 text-center text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Bienvenue au Bytemeuh Zoo
        </h1>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
          Partez à la découverte de la biodiversité et des merveilles animales
          dans notre zoo unique en son genre.
        </p>
      </header>

      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-6">Pourquoi Visiter Bytemeuh Zoo ?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Bytemeuh Zoo vous offre une expérience immersive avec des animaux du
          monde entier. Venez explorer, apprendre et vous émerveiller avec nous.
        </p>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-6">Nos Activités et Services</h2>
        <ul className="max-w-2xl mx-auto text-left list-disc list-inside">
          <li className="mb-4">
            <Link
              href="/activites/rencontre-animaux"
              className="text-blue-500 hover:underline"
            >
              Rencontrez nos animaux stars
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/activites/visites-guidees"
              className="text-blue-500 hover:underline"
            >
              Visites guidées éducatives
            </Link>
          </li>
          <li className="mb-4">
            Aires de jeux et espaces de pique-nique pour toute la famille
          </li>
          <li className="mb-4">Événements spéciaux et ateliers pour enfants</li>
        </ul>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-6">Nos Dernières Actualités</h2>
        <p className="max-w-2xl mx-auto">
          Ne manquez pas nos dernières nouvelles et événements, comme la
          naissance de nouveaux habitants ou des journées spéciales !
        </p>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Bytemeuh Zoo. Tous droits réservés.
      </footer>
    </main>
  );
}
