export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 flex flex-col items-center justify-between md:flex-row">
        {/* Section gauche : Texte */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
          </p>
        </div>

        {/* Section centrale : Liens */}
        <div className="mb-6 md:mb-0 text-center">
          <a href="#about" className="text-gray-400 hover:text-red-500 px-4">
            À propos
          </a>
          <a href="#projects" className="text-gray-400 hover:text-red-500 px-4">
            Projets
          </a>
          <a href="#contact" className="text-gray-400 hover:text-red-500 px-4">
            Contact
          </a>
        </div>

        {/* Section droite : Réseaux sociaux */}
        <div className="flex space-x-6 justify-center">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
