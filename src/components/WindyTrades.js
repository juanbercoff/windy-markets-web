import React, { useState, useEffect } from 'react';

import Account from './Account';
import styled from 'styled-components';
import TradeList from './TradeList';
import ProfileMenu from './ProfileMenu';

function WindyTrades() {
	const [data, setData] = useState([]);
	const [profileMenuToggle, setProfileMenuToggle] = useState(false);

	useEffect(() => {
		const getData = () => {
			return fetch('/api/trades/all', {
				method: 'GET',
				credentials: 'include',
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
				})
				.then((trades) => {
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
			<ProfileMenu
				displayProfileMenu={profileMenuToggle}
				handleClick={() => {
					return setProfileMenuToggle(!profileMenuToggle);
				}}
			/>
			<Wrapper>
				<TradeList
					title="Past Trades"
					data={data}
					requestURL={'/api/trades/all'}
					tradeType={'trade'}
				/>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #3b3c3d;
	height: 100vh;
`;

const Wrapper = styled.div`
	overflow: auto;
	margin-top: 10vh;
`;

export default WindyTrades;
