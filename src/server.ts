import express from "express";
import cors from "cors";
import { env } from "./config/env";
import expressAsyncHandler from "express-async-handler";
import { setCustomerData } from "./controllers/customer.controller";
import { postContact } from "./controllers/contact.controller";
import { postCustomize } from "./controllers/customize.controller";
import { getGoldRate } from "./controllers/goldrate.controller";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/goldrate", expressAsyncHandler(getGoldRate));
app.post("/analytics", expressAsyncHandler(setCustomerData));
app.post("/contact", expressAsyncHandler(postContact));
app.post("/customize", expressAsyncHandler(postCustomize));

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
