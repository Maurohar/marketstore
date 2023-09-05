import NavBar from "../componentes/NavBar/NavBar";
import ItemListContainer from "../../containers/ItemListContainer/ItemListContainer";
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

    <Route to='/' element={<ItemListContainer />}></Route>
    <Route to='/category/:id' element={<ItemListContainer />}></Route>
    <Route to='/item/:id' element={<ItemListContainer />}></Route>
    </Routes> 
    </BrowserRouter>
    )
}