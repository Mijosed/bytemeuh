export const metadata = {
  title: "Visites Guidées - Bytemeuh Zoo",
  description: "Participez à des visites guidées éducatives pour en apprendre plus sur la faune.",
};

export default function VisitesGuidees() {
  return (
      <section className="p-8 text-gray-800 text-center">
        <h1 className="text-3xl font-bold mb-6">Visites Guidées</h1>
        <p className="mb-8">
          Découvrez les secrets de la faune et de la conservation grâce à nos
          visites guidées éducatives animées par des experts.
        </p>
        <div className="flex justify-center gap-8">
          <div>
            <p className="mt-2">Tour Guidé</p>
          </div>
          <div>
            <p className="mt-2">Ateliers Éducatifs</p>
          </div>
        </div>
      </section>
  );
}
