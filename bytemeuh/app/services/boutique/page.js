import Image from "next/image";

export const metadata = {
  title: "Boutique de Souvenirs - Bytemeuh Zoo",
  description:
    "Découvrez notre boutique de souvenirs au Bytemeuh Zoo : repartez avec des articles uniques pour immortaliser votre visite.",
};

export default function BoutiqueSouvenirsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Boutique de Souvenirs</h1>
        <p className="text-lg text-gray-600">
          Repartez avec un souvenir unique pour immortaliser votre expérience au zoo.
        </p>
      </header>

      <section className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/images/boutique.jpg"
            alt="Boutique de souvenirs au Bytemeuh Zoo"
            width={800}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
        <p className="text-gray-700 text-lg mb-8">
          Notre boutique propose une large gamme de produits pour tous les âges : peluches, t-shirts, mugs, accessoires, et bien plus encore. Chaque article est soigneusement sélectionné pour capturer l'esprit du Bytemeuh Zoo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Peluches</h2>
            <p className="text-gray-600 mb-4">
              Adoptez une peluche à l'effigie de vos animaux préférés du zoo.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vêtements</h2>
            <p className="text-gray-600 mb-4">
              T-shirts, casquettes et écharpes aux couleurs du Bytemeuh Zoo.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessoires</h2>
            <p className="text-gray-600 mb-4">
              Trouvez des mugs, porte-clés, et autres articles pratiques et souvenirs.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Produits Éco-responsables</h2>
            <p className="text-gray-600 mb-4">
              Optez pour nos produits respectueux de l'environnement, parfaits pour un souvenir durable.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cartes Postales</h2>
            <p className="text-gray-600 mb-4">
              Envoyez des cartes postales illustrant les moments forts de votre visite.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Jouets pour Enfants</h2>
            <p className="text-gray-600 mb-4">
              Des jeux et jouets éducatifs pour prolonger l'expérience du zoo à la maison.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
