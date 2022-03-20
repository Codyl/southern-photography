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
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const highlightRef = useRef(null);

  useEffect(() => {
    const triggers = document.querySelectorAll("a");
    triggers.forEach((l) => l.addEventListener("mouseenter", highlightLink));
  }, []);

  function getActiveClassName(e) {
    console.log(e.target);
    return "";
  }

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
              <NavLink className={() => getActiveClassName()} tag={Link} to="/">
                Home
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className={() => getActiveClassName()}
                tag={Link}
                to="/about"
              >
                About
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className={() => getActiveClassName()}
                tag={Link}
                to="/wedding"
              >
                Wedding
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className={() => getActiveClassName()}
                tag={Link}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className={() => getActiveClassName()}
                tag={Link}
                to="/investments"
              >
                Investments
              </NavLink>
            </NavItem2>
            <NavItem2>
              <NavLink
                className={() => getActiveClassName()}
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
