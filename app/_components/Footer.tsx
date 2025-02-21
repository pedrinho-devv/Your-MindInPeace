import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Coluna 1: Informações do site */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Mind In Peace</h3>
            <p className="text-sm">
              O espaço perfeito para cuidar da sua mente e fortalecer o bem-estar
              emocional. Nossos serviços incluem terapia individual, de casal e
              aconselhamento familiar.
            </p>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="text-sm">
              <li><a href="#home" className="hover:text-blue-400">Início</a></li>
              <li><a href="#services" className="hover:text-blue-400">Serviços</a></li>
              <li><a href="#about" className="hover:text-blue-400">Sobre nós</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Redes sociais */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pedrinho.dev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
