export default function Projects() {
  const projects = [
    {
      title: "Portfolio React",
      description:
        "Un portfolio interactif construit avec React et Tailwind CSS.",
      image: "/project1.jpg", // Ajoutez une image dans le dossier public/
      link: "#",
    },
    {
      title: "E-commerce Next.js",
      description:
        "Une application de commerce électronique rapide et moderne avec Next.js.",
      image: "/project2.jpg",
      link: "#",
    },
    {
      title: "Application de Gestion",
      description:
        "Une application pour gérer les tâches quotidiennes, construite avec Node.js.",
      image: "/project3.jpg",
      link: "#",
    },
    {
      title: "Blog avec Markdown",
      description: "Un blog simple utilisant Next.js et du contenu Markdown.",
      image: "/project4.jpg",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
