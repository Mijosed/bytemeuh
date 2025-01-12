import Image from "next/image";

export const metadata = {
  title: "Aires de Jeux - Bytemeuh Zoo",
  description:
    "Découvrez les aires de jeux sécurisées et amusantes du Bytemeuh Zoo, idéales pour divertir vos enfants pendant votre visite.",
};

export default function AiresDeJeuxPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Aires de Jeux</h1>
        <p className="text-lg text-gray-600">
          Laissez vos enfants s'amuser dans nos aires de jeux sécurisées et amusantes.
        </p>
      </header>

      <section className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/images/aires-de-jeux.jpg"
            alt="Aires de jeux au Bytemeuh Zoo"
            width={800}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
        <p className="text-gray-700 text-lg mb-8">
          Nos aires de jeux offrent un environnement sûr et divertissant pour les enfants de tous âges. Elles sont conçues pour stimuler leur imagination et leur permettre de se dépenser tout en profitant de la nature environnante.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Jeux d'Escalade</h2>
            <p className="text-gray-600 mb-4">
              Grimpez, rampez et explorez nos structures d'escalade adaptées aux jeunes aventuriers.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Toboggans Géants</h2>
            <p className="text-gray-600 mb-4">
              Des toboggans amusants et sécurisés pour des descentes pleines de rires.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Aires de Sable</h2>
            <p className="text-gray-600 mb-4">
              Construisez des châteaux de sable et laissez libre cours à votre créativité.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zones Ombragées</h2>
            <p className="text-gray-600 mb-4">
              Profitez de nos espaces ombragés pour des moments de repos bien mérités.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Balançoires</h2>
            <p className="text-gray-600 mb-4">
              Des balançoires classiques et modernes pour des instants de pur plaisir.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Jeux Interactifs</h2>
            <p className="text-gray-600 mb-4">
              Découvrez des jeux éducatifs qui combinent amusement et apprentissage.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
