import dotenv from "dotenv";
dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  PORT: process.env.PORT || 8080,
  SPREADSHEET_ID : process.env.SPREADSHEET_ID,

  FIREBASE_TYPE: process.env.FIREBASE_TYPE || "",
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "",
  FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID ||"",
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY ||"",
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL||"",
  FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID||"",
  FIREBASE_AUTH_URI: process.env.FIREBASE_AUTH_URI||"",
  FIREBASE_TOKEN_URI: process.env.FIREBASE_TOKEN_URI||"",
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL||"",
  FIREBASE_CLIENT_X509_CERT_URL: process.env.FIREBASE_CLIENT_X509_CERT_URL||"",
  FIREBASE_UNIVERSE_DOMAIN: process.env.FIREBASE_UNIVERSE_DOMAIN||"",
};

export { env };
