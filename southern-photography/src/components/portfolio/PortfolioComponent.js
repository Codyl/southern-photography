import React, { useEffect, useState } from "react";
import { Spinner as Loading } from "reactstrap";
import Helmet from "react-helmet";
import { useLocation } from "react-router-dom";
import "./PortfolioComponent.css";
import { getImages } from "../../shared/requests";
import { ServiceListDropdown, ServiceListRect } from "./serviceList";
import Gallery, { GalleryList, GallerySlider } from "./Gallery";

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

      {window.innerWidth > 461
        ? ServiceListRect(setGroup, setImages, setStyle)
        : ServiceListDropdown(dropdownOpen, toggle, setGroup, setImages, group)}

      <div>
        {images && Array.isArray(images) && images.length ? (
          window.innerWidth > 461 ? (
            GallerySlider(images)
          ) : (
            GalleryList(images)
          )
        ) : !err ? (
          <div className="mx-auto lg-text p-5">
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
