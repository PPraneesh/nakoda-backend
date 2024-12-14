import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { env } from "./env";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

if (app && db && storage) {
  console.log("Firebase initialized successfully");
} else {
  throw new Error("Failed to initialise firebase");
}

export { db, storage };
