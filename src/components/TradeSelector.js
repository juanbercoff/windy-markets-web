import React from 'react';
import styled from 'styled-components';

function TradeSelector({ tradeSelectorToggler, isOpen }) {
	return (
		<ListContainer>
			<List>
				<ListItemClosed
					onClick={() => {
						if (isOpen) {
							tradeSelectorToggler();
						}
					}}
					isOpen={isOpen}
				>
					Your
					<br /> trades
				</ListItemClosed>
				<ListItemOpen
					onClick={() => {
						if (!isOpen) {
							tradeSelectorToggler();
						}
					}}
					isOpen={isOpen}
				>
					Trades
					<br /> today
				</ListItemOpen>
			</List>
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
`;

const ListItemOpen = styled.li(({ isOpen }) => ({
	listStyleType: 'none',
	padding: '0.5rem',
	borderBottomStyle: 'solid',
	borderWidth: isOpen ? 1 : 0,
	textAlign: 'center',
	fontSize: '14px',
}));

const ListItemClosed = styled.li(({ isOpen }) => ({
	listStyleType: 'none',
	padding: '0.5rem',
	borderBottomStyle: 'solid',
	borderWidth: isOpen ? 0 : 1,
	textAlign: 'center',
	fontSize: '14px',
}));

export default TradeSelector;
