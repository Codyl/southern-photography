import React from 'react';
import styled from 'styled-components';
import aboutImage from '../images/group1-0.jpg';

const serviceItemBoxSize = 250;

const ServiceItem = styled.img`
width: ${serviceItemBoxSize}px;
height: ${serviceItemBoxSize}px;
`;
const ServiceRow = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
margin: 40px 0;
`;
const ServiceItemText = styled.p`
position: relative;
text-align: center;
color: black;
opacity: 1;
font-size: 2em;
`;

const services = [
  {
    name: 'Couples',
    price: 1000,
    location: 'local',
    photographers: 1,
    sessionLength: 2,
    image: aboutImage
  },
  {
    name: 'Family',
    price: 1000,
    location: 'local',
    photographers: 1,
    sessionLength: 2,
    image: aboutImage
  },
  {
    name: 'Maternity',
    price: 1000,
    location: 'local',
    photographers: 1,
    sessionLength: 2,
    image: aboutImage
  },
  {
    name: 'Birthday',
    price: 1000,
    location: 'local',
    photographers: 1,
    sessionLength: 2,
    image: aboutImage
  },
  {
    name: 'Graduation',
    price: 1000,
    location: 'local',
    photographers: 1,
    sessionLength: 2,
    image: aboutImage
  },
  {
    name: 'Bodouir',
    price: 1000,
    location: 'local',
    photographers: 1,
    sessionLength: 2,
    image: aboutImage
  },
  
]

const ServiceItemContainer = ({src, service}) => {
  return (
    <div>
      <ServiceItem src={service.image}/>
      <div style={{width: serviceItemBoxSize, height: '50px', backgroundColor: 'gray', opacity: '1', position: 'relative', bottom: '125px'}}>
        <ServiceItemText>{service.name}</ServiceItemText>
      </div>
      <p>{service.name} | ${service.price} | {service.photographers} Photographer(s) | {service.sessionLength} hours</p>
    </div>
  );
}
export default function Investments() {
  return (
    <>
      {/* <LargeImage />
      <div>Lifes greatest moments captured on camera...</div> */}
      <h1 className='text-center' style={{ fontSize: '40px', fontFamily: 'Croissant One'}}>Investments</h1>
      <div className="divider"></div>
      <ServiceRow>
        {services.map(service => <ServiceItemContainer service={service} />)}
      </ServiceRow>
    </>
    );
}
