interface StoreData {
  customerId: string;
  email?: string;
  name?: string;
  phone?: string;
  cartIds: string[];
  wishlistIds: string[];
  visitedProducts: string[];
  engagement: {
    timeOnSite: number;
    pageViews: number;
    clickThroughRate: number;
  };
  location: {
    x: string;
    y: string;
  };
  locale: string;
  lastVisited: string;
  referralSource: string;
  contactAsked: boolean;
}

interface CustomizeRequestTypes {
  name: string;
  email: string;
  phone: string;
  comments: string;
  productId?: string | null;
  file?: File | null;
  createdAt: string;
}

interface ContactRequestTypes {
  name: string;
  email: string;
  phone: string;
  lookingFor?: string;
  reason?: string;
  message?: string;
  createdAt: string;
}

export { StoreData, CustomizeRequestTypes, ContactRequestTypes };
