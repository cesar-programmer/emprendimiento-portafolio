import React from 'react';
import { ExternalLink, FileText, Lock } from "lucide-react";

export function Section({ id, title, description, links, reflection, isActive }) {
  return (
    <section id={id} className={`scroll-mt-16 ${isActive ? "" : "opacity-60"}`}>
      {/* Card reemplazado con div + Tailwind */}
      <div className="overflow-hidden border-2 border-gray-200 shadow-lg rounded-lg">
        {/* CardHeader reemplazado */}
        <div className={`${isActive ? "bg-green-700" : "bg-gray-500"} text-white p-6`}>
          {/* CardTitle reemplazado */}
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {/* CardDescription reemplazado */}
          <p className="text-green-100 mt-1">{description}</p>
        </div>
        
        {/* CardContent reemplazado */}
        <div className="p-6">
          {isActive ? (
            <>
              <h3 className="text-lg font-semibold mb-4">Evidencias</h3>
              {links && links.length > 0 ? (
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index} className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-green-700" />
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:text-green-900 hover:underline flex items-center"
                      >
                        {link.title}
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No hay evidencias disponibles en esta sección.</p>
              )}

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Reflexión Personal</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">{reflection}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <Lock className="h-12 w-12 text-gray-400 mb-3" />
              <p className="text-gray-500 text-center">Esta sección estará disponible próximamente</p>
              {/* Button reemplazado */}
              <button 
                disabled
                className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ver contenido
              </button>
            </div>
          )}
        </div>
        
        {/* CardFooter reemplazado */}
        {isActive && (
          <div className="bg-gray-50 border-t px-6 py-4">
            <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </section>
  );
}