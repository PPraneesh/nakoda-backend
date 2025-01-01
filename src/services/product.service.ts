import { db } from "../config/firebase";
import { env } from "../config/env";
import { ProductTypes } from "../types";

const collection = db.collection(env.PRODUCTS_COLLECTION_NAME);

const getProductsService = async (): Promise<boolean | any[]> => {
  try {
    const products = await collection.get();
    const productsArray: any[] = [];
    products.forEach((doc) => {
      productsArray.push(doc.data());
    });
    return productsArray;
  } catch (error) {
    console.error("Error: product.service.ts -> getProductsService", error);
    return false;
  }
};

const postProductService = async (data: ProductTypes): Promise<boolean> => {
  try {
    const products = await collection.get();
    const productId = (products.size + 1).toString();

    data.id = productId;
    data.link = data.name.toLowerCase().replace(/ /g, "-") + "-" + productId;
    data.isDeleted = false;

    await collection.doc(productId).set(data);
    return true;
  } catch (error) {
    console.error("Error: product.service.ts -> postProductService", error);
    return false;
  }
};

const putProductService = async (
  data: any,
  productId: string
): Promise<boolean> => {
  try {
    await collection.doc(productId).update(data);
    return true;
  } catch (error) {
    console.error("Error: product.service.ts -> putProductService", error);
    return false;
  }
};

const deleteProductService = async (productId: string): Promise<boolean> => {
  try {
    await collection.doc(productId).update({ isDeleted: true });
    return true;
  } catch (error) {
    console.error("Error: product.service.ts -> deleteProductService", error);
    return false;
  }
};

const getDeletedProductsService = async (): Promise<boolean | any[]> => {
  try {
    const products = await collection.where("isDeleted", "==", true).get();
    const productsArray: any[] = [];
    products.forEach((doc) => {
      productsArray.push(doc.data());
    });
    return productsArray;
  } catch (error) {
    console.error(
      "Error: product.service.ts -> getDeletedProductsService",
      error
    );
    return false;
  }
};

export {
  getProductsService,
  postProductService,
  putProductService,
  deleteProductService,
  getDeletedProductsService,
};
