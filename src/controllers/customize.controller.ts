import { Request, Response } from "express";

const postCustomize = (_: Request, res: Response) => {
  res.send("Customize request");
};

export { postCustomize };
