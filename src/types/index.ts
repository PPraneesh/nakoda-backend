interface CustomerTypes {
  customerId: string;
  email?: string;
  name?: string;
  phone?: string;
  cartIds: string[];
  wishlistIds: string[];
  visitedProducts: string[];
  pagesViewed: string[];
  location: {
    x: string;
    y: string;
  };
  locale: string;
  contactAsked: boolean;
}

interface ProductTypes {
  id: string;
  name: string;
  link: string; // if product name is "gold ring" then link should be "gold-ring-nk101"
  description: string;
  priceRange: string;
  images: string[];
  gender: string;
  metal: string;
  gemstone?: string[];
  category: string[];
  occasion?: string[];
  metalColor?: "yellow" | "white" | "rose";
  purity?: "18KT" | "22KT" | "24KT" | string;
  weight?: number;
  size?: string;
  sourceLink?: string;
  isDeleted: boolean;
}

export { CustomerTypes, ProductTypes };
