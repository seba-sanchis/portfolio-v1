import React, { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';

import { Section, SectionTitle, Button } from '../../styles/GlobalComponents';
import { Form, InputContainer, Input, TextArea, SuccessMessage } from './ContactStyles';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  //EmailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(`${process.env.SERVICE_ID}`, `${process.env.TEMPLATE_ID}`, form.current, `${process.env.PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          setFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Section id="contact">
      <SectionTitle>Contact me</SectionTitle>
      {!formSubmitted ?
      <Form ref={form} onSubmit={sendEmail}>
        <InputContainer>
          <Input type="text" placeholder="Name" name="name" value={name} onChange={handleChangeInput} />
        </InputContainer>
        <InputContainer>
          <Input type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
        </InputContainer>
        <InputContainer area>
          <TextArea placeholder="Message" name="message" value={message} onChange={handleChangeInput} />
        </InputContainer>
        <Button type="submit">{loading ? "Sending" : "Send Message"}</Button>
      </Form>
      :
      <div>
        <SuccessMessage>Thank you for getting in touch!</SuccessMessage>
      </div>
      }
    </Section>
  );
};

export default Contact;
