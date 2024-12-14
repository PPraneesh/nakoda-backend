import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from "firebase-admin/firestore";
import { env } from "./env";
import { getStorage } from "firebase-admin/storage";

const serviceAccountKey:ServiceAccount = {
    projectId: env.FIREBASE_PROJECT_ID,
    privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: env.FIREBASE_CLIENT_EMAIL
}


const app = initializeApp({credential:cert(serviceAccountKey)});
const db = getFirestore(app);
const storage = getStorage(app);

if (db && storage) {
  console.log("Firebase initialized successfully");
} else {
  throw new Error("Failed to initialise firebase");
}

export { db, storage };
