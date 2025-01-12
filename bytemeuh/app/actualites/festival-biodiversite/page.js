export const metadata = {
    title: "Festival de la Biodiversité - Bytemeuh Zoo",
    description:
      "Participez au festival annuel du Bytemeuh Zoo dédié à la préservation de la faune et de la flore. Découvrez des activités éducatives, des ateliers et bien plus encore.",
  };
  
  export default function FestivalBiodiversitePage() {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Festival de la Biodiversité
          </h1>
          <p className="text-lg text-gray-600">
            Participez à notre festival annuel dédié à la préservation de la faune et de la flore.
          </p>
        </header>
  
        <section className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/images/festival-biodiversite.jpg"
              alt="Festival de la Biodiversité au Bytemeuh Zoo"
              className="rounded-lg mx-auto"
            />
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Le Festival de la Biodiversité est une célébration annuelle qui met en lumière l'importance de protéger la nature et ses écosystèmes. Rejoignez-nous pour découvrir des ateliers éducatifs, des conférences inspirantes et des activités interactives adaptées à toute la famille.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ateliers Pratiques</h2>
              <p className="text-gray-600 mb-4">
                Participez à des ateliers interactifs pour en apprendre davantage sur la biodiversité et les gestes pour la préserver.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rencontres avec les Experts</h2>
              <p className="text-gray-600 mb-4">
                Discutez avec des spécialistes de la faune et de la flore pour mieux comprendre les défis environnementaux.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activités pour Enfants</h2>
              <p className="text-gray-600 mb-4">
                Des jeux éducatifs et divertissants pour sensibiliser les plus jeunes à l’importance de la nature.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expositions</h2>
              <p className="text-gray-600 mb-4">
                Explorez des expositions sur les espèces menacées et les initiatives locales de conservation.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conférences</h2>
              <p className="text-gray-600 mb-4">
                Assistez à des conférences animées par des experts et des défenseurs de l'environnement.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Marché Local</h2>
              <p className="text-gray-600 mb-4">
                Découvrez des produits artisanaux et locaux qui soutiennent une économie respectueuse de l'environnement.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  