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

export { CustomerTypes, CustomizeRequestTypes, ContactRequestTypes };
