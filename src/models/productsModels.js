import db from "../config/firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");
export const getProductsModel = async () => {
  const snapshot = await getDocs(productsCollection);
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products;
};

export const getProductByIdModel = async (id) => {
  const productRef = doc(productsCollection, id);
  const snapshot = await getDoc(productRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const createProductModel = async (product) => {
  const docRef = await addDoc(productsCollection, product);
  return { id: docRef.id, ...product };
};

export const updateProductModel = async (id, product) => {
  const productRef = doc(productsCollection, id);
  const snapshot = await getDoc(productRef);
  if (!snapshot.exists()) {
    return null;
  }
  await setDoc(productRef, { ...product });
  return { id, ...product };
};

export const deleteProductModel = async (id) => {
  const productRef = doc(productsCollection, id);
  const snapshot = await getDoc(productRef);
  if (!snapshot.exists()) {
    return null;
  }

  await deleteDoc(productRef);
  return true;
};
