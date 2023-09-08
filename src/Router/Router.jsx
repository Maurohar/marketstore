import NavBar from "../componentes/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer/ItemListContainer";

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

export default function Router (){
    return (
    <BrowserRouter>
    <NavBar />
    <Routes>

    <Route path='/' element={<ItemListContainer />}></Route>
    <Route path='/category/jewelery' element={<ItemListContainer />}></Route>
    <Route path='/item/:id' element={<ItemListContainer />}></Route>
    </Routes> 

    </BrowserRouter>
    )
}