import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo2.png";

const Image = styled.img`
  width: 200px;
`;
const NavItem2 = styled(NavItem)`
  padding: 0 auto;
  margin: 0 0 0 0;
`;
const Navbar2 = styled(Navbar)`
  height: 10vh;
`;
const Highlight = styled.span`
  background: red;
  transition: all 0.2s;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: -1;
`;

function highlightLink(e) {
  // console.log(this.getBoundingClientRect(), e);
  const linkCoords = this.getBoundingClientRect();
  e.target.style.width = `${linkCoords.width}px`;
  e.target.style.left = linkCoords.x;
  e.target.style.top = linkCoords.y;
  console.log(e.target.style.x);
}

export default function Header() {
  let path = window.location.pathname;
  path = path.replace("/", "");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(path);
  const highlightRef = useRef(null);

  useEffect(() => {
    // const triggers = document.querySelectorAll("a");
    // triggers.forEach((l) => l.addEventListener("mouseenter", highlightLink));
    setClassForActiveTab();
  }, [activeTab]);

  const setClassForActiveTab = () => {
    const navTabs = document.getElementsByClassName("nav-tab");
    Array.from(navTabs).map((element) => {
      element.classList.remove("active");
    });

    const activeTabElement = document.getElementById(activeTab);
    if (!!activeTabElement) {
      activeTabElement.classList.add("active");
    }
  };

  return (
    <div>
      <Navbar2 color="light" expand="md" light>
        <NavbarBrand href="#">
          <Image src={logo} />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setOpen(!open);
          }}
        />
        <Collapse isOpen={open} navbar>
          <Nav
            className="mx-auto d-flex justify-content-around container"
            navbar
          >
            <Highlight ref={highlightRef}></Highlight>

            <NavItem2>
              <NavLink
                className="nav-tab"
                id="home"
                onClick={() => setActiveTab("home")}
                tag={Link}
                to="/"
              >
                Home
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className="nav-tab"
                id="about"
                onClick={() => setActiveTab("about")}
                tag={Link}
                to="/about"
              >
                About
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className="nav-tab"
                id="wedding"
                onClick={() => setActiveTab("wedding")}
                tag={Link}
                to="/wedding"
              >
                Wedding
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className="nav-tab"
                id="portfolio"
                onClick={() => setActiveTab("portfolio")}
                tag={Link}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className="nav-tab"
                id="investments"
                onClick={() => setActiveTab("investments")}
                tag={Link}
                to="/investments"
              >
                Investments
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className="nav-tab"
                id="contact"
                onClick={() => setActiveTab("contact")}
                tag={Link}
                to="/contact"
              >
                Contact
              </NavLink>
            </NavItem2>
          </Nav>
        </Collapse>
      </Navbar2>
    </div>
  );
}
