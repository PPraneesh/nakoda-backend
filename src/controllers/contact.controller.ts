import { Request, Response } from "express";
import { db } from "../config/firebase";
import { randomUUID } from "node:crypto";
import { env } from "../config/env";


// POST: /contact
const postContact = async (req: Request, res: Response): Promise<any> => {
  const { source } = req.body;
  let data;
  if (source === "contact") {
    const { name, email, phone, reason, message } = req.body;
    data = {
      name,
      email,
      phone,
      reason,
      message,
      createdAt: new Date().toISOString(),
    };
  } else {
    const { name, email, phone, lookingFor } = req.body;
    data = {
      name,
      email,
      phone,
      lookingFor,
      createdAt: new Date().toISOString(),
    };
  }

  try {
    const collection = db.collection(env.CONTACT_COLLECTION_NAME);
    const id = randomUUID();
    const docRef = collection.doc(id);
    await docRef.set(data);
    return res
      .status(200)
      .send({ success: true, message: "Data sent successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    return res
      .status(500)
      .send({ success: false, message: "Failed to send data" });
  }
};

export { postContact };
