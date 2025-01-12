import Image from "next/image";

export const metadata = {
  title: "Restauration - Bytemeuh Zoo",
  description:
    "Découvrez les options de restauration au Bytemeuh Zoo : restaurants, stands et encas pour une pause gourmande en famille ou entre amis.",
};

export default function RestaurationPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Restauration</h1>
        <p className="text-lg text-gray-600">
          Profitez de nos restaurants et stands pour savourer des repas et encas
délicieux. Une pause gourmande pour toute la famille !
        </p>
      </header>

      <section className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/images/restaurant.jpg"
            alt="Espace de restauration au Bytemeuh Zoo"
            width={800}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
        <p className="text-gray-700 text-lg mb-8">
          Nos restaurants vous proposent une sélection variée de plats adaptés à
          tous les goûts. Que vous préfériez un repas chaud, un sandwich rapide
          ou une collation légère, nous avons de quoi satisfaire votre appétit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Restaurant Familial
            </h2>
            <p className="text-gray-600 mb-4">
              Un espace convivial pour déguster des plats préparés avec soin et
              adaptés aux grands et petits appétits.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stands de Snacks
            </h2>
            <p className="text-gray-600 mb-4">
              Des stands pratiques où vous pourrez trouver des encas rapides,
              des glaces et des boissons fraîches.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Options Véganes
            </h2>
            <p className="text-gray-600 mb-4">
              Découvrez nos plats végans savoureux, préparés avec des ingrédients
de qualité pour un repas équilibré et éthique.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Aires de Pique-Nique
            </h2>
            <p className="text-gray-600 mb-4">
              Apportez votre repas et profitez de nos aires de pique-nique ombragées
              pour une pause détente.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
