export type Link = { label: string; href: string };
export type Project = {
  title: string;
  summary: string;
  tags: string[];
  links: Link[];
  image?: string;
};

export const projectsEs: Project[] = [
  {
    title: "Control Tower WFM",
    summary:
      "Tablero en tiempo real que unifica cobertura, demanda y salud operativa con alertas predictivas por canal.",
    tags: ["Power BI", "Python", "Automatización", "WFM"],
    links: [
      { label: "Demo", href: "https://app.powerbi.com" },
      { label: "GitHub", href: "https://github.com/JeanCruzC" }
    ],
    image: "/assets/control-tower.svg"
  },
  {
    title: "Generador de Turnos Inteligente",
    summary:
      "Motor de turnos que simula múltiples escenarios FT/PT y descansos para mantener SLA con foco en bienestar del equipo.",
    tags: ["Python", "Streamlit", "Optimización"],
    links: [
      { label: "Demo", href: "https://streamlit.io" },
      { label: "Código", href: "https://github.com/JeanCruzC" }
    ],
    image: "/assets/shift-engine.svg"
  },
  {
    title: "Forecast Walk-Forward Multipaís",
    summary:
      "Modelo SARIMA + XGBoost que entrega escenarios LTF/STF por hora con intervalos de confianza para CX multicanal.",
    tags: ["Python", "Series de tiempo", "XGBoost", "WFM"],
    links: [
      { label: "Notebook", href: "https://github.com/JeanCruzC" },
      { label: "Sheets", href: "https://docs.google.com" }
    ],
    image: "/assets/forecast.svg"
  },
  {
    title: "Playbook de Recuperación CX",
    summary:
      "Panel ejecutivo que prioriza iniciativas combinando NPS, backlog y capacity en un único flujo accionable.",
    tags: ["Looker Studio", "SQL", "Experiencia de cliente"],
    links: [
      { label: "Demo", href: "https://lookerstudio.google.com" },
      { label: "Documentación", href: "https://jeancruzc.notion.site" }
    ],
    image: "/assets/cx-playbook.svg"
  }
];

export const projectsEn: Project[] = [
  {
    title: "WFM Control Tower",
    summary:
      "Real-time control tower that unifies coverage, demand and operational health with predictive alerts per channel.",
    tags: ["Power BI", "Python", "Automation", "WFM"],
    links: [
      { label: "Demo", href: "https://app.powerbi.com" },
      { label: "GitHub", href: "https://github.com/JeanCruzC" }
    ],
    image: "/assets/control-tower.svg"
  },
  {
    title: "Smart Shift Generator",
    summary:
      "Shift engine that simulates FT/PT and rest combinations to sustain SLA while protecting team wellbeing.",
    tags: ["Python", "Streamlit", "Optimization"],
    links: [
      { label: "Demo", href: "https://streamlit.io" },
      { label: "Code", href: "https://github.com/JeanCruzC" }
    ],
    image: "/assets/shift-engine.svg"
  },
  {
    title: "Multi-country Walk-Forward Forecast",
    summary:
      "SARIMA + XGBoost ensemble delivering hourly LTF/STF scenarios with confidence bands for multichannel CX.",
    tags: ["Python", "Time Series", "XGBoost", "WFM"],
    links: [
      { label: "Notebook", href: "https://github.com/JeanCruzC" },
      { label: "Sheets", href: "https://docs.google.com" }
    ],
    image: "/assets/forecast.svg"
  },
  {
    title: "CX Recovery Playbook",
    summary:
      "Executive dashboard that merges NPS, backlog and capacity to focus squads on the highest-impact fixes.",
    tags: ["Looker Studio", "SQL", "Customer Experience"],
    links: [
      { label: "Demo", href: "https://lookerstudio.google.com" },
      { label: "Documentation", href: "https://jeancruzc.notion.site" }
    ],
    image: "/assets/cx-playbook.svg"
  }
];
