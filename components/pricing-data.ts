export const galleryIds = [
  "solo-portrait",
  "lovers",
  "milestone",
  "before-arrival",
  "first-days",
  "growing-years",
  "legacy",
  "heritage",
  "wedding-experience",
] as const;

export type GalleryId = (typeof galleryIds)[number];

export type PhotographyPackage = {
  name: string;
  subtitle?: string;
  ageRange?: string;
  galleryId: GalleryId;
  price: number;
  description: string;
  image: string;
};

export const photographyPackages: PhotographyPackage[] = [
  {
    name: "Solo Portrait",
    galleryId: "solo-portrait",
    price: 100_000,
    image: "/Solo%20Portrait.jpg",
    description:
      "A refined portrait experience created to celebrate your achievements, successes and promotions.",
  },
  {
    name: "The Lovers",
    galleryId: "lovers",
    price: 150_000,
    image: "/The%20Lovers.jpg",
    description:
      "An intimate session designed to capture genuine emotion, chemistry, and shared moments.",
  },
  {
    name: "The Milestone",
    galleryId: "milestone",
    price: 80_000,
    image: "/The%20Milestone.jpg",
    description:
      "A refined portrait experience created to honor a life of wisdom, strength, and legacy; captured with dignity, depth, and timeless elegance.",
  },
  {
    name: "Before Arrival",
    galleryId: "before-arrival",
    price: 120_000,
    image: "/Before%20Arrival.jpg",
    description:
      "A soft and elegant session celebrating the beauty strength, and anticipation of motherhood.",
  },
  {
    name: "The First Days",
    ageRange: "0–2 years",
    galleryId: "first-days",
    price: 120_000,
    image: "/The%20First%20Days.jpg",
    description:
      "A delicate and carefully handled session focused on preserving your baby’s earliest moments.",
  },
  {
    name: "The Growing Years",
    ageRange: "3–12 years",
    galleryId: "growing-years",
    price: 80_000,
    image: "/The%20Growing%20Years.jpg",
    description:
      "A vibrant session designed to capture personality, energy, and individuality.",
  },
  {
    name: "The Heritage",
    subtitle: "Family",
    galleryId: "heritage",
    price: 200_000,
    image: "/Heritage.jpg",
    description:
      "A timeless portrait experience designed to preserve the bond, warmth, and connection shared within your family.",
  },
  {
    name: "The Legacy",
    ageRange: "65 years and above",
    galleryId: "legacy",
    price: 80_000,
    image: "/The%20Legacy.jpg",
    description:
      "A refined portrait experience created to honor a life of wisdom, strength, and legacy; captured with dignity, depth, and timeless elegance.",
  },
  {
    name: "Wedding Experience",
    galleryId: "wedding-experience",
    price: 950_000,
    image: "/wed.jpg",
    description:
      "Perfect for couples who prefer a sleek, modern, and digital experience. All photos are professionally edited and delivered digitally - ready to share, or treasure forever.",
  },
];

export function getPhotographyPackageByGalleryId(galleryId: string) {
  return photographyPackages.find((item) => item.galleryId === galleryId);
}

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function formatPackageOption(item: PhotographyPackage) {
  const detail = item.subtitle ?? item.ageRange;
  const name = detail ? `${item.name} (${detail})` : item.name;

  return `${name} from ${formatNaira(item.price)}`;
}
