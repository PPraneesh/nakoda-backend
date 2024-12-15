import { db } from "../config/firebase";
// import { storage } from "../config/firebase";
import { CustomizeRequestTypes } from "../types";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { randomUUID } from "node:crypto";

const customizeService = async (
  data: CustomizeRequestTypes
): Promise<boolean> => {
  try {
    const collection = db.collection("customize");
    const id = randomUUID();
    const docRef = collection.doc(id);

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
      comments: data.comments,
      productId: data.productId || null,
      // fileUrl,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await docRef.set(customizeData);
    return true;
  } catch (error) {
    console.error("Error saving customization request:", error);
    return false;
  }
};

export { customizeService };
