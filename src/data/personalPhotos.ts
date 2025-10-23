export interface PersonalPhoto {
  src: string;
  alt: string;
}

interface PhotoDefinition {
  title: string;
  subtitle: string;
  gradient: [string, string];
  alt: string;
}

const createSvgDataUri = (definition: PhotoDefinition): PersonalPhoto => {
  const { title, subtitle, gradient, alt } = definition;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' role='img' aria-label='${alt}'>` +
    `<defs><linearGradient id='grad' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='${gradient[0]}'/>` +
    `<stop offset='100%' stop-color='${gradient[1]}'/></linearGradient></defs>` +
    `<rect width='600' height='400' rx='32' fill='url(#grad)'/>` +
    `<g fill='white' font-family='"Work Sans", Arial, sans-serif'>` +
    `<text x='48' y='188' font-size='64' font-weight='600'>${title}</text>` +
    `<text x='48' y='256' font-size='36' opacity='0.88'>${subtitle}</text>` +
    `</g></svg>`;

  return {
    alt,
    src: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  };
};

export const personalPhotosEs: PersonalPhoto[] = [
  {
    title: "Zorritos",
    subtitle: "Reflexión y enfoque",
    gradient: ["#0ea5e9", "#6366f1"],
    alt: "Jean Cruz sentado en un columpio en la playa de Zorritos"
  },
  {
    title: "Team Rituals",
    subtitle: "Cena de equipo",
    gradient: ["#14b8a6", "#2dd4bf"],
    alt: "Jean Cruz con colegas en una cena de equipo"
  },
  {
    title: "Workshops",
    subtitle: "Ideas en acción",
    gradient: ["#f97316", "#fb923c"],
    alt: "Jean Cruz con participantes en un taller de negocios"
  },
  {
    title: "Cafetería",
    subtitle: "Notas & tableros",
    gradient: ["#8b5cf6", "#6366f1"],
    alt: "Jean Cruz revisando notas en una cafetería"
  },
  {
    title: "Catarata",
    subtitle: "Energía del equipo",
    gradient: ["#22d3ee", "#0ea5e9"],
    alt: "Jean Cruz frente a una cascada en la sierra"
  },
  {
    title: "Montaña 7 Colores",
    subtitle: "Planificación en altura",
    gradient: ["#facc15", "#f97316"],
    alt: "Jean Cruz en la montaña de siete colores"
  },
  {
    title: "Río",
    subtitle: "Trabajo colaborativo",
    gradient: ["#ec4899", "#ef4444"],
    alt: "Jean Cruz con chaleco salvavidas en un paseo en bote"
  },
  {
    title: "Descanso",
    subtitle: "Balance personal",
    gradient: ["#3b82f6", "#10b981"],
    alt: "Jean Cruz descansando en una reposera frente al mar"
  }
].map(createSvgDataUri);

export const personalPhotosEn: PersonalPhoto[] = [
  {
    title: "Zorritos",
    subtitle: "Reset & focus",
    gradient: ["#0ea5e9", "#6366f1"],
    alt: "Jean Cruz sitting on a swing at Zorritos beach"
  },
  {
    title: "Team rituals",
    subtitle: "Dinner sync",
    gradient: ["#14b8a6", "#2dd4bf"],
    alt: "Jean Cruz with colleagues at a team dinner"
  },
  {
    title: "Workshops",
    subtitle: "Ideas in motion",
    gradient: ["#f97316", "#fb923c"],
    alt: "Jean Cruz with participants during a business workshop"
  },
  {
    title: "Coffee notes",
    subtitle: "Dashboards & scripts",
    gradient: ["#8b5cf6", "#6366f1"],
    alt: "Jean Cruz reviewing notes at a coffee shop"
  },
  {
    title: "Highlands",
    subtitle: "Team energy",
    gradient: ["#22d3ee", "#0ea5e9"],
    alt: "Jean Cruz standing in front of a waterfall in the highlands"
  },
  {
    title: "Rainbow Mt.",
    subtitle: "Forecasting outlook",
    gradient: ["#facc15", "#f97316"],
    alt: "Jean Cruz at the rainbow mountain"
  },
  {
    title: "River sprint",
    subtitle: "Collaboration",
    gradient: ["#ec4899", "#ef4444"],
    alt: "Jean Cruz wearing a life jacket on a boat ride"
  },
  {
    title: "Recharge",
    subtitle: "Personal balance",
    gradient: ["#3b82f6", "#10b981"],
    alt: "Jean Cruz relaxing on a beach chair by the sea"
  }
].map(createSvgDataUri);
