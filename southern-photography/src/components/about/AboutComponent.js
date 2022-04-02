import React from "react";
import aboutImage from "../../images/tosha.jpg";
import Helmet from "react-helmet";
import "./AboutComponent.css";

export default function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Southern Images</title>
        <meta
          name="description"
          content="Southern images has been taking photographs for -."
        />
        <link rel="canonical" href="http://southern-images.com/about" />
      </Helmet>
      <div className="d-block d-md-flex justify-content-around">
        <img src={aboutImage} alt="Tosha Breane at work" />
        <div className="mx-4">
          <h1 className="text-center lg-text">About Me</h1>
          <div className="divider" />
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I'm a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company.
          </p>
          <p>
            Talk about your team and what services you provide. Tell your
            visitors the story of how you came up with the idea for your
            business and what makes you different from your competitors. Make
            your company stand out and show your visitors who you are.
          </p>
        </div>
      </div>
    </div>
  );
}
