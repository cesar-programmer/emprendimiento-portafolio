export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Portafolio Académico - Universidad Autónoma de Baja California
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              UABC
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

