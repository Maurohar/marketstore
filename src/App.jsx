import React from 'react';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'Router'


const App = () => {

    return (    
    <div className="container-principal">
        <header>
        <> 
        <Router />
        </>

        </header>

        <main>
        <> 
        <ItemListContainer />
        </>

        </main>
    </div>
  );
}

export default App;