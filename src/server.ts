import express from "express";
import cors from "cors";
import { env } from "./config/env";
import expressAsyncHandler from "express-async-handler";
import {
  getCustomersData,
  postCustomerData,
} from "./controllers/customer.controller";
import { postContact } from "./controllers/contact.controller";
import { postCustomize } from "./controllers/customize.controller";
import { getGoldRate } from "./controllers/goldrate.controller";
import {
  deleteProduct,
  getDeletedProducts,
  getProducts,
  postProduct,
  putProduct,
} from "./controllers/product.controller";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/gold-rate", expressAsyncHandler(getGoldRate));
app.get("/analytics", expressAsyncHandler(getCustomersData)); // for admin
app.post("/analytics", expressAsyncHandler(postCustomerData));
app.post("/contact", expressAsyncHandler(postContact));
app.post("/customize", expressAsyncHandler(postCustomize));

// all for admin
app.get("/products", expressAsyncHandler(getProducts));
app.post("/product", expressAsyncHandler(postProduct));
app.put("/product/:productId", expressAsyncHandler(putProduct));
app.put("/product/:productId/delete", expressAsyncHandler(deleteProduct)); 
app.get("/products/deleted", expressAsyncHandler(getDeletedProducts)); 

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
