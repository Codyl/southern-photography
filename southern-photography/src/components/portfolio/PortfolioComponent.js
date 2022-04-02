import React, { useEffect, useState } from "react";
import { investmentServices, weddingServices } from "../../shared/services";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner as Loading,
} from "reactstrap";
import Helmet from "react-helmet";
import { useLocation } from "react-router-dom";
import "./PortfolioComponent.css";
import { getImages } from "../../shared/requests";

export default function Portfolio() {
  const [images, setImages] = useState(null);
  let location = useLocation().pathname.split("/")[2] ?? null;
  location = location?.replace("%20", " ").toLowerCase();
  const [group, setGroup] = useState(location ?? "couples");
  const [err, setErr] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  useEffect(() => {
    document.getElementById(group)?.classList.add("active");
  }, []);

  useEffect(() => {
    let isMounted = true;
    setErr(null);
    (async () => {
      try {
        const imageNames = await getImages(group);
        if (isMounted) {
          setImages(imageNames);
          setTimeout(() => {
            if (imageNames && Array.isArray(imageNames) && imageNames.length) {
              setErr(null);
            } else {
              console.log(imageNames);
              setErr(
                "Whoops! There are no images in this portfolio section. Check it again later or check out a different section."
              );
            }
          }, 5000);
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

      {window.innerWidth > 461 ? (
        <ul className="service-list-rect">
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
        </ul>
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

      <div className="container">
        {images && Array.isArray(images) && images.length ? (
          <>
            <div className="gallery">
              <div className="scrollbar" id="style-3">
                {images?.map(
                  (image, i) =>
                    image && (
                      <img
                        src={image}
                        style={{ height: "400px", margin: "0 10px" }}
                        alt="portfolioImage"
                        key={i}
                      />
                    )
                )}
              </div>
              {window.innerWidth > 461 &&
              images &&
              Array.isArray(images) &&
              images.length ? (
                <>
                  <div
                    className="gradient"
                    style={{
                      left: "100%",
                      marginLeft: "-100px",
                      bottom: "calc(100% + 17px)",
                    }}
                  />
                  <div
                    className="gradient"
                    style={{
                      transform: "rotate(180deg)",
                      bottom: "calc(200% + 17px)",
                    }}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </>
        ) : !err ? (
          <div className="mx-auto lg-text my-auto">
            <Loading
              color="dark"
              type="grow"
              style={{ width: "5rem", height: "5rem" }}
            />
            Searching for images...
          </div>
        ) : (
          ""
        )}
        {err && <p className="md-text">{err}</p>}
      </div>
    </div>
  );
}
