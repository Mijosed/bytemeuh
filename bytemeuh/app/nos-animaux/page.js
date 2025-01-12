import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Nos Animaux - Bytemeuh Zoo",
    description:
        "Explorez la faune fascinante du Bytemeuh Zoo. Découvrez nos animaux stars et apprenez-en plus sur leur habitat et leur mode de vie.",
};

const animals = [
    {
        name: "Tigre de Sibérie",
        description: "Un prédateur majestueux originaire des forêts enneigées de Sibérie.",
        image: "/images/tigre.jpg",
    },
    {
        name: "Panda Géant",
        description: "L'icône de la conservation, connu pour son amour du bambou.",
        image: "/images/panda.jpg",
    },
    {
        name: "Éléphant d'Afrique",
        description: "Le plus grand mammifère terrestre au monde, symbole de sagesse.",
        image: "/images/elephant.jpg",
    },
    {
        name: "Flamant Rose",
        description: "Un oiseau élégant célèbre pour sa couleur vibrante et ses longues pattes.",
        image: "/images/flamant.jpg",
    },
    {
        name: "Lion",
        description: "Le roi de la savane, un prédateur puissant et charismatique.",
        image: "/images/lion.jpg",
    },
    {
        name: "Gorille",
        description: "Un grand singe intelligent et social, proche cousin de l'homme.",
        image: "/images/gorille.jpg",
    },
];

export default function NosAnimaux() {
    return (
        <main className="min-h-screen bg-gray-100 p-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Nos Animaux</h1>
                <p className="text-lg text-gray-600">
                    Plongez dans la diversité de la faune du Bytemeuh Zoo. Découvrez nos résidents stars et apprenez-en plus sur leur habitat et leur mode de vie.
                </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {animals.map((animal, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="relative w-full h-64 mb-4">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {animal.name}
                        </h2>
                        <p className="text-gray-600 mb-4">{animal.description}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}