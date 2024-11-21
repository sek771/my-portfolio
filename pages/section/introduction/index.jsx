const Introduction = () => {
  return (
    <>
      <title>Mon Portfolio</title>
      <meta name="description" content="Bienvenue sur mon portfolio !" />

      <main className="h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 px-6">
        {/* Titre Principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight animate-fade-in">
          Bonjour, je suis <span className="text-red-500">[Votre Nom]</span>.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl animate-fade-in delay-1s">
          Développeur web passionné, créant des expériences numériques modernes
          et élégantes.
        </p>

        {/* Bouton d'Appel à l'Action */}
        <div className="animate-fade-in delay-2s">
          <a
            href="#projects"
            className="bg-red-500 text-black px-6 py-3 text-lg rounded-full shadow-md hover:bg-red-600 transition"
          >
            Voir mes projets
          </a>
        </div>
      </main>
    </>
  );
};
export default Introduction;
