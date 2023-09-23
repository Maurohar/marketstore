import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { doc , getDocs, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client'


function ItemDetail({ actualizarCarrito }) {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    
    const getProduct = async () => {
        try {
            const docRef = doc(db, 'products', id); 
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

    useEffect(() => {
        
        if (id) {
            getProduct();
        }
        console.log(product)
    }, [id]);
    
    return (
        <div>
            <h2>Detalles del Producto</h2>
            {product ? (
                <div>
                    <h3>{product.title}</h3>
                    <p>Categoría: {product.category}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Descripción: {product.description}</p>
                    <button onClick={() => actualizarCarrito(product)}>Comprar</button>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
            <ItemCount />
        </div>
    );
}

export default ItemDetail;