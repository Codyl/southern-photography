import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';

const Mediabox = styled.div`
background-color: #EEE;
width: 45px;
height: 200px;
padding: 2px;

position: absolute;
left: 0px;
top: 100px;
border-radius: 0 10px 10px 0;
`;

export default function SocialMedia() {
  return (
    <Mediabox>
      <a href="https://www.facebook.com/profile.php?id=100075487931517">
        <FaFacebookSquare style={{fontSize: '40px', color: 'blue'}}/>
      </a>
    </Mediabox>
    );
}
