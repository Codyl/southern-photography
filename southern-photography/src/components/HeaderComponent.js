import { useState } from "react";
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
  position: fixed;
  width: 100vw;
  z-index: 9;
`;

export default function Header({ activeTab, setActiveTab, tabs }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar2
        onBlur={() => setTimeout(() => setOpen(false), 250)}
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
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
            {tabs.map((tab) => (
              <NavItem2 key={tab.name}>
                <NavLink
                  className="nav-tab"
                  id={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  tag={Link}
                  to={tab.path}
                >
                  {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
                </NavLink>
              </NavItem2>
            ))}
          </Nav>
        </Collapse>
      </Navbar2>
    </>
  );
}
