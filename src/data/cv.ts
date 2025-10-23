export type CVExperience = {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
};

export type CVEducation = {
  institution: string;
  degree: string;
  year: string;
};

export type CVSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: CVExperience[] | CVEducation[] | string[];
};

export type CVProfile = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  website?: string;
  linkedin: string;
  github: string;
};

export type CVContent = {
  meta: {
    lang: "es" | "en";
    title: string;
    description: string;
  };
  profile: CVProfile;
  summary: {
    id: string;
    title: string;
    paragraphs: string[];
  };
  experience: {
    id: string;
    title: string;
    items: CVExperience[];
  };
  education: {
    id: string;
    title: string;
    items: CVEducation[];
  };
  skills: {
    id: string;
    title: string;
    groups: {
      title: string;
      items: string[];
    }[];
  };
  tools: {
    id: string;
    title: string;
    items: string[];
  };
  leadership: {
    id: string;
    title: string;
    paragraphs: string[];
  };
  languages: {
    id: string;
    title: string;
    items: string[];
  };
};

export const cvEs: CVContent = {
  meta: {
    lang: "es",
    title: "Jean Cruz — CV",
    description:
      "Experiencia en Workforce Management y Business Intelligence para operaciones CX, ventas y back office.",
  },
  profile: {
    name: "Jean Marco Cruz",
    headline: "Líder de Workforce & BI",
    location: "Lima, Perú · Remoto / Híbrido",
    email: "jeancruzc@gmail.com",
    phone: "+51 920 048 801",
    website: "jeancruzc.github.io",
    linkedin: "linkedin.com/in/jeancruzc",
    github: "github.com/JeanCruzC",
  },
  summary: {
    id: "perfil",
    title: "Perfil profesional",
    paragraphs: [
      "Profesional con más de 8 años liderando Workforce Management en el sector BPO. Especializado en análisis de datos, automatización de reportes y visualización de métricas para operaciones de ventas, soporte y back office.",
      "Alineo pronósticos con presupuesto, desarrollo tableros ejecutivos accionables y coordino equipos multifuncionales para garantizar cobertura y productividad.",
    ],
  },
  experience: {
    id: "experiencia",
    title: "Experiencia",
    items: [
      {
        role: "Workforce Manager Comercial",
        company: "Vission Internacional S.A.C.",
        location: "Lima, Perú",
        period: "Ago 2019 – Ago 2024",
        achievements: [
          "Lideré un equipo de 6 analistas de Workforce y BI para operaciones de ventas, soporte y back office.",
          "Optimicé la precisión de pronósticos mediante análisis de demanda histórica y campañas de marketing.",
          "Diseñé tableros en Power BI para seguimiento de KPIs de productividad y cobertura por canal.",
          "Automatizé reportes críticos, reduciendo tiempos de elaboración manual en un 60%.",
        ],
      },
      {
        role: "Workforce Lead",
        company: "Concentrix",
        location: "Lima, Perú",
        period: "Ago 2016 – Jul 2019",
        achievements: [
          "Implementé metodologías de pronóstico y planificación de turnos y vacaciones alineadas a SLAs.",
          "Desarrollé tableros diarios con alertas de desempeño para líderes de operaciones.",
          "Coordiné la transición de reportes heredados a dashboards interactivos y de autoservicio.",
          "Capacité a equipos de operaciones en interpretación de métricas y toma de decisiones.",
        ],
      },
      {
        role: "Workforce Analyst",
        company: "Atento Perú",
        location: "Lima, Perú",
        period: "Nov 2014 – Mar 2016",
        achievements: [
          "Monitoreé indicadores de servicio y productividad en tiempo real.",
          "Generé reportes de desempeño identificando tendencias y oportunidades de mejora.",
          "Apoyé la implementación de herramientas de Workforce Management y la formación de nuevos analistas.",
        ],
      },
    ],
  },
  education: {
    id: "educacion",
    title: "Educación",
    items: [
      {
        institution: "Universidad Privada del Norte",
        degree: "Bachiller en Ciencias de la Comunicación",
        year: "2014",
      },
      {
        institution: "Instituto Peruano de Marketing",
        degree: "Diplomado en Marketing y Dirección Comercial",
        year: "2016",
      },
    ],
  },
  skills: {
    id: "habilidades",
    title: "Habilidades",
    groups: [
      {
        title: "Análisis de datos",
        items: ["Modelado de datos", "SQL", "Python", "Power BI", "Looker Studio", "Excel avanzado"],
      },
      {
        title: "Workforce Management",
        items: ["Forecasting", "Planificación de turnos", "Control de asistencia", "Análisis de productividad"],
      },
      {
        title: "Automatización y reporting",
        items: ["Dashboards ejecutivos", "ETL", "Storytelling con datos", "Automatización de reportes"],
      },
    ],
  },
  tools: {
    id: "herramientas",
    title: "Herramientas",
    items: [
      "Microsoft Excel / Google Sheets",
      "Power BI",
      "Looker Studio",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Python",
      "R",
      "Tableau",
      "Slack",
      "Jira",
    ],
  },
  leadership: {
    id: "liderazgo",
    title: "Liderazgo y gestión de equipos",
    paragraphs: [
      "Diseño políticas operativas, capacito equipos en uso de herramientas analíticas y facilito rituales de mejora continua.",
      "Coordino estrategias de formación, seguimiento de productividad y planificación de turnos para campañas multicanal.",
    ],
  },
  languages: {
    id: "idiomas",
    title: "Idiomas",
    items: ["Español (nativo)", "Inglés (intermedio · B2)"]
  },
};

