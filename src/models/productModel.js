import { db } from '../data/data.js'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    setDoc,
    doc
} from 'firebase/firestore';

const productsCollection = collection (db, 'productos');

export async function getAllProducts() {

    try {
        const querySnapshot = await getDocs(productsCollection);
        const products = [];

        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data()});
        });
        return products;
        
    } catch (error) {
        console.error(error);
    }

};

export async function getProductById(id) {

    try {
        const productDoc = await getDoc(doc(productsCollection,id));

        if (productDoc.exists()) {
            return productDoc.data();
        } else {
            return null;
        };

    } catch (error) {
        console.error(error);
    }

};

export async function createProduct(newProduct) {

    try {
        const docRef = await addDoc(productsCollection, newProduct);
        return { id: docRef.id, ...newProduct };

    } catch (error) {
        console.error(error);
    }
};

export async function updateProduct(id, productData) {

    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
        return false;
        }

        await setDoc(productRef, productData); // reemplazo completo
        return { id, ...productData };

    } catch (error) {
        console.error(error);
    }
}

export async function deleteProduct(id) {

    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await deleteDoc(productRef);
        return true;

    } catch (error) {
        console.error(error);
    }
};
