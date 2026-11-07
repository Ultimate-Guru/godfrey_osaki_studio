export type PhotographyPackage = {
  name: string;
  subtitle?: string;
  ageRange?: string;
  price: number;
  description: string;
  image: string;
};

export const photographyPackages: PhotographyPackage[] = [
  {
    name: "Solo Portrait",
    price: 100_000,
    image: "/Solo%20Portrait.jpg",
    description:
      "A refined portrait experience created to celebrate your achievements, successes and promotions.",
  },
  {
    name: "The Lovers",
    price: 150_000,
    image: "/The%20Lovers.jpg",
    description:
      "An intimate session designed to capture genuine emotion, chemistry, and shared moments.",
  },
  {
    name: "The Milestone",
    price: 80_000,
    image: "/The%20Milestone.jpg",
    description:
      "A refined portrait experience created to honor a life of wisdom, strength, and legacy; captured with dignity, depth, and timeless elegance.",
  },
  {
    name: "Before Arrival",
    price: 120_000,
    image: "/Before%20Arrival.jpg",
    description:
      "A soft and elegant session celebrating the beauty strength, and anticipation of motherhood.",
  },
  {
    name: "The First Days",
    ageRange: "0–2 years",
    price: 120_000,
    image: "/The%20First%20Days.jpg",
    description:
      "A delicate and carefully handled session focused on preserving your baby’s earliest moments.",
  },
  {
    name: "The Growing Years",
    ageRange: "3–12 years",
    price: 80_000,
    image: "/The%20Growing%20Years.jpg",
    description:
      "A vibrant session designed to capture personality, energy, and individuality.",
  },
  {
    name: "The Heritage",
    subtitle: "Family",
    price: 200_000,
    image: "/Heritage.jpg",
    description:
      "A timeless portrait experience designed to preserve the bond, warmth, and connection shared within your family.",
  },
  {
    name: "The Legacy",
    ageRange: "65 years and above",
    price: 80_000,
    image: "/The%20Legacy.jpg",
    description:
      "A refined portrait experience created to honor a life of wisdom, strength, and legacy; captured with dignity, depth, and timeless elegance.",
  },
  {
    name: "Wedding",
    subtitle: "Digital experience",
    price: 750_000,
    image: "/wedding%28digital%29.jpg",
    description:
      "Perfect for couples who prefer a sleek, modern, and digital experience. All photos are professionally edited and delivered digitally - ready to share, or treasure forever.",
  },
  {
    name: "Wedding",
    subtitle: "Hybrid",
    price: 950_000,
    image: "/wed.jpg",
    description:
      "Perfect for couples who prefer a blend of physical and digital memories. All photos are professionally edited and delivered both digitally and physically.",
  },
];

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function formatPackageOption(item: PhotographyPackage) {
  const detail = item.subtitle ?? item.ageRange;
  const name = detail ? `${item.name} (${detail})` : item.name;

  return `${name} — from ${formatNaira(item.price)}`;
}
