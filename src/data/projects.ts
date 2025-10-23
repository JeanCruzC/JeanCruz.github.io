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
    title: "Control Tower WFM LATAM",
    summary:
      "Tablero en tiempo real que redujo sobretiempos 18% y elevó la adherencia +9 pp al escalar alertas predictivas por canal.",
    tags: ["Power BI", "Python", "Automation", "WFM"],
    links: [
      { label: "Demo", href: "https://app.powerbi.com" },
      { label: "GitHub", href: "https://github.com/JeanCruzC" }
    ],
    image: "/assets/control-tower.svg"
  },
  {
    title: "Generador de Turnos Inteligente",
    summary:
      "Optimicé cobertura semanal 96% → 99% simulando 12 mil combinaciones de turnos FT/PT y descansos con validación de SLA.",
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
      "Modelo SARIMA + XGBoost que redujo el MAPE 11,3% y entregó escenarios LTF/STF por hora con intervalos de confianza.",
    tags: ["Python", "Time Series", "XGBoost", "WFM"],
    links: [
      { label: "Notebook", href: "https://github.com/JeanCruzC" },
      { label: "Sheets", href: "https://docs.google.com" }
    ],
    image: "/assets/forecast.svg"
  },
  {
    title: "Playbook de Recuperación CX",
    summary:
      "Panel ejecutivo que prioriza iniciativas y redujo el TMO 7% al combinar NPS, backlog y capacity en un único flujo.",
    tags: ["Looker Studio", "SQL", "Customer Experience"],
    links: [
      { label: "Demo", href: "https://lookerstudio.google.com" },
      { label: "Documentación", href: "https://jeancruzc.notion.site" }
    ],
    image: "/assets/cx-playbook.svg"
  }
];

export const projectsEn: Project[] = [
  {
    title: "LATAM WFM Control Tower",
    summary:
      "Real-time control tower that cut overtime by 18% and lifted adherence +9 pp with predictive alerts per channel.",
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
      "Simulated 12K FT/PT schedules to lift coverage from 96% to 99% while keeping SLA on target and automating approvals.",
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
      "SARIMA + XGBoost ensemble that lowered MAPE by 11.3% and shipped hourly LTF/STF scenarios with confidence bands.",
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
      "Executive dashboard that merged NPS, backlog and capacity to trim AHT by 7% and focus squads on high ROI fixes.",
    tags: ["Looker Studio", "SQL", "Customer Experience"],
    links: [
      { label: "Demo", href: "https://lookerstudio.google.com" },
      { label: "Documentation", href: "https://jeancruzc.notion.site" }
    ],
    image: "/assets/cx-playbook.svg"
  }
];
