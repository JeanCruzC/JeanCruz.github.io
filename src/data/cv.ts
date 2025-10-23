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
    email: "jeanmarcocruz207@yahoo.com",
    phone: "+51 910 846 281",
    website: "freelancer.com/u/jeanmarcoc5?sb=t",
    linkedin: "linkedin.com/in/workforceleadjean",
    github: "github.com/JeanCruzC",
  },
  summary: {
    id: "perfil",
    title: "Perfil profesional",
    paragraphs: [
      "Profesional bilingüe con más de 6 años de experiencia en Workforce Management dentro del sector BPO. Especializado en análisis de datos, automatización de reportes y visualización de métricas para operaciones de ventas, soporte y back office.",
      "Alineo pronósticos con presupuesto, desarrollo tableros ejecutivos accionables y coordino equipos multifuncionales para garantizar cobertura y productividad en entornos multicanal.",
    ],
  },
  experience: {
    id: "experiencia",
    title: "Experiencia",
    items: [
      {
        role: "Workforce Manager",
        company: "Concentrix",
        location: "Lima, Perú",
        period: "Mar 2025 – Jul 2025",
        achievements: [
          "Diseñé y ejecuté estrategias de pronóstico, planificación de turnos y asignación eficiente de recursos.",
          "Supervisé el desempeño operativo en tiempo real, gestionando ausencias e imprevistos.",
          "Elaboré dashboards ejecutivos con análisis de KPIs y tendencias.",
          "Lideré y capacité equipos en herramientas WFM, políticas internas y mejores prácticas.",
          "Coordiné con Operaciones, RR.HH., Finanzas y clientes para alinear procesos y optimizar cobertura.",
        ],
      },
      {
        role: "Jefe de Operaciones",
        company: "Teleperformance",
        location: "Lima, Perú",
        period: "Nov 2024 – Mar 2025",
        achievements: [
          "Supervisé KPIs y desempeño de los equipos de Team Leaders.",
          "Elaboré y presenté reportes de gestión a la dirección para la toma de decisiones.",
          "Implementé mejoras en procesos internos operativos para optimizar la experiencia del cliente.",
        ],
      },
      {
        role: "Analista Senior de Workforce",
        company: "Majorel",
        location: "Bellavista, Perú",
        period: "Nov 2023 – Dic 2024",
        achievements: [
          "Gestioné equipos y la planificación operativa para cuentas globales de soporte y contenido.",
          "Monitoreé métricas clave de rendimiento y brindé soporte a operaciones para acciones correctivas.",
          "Automaticé reportes y tableros para visibilidad ejecutiva de KPIs críticos.",
        ],
      },
      {
        role: "Real Time Analyst",
        company: "Majorel",
        location: "Lima, Perú",
        period: "Ago 2020 – May 2021",
        achievements: [
          "Controlé el cumplimiento de KPIs y OKRs de campañas multicanal en tiempo real.",
          "Planifiqué horarios y monitoreé la adherencia de agentes y equipos.",
          "Realicé análisis de productividad utilizando Python, SQL y Power BI.",
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
        degree: "Ingeniería Industrial (en curso)",
        year: "",
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
    email: "jeanmarcocruz207@yahoo.com",
    phone: "+51 910 846 281",
    website: "freelancer.com/u/jeanmarcoc5?sb=t",
    linkedin: "linkedin.com/in/workforceleadjean",
    github: "github.com/JeanCruzC",
  },
  summary: {
    id: "profile",
    title: "Professional summary",
    paragraphs: [
      "Bilingual professional with 6+ years leading Workforce Management initiatives in the BPO sector. Specialized in data analysis, report automation and metric visualization for sales, support and back office operations.",
      "I align forecasts with budgets, develop actionable executive dashboards and coordinate cross-functional teams to secure coverage and productivity across multichannel environments.",
    ],
  },
  experience: {
    id: "experience",
    title: "Experience",
    items: [
      {
        role: "Workforce Manager",
        company: "Concentrix",
        location: "Lima, Peru",
        period: "Mar 2025 – Jul 2025",
        achievements: [
          "Designed and executed forecasting, scheduling and capacity plans to match service demand.",
          "Supervised real-time performance, managing absences and operational incidents.",
          "Built executive dashboards with KPI trend analysis for leadership visibility.",
          "Trained Workforce teams on WFM tools, internal policies and best practices.",
          "Coordinated with Operations, HR, Finance and clients to align processes and optimize coverage.",
        ],
      },
      {
        role: "Operations Manager",
        company: "Teleperformance",
        location: "Lima, Peru",
        period: "Nov 2024 – Mar 2025",
        achievements: [
          "Oversaw KPIs and performance for Team Leader groups supporting global operations.",
          "Prepared and presented management reports to senior leadership for strategic planning.",
          "Implemented improvements to internal processes that enhanced service delivery.",
        ],
      },
      {
        role: "Senior Workforce Analyst",
        company: "Majorel",
        location: "Bellavista, Peru",
        period: "Nov 2023 – Dec 2024",
        achievements: [
          "Managed teams and operational planning for global support and content accounts.",
          "Monitored key performance metrics and provided operational support for corrective actions.",
          "Automated reports and dashboards to give executives visibility of critical KPIs.",
        ],
      },
      {
        role: "Real Time Analyst",
        company: "Majorel",
        location: "Lima, Peru",
        period: "Aug 2020 – May 2021",
        achievements: [
          "Controlled SLA, KPI and OKR compliance for multichannel campaigns in real time.",
          "Planned schedules and monitored agent adherence across onsite and remote teams.",
          "Delivered productivity analyses leveraging Python, SQL and Power BI.",
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
        degree: "Industrial Engineering (in progress)",
        year: "",
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
