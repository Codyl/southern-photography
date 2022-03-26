import React from "react";
import styled from "styled-components";
import { Form } from "reactstrap";
import contactImage from "../images/letter.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { investmentServices, weddingServices } from "../shared/services";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ContactForm = styled.div`
  padding: 30px;
`;
const ContactButton = styled.button`
  font-family: Charmonman, cursive;
  border-radius: 16px;
  padding: 5px 20px;
  box-shadow: 3px 3px 8px black;
  font-size: 1.5em;
  margin: 1rem;
`;
const ContactParagraph = styled.p`
  font-size: 2em;
  margin: 10px 30px;
`;
const ContactImage = styled.img`
  width: 800px;
  height: 80vh;
  margin-right: 10px;
  display: block;
`;

export default function Contact() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [dropdownValue, setDropdownValue] = React.useState("Select a session");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex justify-content-around">
      <ContactImage
        src={contactImage}
        alt="contact"
        className="d-none d-md-block"
      />
      <div>
        <ContactParagraph>
          25% Deposit Required at Booking Payment Plans Available Inquiries for
          destination weddings, please email me. Additional fees will be applied
          (Airfare, Lodging, & Transportation)
        </ContactParagraph>
        <ContactForm className="container">
          <h2
            className="text-center"
            style={{ fontSize: "40px", fontFamily: "Croissant One" }}
          >
            Get in touch!
          </h2>
          <h3 className="text-center">-- We cant wait to hear from you! --</h3>
          <Form method="POST" action="https://formspree.io/f/mwkyqyaj">
            <input
              type="text"
              className="formControl"
              name="firstName"
              id="firstName"
              placeholder="First name"
              required
            />
            <input
              type="text"
              className="formControl"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              required
            />
            <input
              type="text"
              className="formControl"
              name="_replyto"
              id="email"
              placeholder="Email"
              required
            />
            <input
              type="number"
              className="formControl"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone number"
              required
            />
            <input
              type="hidden"
              name="sessionType"
              id="sessionType"
              value={dropdownValue !== "Select a session" ? dropdownOpen : ""}
              required
            />
            <Dropdown
              style={{ display: "inline" }}
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <DropdownToggle className="formControl" caret>
                {dropdownValue}
              </DropdownToggle>
              <DropdownMenu className="formControl">
                {investmentServices.map(({ name }) => (
                  <DropdownItem
                    key={name}
                    onClick={() => setDropdownValue(name)}
                  >
                    {name}
                  </DropdownItem>
                ))}
                {weddingServices.map(({ name }) => (
                  <DropdownItem
                    key={name}
                    onClick={() => setDropdownValue(name)}
                  >
                    {name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <input type="date" className="formControl" name="date" id="date" />
            <textarea
              className="formControl form-control"
              name="vision"
              id="vision"
              cols="30"
              rows="10"
              placeholder="What is your vision?"
            ></textarea>
            <ContactButton>Send Message</ContactButton>
          </Form>
        </ContactForm>
      </div>
    </div>
  );
}
