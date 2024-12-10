import express from "express";
import cors from "cors";
import { env } from "./config/env";
import expressAsyncHandler from "express-async-handler";
import { setCustomerData } from "./controllers/customer.controller";
import { postContact } from "./controllers/contact.controller";

const app = express();

// Helper functions
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("Nakoda Server");
});

app.get("/goldrate", (_,res)=>{

    res.json({goldrate: 6969})
});

app.post("/customer", expressAsyncHandler(setCustomerData));
app.post("/contact", expressAsyncHandler(postContact));

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});