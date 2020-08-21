import React from 'react';
import './App.css';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/header/header.component';
function App(){
  return(
    <div>
      <Header />
      <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
      </Switch>
    </div>
  );
}

export default App;