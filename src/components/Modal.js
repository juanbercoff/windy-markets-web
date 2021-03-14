import React from 'react';
import ReactDom from 'react-dom';
import ModifyTradeForm from './ModifyTradeForm';
import styled from 'styled-components';

const Modal = ({ isOpen, tradeValues, onClose }) => {
	if (!isOpen) {
		console.log('open is null');
		return null;
	}
	return ReactDom.createPortal(
		<Overlay>
			<Wrapper>
				<ModifyTradeForm tradeValues={tradeValues} onClose={onClose} />
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
