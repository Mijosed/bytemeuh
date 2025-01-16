import Image from "next/image";
export const metadata = {
    title: "Naissance au Zoo - Bytemeuh Zoo",
    description:
      "Découvrez notre nouveau-né au Bytemeuh Zoo, un bébé girafe plein de vie et d'énergie. Venez le rencontrer et vivre un moment unique !",
  };
  
  export default function NaissanceAuZooPage() {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Naissance au Zoo</h1>
          <p className="text-lg text-gray-600">
            Venez rencontrer notre nouveau-né, un bébé girafe plein de vie et d’énergie !
          </p>
        </header>
  
        <section className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
          src="/images/bebe-girafe.jpg"
          alt="Bébé girafe au Bytemeuh Zoo"
          className="rounded-lg mx-auto"
          width={600}
          height={400}
        />

          </div>
          <p className="text-gray-700 text-lg mb-8">
            Le Bytemeuh Zoo est fier d'annoncer la naissance d'un adorable bébé girafe ! Ce petit joyau est en parfaite santé et déborde d'énergie. C'est une opportunité unique pour les visiteurs de voir un nouveau-né évoluer dans un environnement sécurisé et naturel.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Moments Précieux</h2>
              <p className="text-gray-600 mb-4">
                Observez le bébé girafe interagir avec sa mère et découvrir son environnement.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Éducation pour Tous</h2>
              <p className="text-gray-600 mb-4">
                Apprenez-en davantage sur les girafes, leur habitat naturel, et les efforts de conservation.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activités Spéciales</h2>
              <p className="text-gray-600 mb-4">
                Participez à nos ateliers et activités spéciales dédiés aux girafes et à leur mode de vie.
              </p>
            </div>
          </div>
  
          <p className="text-gray-700 text-lg mt-8">
            Ne manquez pas cette occasion exceptionnelle de voir un nouveau-né grandir au Bytemeuh Zoo. Venez partager ce moment magique avec nous !
          </p>
        </section>
      </main>
    );
  }
  