export const cvEn: CVContent = {
  meta: {
    lang: "en",
    title: "Jean Cruz — Resume",
    description:
      "Workforce Management and Business Intelligence leader for CX, sales and back office operations.",
  },
  profile: {
    name: "Jean Marco Cruz",
    headline: "Workforce & BI Lead",
    location: "Lima, Peru · Remote / Hybrid",
    email: "jeancruzc@gmail.com",
    phone: "+51 920 048 801",
    website: "jeancruzc.github.io",
    linkedin: "linkedin.com/in/jeancruzc",
    github: "github.com/JeanCruzC",
  },
  summary: {
    id: "profile",
    title: "Professional summary",
    paragraphs: [
      "Professional with 8+ years leading Workforce Management in the BPO sector. Specialized in data analysis, report automation and metric visualization for sales, support and back office operations.",
      "I align forecasts with budgets, develop actionable executive dashboards and coordinate cross-functional teams to secure coverage and productivity.",
    ],
  },
  experience: {
    id: "experience",
    title: "Experience",
    items: [
      {
        role: "Commercial Workforce Manager",
        company: "Vission Internacional S.A.C.",
        location: "Lima, Peru",
        period: "Aug 2019 – Aug 2024",
        achievements: [
          "Led a team of six Workforce and BI analysts supporting sales, support and back office operations.",
          "Improved forecast accuracy through historical demand analysis and marketing campaign insights.",
          "Designed Power BI dashboards to monitor productivity KPIs and channel coverage.",
          "Automated critical reports, cutting manual build time by 60%.",
        ],
      },
      {
        role: "Workforce Lead",
        company: "Concentrix",
        location: "Lima, Peru",
        period: "Aug 2016 – Jul 2019",
        achievements: [
          "Implemented forecasting and scheduling methodologies for shifts and vacations aligned to SLAs.",
          "Developed daily dashboards with performance alerts for operations leaders.",
          "Coordinated the migration from legacy reports to interactive, self-service dashboards.",
          "Trained operations teams on metric interpretation and decision making.",
        ],
      },
      {
        role: "Workforce Analyst",
        company: "Atento Perú",
        location: "Lima, Peru",
        period: "Nov 2014 – Mar 2016",
        achievements: [
          "Monitored real-time service and productivity indicators.",
          "Produced performance reports, identifying trends and improvement opportunities.",
          "Supported the rollout of Workforce Management tools and onboarding of new analysts.",
        ],
      },
    ],
  },
  education: {
    id: "education",
    title: "Education",
    items: [
      {
        institution: "Universidad Privada del Norte",
        degree: "Bachelor in Communications",
        year: "2014",
      },
      {
        institution: "Instituto Peruano de Marketing",
        degree: "Diploma in Marketing & Commercial Management",
        year: "2016",
      },
    ],
  },
  skills: {
    id: "skills",
    title: "Skills",
    groups: [
      {
        title: "Data analysis",
        items: ["Data modeling", "SQL", "Python", "Power BI", "Looker Studio", "Advanced Excel"],
      },
      {
        title: "Workforce Management",
        items: ["Forecasting", "Shift planning", "Attendance control", "Productivity analysis"],
      },
      {
        title: "Automation & reporting",
        items: ["Executive dashboards", "ETL", "Data storytelling", "Report automation"],
      },
    ],
  },
  tools: {
    id: "tools",
    title: "Tools",
    items: [
      "Microsoft Excel / Google Sheets",
      "Power BI",
      "Looker Studio",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Python",
      "R",
      "Tableau",
      "Slack",
      "Jira",
    ],
  },
  leadership: {
    id: "leadership",
    title: "Leadership & team enablement",
    paragraphs: [
      "Design operational policies, train teams on analytics tools and facilitate continuous improvement rituals.",
      "Coordinate training strategies, productivity follow-up and shift planning for multichannel programs.",
    ],
  },
  languages: {
    id: "languages",
    title: "Languages",
    items: ["Spanish (native)", "English (intermediate · B2)"]
  },
};
