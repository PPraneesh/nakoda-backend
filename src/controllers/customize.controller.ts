import { Request, Response } from "express";
import { env } from "../config/env";
import { db } from "../config/firebase";
import { randomUUID } from "node:crypto";

// import { storage } from "../config/firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


// POST: /customize
const postCustomize = async (req: Request, res: Response): Promise<any> => {
  const { formData: data } = req.body;

  try {
    const collection = db.collection(env.CUSTOMIZE_COLLECTION_NAME);
    const id = randomUUID();
    const docRef = collection.doc(id);

    // for file upload
    // let fileUrl = null;
    // if (data.file) {
    //   const fileRef = ref(storage, `customize/${id}/${data.file.name}`);
    //   await uploadBytes(fileRef, data.file);
    //   fileUrl = await getDownloadURL(fileRef);
    // }

    const customizeData = {
      id: id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      budget: data.budget,
      comments: data.comments,
      productId: data.productId || null,
      // fileUrl,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await docRef.set(customizeData);
    return res.send({ success: true, message: "Customization request sent" });
  } catch (error) {
    console.error("Error saving customization request:", error);
    return res.send({
      success: false,
      message: "Failed to send customization request",
    });
  }
};

export { postCustomize };
