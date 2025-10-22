export type Link = { label: string; href: string };
export type Project = {
  title: string;
  summary: string;
  tags: string[];
  links: Link[];   // agrega aquí tus URLs (Power BI, Looker, Sheets, GitHub, Demo)
  image?: string;  // opcional: ruta en /public/assets
};

export const projects: Project[] = [
  {
    title: "Generador de Turnos 2025 (WFM)",
    summary: "App de scheduling con validación de cobertura, turnos FT/PT y sugerencias de descansos.",
    tags: ["Python","Streamlit","Optimización","WFM"],
    links: [
      { label: "Demo", href: "https://tu-demo.com" },
      { label: "Código", href: "https://github.com/..." }
    ],
    image: "/assets/generador-turnos.webp"
  },
  {
    title: "Dashboard de Demanda y Cobertura",
    summary: "BI para visualizar tendencias por intervalo y gaps STF/LTF.",
    tags: ["Power BI","DAX","Forecast"],
    links: [
      { label: "Power BI", href: "https://app.powerbi.com/..." },
      { label: "GitHub", href: "https://github.com/..." }
    ]
  },
  {
    title: "Walk-Forward Forecast 6 fechas",
    summary: "SARIMA/ARIMA/WES + stacking con validación y estacionalidad capturada.",
    tags: ["Python","Time Series","XGBoost"],
    links: [
      { label: "Notebook", href: "https://github.com/..." },
      { label: "Sheets", href: "https://docs.google.com/..." }
    ]
  }
];
