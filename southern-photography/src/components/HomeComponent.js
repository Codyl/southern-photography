import React from 'react';
import {Button} from 'reactstrap';
import styled from 'styled-components';
import test from '../images/group9-71.jpg';

const LargeImage = styled.img`
position: absolute;
left: 0;
top: 0;
width: 100vw;
height: auto;
z-index: -1;
`
const BookingButton = styled(Button)`
background-color: white;
color: black;
position: absolute;
top: 400px;
font-family: Charmonman, cursive;
font-size: 2em;
border-radius: 32px;
padding: 5px 20px;
box-shadow: 3px 3px 8px black;
`;
export default function Home() {
    return (
        <div className='d-flex justify-content-center'>
            <LargeImage src={test} />
            <BookingButton >Book Now</BookingButton>
        </div>
    )
}
