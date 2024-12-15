import { db } from "../config/firebase";
import { CustomerTypes } from "../types";

const customerService = async (data: CustomerTypes): Promise<boolean> => {
  try {
    const docRef = db.collection("customer").doc(data.customerId);
    const res = await docRef.get();

    if (res.exists) {
      await docRef.update({ ...data });
      console.log("Document updated");
    } else {
      await docRef.set(data);
      console.log("Document created");
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { customerService };
