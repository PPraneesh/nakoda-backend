import { Request, Response } from "express";
import { customerService } from "../services/customer.service";

const setCustomerData = async (req: Request, res: Response): Promise<any> => {
  const { data }  = req.body;
  
  const status = await customerService(data);

  if (status) {
    return res.send({
      success: true,
      message: "added customer data",
    });
  }
  return res.send({
    success: false,
    message: "Failed to add data",
  });
};

export { setCustomerData };
