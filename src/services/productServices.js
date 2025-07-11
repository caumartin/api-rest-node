import * as productModel from '../models/productModel.js'

export const getAllProducts = async () => {
    return await productModel.getAllProducts();
};

export const getProductById = async (id) => {
    return await productModel.getProductById(id);
};

export const createProduct = async (newProduct) => {
    return await productModel.createProduct(newProduct);
};

export const updateProduct = async (id, update) => {
    return await productModel.updateProduct(id, update);
};

export const deleteProduct = async (id) => {
    return await productModel.deleteProduct(id);
};
