import React, { useEffect } from 'react';
import login from '../public/images/login.png';
import { Link } from "react-router-dom";
import styled from 'styled-components';


function Dashboard() {
    return (
        <Wrapper>
            <ul className="nav-links">
                <li><a className='nav-link' href='/home'>Mission</a></li>
                <AccountImage src={login}></AccountImage>
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #303133;
`

const AccountImage = styled.img`
    alt='account';
    height: 30px;
    width: auto;
    margin: 1vh;
`

export default Dashboard;

