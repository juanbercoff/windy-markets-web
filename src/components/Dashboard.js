import React, { useState, useEffect } from 'react';

import Account from './Account';
import styled from 'styled-components';
import TradeList from './TradeList';
import TradeSelector from './TradeSelector';
import ProfileMenu from './ProfileMenu';

function Dashboard() {
	const userId = localStorage.getItem('userId');
	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(true);
	const [profileMenuToggle, setProfileMenuToggle] = useState(false);
	let requestURL;
	useEffect(() => {
		const getData = () => {
			if (isOpen) {
				requestURL = '/api/trades/current';
			} else {
				requestURL = '/api/userTrades/all/' + userId;
			}

			return fetch(requestURL, { method: 'GET', credentials: 'include' })
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
	}, [requestURL, isOpen]);

	return (
		<Container>
			<Account
				handleClick={() => {
					return setProfileMenuToggle(!profileMenuToggle);
				}}
			/>
			<ProfileMenu
				displayProfileMenu={profileMenuToggle}
				handleClick={() => {
					return setProfileMenuToggle(!profileMenuToggle);
				}}
			/>

			<TradeSelector
				tradeSelectorToggler={() => {
					setData([]);
					return setIsOpen(!isOpen);
				}}
				isOpen={isOpen}
			/>
			{isOpen ? (
				<TradeList
					title=""
					data={data}
					requestURL="/api/trades/current"
					dropdownDisplay={true}
					tradeType={'trade'}
				/>
			) : (
				<TradeList
					title=""
					data={data}
					requestURL={'/api/userTrades/all/19'}
					dropdownDisplay={true}
					tradeType={'userTrade'}
				/>
			)}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #3b3c3d;
	height: 100vh;
`;

export default Dashboard;
