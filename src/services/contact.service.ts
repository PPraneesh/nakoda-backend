import { db } from "../config/firebase";
import { ContactRequestTypes } from "../types";
import { randomUUID } from "node:crypto";

const contactService = async (data: ContactRequestTypes): Promise<boolean> => {
  try {
    const collection = db.collection("contact");
    const id = randomUUID();
    const docRef = collection.doc(id);
    await docRef.set(data);
    return true;
  } catch (error) {
    console.error("Error saving contact:", error);
    return false;
  }
};

export { contactService };
