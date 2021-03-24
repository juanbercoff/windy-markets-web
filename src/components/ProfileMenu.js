import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function ProfileMenu({ displayProfileMenu, handleClick }) {
	const history = useHistory();

	const signOut = () => {
		console.log('LogOUt');

		return fetch('/api/user/logout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		})
			.then(() => {
				localStorage.removeItem('token');
				history.push('/');
			})
			.catch((err) => console.log(err));
	};

	return displayProfileMenu ? (
		<ProfileMenuWrapper>
			<List>
				<ListItem
					onClick={() => {
						handleClick();
						return history.push('/dashboard');
					}}
				>
					Home
				</ListItem>
				<ListItem onClick={handleClick}>Profile</ListItem>
				<ListItem>FAQ</ListItem>
				<ListItem
					onClick={() => {
						handleClick();
						return history.push('/windyTrades');
					}}
				>
					Windy Trades
				</ListItem>
				<ListItem onClick={signOut}>Sign Out</ListItem>
			</List>
		</ProfileMenuWrapper>
	) : null;
}

const ProfileMenuWrapper = styled.div(() => ({
	display: 'flex',
	position: 'fixed',
	top: '71px',
	right: '0px',
	backgroundColor: '#303133',
	color: 'white',
	zIndex: 1,
}));

const List = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`;

const ListItem = styled.li`
	list-style: none;
	padding: 10px 15px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	cursor: pointer;
`;

export default ProfileMenu;
