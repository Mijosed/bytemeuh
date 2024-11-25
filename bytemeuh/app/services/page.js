import Link from "next/link";

export const metadata = {
  title: "Services - Bytemeuh Zoo",
  description: "Découvrez les services offerts par le Bytemeuh Zoo pour améliorer votre expérience.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {/* Titre */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nos Services</h1>
        <p className="text-lg text-gray-600">
          Découvrez les services que nous offrons pour rendre votre visite au
          Bytemeuh Zoo inoubliable.
        </p>
      </header>

      {/* Liste des Services */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Restauration
          </h2>
          <p className="text-gray-600 mb-4">
            Profitez de nos restaurants et stands pour savourer des repas et
            encas délicieux.
          </p>
          <Link
            href="/services/restauration"
            className="text-blue-500 hover:underline font-medium"
          >
            En savoir plus
          </Link>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Boutique de souvenirs
          </h2>
          <p className="text-gray-600 mb-4">
            Repartez avec un souvenir unique pour immortaliser votre expérience
            au zoo.
          </p>
          <Link
            href="/services/boutique"
            className="text-blue-500 hover:underline font-medium"
          >
            En savoir plus
          </Link>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Aires de jeux
          </h2>
          <p className="text-gray-600 mb-4">
            Laissez vos enfants s'amuser dans nos aires de jeux sécurisées et
            amusantes.
          </p>
          <Link
            href="/services/aires-de-jeux"
            className="text-blue-500 hover:underline font-medium"
          >
            En savoir plus
          </Link>
        </div>
      </section>
    </main>
  );
}
