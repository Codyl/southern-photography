import React from 'react';
import styled from 'styled-components';
import { Form } from 'reactstrap';
import contactImage from '../images/group1-2.jpg';

const ContactForm = styled.div`
padding: 30px;
`;


export default function Contact() {
  return (
    <div className="d-flex justify-content-around">
      <img src={contactImage} style={{width: '800px', height: '299px', margin: '0 10px'}}  alt="contact"/>
      <div>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <ContactForm className='container'>
          <h2 className='text-center' style={{ fontSize: '40px', fontFamily: 'Croissant One'}}>Get in touch!</h2>
          <h3 className='text-center'>-- We cant wait to hear from you! --</h3>
          <Form action="">
            <input type="text" className='formControl smallInput' name="" id="" placeholder='Name'/>
            <input type="text" className='formControl smallInput' name="" id="" placeholder='email'/>
            <textarea className='form-control' name="" id="" cols="30" rows="10" placeholder='Tell me a bit about what you are planning!'></textarea>
            <button>Send Message</button>
          </Form>
        </ContactForm>
      </div>
    </div>
    );
}
