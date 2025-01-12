import Image from "next/image";
export const metadata = {
  title: "Visites Guidées - Bytemeuh Zoo",
  description: "Explorez les visites guidées du Bytemeuh Zoo et apprenez tout sur les animaux et la conservation de la faune sauvage.",
};

export default function VisitesGuidees() {
  return (
    <section className="p-8 text-gray-800 text-center">
      <h1 className="text-3xl font-bold mb-6">Visites Guidées au Bytemeuh Zoo</h1>
      <p className="mb-8">
        Plongez au cœur de la faune sauvage avec les visites guidées exclusives du <strong>Bytemeuh Zoo</strong>. Nos experts passionnés vous accompagnent pour vous faire découvrir les secrets de la nature, les comportements des animaux et les efforts de conservation.
      </p>
      <div className="mb-8">
                <Image
                  src="/images/visites-guidees.jpg"
                  alt="Visites guidées au Bytemeuh Zoo"
                  width={800}
                  height={500}
                  className="rounded-lg mx-auto"
                />
              </div>
      <p className="mb-8">
        Chaque visite est une aventure éducative conçue pour tous les âges. Apprenez comment nous prenons soin des espèces menacées et participez à notre mission de préserver la biodiversité. Que vous soyez amateur d'animaux ou curieux de la nature, une visite guidée au Bytemeuh Zoo est une expérience inoubliable.
      </p>
      <div className="mb-8">
        <strong>Pourquoi choisir les visites guidées Bytemeuh ?</strong>
        <ul className="list-disc list-inside mt-4">
          <li>Interactions uniques avec nos soigneurs et experts.</li>
          <li>Informations fascinantes sur nos animaux résidents.</li>
          <li>Une approche ludique et éducative pour toute la famille.</li>
        </ul>
      </div>
      <p>
        Réservez votre visite guidée aujourd'hui et rejoignez-nous pour une expérience exceptionnelle au <strong>Bytemeuh Zoo</strong>. Ensemble, explorons, apprenons et protégeons la faune !
      </p>
    </section>
  );
}
