import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import image1 from "../images/group1-1.jpg";
// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));
// console.log(images)

const Column = styled.div`
  width: 10vw;
`;
const Image = styled.img`
  width: inherit;
`;

const getImages = async () => {
  try {
    const response = await fetch("http://localhost:3001/images/");
    let files = await response.text();
    // console.log(files);
    return files;
  } catch (err) {
    console.error(err);
  }
};

export default function Portfolio() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/images/group9-71.jpg")
      .then((response) => {
        console.log(response);
        return response.blob();
      })
      .then((blob) => {
        console.log(blob);
        const srcImage = URL.createObjectURL(blob);
        setImages(srcImage);
      });
  }, []);
  return <div></div>;
}
