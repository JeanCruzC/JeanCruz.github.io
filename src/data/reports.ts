export type ReportPlatform = "Power BI" | "Looker Studio";

export type Report = {
  title: string;
  description: string;
  platform: ReportPlatform;
  url: string;
  thumbnail: string;
  tags: string[];
};

export const reportsEs: Report[] = [
  {
    title: "Cobertura por intervalo",
    description:
      "Mapa de calor que cruza forecast vs. staffing hora a hora para priorizar ajustes en operaciones CX.",
    platform: "Power BI",
    url: "https://app.powerbi.com/",
    thumbnail: "/assets/report-coverage.svg",
    tags: ["WFM", "Cobertura", "Python"]
  },
  {
    title: "Alertas proactivas",
    description:
      "Panel de control que combina backlog, SLA y capacidad para activar playbooks preventivos.",
    platform: "Power BI",
    url: "https://app.powerbi.com/",
    thumbnail: "/assets/report-alerts.svg",
    tags: ["Alertas", "Power BI", "Automatización"]
  },
  {
    title: "Productividad por canal",
    description:
      "Reporte comparativo de productividad que conecta interacción, staffing y experiencia por canal.",
    platform: "Looker Studio",
    url: "https://lookerstudio.google.com/",
    thumbnail: "/assets/report-productivity.svg",
    tags: ["CX", "Productividad", "Looker Studio"]
  }
];

export const reportsEn: Report[] = [
  {
    title: "Interval coverage",
    description:
      "Heatmap that layers forecast vs. staffing every hour to highlight CX adjustments.",
    platform: "Power BI",
    url: "https://app.powerbi.com/",
    thumbnail: "/assets/report-coverage.svg",
    tags: ["WFM", "Coverage", "Python"]
  },
  {
    title: "Proactive alerts",
    description:
      "Control tower view combining backlog, SLA and capacity to trigger preventive playbooks.",
    platform: "Power BI",
    url: "https://app.powerbi.com/",
    thumbnail: "/assets/report-alerts.svg",
    tags: ["Alerts", "Power BI", "Automation"]
  },
  {
    title: "Channel productivity",
    description:
      "Comparative report aligning interactions, staffing and experience across CX channels.",
    platform: "Looker Studio",
    url: "https://lookerstudio.google.com/",
    thumbnail: "/assets/report-productivity.svg",
    tags: ["CX", "Productivity", "Looker Studio"]
  }
];
