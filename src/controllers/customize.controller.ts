import { Request, Response } from "express";
import { CustomizeRequestTypes } from "../types";
import { customizeService } from "../services/customize.service";

// from customize.tsx - name, email, phone, comments, productId?, file?

const postCustomize = async (req: Request, res: Response): Promise<any> => {
  const { formData: data } = req.body;
  const { name, email, phone, comments, productId, file } = data;
  const customizeData: CustomizeRequestTypes = {
    name,
    email,
    phone,
    comments,
    productId,
    file,
    createdAt: new Date().toISOString(),
  };

  const status = await customizeService(data);
  if (status) {
    return res.send({ success: true, message: "Customization request sent" });
  }

  return res.send({
    success: false,
    message: "Failed to send customization request",
  });
};

export { postCustomize };
