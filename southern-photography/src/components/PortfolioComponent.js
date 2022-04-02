import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { investmentServices, weddingServices } from "../shared/services";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner as Loading,
} from "reactstrap";
import Helmet from "react-helmet";

const ImageGallery = styled.div`
  margin: 0 5%;
  @media screen and (min-width: 461px) {
    height: 400px;
    width: 90%;
  }
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
  row-gap: 20px;
`;
const GalleryGradient = styled.div`
  height: 400px;
  width: 100px;
  position: relative;
  background: linear-gradient(269.36deg, white.45%, rgba(0, 0, 0, 0) 101.59%);
`;

const getImages = async (groupName) => {
  try {
    const response = await fetch(`http://localhost:3001/images/${groupName}`);
    let files = await response.json();
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

export default function Portfolio() {
  const [images, setImages] = useState(null);
  const [group, setGroup] = useState("senior");
  const [err, setErr] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  useEffect(() => {
    document.getElementById("senior")?.classList.add("active");
  }, []);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const imageNames = await getImages(group);
        if (isMounted) {
          setImages(imageNames);
        }
      } catch (err) {
        console.log("Failed to fetch images");
        setErr("Failed to fetch images");
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [group]);

  const setStyle = (e) => {
    document.querySelectorAll(".service-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - Southern Images</title>
        <meta
          name="description"
          content="A select few images of Tosha Breane's work. Find out if Southern Images is right for you by browsing these images."
        />
        <link rel="canonical" href="http://southern-images.com/portfolio" />
      </Helmet>
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
                  boxSizing: "content-box",
                }}
                className="service-btn"
                id={service.name}
                onClick={(e) => {
                  setGroup(service.name);
                  setImages([]);
                  setStyle(e);
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
              <DropdownItem
                key={name}
                onClick={() => {
                  setGroup(name);
                  setImages([]);
                }}
              >
                {name}
              </DropdownItem>
            ))}
            {weddingServices.map(({ name }) => (
              <DropdownItem
                key={name}
                onClick={() => {
                  setGroup(name);
                  setImages([]);
                }}
              >
                {name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}

      <div>
        <ImageGallery>
          <div className="scrollbar" id="style-3">
            {images && Array.isArray(images) && images.length ? (
              images?.map(
                (image, i) =>
                  image && (
                    <img
                      src={image}
                      style={{ height: "400px", margin: "0 10px" }}
                      alt="portfolioImage"
                      key={i}
                    />
                  )
              )
            ) : (
              <Loading
                color="dark"
                type="grow"
                style={{ width: "5rem", height: "5rem" }}
                className="mx-auto"
              />
            )}
          </div>
          {images && Array.isArray(images) && images.length ? (
            <div>
              <GalleryGradient
                style={{
                  left: "100%",
                  marginLeft: "-100px",
                  bottom: "calc(100% + 17px)",
                }}
              />
              <GalleryGradient
                style={{
                  transform: "rotate(180deg)",
                  bottom: "calc(200% + 17px)",
                }}
              />
            </div>
          ) : (
            ""
          )}
        </ImageGallery>
      </div>
    </div>
  );
}
