import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import TradeForm from './components/TradeForm';
import ModifyTradeForm from './components/ModifyTradeForm';
import TradesList from './components/TradeList';
import WhatWeDo from './components/WhatWeDo';
import Dashboard from './components/Dashboard';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className='body-container'>
      
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route> 
        <Route path="/modifyTrade">
          <ModifyTradeForm/> 
        </Route>
        <Route path="/addTrade">
          <TradeForm/> 
        </Route>
        <Route path="/openTrades">
          <NavBar/>
          <TradesList title='Open Trades' requestURL='/api/trades/current'/> 
        </Route>
        <Route path="/pastTrades">
          <NavBar/>
          <TradesList title='Past Trades' requestURL='/api/trades/past'/> 
        </Route> 
        <Route path="/dashboard">
          <Dashboard/>  
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
