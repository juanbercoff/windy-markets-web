import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import TradeForm from './components/TradeForm';
import ModifyTradeForm from './components/ModifyTradeForm';
import TradesList from './components/TradeList';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      
      <Switch>
        <Route path="/login">
          <Login />
        </Route> 
        <Route path="/modifyTradeForm">
          <ModifyTradeForm/> 
        </Route>
        <Route path="/tradeForm">
          <TradeForm/> 
        </Route>
        <Route path="/tradesList">
          <TradesList/> 
        </Route>  
        <Route path="/">
          <NavBar/> 
          <Home />
        </Route>

      </Switch>
      
    </div>

  );
}

export default App;
