import React from 'react';
import styled from 'styled-components';
import login from '../public/images/login.png';

const Account = ({ handleClick }) => {
	return (
		<Wrapper>
			<List>
				<AccountImage src={login} onClick={handleClick}></AccountImage>
			</List>
		</Wrapper>
	);
};

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

export default Account;
