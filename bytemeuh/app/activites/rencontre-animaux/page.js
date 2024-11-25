
export const metadata = {
  title: "Rencontrez nos Animaux - Bytemeuh Zoo",
  description: "Plongez dans une expérience unique avec nos animaux stars au Bytemeuh Zoo.",
};

export default function RencontreAnimaux() {
  return (
      <section className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Rencontrez nos Animaux</h1>
        <p className="mb-8">
          Vivez une expérience inoubliable en interagissant avec nos animaux
          stars, comme le majestueux tigre de Sibérie et le panda géant.
        </p>
        <div className="flex justify-center gap-8">
          <div>
            <p className="mt-2">Tigre de Sibérie</p>
          </div>
          <div>
            <p className="mt-2">Panda Géant</p>
          </div>
        </div>
      </section>
  );
}
