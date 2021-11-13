import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import ClienteMain from './components/ClienteMain';
import Head from './components/Head';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Login></Login>                 
        </Route>

        <Route path="/ventas">
          <Head></Head>
          <Main></Main>
        </Route>

        <Route path="/productos">
          <Head></Head>
          <Main></Main>
        </Route>

        <Route path="/usuarios">
          <Head></Head>
          <ClienteMain></ClienteMain> 
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
