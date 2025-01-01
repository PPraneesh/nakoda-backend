import { Request, Response } from "express";
import {
  getProductsService,
  postProductService,
  putProductService,
  deleteProductService,
  getDeletedProductsService,
} from "../services/product.service";

// GET: /products
const getProducts = async (_: Request, res: Response): Promise<any> => {
  const products = await getProductsService();
  if (!products)
    return res
      .status(500)
      .send({ success: false, message: "Failed to fetch products" });

  return res
    .status(200)
    .send({ success: true, message: "Products fetched", data: products });
};

// POST: /product
const postProduct = async (req: Request, res: Response): Promise<any> => {
  const { formData: data } = req.body;
  if (!data) {
    return res
      .status(500)
      .send({ success: false, message: "Failed to add product" });
  }

  const status = await postProductService(data);
  if (!status)
    return res
      .status(500)
      .send({ success: false, message: "Failed to add product" });

  return res.status(200).send({ success: true, message: "Product added" });
};

// PUT: /product/:productId
const putProduct = async (req: Request, res: Response): Promise<any> => {
  const { formData: data } = req.body;
  const { productId } = req.params;

  if (!data || !productId) {
    return res
      .status(500)
      .send({ success: false, message: "Failed to update product" });
  }

  const status = await putProductService(data, productId);

  if (!status)
    return res
      .status(500)
      .send({ success: false, message: "Failed to update product" });

  return res.status(200).send({ success: true, message: "Product updated" });
};

// PUT: /product/:productId/delete
const deleteProduct = async (req: Request, res: Response): Promise<any> => {
  const { productId } = req.params;

  if (!productId) {
    return res
      .status(500)
      .send({ success: false, message: "Failed to delete product" });
  }

  const status = await deleteProductService(productId);

  if (!status)
    return res
      .status(500)
      .send({ success: false, message: "Failed to delete product" });

  return res.status(200).send({ success: true, message: "Product deleted" });
};

// GET: /products/deleted
const getDeletedProducts = async (_: Request, res: Response): Promise<any> => {
  const products = await getDeletedProductsService();

  if (!products)
    return res
      .status(500)
      .send({ success: false, message: "Failed to fetch deleted products" });

  return res.status(200).send({
    success: true,
    message: "Deleted products fetched",
    data: products,
  });
};

export {
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
  getDeletedProducts,
};
