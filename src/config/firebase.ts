import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from "firebase-admin/firestore";
import { env } from "./env";

const serviceAccountKey:ServiceAccount = {
    projectId: env.FIREBASE_PROJECT_ID,
    privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: env.FIREBASE_CLIENT_EMAIL
}


initializeApp({credential:cert(serviceAccountKey)});
const db = getFirestore();

if (db) {
  console.log("Firebase initialized successfully");
}

export { db };
