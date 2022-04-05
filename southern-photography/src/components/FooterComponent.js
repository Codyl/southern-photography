import React from "react";
import southernImages from "../images/logo2.png";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer({ activeTab, setActiveTab, tabs }) {
  return (
    <footer
      className="container-fluid d-flex align-items-center justify-content-center my-5"
      style={{ position: "sticky", bottom: "-100%" }}
    >
      <div className="d-inline-flex flex-column justify-content-center align-items-center mx-3 w-25">
        <div>
          <a href="https://www.facebook.com/profile.php?id=100075487931517">
            <FaFacebookSquare
              style={{ fontSize: "30px", color: "lightgray" }}
            />
          </a>
          <a href="https://www.instagram.com/southernimages_tb/">
            <FaInstagramSquare
              style={{ fontSize: "30px", color: "lightgray" }}
            />
          </a>
        </div>
        <div className="divider"></div>
        <p>© Copyright 2022 Southern Images</p>
      </div>
      <div className="d-none d-md-block d-inline-flex flex-column justify-content-center align-items-center mx-3 w-25">
        <img src={southernImages} alt="logo" style={{ width: 250 }} />
      </div>
      <div className="d-inline-flex flex-column justify-content-center align-items-center mx-3 w-25 md-text">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
