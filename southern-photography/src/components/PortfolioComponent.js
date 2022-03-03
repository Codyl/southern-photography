import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));
// console.log(images)
const ImageGallery = styled.div`
height: 400px;
background-color: grey;
width: 90%;
margin: 0 5%;
`;
const AlbumSelect = styled.div`
height: 100px;
background-color: grey;
width: 90%;
margin: 10px 5%;
position: absolute;
`;
const AlbumTab = styled.div`
position: relative;
top: 100%;
width: 50px;
height: 10px;
background-color: grey;
`;
export default function Portfolio() {
  return (
    <div>
      <div>
        <ul className='d-flex justify-content-around' style={{listStyleType: 'none'}}>
          <li><Link to='portfolio/couples'>Couples</Link></li>
          <li><Link to='portfolio/family'>Family</Link></li>
          <li><Link to='portfolio/wedding'>Wedding</Link></li>
          <li><Link to='portfolio/maternity'>Maternity</Link></li>
          <li><Link to='portfolio/newborn'>Newborn</Link></li>
          <li><Link to='portfolio/birthday'>Birthday</Link></li>
          <li><Link to='portfolio/graduation'>Graduation</Link></li>
          <li><Link to='portfolio/boudoir'>Boudoir</Link></li>
        </ul>
        <ImageGallery>
          {/* {images.map((image, i) => <img src='../images/group1-0.jpg' alt='portfolioImage' key={i}/>)} */}
        </ImageGallery>
        <AlbumSelect>
          <AlbumTab></AlbumTab>
        </AlbumSelect>
      </div>
    </div>
  );
}
