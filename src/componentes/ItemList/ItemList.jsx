import React from 'react';
import Item from '../Item/Item'

function ItemList ({ products }) {
    return (
        <div className="item-list">
        <ul>
            {products.map(product =>
                (<li key={product.id}>

                    <h3>{product.title}</h3>
                    <p>Precio: {product.price}$</p>
                    <p>Categoría: {product.category}</p>

                </li>
            ))}
                    </ul>
                    <Item />
        </div>
    );
}

export default ItemList;