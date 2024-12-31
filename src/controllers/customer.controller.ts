import { Request, Response } from "express";
import { db } from "../config/firebase";
import { env } from "../config/env";

// GET: /analytics
const getCustomersData = async (req: Request, res: Response): Promise<any> => {
  return res.status(200).send({
    success: true,
    message: "get customers data",
  })
}


// POST: /analytics
const postCustomerData = async (req: Request, res: Response): Promise<any> => {
  const { data } = req.body;

  if (!data || !data.customerId) {
    return res.status(400).send({
      success: false,
      message: "Data is required",
    });
  }

  try {
    const docRef = db.collection(env.CUSTOMER_COLLECTION_NAME).doc(data.customerId);
    const doc = await docRef.get();

    if (doc.exists) await docRef.update({ ...data });
    else await docRef.set(data);

    return res.status(200).send({
      success: true,
      message: "added customer data",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Failed to add data",
    });
  }
};

export { getCustomersData, postCustomerData };
