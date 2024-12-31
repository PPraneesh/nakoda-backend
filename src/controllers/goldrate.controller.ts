import { Request, Response } from "express";


// GET: /gold-rate
const getGoldRate = (_: Request, res: Response) => {
  res.send("Gold Rate is 50000");
};

export { getGoldRate };
