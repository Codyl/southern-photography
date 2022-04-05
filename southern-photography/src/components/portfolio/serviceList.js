import React from "react";
import { services } from "../../shared/services";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function ServiceListRect(setGroup, setImages, setStyle) {
  return (
    <ul className="service-list-rect">
      {services.map((service) => (
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
  );
}

function ServiceListDropdown(dropdownOpen, toggle, setGroup, setImages, group) {
  return (
    <Dropdown
      className="d-flex justify-content-center"
      isOpen={dropdownOpen}
      toggle={toggle}
    >
      <DropdownToggle className="formControl" caret>
        {group}
      </DropdownToggle>
      <DropdownMenu className="formControl">
        {services.map(({ name }) => (
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
  );
}
export { ServiceListRect, ServiceListDropdown };
