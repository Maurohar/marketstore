import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'; // Import the ItemDetail component
import { db } from '../../firebase/client'; 
import { getDoc } from 'firebase/firestore';

function ItemDetailContainer({ actualizarCarrito }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect((product) => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, 'products', id); // Replace 'products' with your Firestore collection name
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    if (id) {
      getProduct();
      console.log(product)
    }
  }, [id, product]);

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <ItemDetail product={product} actualizarCarrito={actualizarCarrito} />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
