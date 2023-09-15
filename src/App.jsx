import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router/Router';
import { db } from '../src/componentes/firebase/client';
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore';

const App = () => {
  
  const productRef = doc(db, "products", "BgpXywdiwXTdfbVaOFVH");

  const getProduct = () => {
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.data()); // Acceder a los datos del documento
      } else {
        console.log("El documento no existe");
      }
    }).catch((error) => {
      console.error("Error al obtener el producto:", error);
    });
  }

  return (
    <div className="container-principal">
      <Router />
    </div>
  );
}

export default App;


