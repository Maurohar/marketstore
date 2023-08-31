import React, { useEffect, useState } from 'react';
import Item from '../../componentes/Item/Item';

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemListContainer;