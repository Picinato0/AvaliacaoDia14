import React from 'react';
import Header from './components/header/Header';
import Home from './Pages/Home';
import Pacotes from './Pages/PacotesTable/Pacotes';
import Assinar from './Pages/Assinar';
import Footer from './components/footer/Footer';
import PageError from './Pages/PageError';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/pacotes" exact component={Pacotes} /> 
          <Route path="/assinar" exact component={Assinar} /> 
          <Route component={PageError} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
