import React from 'react';
import ReactDom from 'react-dom';
import ModifyTradeForm from './ModifyTradeForm';
import CloseTrade from './CloseTradeForm';
import AddUserTrade from './AddUserTrade';
import styled from 'styled-components';

const Modal = ({ isOpen, tradeValues, onClose, action }) => {
	if (!isOpen) {
		return null;
	}
	return ReactDom.createPortal(
		<Overlay>
			<Wrapper>
				{action === 'updating' ? (
					<ModifyTradeForm tradeValues={tradeValues} onClose={onClose} />
				) : action === 'closing' ? (
					<CloseTrade tradeValues={tradeValues} onClose={onClose} />
				) : (
					<AddUserTrade tradeValues={tradeValues} onClose={onClose} />
				)}
			</Wrapper>
		</Overlay>,
		document.getElementById('modal')
	);
};

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 50px;
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
`;

export default Modal;