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
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';



function App() {
  return (
    <div className='body-container'>  
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route> 
        <Route exact path="/modifyTrade">
          <ModifyTradeForm/> 
        </Route>
        <Route exact path="/addTrade">
          <TradeForm/> 
        </Route>
        <Route exact path="/openTrades">
          <NavBar/>
          <Container>
            <TradesList title='Open Trades' requestURL='/api/trades/current'/> 
          </Container>
        </Route>
        <Route exact path="/pastTrades">
          <NavBar/>
          <Container>
            <TradesList title='Past Trades' requestURL='/api/trades/past'/> 
          </Container>
        </Route> 
        <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
{/*         <Protect path="/dashboard">
          <Dashboard/>  
        </Route> */} 
        <Route exact path="/">
          <NavBar/>
          <Home />
          <WhatWeDo/>
        </Route>

      </Switch>
      
    </div>

  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 100vh;
  padding-top: 20vh;
`

export default App;
