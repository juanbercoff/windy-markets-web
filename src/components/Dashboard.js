import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import 'react-toastify/dist/ReactToastify.css';

import Account from './Account';
import styled from 'styled-components';
import TradeList from './TradeList';
import TradeSelector from './TradeSelector';
import ProfileMenu from './ProfileMenu';
import Dropdown from './User/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import { newTrade, confirmedTrade, deletedTrade, tradeText } from '../helpers';

const socket = io();

function Dashboard() {
	const userId = localStorage.getItem('userId');
	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(true);
	const [profileMenuToggle, setProfileMenuToggle] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	let requestURL;
	if (isOpen) {
		requestURL = '/api/trades/current';
	} else {
		requestURL = '/api/userTrades/all/' + userId;
	}

	useEffect(() => {
		socket.on('newtrade', (arg) => {
			toast(newTrade(arg));
		});
		socket.on('confirmedTrade', (arg) => {
			toast(confirmedTrade(arg));
		});
		socket.on('deletedTrade', (arg) => {
			toast(deletedTrade(arg));
		});
		socket.on('soldTrade', (arg) => {
			toast(tradeText(arg));
		});
		const getData = () => {
			setIsFetching(true);
			return fetch(requestURL, { method: 'GET', credentials: 'include' })
				.then((res) => {
					if (res.ok) {
						setIsFetching(false);
						return res.json();
					}
				})
				.then((trades) => {
					setData([...trades]);
				});
		};
		getData();
	}, [requestURL, isOpen]);

	return (
		<Container>
			<ToastContainer />
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
			{!isFetching ? (
				<>
					{' '}
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
							dropdown={Dropdown}
							tradeType={'trade'}
						/>
					) : (
						<TradeList
							title=""
							data={data}
							dropdown={Dropdown}
							tradeType={'userTrade'}
						/>
					)}
				</>
			) : (
				<Loading>Loading...</Loading>
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

const Loading = styled.div`
	margin: auto;
	font-size: 30px;
	color: white;
`;

export default Dashboard;
