import React from 'react';
import { GraduationCap } from "lucide-react";

export function Header({ studentName, studentId, courseName, teacherName }) {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <GraduationCap className="h-10 w-10 mr-3" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Portafolio Académico</h1>
              <p className="text-green-100">{courseName}</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="font-semibold text-lg">{studentName}</p>
            <p className="text-sm text-green-100">Matrícula: {studentId}</p>
            <p className="text-sm text-green-100">Docente: {teacherName}</p>
          </div>
        </div>
      </div>
      <nav className="bg-green-800">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-1 md:space-x-4 py-3 text-sm">
            <li>
              <a href="#introduccion" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Introducción
              </a>
            </li>
            <li>
              <a href="#estimacion" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Estimación
              </a>
            </li>
            <li>
              <a href="#gestion" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Gestión
              </a>
            </li>
            <li>
              <a href="#comercializacion" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Comercialización
              </a>
            </li>
            <li>
              <a href="#comunicacion" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Comunicación
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}