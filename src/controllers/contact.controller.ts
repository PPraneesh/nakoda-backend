import { Request, Response } from "express";

const postContact = (req: Request, res: Response) => {
  res.send("Contact data received");
};

export { postContact };
