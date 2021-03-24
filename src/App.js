import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import TradeForm from './components/TradeForm';
import ModifyTradeForm from './components/ModifyTradeForm';
import TradesList from './components/TradeList';
import WindyTrades from './components/WindyTrades';

import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

function App() {
	const token = localStorage.getItem('token');
	const history = useHistory();

	useEffect(() => {
		if (token) {
			history.push('/dashboard');
		}
	}, [token, history]);

	return (
		<div className="body-container">
			<Switch>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
				<Route exact path="/modifyTradeForm">
					<ModifyTradeForm />
				</Route>
				<Route exact path="/addTrade">
					<TradeForm />
				</Route>
				<Route exact path="/openTrades">
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
				</Route>
				<Route exact path="/pastTrades">
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
				</Route>
				<ProtectedRoute exact path="/dashboard" component={Dashboard} />
				<ProtectedRoute exact path="/windyTrades" component={WindyTrades} />
				<Route exact path="/">
					<div>
						<NavBar />
						<Home />
					</div>
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
