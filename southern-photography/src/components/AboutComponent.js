import React from "react";
import aboutImage from "../images/tosha.jpg";
import styled from "styled-components";

const Divider = styled.div`
  width: 80%;
  height: 5px;
  background-color: black;
  margin: auto;
`;
const Image = styled.img`
  width: 100vw;
  @media screen and (min-width: 360px) {
    height: 90vh;
  }
`;
export default function About() {
  return (
    <div className="d-block d-md-flex justify-content-around">
      <Image src={aboutImage} />
      <div style={{ margin: "20px 0" }}>
        <h1
          className="text-center"
          style={{ fontSize: "40px", fontFamily: "Croissant One" }}
        >
          About Me
        </h1>
        <Divider />
        <p style={{ padding: "10px 15%", fontSize: "2em" }}>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p style={{ padding: "10px 15%", fontSize: "2em" }}>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company.
        </p>
        <p style={{ padding: "10px 15%", fontSize: "2em" }}>
          Talk about your team and what services you provide. Tell your visitors
          the story of how you came up with the idea for your business and what
          makes you different from your competitors. Make your company stand out
          and show your visitors who you are.
        </p>
      </div>
    </div>
  );
}
