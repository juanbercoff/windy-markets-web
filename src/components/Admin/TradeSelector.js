import React, { useState } from 'react';
import styled from 'styled-components';
import plusButtomPng from '../../public/images/plusButton.png';
import Modal from '../Modal';

function TradeSelector() {
	const [open, setIsOpen] = useState(false);
	const [action, setAction] = useState(null);
	return (
		<ListContainer>
			<List>
				<Image
					src={plusButtomPng}
					height="30px"
					alt="addTrade"
					onClick={() => {
						setAction('newTrade');
						return setIsOpen(true);
					}}
				></Image>
				<ListItemOpen>
					Trades
					<br /> today
				</ListItemOpen>
			</List>

			<Modal
				isOpen={open}
				action={action}
				onClose={() => {
					setIsOpen(false);
				}}
			/>
		</ListContainer>
	);
}

const ListContainer = styled.div`
	display: flex;
	list-style-type: none;
	padding-top: 10vh;
	justify-content: center;
`;

const List = styled.ul`
	display: flex;
	color: white;
	padding: 0;
	align-items: center;
`;

const ListItemOpen = styled.li(() => ({
	listStyleType: 'none',
	padding: '0.5rem',
	borderBottomStyle: 'solid',
	borderWidth: 1,
	textAlign: 'center',
	fontSize: '14px',
}));

const Image = styled.img`
	margin-right: 30px;
	cursor: pointer;
`;

export default TradeSelector;
