import express from 'express';
import * as productControllers from '../controllers/productControllers.js';
import { authentication } from '../middlewares/authentication.js';

const router = express.Router();

router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById);
router.post('/', authentication, productControllers.createProduct);
router.put('/:id', authentication, productControllers.updateProduct);
router.delete('/:id', authentication, productControllers.deleteProduct);

export default router;