import Image
 from "next/image";
export const metadata = {
    title: "Nouveau Pensionnaire - Bytemeuh Zoo",
    description:
      "Découvrez notre nouveau pensionnaire au Bytemeuh Zoo : un adorable paresseux à trois doigts ! Venez le rencontrer et en apprendre davantage sur cet animal fascinant.",
  };
  
  export default function NouveauPensionnairePage() {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nouveau Pensionnaire</h1>
          <p className="text-lg text-gray-600">
            Découvrez notre nouveau pensionnaire, un adorable paresseux à trois doigts !
          </p>
        </header>
  
        <section className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
          <Image
            src="/images/paresseux.jpg"
            alt="Paresseux à trois doigts au Bytemeuh Zoo"
            width={600}
            height={400}
            className="rounded-lg mx-auto"
          />
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Nous sommes ravis d'accueillir un nouveau résident au Bytemeuh Zoo : un paresseux à trois doigts. Cet animal captivant est connu pour son mode de vie paisible et ses mouvements lents qui émerveillent petits et grands.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Habitat Naturel</h2>
              <p className="text-gray-600 mb-4">
                Apprenez-en davantage sur l'environnement naturel des paresseux et leur adaptation unique aux forêts tropicales.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comportement Fascinant</h2>
              <p className="text-gray-600 mb-4">
                Découvrez pourquoi les paresseux sont parmi les animaux les plus fascinants avec leur style de vie unique.
              </p>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Efforts de Conservation</h2>
              <p className="text-gray-600 mb-4">
                Explorez les initiatives mises en place pour protéger les paresseux et leur habitat fragile.
              </p>
            </div>
          </div>
  
          <p className="text-gray-700 text-lg mt-8">
            Venez rencontrer notre nouveau pensionnaire et découvrez ce qui rend cet animal si spécial. Une expérience inoubliable vous attend au Bytemeuh Zoo !
          </p>
        </section>
      </main>
    );
  }
  