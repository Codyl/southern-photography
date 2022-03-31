import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Column = styled.div`
  width: 18vw;
  display: inline-flex !important;
`;
const Image = styled.img`
  width: 100%;
`;

const getImages = async (groupName) => {
  try {
    const response = await fetch(`http://localhost:3001/images/${groupName}`);
    let files = await response.json();
    console.log(typeof files[0]);
    // const promises = files.map(async (file) => file.text());
    // const result = await Promise.all(promises);
    // console.log(result);
    // console.log(files);
    return files;
  } catch (err) {
    console.error(err);
  }
};

const getImage = async (imageName) => {
  try {
    const response = await fetch(`http://localhost:3001/image/${imageName}`);
    return response.text();
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
            <Image src={image} key={image + position + "-" + i} alt="test" />
          </div>
        ))}
    </Column>
  );
};

export default function Portfolio() {
  const [images, setImages] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const imageNames = await getImages("group1");
        console.log(imageNames);
        setImages(imageNames);
      } catch (err) {
        console.log("Failed to fetch images");
        setErr("Failed to fetch images");
      }
    })();
  }, []);
  return (
    <div className="container">
      {err && <p>{err}</p>}
      {/* <img src={images} style={{ marginTop: 200 }} alt="test" /> */}
      {getImagesColumn(images, 0)}
      {getImagesColumn(images, 1)}
      {getImagesColumn(images, 2)}
      {getImagesColumn(images, 3)}
      {getImagesColumn(images, 4)}
    </div>
  );
}
