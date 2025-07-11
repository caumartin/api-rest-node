import * as productServices from '../services/productServices.js';

export const getAllProducts = async (req, res) => {
    res.status(200).json(await productServices.getAllProducts());
}

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await productServices.getProductById(id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado'});
    }
}

export const createProduct = async (req, res) => {
    const newProduct = await productServices.createProduct({ ...req.body });

    if (newProduct) {
        res.status(201).json(newProduct);
    } else {
        res.status(404).json({ message: 'Producto no creado'});
    }
};

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const update = await productServices.updateProduct(id, { ...req.body });

    if (update) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Producto no encontrado'});
    }
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await productServices.deleteProduct(id);

    if (!product) {
        res.status(404).json({ error: "Producto no encontrado" });
    } else {
        res.status(204).send();
    }

}
