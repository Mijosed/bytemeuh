import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Actualités - Bytemeuh Zoo",
  description: "Restez informé sur les derniers événements, nouveautés et activités spéciales au Bytemeuh Zoo.",
};

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dernières Actualités</h1>
        <p className="text-lg text-gray-600">
          Restez informé sur les événements, nouveautés et activités spéciales du Bytemeuh Zoo.
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Nouveau Pensionnaire
          </h2>
          <p className="text-gray-600 mb-4">
            Découvrez notre nouveau pensionnaire, un adorable paresseux à trois doigts !
          </p>
          <Link
            href="/actualites/nouveau-pensionnaire"
            className="text-blue-500 hover:underline font-medium"
          >
            Lire la suite
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Festival de la Biodiversité
          </h2>
          <p className="text-gray-600 mb-4">
            Participez à notre festival annuel dédié à la préservation de la faune et de la flore.
          </p>
          <Link
            href="/actualites/festival-biodiversite"
            className="text-blue-500 hover:underline font-medium"
          >
            Lire la suite
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Naissance au Zoo
          </h2>
          <p className="text-gray-600 mb-4">
            Venez rencontrer notre nouveau-né, un bébé girafe plein de vie et d’énergie !
          </p>
          <Link
            href="/actualites/naissance-zoo"
            className="text-blue-500 hover:underline font-medium"
          >
            Lire la suite
          </Link>
        </div>
      </section>
    </main>
  );
}
