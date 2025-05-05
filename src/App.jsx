import { Header } from "./components/header";
import { Section } from "./components/section";
import { Footer } from "./components/footer";

function App() {

  const sections = [
    {
      id: "meta1",
      title: "Meta 1.1 - Análisis de Negocio",
      description: "Evaluación de la viabilidad de la idea de negocio considerando riesgos, recursos y oportunidades.",
      links: [
        {
          title: "Práctica 1.1",
          url: "https://drive.google.com/drive/u/0/folders/1Sf3ydEMmNyAYHwrWRnxTXLGDwuiwNsbf",
        },
      ],
      reflection:
        "Este trabajo me ayudó a comprender la importancia de analizar un negocio antes de iniciarlo. No solo se trata de tener una idea, sino de asumir riesgos y tomar decisiones para generar valor. El análisis de viabilidad es fundamental para determinar si un proyecto tiene posibilidades de éxito considerando factores económicos, técnicos y legales.",
    },
    {
      id: "meta1",
      title: "Meta 1.2 - Proyectos con Base Tecnológica",
      description: "Exploración del impacto y retos de emprender con proyectos tecnológicos.",
      links: [
        {
          title: "Práctica 1.2",
          url: "https://drive.google.com/drive/u/0/folders/16nxrqWN195mKcMEpDXmJt_tXToJEKV2a",
        },
      ],
      reflection:
        "Entendí que los proyectos tecnológicos combinan múltiples disciplinas y tienen gran potencial de escalabilidad. A pesar de sus ventajas, enfrentan retos como altos costos, obsolescencia rápida y temas éticos. Aprendí la importancia de considerar aspectos técnicos, económicos y sociales en este tipo de emprendimientos.",
    },
    {
      id: "meta2",
      title: "Meta 2.1 - Toma de Decisiones Financieras",
      description: "Análisis de variables financieras clave para evaluar la viabilidad del proyecto Secure Vision AI.",
      links: [
        {
          title: "Práctica 2.1",
          url: "https://drive.google.com/drive/u/0/folders/127aVOLZYmoKIJR8qBLTZgfQ8JPLeelV_",
        },
      ],
      reflection:
        "Esta práctica me permitió identificar las variables más importantes para evaluar la viabilidad financiera del proyecto. Entendí cómo decisiones como la tasa de retorno, punto de equilibrio, y escenarios de incertidumbre pueden afectar directamente el éxito de Secure Vision AI. Aprendí a justificar financieramente cada aspecto de la planificación.",
    },
    {
      id: "meta2",
      title: "Meta 2.2 - Defensa del Proyecto ante Inversionistas",
      description: "Justificación del proyecto Secure Vision AI ante posibles inversionistas destacando su impacto y escalabilidad.",
      links: [
        {
          title: "Práctica 2.2",
          url: "https://drive.google.com/drive/u/0/folders/1zv0_7yx4rQ5fhnKxezBuSW1uJx4mGB_k",
        },
      ],
      reflection:
        "Secure Vision AI representa una solución con gran impacto social y potencial económico. Aprendí a estructurar argumentos sólidos para captar inversión, destacando el valor del proyecto, su rentabilidad y su capacidad de escalar. Esta meta me ayudó a fortalecer la visión empresarial y comunicativa del proyecto.",
    },
    {
      id: "meta3",
      title: "Meta 3.1 - Modelo de Negocio",
      description: "Investigación de modelos de negocio en software y adaptación al caso de Secure Vision AI.",
      links: [
        {
          title: "Práctica 3.1",
          url: "https://drive.google.com/drive/u/0/folders/1R93YgmOZbiCI0t66MBP6Y0sgRkOVm2Ac",
        },
      ],
      reflection:
        "Analicé modelos de negocio como SaaS, freemium, licencias y open source, y comprendí que SaaS es el más adecuado para Secure Vision AI. Este modelo permite ofrecer una solución escalable, con ingresos recurrentes y menores barreras de adopción para clientes en la industria de la construcción.",
    },
    {
      id: "meta3",
      title: "Meta 3.2 - Evaluación de Viabilidad del Modelo de Negocio",
      description: "Reflexión sobre la viabilidad del modelo de negocio propuesto para Secure Vision AI.",
      links: [
        {
          title: "Práctica 3.2",
          url: "https://drive.google.com/drive/u/0/folders/1zUZrodeTOWvS2QjDd36LQXHiS0CHRtKY",
        },
      ],
      reflection:
        "Secure Vision AI es un modelo de negocio viable y con alto potencial de crecimiento. Su modelo SaaS y su enfoque en un problema real le permiten destacarse en el mercado. Aprendí que combinar innovación, impacto social y rentabilidad hace que la propuesta sea atractiva para inversionistas.",
    },
    {
      id: "meta4",
      title: "Meta 4.1 - Selección de Fuentes de Financiamiento",
      description: "Análisis de opciones de financiamiento para Secure Vision AI y elaboración de tabla de indicadores.",
      links: [
        {
          title: "Práctica 4.1",
          url: "https://drive.google.com/drive/u/0/folders/1vADgIl5sZYm3zMAcBqHt6tRrRCbH_NfT",
        },
      ],
      reflection:
        "Concluí que una estrategia híbrida es la más viable: inversión ángel para desarrollar el MVP, fondos de CONACYT para expansión técnica, y capital de riesgo para escalar. Esto permite minimizar deuda temprana y aumentar sostenibilidad. Aprendí a equilibrar riesgos y recursos disponibles.",
    },
    {
      id: "meta4",
      title: "Meta 4.2 - Plan de Financiamiento y Acción",
      description: "Preparación de documentación, plan de acción e infografía para la adquisición de financiamiento.",
      links: [
        {
          title: "Práctica 4.2",
          url: "https://drive.google.com/drive/u/0/folders/1ycFD-VczFhlCU663u0rZ8RRdT95s3tC1",
        },
      ],
      reflection:
        "Diseñé un plan de financiamiento mixto adaptado a las necesidades de Secure Vision AI. Aprendí a preparar la documentación requerida y establecer pasos concretos para acceder a fondos públicos y privados. Esta práctica me ayudó a estructurar una estrategia clara para obtener recursos y ejecutar el proyecto.",
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
              isActive={true}
            />
          ))}
        </div>

        
      </main>

      <Footer />
    </div>
  );
}

export default App;
