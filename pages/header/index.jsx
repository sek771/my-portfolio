const Header = () => {
  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#" className="hover:text-gray-400">
              MonPortfolio
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-gray-400">
              À propos
            </a>
            <a href="#skills" className="hover:text-gray-400">
              Compétences
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projets
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>

          {/* Bouton Mobile */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
