import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import TradeForm from './components/TradeForm';
import ModifyTradeForm from './components/ModifyTradeForm';
import TradesList from './components/TradeList';
import WhatWeDo from './components/WhatWeDo';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className='body-container'>
      
      <Switch>
        <Route path="/login">
          <Login />
        </Route> 
        <Route path="/modifyTrade">
          <ModifyTradeForm/> 
        </Route>
        <Route path="/addTrade">
          <TradeForm/> 
        </Route>
        <Route path="/tradesList">
          <TradesList/> 
        </Route>  
        <Route path="/">
          <NavBar/>
          <Home />
          <WhatWeDo/>
        </Route>

      </Switch>
      
    </div>

  );
}

export default App;
