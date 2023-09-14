import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({actualizarCarrito}) {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProducts([data]);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        if (id) {
            getProducts();
        } else {
            const fetchAllProducts = async () => {
                try {
                    const response = await fetch('https://fakestoreapi.com/products?limit=20');
                    const data = await response.json();
                    setProducts(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchAllProducts();
        }
    }, [id]);

    return (
        <div>
            <h2>Product Details</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>Category: {product.category}</p>
                            <p>Price: ${product.price}</p>
                            <p>Description: {product.description}</p>
                            <button onClick={() => actualizarCarrito(product)}>Comprar</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>lorem</p>
                )}
            <ItemCount />
        </div>
    );
}

export default ItemDetail;