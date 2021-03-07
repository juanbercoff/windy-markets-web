import React, { useState } from 'react';
import login from '../public/images/login.png';
import Icon from './IconComponent';
import styled from 'styled-components';
import TradeList from './TradeList';
import TradeSelector from './TradeSelector';
import ProfileMenu from './ProfileMenu';

const trianglePath = 'M11.5 130H12M12 130H135.5L88 48.5L78 65.5L107 113.5H2.00001L12 130ZM64 1.22724L63.75 1.66025M63.75 1.66025L2 108.614L96.3311 108.228L86.6086 91.0679L30.5394 92.1827L83.0394 1.25L63.75 1.66025ZM150.581 111.387L150.331 110.954M150.331 110.954L88.5811 3.99999L41.75 85.8862L61.4724 86.0464L88.5417 36.9317L141.042 127.864L150.331 110.954Z';
const triangle30DegreesPath = 'M20.3735 149.769L20.8065 149.519M20.8065 149.519L127.761 87.7691L45.8744 40.9381L45.7142 60.6605L94.8289 87.7297L3.89626 140.23L20.8065 149.519ZM1.45344 11.9987V12.4987M1.45344 12.4987L1.45344 135.999L82.9534 88.4986L65.9534 78.4987L17.9534 107.499L17.9534 2.49865L1.45344 12.4987ZM131.515 64.1094L131.082 63.8594M131.082 63.8594L24.1277 2.10938L24.5139 96.4405L41.6741 86.718L40.5594 30.6488L131.492 83.1488L131.082 63.8594Z';



function Dashboard() {
    const [isOpen, setIsOpen] = useState(true);
    const [profileMenuToggle, setProfileMenuToggle] = useState(false);
    return (
        <Container>
            <Wrapper>
                <List>
                    <Icon height={30} width={30} path={triangle30DegreesPath}/>
                    <Icon height={30} width={30} path={trianglePath}/>
                    <AccountImage src={login} onClick={() => {
                        return setProfileMenuToggle(!profileMenuToggle)}}></AccountImage>
                </List>
            </Wrapper>
            <ProfileMenu displayProfileMenu={profileMenuToggle}/>
            <TradeSelector tradeSelectorToggler={()=>{
                return setIsOpen(!isOpen)}
                }
                isOpen={isOpen}
                />
            {isOpen ? <TradeList title='' requestURL='/api/trades/current'/> : <TradeList title='' requestURL='/api/trades/past'/>}
            
        </Container>

    );
}




const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #3B3C3D;
    height:100vh
`

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    right: 0;
    top: 0; 
`

const List = styled.ul`
    display: flex;
    padding: 1.5vh;
`

const AccountImage = styled.img`
    alt='account';
    height: 30px;
    width: auto;
    margin: 1vh;
`

export default Dashboard;

