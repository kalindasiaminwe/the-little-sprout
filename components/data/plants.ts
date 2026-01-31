export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  image: string;
  category: string;
  careLevel: 'easy' | 'moderate' | 'expert';
  light: string;
  water: string;
  description: string;
  featured?: boolean;
}

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    price: 45,
    image: '/images/plant-monstera.jpg',
    category: 'tropical',
    careLevel: 'easy',
    light: 'Bright indirect light',
    water: 'Weekly',
    description: 'The iconic Swiss Cheese Plant with stunning split leaves. Perfect for adding a tropical vibe to any space.',
    featured: true,
  },
  {
    id: '2',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    price: 65,
    image: '/images/plant-fiddle.jpg',
    category: 'tropical',
    careLevel: 'moderate',
    light: 'Bright indirect light',
    water: 'Every 1-2 weeks',
    description: 'A statement plant with large, violin-shaped leaves that brings elegance to any room.',
    featured: true,
  },
  {
    id: '3',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    price: 28,
    image: '/images/plant-snake.jpg',
    category: 'succulents',
    careLevel: 'easy',
    light: 'Low to bright light',
    water: 'Every 2-3 weeks',
    description: 'Nearly indestructible and air-purifying. The perfect beginner plant.',
    featured: true,
  },
  {
    id: '4',
    name: 'Pothos Golden',
    scientificName: 'Epipremnum aureum',
    price: 22,
    image: '/images/plant-pothos.jpg',
    category: 'trailing',
    careLevel: 'easy',
    light: 'Low to bright indirect',
    water: 'Weekly',
    description: 'A trailing beauty with heart-shaped leaves. Grows quickly and purifies air.',
  },
  {
    id: '5',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    price: 35,
    image: '/images/plant-peace-lily.jpg',
    category: 'flowering',
    careLevel: 'easy',
    light: 'Low to medium light',
    water: 'Weekly',
    description: 'Elegant white blooms and glossy leaves. Thrives in low-light conditions.',
  },
  {
    id: '6',
    name: 'Bird of Paradise',
    scientificName: 'Strelitzia reginae',
    price: 85,
    image: '/images/Birds-of-feather.webp',
    category: 'tropical',
    careLevel: 'moderate',
    light: 'Bright direct light',
    water: 'Weekly',
    description: 'Dramatic banana-like leaves that make a bold statement in any space.',
  },
  {
    id: '7',
    name: 'String of Pearls',
    scientificName: 'Senecio rowleyanus',
    price: 18,
    image: '/images/plant-string-of-pearls.jpg',
    category: 'succulents',
    careLevel: 'moderate',
    light: 'Bright indirect light',
    water: 'Every 2 weeks',
    description: 'Unique trailing succulent with bead-like leaves. Perfect for hanging baskets.',
  },
  {
    id: '8',
    name: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    price: 42,
    image: '/images/plant-zz.jpg',
    category: 'tropical',
    careLevel: 'easy',
    light: 'Medium to bright light',
    water: 'Every 1-2 weeks',
    description: 'Glossy, dark green leaves on graceful stems. Virtually unkillable.',
  },
];

export interface CareGuide {
  id: string;
  title: string;
  description: string;
  icon: string;
  tips: string[];
}

export const careGuides: CareGuide[] = [
  {
    id: '1',
    title: 'Watering Basics',
    description: 'Learn when and how much to water your plants',
    icon: '💧',
    tips: [
      'Check soil moisture before watering - stick your finger 2 inches into the soil',
      'Most plants prefer to dry out slightly between waterings',
      'Use room temperature water to avoid shocking roots',
      'Water until it drains from the bottom, then empty the saucer',
      'Reduce watering in winter when growth slows',
    ],
  },
  {
    id: '2',
    title: 'Light Requirements',
    description: 'Understanding different light needs',
    icon: '☀️',
    tips: [
      'Bright indirect light is best for most houseplants',
      'South-facing windows provide the most light',
      'Rotate plants quarterly for even growth',
      'Yellow leaves may indicate too much direct sun',
      'Leggy growth often means the plant needs more light',
    ],
  },
  {
    id: '3',
    title: 'Humidity & Temperature',
    description: 'Creating the perfect environment',
    icon: '🌡️',
    tips: [
      'Most tropical plants love 50-60% humidity',
      'Group plants together to increase humidity',
      'Keep plants away from heating/cooling vents',
      'Most houseplants prefer 65-75°F (18-24°C)',
      'Use a pebble tray for extra humidity',
    ],
  },
  {
    id: '4',
    title: 'Repotting Guide',
    description: 'When and how to repot your plants',
    icon: '🪴',
    tips: [
      'Repot when roots grow out of drainage holes',
      'Best time to repot is spring or early summer',
      'Choose a pot 1-2 inches larger than current',
      'Use well-draining potting mix appropriate for plant type',
      'Water thoroughly after repotting and avoid fertilizing for 2 weeks',
    ],
  },
];
