import React, { useState, useEffect } from 'react';

import Account from '../Account';
import styled from 'styled-components';
import TradeList from '../TradeList';
import TradeSelector from './TradeSelector';
import ProfileMenu from '../ProfileMenu';
import Dropdown from './Dropdown';

function AdminDashboard() {
	const [data, setData] = useState([]);
	const [profileMenuToggle, setProfileMenuToggle] = useState(false);
	useEffect(() => {
		const getData = () => {
			return fetch('/api/trades/current', {
				method: 'GET',
				credentials: 'include',
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
				})
				.then((trades) => {
					console.log(trades);
					setData([...trades]);
				});
		};
		getData();
	}, []);

	return (
		<Container>
			<Account
				handleClick={() => {
					return setProfileMenuToggle(!profileMenuToggle);
				}}
			/>
			<TradeSelector />
			<ProfileMenu
				displayProfileMenu={profileMenuToggle}
				handleClick={() => {
					return setProfileMenuToggle(!profileMenuToggle);
				}}
			/>
			<TradeList title="" data={data} dropdown={Dropdown} tradeType={'trade'} />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #3b3c3d;
	height: 100vh;
`;

export default AdminDashboard;
