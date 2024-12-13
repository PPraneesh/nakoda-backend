import { Request, Response } from "express";

const postContact = (_: Request, res: Response) => {
  res.send("Contact data received");
};

export { postContact };
