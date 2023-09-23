import { useState } from "react";
import NavBar from "../componentes/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer/ItemListContainer";
import Item from '../componentes/Item/Item'
import ItemDetail from "../componentes/ItemDetail/ItemDetail";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'


export default function Router (){
    const [cart, setCart] = useState([]);

    const actualizarCarrito = (product) => {
        setCart(cart.concat(product));
    }

    return (
        <BrowserRouter>
            <NavBar cart={cart} />
            <Routes>
                <Route path='/' element={<ItemListContainer actualizarCarrito={actualizarCarrito} />}></Route>
                <Route path='/:category' element={<ItemListContainer actualizarCarrito={actualizarCarrito} />}></Route>
                <Route path='/item/:id' element={<ItemDetail actualizarCarrito={actualizarCarrito} />}></Route>
                <Route path='/cart/:id' element={<ItemDetail actualizarCarrito={actualizarCarrito} />}></Route>
                <Route path='/detail:id' element={<Item actualizarCarrito={actualizarCarrito} />}></Route>
                <Route path='/user:id' element={<Item actualizarCarrito={actualizarCarrito} />}></Route>
            </Routes> 
        </BrowserRouter>
    )
}