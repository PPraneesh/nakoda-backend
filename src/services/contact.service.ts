import { db } from "../config/firebase";
import { ContactRequestTypes } from "../types";
import { collection, doc, setDoc } from "firebase/firestore";
import { randomUUID } from "node:crypto";

const contactService = async (data: ContactRequestTypes): Promise<boolean> => {
  try {
    const coll = collection(db, "contact");
    const id = randomUUID();
    const docRef = doc(coll, id);
    await setDoc(docRef, data);
    return true;
  } catch (error) {
    console.error("Error saving contact:", error);
    return false;
  }
};

export { contactService };
