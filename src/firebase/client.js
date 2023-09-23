import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJTAhbCmypzf15SCMMq5u2VO5pvGBJurg",
  authDomain: "ecommerce-maurohar.firebaseapp.com",
  projectId: "ecommerce-maurohar",
  storageBucket: "ecommerce-maurohar.appspot.com",
  messagingSenderId: "674229666800",
  appId: "1:674229666800:web:ba7c1f13e0b56139241335"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProducts = async () => {

  const querySnapshot = await getDocs(collection(db, "products"));

  const mappedObj = querySnapshot.docs.map((doc) => {

    return {
      id: doc.id,
      ...doc.data()
    }
  })
  return mappedObj
}


export async function getProductByCategory(category) {

  const q = query(collection(db, "products"), where("category", "==", category));

  const querySnapshot = await getDocs(q);
  const nuevoArray = querySnapshot.docs.map((doc) => {
    return {

      id: doc.id,
      ...doc.data()
    }
    

  });
  return nuevoArray
}
