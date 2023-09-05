import React from 'react';
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router/Router'


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