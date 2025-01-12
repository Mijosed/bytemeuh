import Image from "next/image";
export const metadata = {
  title: "Rencontrez nos Animaux - Bytemeuh Zoo",
  description: "Plongez dans une expérience unique avec nos animaux stars au Bytemeuh Zoo. Découvrez des espèces fascinantes et apprenez tout sur leur habitat et leur mode de vie.",
};

export default function RencontreAnimaux() {
  return (
    <section className="p-8 text-gray-800 text-center">
      <h1 className="text-3xl font-bold mb-6">Rencontrez nos Animaux</h1>
      <p className="mb-8">
        Vivez une expérience inoubliable en interagissant avec nos animaux stars au <strong>Bytemeuh Zoo</strong>. Des créatures majestueuses comme le tigre de Sibérie, le panda géant et bien d'autres vous attendent pour des moments magiques.
      </p>
      <div className="mb-8">
                <Image
                  src="/images/rencontre-animaux.jpg"
                  alt="Rencontre d'animaux au Bytemeuh Zoo"
                  width={800}
                  height={500}
                  className="rounded-lg mx-auto"
                />
              </div>
      <p className="mb-8">
        Au <strong>Bytemeuh Zoo</strong>, chaque animal a une histoire à raconter. Apprenez-en plus sur leur habitat naturel, leurs habitudes alimentaires et les efforts de conservation mis en place pour leur protection. Nos soigneurs passionnés partageront avec vous des anecdotes uniques sur nos résidents.
      </p>
      <div className="mb-8">
        <div>
        <strong>Les points forts de l’expérience :</strong>
        </div>
        <ul className="list-disc list-inside mt-4 inline-block text-left">
          <li>Approchez de près des espèces rares et menacées.</li>
          <li>Participez à des séances interactives avec nos soigneurs.</li>
          <li>Des explications éducatives et captivantes pour toute la famille.</li>
        </ul>
      </div>
      <p className="mb-8">
        Ne manquez pas l’occasion de rencontrer nos animaux stars et de découvrir leur univers fascinant. Que vous soyez passionné par les grands félins, les oiseaux exotiques ou les mammifères marins, le <strong>Bytemeuh Zoo</strong> promet une expérience unique pour petits et grands.
      </p>
      <p>
        <strong>Planifiez votre visite</strong> dès aujourd’hui et rejoignez-nous au <strong>Bytemeuh Zoo</strong> pour une journée inoubliable au contact de la nature et de ses merveilles.
      </p>
    </section>
  );
}
