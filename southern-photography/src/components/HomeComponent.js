import React from 'react';
import {Image} from 'reactstrap';
import styled from 'styled-components';
import test from '../images/test.png';

const LargeImage = styled.img`
position: absolute;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
z-index: -2;
`

export default function Home() {
    return (
        <div>
            <LargeImage src={test} />
            Home component works!
        </div>
    )
}
