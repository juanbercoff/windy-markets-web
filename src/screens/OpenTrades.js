import React from 'react';
import styled from 'styled-components';
import TradesList from '../components/TradeList';
import NavBar from '../components/NavBar';
import { useTrades } from '../hooks/useTrades';

export default function OpenTrades({ requestURL }) {
	const { trades } = useTrades(true, requestURL);
	return (
		<>
			<NavBar />
			<Container>
				<TradesList
					title="Open Trades"
					data={trades}
					requestURL={requestURL}
					dropdownDisplay={false}
				/>
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	background-color: black;
	height: 100vh;
	padding-top: 20vh;
`;
