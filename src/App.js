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
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const token = localStorage.getItem('token');

function App() {
	return (
		<div className="body-container">
			<Switch>
				<Route exact path="/login">
					{token ? <Redirect to={{ pathname: '/dashboard' }} /> : <Login />}
				</Route>
				<Route exact path="/register">
					{token ? <Redirect to={{ pathname: '/dashboard' }} /> : <Register />}
				</Route>
				<Route exact path="/modifyTradeForm">
					<ModifyTradeForm />
				</Route>
				<Route exact path="/addTrade">
					<TradeForm />
				</Route>
				<Route exact path="/openTrades">
					{token ? (
						<Redirect to={{ pathname: '/dashboard' }} />
					) : (
						<div>
							<NavBar />
							<Container>
								<TradesList
									title="Open Trades"
									requestURL="/api/trades/current"
									dropdownDisplay={false}
								/>
							</Container>
						</div>
					)}
				</Route>
				<Route exact path="/pastTrades">
					{token ? (
						<Redirect to={{ pathname: '/dashboard' }} />
					) : (
						<div>
							<NavBar />
							<Container>
								<TradesList
									title="Past Trades"
									requestURL="/api/trades/past"
									dropdownDisplay={false}
								/>
							</Container>
						</div>
					)}
				</Route>
				<ProtectedRoute exact path="/dashboard" component={Dashboard} />
				<Route exact path="/">
					{token ? (
						<Redirect to={{ pathname: '/dashboard' }} />
					) : (
						<div>
							<NavBar />
							<Home />
							<WhatWeDo />
						</div>
					)}
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
`;

export default App;
