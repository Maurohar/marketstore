import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../../componentes/Item/Item'
import { Circles as Loader } from 'react-loader-spinner';
import { getProducts, getProductByCategory } from '../../firebase/client';


function ItemListContainer({ actualizarCarrito }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { category } = useParams();
    console.log(products)
    
    useEffect(() => {
        setIsLoading(true);
        (category === undefined ? getProducts() : getProductByCategory(category))
            .then(data => {
                setProducts(data);
                setError(false);
                setIsLoading(false);
            })
        .catch(error => {
            setError(true)
            console.log(error)
            setIsLoading(false);
        });
}, [category]);

if (isLoading) {
    return (
        <main>
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </main>
    )
}

if (error) {
    return (
        <main>
            <p>Hubo un error al buscar los productos</p>
        </main>
    )
}

return (
    <main>
        {
            products.length === 0
                ? <p>No se encontraron productos</p>
                : (
                    products.map(product => (
                        <Item key={product.id} product={product} actualizarCarrito={actualizarCarrito} />
                    ))
                )
        }
    </main>
);
}

export default ItemListContainer;