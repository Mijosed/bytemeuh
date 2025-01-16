import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Contact - Bytemeuh Zoo",
  description:
    "Contactez l'équipe du Bytemeuh Zoo pour toute question ou demande d'information. Nous sommes là pour vous aider !",
  keywords: "Bytemeuh, Bytemeuh Zoo, contact, formulaire, zoo, animaux",
  alternates: {
    canonical: "https://www.bytemeuh-zoo.fr/contact",
  },
  openGraph: {
    title: "Bytemeuh Zoo - Contactez-nous",
    description:
      "Besoin d'aide ou d'informations ? Contactez l'équipe du Bytemeuh Zoo pour obtenir de l'aide et des réponses à vos questions.",
    url: "https://www.bytemeuh-zoo.fr/contact",
    siteName: "Bytemeuh Zoo",
    images: [
      {
        url: "https://www.bytemeuh-zoo.fr/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contactez-nous",
      },
    ],
    locale: "fr_FR",
    type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Bytemeuh Zoo - Contactez-nous",
        description:  "Besoin d'aide ou d'informations ? Contactez l'équipe du Bytemeuh Zoo pour obtenir de l'aide et des réponses à vos questions.",
        images: ["https://www.bytemeuh-zoo.fr/images/logo.jpg"],
        },
        };  

export default function Contact() {
    return (
        <main className="min-h-screen p-8 sm:p-16 text-center text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
        <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
            Besoin d'aide ou d'informations ? Contactez l'équipe du Bytemeuh Zoo
            pour obtenir de l'aide et des réponses à vos questions.
            </p>
            <Image
            src="/images/logo.jpg"
            alt="Contactez-nous"
            width={200}
            height={400}
            className="rounded-lg mt-8 mx-auto"
            />
        </header>
    
        <section className="my-16">
            <h2 className="text-3xl font-semibold mb-6">Formulaire de Contact</h2>
            <form className="max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-1/2 px-2 mb-4">
                <label htmlFor="nom" className="block mb-2">
                    Nom
                </label>
                <input
                    type="text"
                    id="nom"
                    name="nom"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                </div>
                <div className="w-1/2 px-2 mb-4">
                <label htmlFor="prenom" className="block mb-2">
                    Prénom
                </label>
                <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                </div>
            </div>
    
            <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full px-2 mb-4">
                <label htmlFor="email" className="block mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                </div>
            </div>
    
            <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full p-2 border border-gray-300 rounded"
                required
                ></textarea>
            </div>
            
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Envoyer
            </button>
            </form>
        </section>

        </main>
    );
}