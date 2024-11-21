export default function ContactForm() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contactez-moi
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form action="#" method="POST">
            {/* Nom */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Votre nom"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Votre email"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Votre message"
                required
              ></textarea>
            </div>

            {/* Bouton d'envoi */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 text-black px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
