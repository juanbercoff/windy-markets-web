import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import WindyTrades from './components/WindyTrades';
import AdminDashboard from './components/Admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import PastTrades from './screens/PastTrades';
import OpenTrades from './screens/OpenTrades';

function App() {
	const token = localStorage.getItem('token');
	const role = localStorage.getItem('role');

	const history = useHistory();

	useEffect(() => {
		if (token) {
			history.push('/dashboard');
		}
	}, [token, history, role]);

	return (
		<div className="body-container">
			<Switch>
				<Route exact path="/admin">
					<Login />
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
				<Route exact path="/open-trades">
					<OpenTrades requestURL={'/api/trades/current'} />
				</Route>
				<Route exact path="/past-trades">
					<PastTrades requestURL={'http://161.35.8.242/api/trades/past'} />
				</Route>
				<ProtectedRoute exact path="/dashboard" component={AdminDashboard} />

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

export default App;
