import db from "../firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const getProductsModel = async () => {
  const productsCollection = collection(db, "products");
  const snapshot = await getDocs(productsCollection);
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products;
};

export const getProductByIdModel = async (id) => {
  const productDoc = doc(db, "products", id);
  const snapshot = await getDoc(productDoc);

  if (!snapshot.exists()) return null;

  return { id: snapshot.id, ...snapshot.data() };
};

export const createProductModel = async (product) => {
  const productsCollection = collection(db, "products");
  const docRef = await addDoc(productsCollection, product);
  return docRef.id;
};

export const updateProductModel = async (id, product) => {
  const productDoc = doc(db, "products", id);
  await updateDoc(productDoc, product);
  return getProductByIdModel(id);
};

export const deleteProductModel = async (id) => {
  const productDoc = doc(db, "products", id);
  await deleteDoc(productDoc);
  return { id };
};

export const getProductsByCategoriaModel = async (categoria) => {
  const q = query(
    collection(db, "products"),
    where("category", "==", categoria)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const searchProductsModel = async (query) => {
  const productsCollection = collection(db, "products");
  const snapshot = await getDocs(productsCollection);
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
};
