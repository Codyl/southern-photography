import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Column = styled.div`
  width: 18vw;
  display: inline-flex !important;
`;
const Image = styled.img`
  width: 100%;
`;

const getImages = async () => {
  try {
    const response = await fetch("http://localhost:3001/images/");
    let files = await response.json();
    console.log(files);
    return files;
  } catch (err) {
    console.error(err);
  }
};

const getImage = async (imageName) => {
  try {
    const response = await fetch(`http://localhost:3001/images/${imageName}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (e) {
    console.log(e);
  }
};

const getImagesColumn = (images, position) => {
  return (
    <Column className="d-flex flex-column">
      {images
        ?.slice(
          (images.length / 5) * position,
          (images.length / 5) * (position + 1)
        )
        .map((image, i) => (
          <div>
            <Image src={image} key={i} alt="test" />
          </div>
        ))}
    </Column>
  );
};

export default function Portfolio() {
  const [images, setImages] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let imagesArr = [];
    (async () => {
      try {
        const imageNames = await getImages();
        console.log(imageNames);
        imageNames.forEach(async (imageName) => {
          const img = await getImage(imageName);
          imagesArr.push(img);
          if (imagesArr.length === imageNames.length) {
            console.log(imagesArr);
            setImages(imagesArr);
          }
        });
      } catch (err) {
        console.log("Failed to fetch images");
        setErr("Failed to fetch images");
      }
    })();
  }, []);
  return (
    <div className="container">
      {err && <p>{err}</p>}
      {getImagesColumn(images, 0)}
      {getImagesColumn(images, 1)}
      {getImagesColumn(images, 2)}
      {getImagesColumn(images, 3)}
      {getImagesColumn(images, 4)}
    </div>
  );
}
