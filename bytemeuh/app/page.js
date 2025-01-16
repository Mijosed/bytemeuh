import Link from "next/link";
import Image from "next/image"; 

export const metadata = {
  title: "Bytemeuh Zoo - Découvrez le Monde des Animaux",
  description:
    "Bytemeuh Zoo est votre destination incontournable pour explorer la faune et passer un moment inoubliable en famille. Découvrez nos animaux, activités et événements spéciaux.",
  keywords: "Bytemeuh, Bytemeuh Zoo, zoo, animaux, faune, nature, visites guidées, activités",
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
        url: "https://www.bytemeuh-zoo.fr/images/logo.jpg", 
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
    images: ["https://www.bytemeuh-zoo.fr/images/logo.jpg"], 
  },
};

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-gray-100 p-8">
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenue au Bytemeuh Zoo
        </h1>
        <p className="text-lg text-gray-600">
          Explorez la biodiversité et vivez une expérience unique au contact des animaux et de la nature.
        </p>
        <Image
          src="/images/zoo.jpg"
          alt="Bienvenue au Bytemeuh Zoo"
          width={600}
          height={500}
          className="rounded-lg mt-6 mx-auto"
        />
      </header>

      
      <section className="my-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Pourquoi Visiter le Bytemeuh Zoo ?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Découvrez des animaux fascinants, des activités éducatives et un environnement naturel préservé pour toute la famille.
        </p>
        <Link
          href="/activites/visites-guidees"
          className="text-blue-500 hover:underline font-medium"
        >
          En savoir plus sur nos visites guidées
        </Link>
      </section>

      
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Nos Activités et Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rencontre avec les Animaux</h3>
            <p className="text-gray-600 mb-4">
              Approchez de près nos animaux stars et apprenez-en plus sur leur mode de vie.
            </p>
            <Link href="/activites/rencontre-animaux" className="text-blue-500 hover:underline font-medium">
              En savoir plus
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visites Guidées</h3>
            <p className="text-gray-600 mb-4">
              Explorez le zoo avec un guide expert pour une expérience enrichissante.
            </p>
            <Link href="/activites/visites-guidees" className="text-blue-500 hover:underline font-medium">
              En savoir plus
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Aires de Jeux</h3>
            <p className="text-gray-600 mb-4">
              Un espace sécurisé pour que vos enfants puissent s’amuser en toute tranquillité.
            </p>
            <Link href="/services/aires-de-jeux" className="text-blue-500 hover:underline font-medium">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Nos Dernières Actualités</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Restez informé des événements, naissances et activités spéciales du Bytemeuh Zoo.
        </p>
        <Link href="/actualites" className="text-blue-500 hover:underline font-medium">
          Voir toutes les actualités
        </Link>
      </section>
    </main>
    </>
  );
}
