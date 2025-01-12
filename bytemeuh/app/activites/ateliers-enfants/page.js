import Image from "next/image";

export const metadata = {
    title: "Ateliers pour Enfants - Bytemeuh Zoo",
    description: "Découvrez les ateliers éducatifs pour enfants proposés au Bytemeuh Zoo. Apprendre en s'amusant au contact des animaux !",
  };
  
  export default function AteliersEnfants() {
    return (
      <section className="p-8 text-gray-800 text-center">
        <h1 className="text-3xl font-bold mb-6">Ateliers pour Enfants</h1>
        <p className="mb-8">
          Offrez à vos enfants une expérience ludique et éducative au <strong>Bytemeuh Zoo</strong>. Nos ateliers pour enfants sont spécialement conçus pour éveiller leur curiosité et leur amour de la nature.
        </p>
        <div className="mb-8">
                  <Image
                    src="/images/ateliers-enfants.jpg"
                    alt="Aires de jeux au Bytemeuh Zoo"
                    width={800}
                    height={500}
                    className="rounded-lg mx-auto"
                  />
                </div>
        <p className="mb-8">
          Chaque atelier permet aux enfants d’apprendre tout en s’amusant. Encadrés par nos éducateurs expérimentés, ils découvriront le monde fascinant des animaux à travers des activités interactives, des jeux et des ateliers créatifs.
        </p>
        <div className="mb-8">
            <div>
          <strong>Ce que vos enfants découvriront :</strong>
          </div>
          <ul className="list-disc list-inside mt-4 inline-block text-left">
            <li>La vie des animaux sauvages et leurs habitats.</li>
            <li>Les gestes essentiels pour protéger la biodiversité.</li>
            <li>Des activités manuelles et créatives autour de la nature.</li>
          </ul>
        </div>
        <p className="mb-8">
          Ces ateliers sont adaptés aux enfants de tous âges et se déroulent dans un cadre sécurisé et stimulant. En participant, vos enfants deviendront de véritables petits protecteurs de la faune !
        </p>
        <p>
          <strong>Réservez dès maintenant</strong> une place pour vos enfants dans l’un de nos ateliers et laissez-les vivre une expérience unique au <strong>Bytemeuh Zoo</strong>. Un souvenir inoubliable les attend !
        </p>
      </section>
    );
  }
  