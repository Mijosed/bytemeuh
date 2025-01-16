import Link from "next/link";

export const metadata = {
  title: "Activités - Bytemeuh Zoo",
  description:
    "Découvrez les activités passionnantes disponibles au Bytemeuh Zoo. Rencontrez nos animaux et participez à des visites guidées éducatives.",
};

export default function ActivitesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nos Activités</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Plongez dans le monde fascinant de la faune avec nos activités uniques. 
          Rencontrez des animaux emblématiques ou participez à des visites guidées éducatives, 
          il y en a pour tous les goûts !
        </p>
      </header>

      
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Rencontre Animaux
          </h2>
          <p className="text-gray-600 mb-4">
            Vivez une expérience inoubliable en interagissant avec nos animaux stars.
          </p>
          <Link
            href="/activites/rencontre-animaux"
            className="text-blue-500 hover:underline font-medium"
          >
            Découvrir plus
          </Link>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Visites Guidées
          </h2>
          <p className="text-gray-600 mb-4">
            Découvrez les secrets de la faune grâce à nos visites guidées éducatives
            animées par des experts.
          </p>
          <Link
            href="/activites/visites-guidees"
            className="text-blue-500 hover:underline font-medium"
          >
            Découvrir plus
          </Link>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ateliers pour Enfants
          </h2>
          <p className="text-gray-600 mb-4">
            Offrez à vos enfants une expérience éducative et ludique au sein de notre zoo.
          </p>
          <Link
            href="/activites/ateliers-enfants"
            className="text-blue-500 hover:underline font-medium"
          >
            Découvrir plus
          </Link>
        </div>
      </section>
    </main>
  );
}
