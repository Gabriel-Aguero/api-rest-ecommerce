// authModel.js
import admin from "../config/firebaseAdmin.js";

export const authModel = {
  /**
   * Busca un usuario por email
   * @param {string} email
   * @returns {Promise<admin.auth.UserRecord>}
   */
  getUserByEmail: async (email) => {
    try {
      return await admin.auth().getUserByEmail(email);
    } catch (error) {
      throw new Error("Usuario no encontrado");
    }
  },

  /**
   * Crea un nuevo usuario en Firebase Auth
   * @param {string} email
   * @param {string} password
   * @returns {Promise<admin.auth.UserRecord>}
   */
  createUser: async (email, password) => {
    try {
      return await admin.auth().createUser({
        email,
        password,
      });
    } catch (error) {
      throw new Error(`Error al crear usuario: ${error.message}`);
    }
  },

  /**
   * Genera un token personalizado para el usuario
   * @param {string} uid
   * @returns {Promise<string>}
   */
  generateCustomToken: async (uid) => {
    try {
      return await admin.auth().createCustomToken(uid);
    } catch (error) {
      throw new Error(`Error al generar token: ${error.message}`);
    }
  },

  /**
   * Verifica un token ID de Firebase
   * @param {string} idToken
   * @returns {Promise<admin.auth.DecodedIdToken>}
   */
  verifyIdToken: async (idToken) => {
    try {
      return await admin.auth().verifyIdToken(idToken);
    } catch (error) {
      throw new Error(`Token inválido: ${error.message}`);
    }
  },

  /**
   * Guarda información adicional del usuario en Firestore
   * @param {string} uid
   * @param {object} userData
   * @returns {Promise<void>}
   */
  saveUserData: async (uid, userData) => {
    try {
      await admin
        .firestore()
        .collection("users")
        .doc(uid)
        .set({
          ...userData,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });
    } catch (error) {
      throw new Error(`Error al guardar datos de usuario: ${error.message}`);
    }
  },

  /**
   * Obtiene información adicional del usuario desde Firestore
   * @param {string} uid
   * @returns {Promise<object>}
   */
  getUserData: async (uid) => {
    try {
      const doc = await admin.firestore().collection("users").doc(uid).get();
      return doc.exists ? doc.data() : null;
    } catch (error) {
      throw new Error(`Error al obtener datos de usuario: ${error.message}`);
    }
  },
};


