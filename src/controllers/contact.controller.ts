import { Request, Response } from "express";
import { ContactRequestTypes } from "../types";
import { contactService } from "../services/contact.service";

// from contact.tsx page - name, email, phone, reason, message
// from popupcontact.tsx - name, email, phone, lookingFor

const postContact = async (req: Request, res: Response): Promise<any> => {
  const { source } = req.body;
  let data: ContactRequestTypes;
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

  const status = await contactService(data);
  if (!status) {
    return res.send({ success: false, message: "Failed to send data" });
  }
  return res.send({ success: true, message: "Data sent successfully" });
};

export { postContact };
