import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../../componentes/Item/Item'
import { Circles as Loader } from 'react-loader-spinner';

function ItemListContainer({ actualizarCarrito }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        const url = `https://fakestoreapi.com/products?limit=20`;
        setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (category) {
                    let productosFiltrados = data.filter((element) => category == element.category)
                    setProducts(productosFiltrados)
                    setError(false);
                    setIsLoading(false);
                } else {
                    setProducts(data);
                    setError(false);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                setError(true)
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