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

export const getCategoriaModel = async () => {
  const categoriaCollection = collection(db, "categorias");
  const snapshot = await getDocs(categoriaCollection);
  const categorias = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return categorias;
};

export const getCategoriaByIdModel = async (id) => {
  const categoriaDoc = doc(db, "categorias", id);
  const snapshot = await getDoc(categoriaDoc);

  if (!snapshot.exists()) return null;

  return { id: snapshot.id, ...snapshot.data() };
};

export const createCategoriaModel = async (categoria) => {
  const categoriaCollection = collection(db, "categorias");
  const docRef = await addDoc(categoriaCollection, categoria);
  return docRef.id;
};

export const updateCategoriaModel = async (id, categoria) => {
  const categoriaDoc = doc(db, "categorias", id);
  await updateDoc(categoriaDoc, categoria);
  return getCategoriaByIdModel(id);
};

export const deleteCategoriaModel = async (id) => {
  const categoriaDoc = doc(db, "categorias", id);
  await deleteDoc(categoriaDoc);
  return { id };
};
