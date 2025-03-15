import { Header } from "./components/header";
import { Section } from "./components/section";
import { Footer } from "./components/footer";

function App() {

  const sections = [
    {
      id: "introduccion",
      title: "Introducción a la planeación de negocios TI",
      description:
        "Fundamentos y conceptos básicos para la planeación de negocios en el sector de Tecnologías de la Información.",
      links: [
        {
          title: "Meta 2.1 - Documentación",
          url: "https://drive.google.com/drive/folders/your-folder-link-here",
        },
      ],
      reflection:
        "En esta sección he aprendido la importancia de una planificación estratégica para los negocios de software. Los conceptos fundamentales me han permitido comprender cómo estructurar adecuadamente un plan de negocios en el sector tecnológico. Mi fortaleza ha sido la capacidad de análisis del mercado, mientras que debo mejorar en la proyección financiera a largo plazo.",
    },
    {
      id: "estimacion",
      title: "Estimación de costos",
      description: "Metodologías y herramientas para la estimación precisa de costos en proyectos de software.",
      links: [
        {
          title: "Meta 1.2 - Participación",
          url: "https://drive.google.com/drive/folders/your-folder-link-here",
        },
      ],
      reflection:
        "El proceso de estimación de costos ha sido revelador para entender la complejidad financiera de los proyectos de software. He desarrollado habilidades para calcular con mayor precisión los recursos necesarios y los tiempos de desarrollo. Mi área de fortaleza es la identificación de costos ocultos, mientras que necesito mejorar en la estimación de tiempos para tareas complejas.",
    },
    {
      id: "gestion",
      title: "Gestión de negocios TI",
      description: "Estrategias y mejores prácticas para la gestión efectiva de negocios en el sector tecnológico.",
      links: [],
      reflection: "Próximamente",
    },
    {
      id: "comercializacion",
      title: "Comercialización y financiamiento de negocios TI",
      description: "Técnicas y canales para la comercialización de productos de software y opciones de financiamiento.",
      links: [],
      reflection: "Próximamente",
    },
    {
      id: "comunicacion",
      title: "Comunicación de negocios TI",
      description: "Estrategias de comunicación efectiva para presentar y promover negocios de software.",
      links: [],
      reflection: "Próximamente",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        studentName="Cordova Contreras Cesar"
        studentId="1284551"
        courseName="EMPRENDIMIENTO DE NEGOCIOS DE SOFTWARE(371)"
        teacherName="CARELIA GUADALUPE GAXIOLA PACHECO"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {sections.map((section) => (
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              description={section.description}
              links={section.links}
              reflection={section.reflection}
              isActive={section.id === "introduccion" || section.id === "estimacion"}
            />
          ))}
        </div>

        
      </main>

      <Footer />
    </div>
  );
}

export default App;
