import React from 'react';
import styled from 'styled-components';

function Icon({height, width, path}) {

    return(
        <Container>
            <svg style={{overflow:'visible'}} width={width} height={height} viewBox="0 0 152 131" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d={path} stroke="white" strokeWidth="2"/>
            </svg>
        </Container>

    )
}

const Container = styled.div`
display: flex;
margin:1vh 
`

export default Icon;