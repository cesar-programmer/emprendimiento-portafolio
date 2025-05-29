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
              <a href="#meta1" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Meta 1
              </a>
            </li>
            <li>
              <a href="#meta2" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Meta 2
              </a>
            </li>
            <li>
              <a href="#meta3" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Meta 3
              </a>
            </li>
            <li>
              <a href="#meta4" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Meta 4
              </a>
              <a href="#meta5" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Meta 5
              </a>
              <a href="#catalogo" className="px-3 py-2 rounded hover:bg-green-700 transition-colors">
                Catalogo digital
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
