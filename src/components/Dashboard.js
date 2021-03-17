import React, { useState } from 'react';
import login from '../public/images/login.png';
/* import Icon from './IconComponent'; */
import styled from 'styled-components';
import TradeList from './TradeList';
import TradeSelector from './TradeSelector';
import ProfileMenu from './ProfileMenu';

const userId = localStorage.getItem('userId');

function Dashboard() {
	const [isOpen, setIsOpen] = useState(true);
	const [profileMenuToggle, setProfileMenuToggle] = useState(false);
	return (
		<Container>
			<Wrapper>
				<List>
					<AccountImage
						src={login}
						onClick={() => {
							return setProfileMenuToggle(!profileMenuToggle);
						}}
					></AccountImage>
				</List>
			</Wrapper>
			<ProfileMenu displayProfileMenu={profileMenuToggle} />
			<TradeSelector
				tradeSelectorToggler={() => {
					return setIsOpen(!isOpen);
				}}
				isOpen={isOpen}
			/>
			{isOpen ? (
				<TradeList
					title=""
					requestURL="/api/trades/current"
					dropdownDisplay={true}
				/>
			) : (
				<TradeList
					title=""
					requestURL={'/api/userTrades/all/' + userId}
					dropdownDisplay={true}
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

const Wrapper = styled.div`
	display: flex;
	position: fixed;
	right: 0;
	top: 0;
`;

const List = styled.ul`
	display: flex;
	padding: 1.5vh;
`;

const AccountImage = styled.img`
    alt='account';
    height: 30px;
    width: auto;
    margin: 1vh;
`;

export default Dashboard;
