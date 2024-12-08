import { Request, Response } from "express";

const setCustomerData = (req: Request, res: Response) => {
  res.send("Customer Data");
};

export { setCustomerData };
