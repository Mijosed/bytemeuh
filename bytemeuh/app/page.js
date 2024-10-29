export const metadata = {
  title: 'Bytemeuh - Le Réseau d\'Information sur [Domaine]',
  description: 'Bytemeuh propose des services et des informations de qualité sur [domaine ou secteur]. Découvrez nos ressources et guides complets.',
  keywords: 'Bytemeuh, [mot clé secondaire], informations [secteur]',
  alternates: {
    canonical: 'https://bytemeuh.vercel.app',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-16 text-center text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Bienvenue sur Bytemeuh</h1>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
          Découvrez les meilleures ressources, guides et conseils dans le domaine de [secteur] avec Bytemeuh.
        </p>
      </header>

      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-6">Pourquoi Choisir Bytemeuh ?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Bytemeuh est votre source fiable pour des informations de qualité sur [secteur]. Notre mission est de fournir un contenu précis et
          utile pour aider nos utilisateurs à faire des choix éclairés.
        </p>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-6">Nos Services</h2>
        <ul className="max-w-2xl mx-auto text-left list-disc list-inside">
          <li className="mb-4">Guides et articles approfondis sur [sujet 1]</li>
          <li className="mb-4">Conseils et astuces pour [sujet 2]</li>
          <li className="mb-4">Actualités et tendances dans [secteur]</li>
        </ul>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-6">Nos Derniers Articles</h2>
        <p className="max-w-2xl mx-auto">
          Explorez nos articles récents pour rester informé des dernières tendances et informations sur [secteur].
        </p>
        {/* Ajouter ici un composant pour lister les derniers articles */}
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Bytemeuh. Tous droits réservés.
      </footer>
    </main>
  );
}
