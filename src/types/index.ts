interface StoreData {
  customerId: string;
  email?: string;
  name?: string;
  phno?: string;
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

export { StoreData };
