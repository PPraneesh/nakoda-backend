import dotenv from "dotenv";
dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  PORT: process.env.PORT || 8080,

  CUSTOMER_COLLECTION_NAME: "customer",
  CONTACT_COLLECTION_NAME: "contact",
  CUSTOMIZE_COLLECTION_NAME: "customize",
  PRODUCTS_COLLECTION_NAME: "products",

  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "",
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY ||"",
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL||"",
};

export { env };
