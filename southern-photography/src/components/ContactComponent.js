import React from "react";
import styled from "styled-components";
import { Form } from "reactstrap";
import contactImage from "../images/letter.jpg";

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
  return (
    <div className="d-flex justify-content-around">
      <ContactImage
        src={contactImage}
        alt="contact"
        className="d-none d-md-block"
      />
      <div>
        <ContactParagraph>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I'm a great place for you to tell a
          story and let your users know a little more about you.
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
              className="formControl smallInput"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              type="text"
              className="formControl smallInput"
              name="_replyto"
              id="email"
              placeholder="email"
            />
            <textarea
              className="formControl form-control"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Tell me a bit about what you are planning!"
            ></textarea>
            <ContactButton>Send Message</ContactButton>
          </Form>
        </ContactForm>
      </div>
    </div>
  );
}
