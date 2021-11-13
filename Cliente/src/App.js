import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import './Style/estilos.css';
import Head from './components/Head';
import Login from './components/Login';
import Main from './components/Main';
import MainUser from './components/MainUser';
import MainVentas from './components/MainVentas';
import MainProducto from './components/productos/MainProductos';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ventas">
          <Head></Head>
          <MainVentas></MainVentas>
        </Route>

        <Route path="/productos">
          <Head></Head>
          <MainProducto></MainProducto>
        </Route>

        <Route path="/usuarios">          
            <Head> </Head>
            <MainUser></MainUser>         
        </Route>

        <Route exact path="/">       
        <Login></Login>    
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
