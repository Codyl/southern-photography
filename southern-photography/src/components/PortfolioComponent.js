import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { investmentServices, weddingServices } from "../shared/services";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Column = styled.div`
  width: 18vw;
  display: inline-flex !important;
`;
const Image = styled.img`
  width: 100%;
`;
const ImageGallery = styled.div`
  height: 400px;
  width: 90%;
  margin: 0 5%;
`;
const ServicesListRect = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-around;
  list-style-type: none;
  border-radius: 10px;
  margin: 20px auto;
  padding: 10px 0;
  border: 1px solid black;
  overflow: auto;
  row-gap: 20px;
`;
const GalleryGradient = styled.div`
  height: 400px;
  width: 100px;
  position: relative;
  background: linear-gradient(269.36deg, white.45%, rgba(0, 0, 0, 0) 101.59%);
`;
const getImages = async (group) => {
  try {
    const response = await fetch(`http://localhost:3001/image-group/${group}`);
    let files = await response.json();
    // console.log(files);
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
  const [group, setGroup] = useState("senior");
  const [err, setErr] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    let imagesArr = [];
    (async () => {
      try {
        const imageNames = await getImages(group);
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
  }, [group]);
  return (
    <>
      {err && <p>{err}</p>}
      {window.innerWidth > 461 ? (
        <ServicesListRect>
          {[
            ...investmentServices,
            ...weddingServices.filter((service) => service.name !== "bodouir"),
          ].map((service) => (
            <li className="mx-5" key={service.name}>
              <div
                style={{
                  fontFamily: "Croissant One",
                  fontWeight: 400,
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setGroup(service.name);
                }}
              >
                {service.name}
              </div>
            </li>
          ))}
        </ServicesListRect>
      ) : (
        <Dropdown
          style={{ display: "inline" }}
          isOpen={dropdownOpen}
          toggle={toggle}
        >
          <DropdownToggle className="formControl" caret>
            {group}
          </DropdownToggle>
          <DropdownMenu className="formControl">
            {investmentServices.map(({ name }) => (
              <DropdownItem key={name} onClick={() => setGroup(name)}>
                {name}
              </DropdownItem>
            ))}
            {weddingServices.map(({ name }) => (
              <DropdownItem key={name} onClick={() => setGroup(name)}>
                {name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}

      <div>
        <div>
          <ImageGallery>
            <div style={{ display: "flex", overflow: "auto" }}>
              {images?.map((image, i) => (
                <img
                  src={image}
                  style={{ height: "400px", margin: "0 10px" }}
                  alt="portfolioImage"
                  key={i}
                />
              ))}
            </div>
            <GalleryGradient
              style={{ left: "100%", marginLeft: "-100px", bottom: "100%" }}
            />
            <GalleryGradient
              style={{ transform: "rotate(180deg)", bottom: "200%" }}
            />
          </ImageGallery>
        </div>
      </div>
    </>
  );
}
