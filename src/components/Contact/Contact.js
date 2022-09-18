import React, { useState, useRef, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import { Section, SectionTitle, Button } from '../../styles/GlobalComponents';
import { Form, InputContainer, Input, Placeholder, TextArea, SuccessMessage, ErrorContainer, Error } from './ContactStyles';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [focusName, setFocusName] = useState(false);
  const [blurName, setBlurName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [blurEmail, setBlurEmail] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);
  const [blurMessage, setBlurMessage] = useState(false);

  const { name, email, message } = formData;
  const { errorName, errorEmail, errorMessage } = formErrors;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setFormSubmitted(true);

    // EmailJS
    if (Object.keys(formErrors).length === 0) {
      emailjs.sendForm(`${process.env.SERVICE_ID}`, `${process.env.TEMPLATE_ID}`, form.current, `${process.env.PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  };

  // Validate
  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!name) {
      errors.errorName = "Completá este dato.";
    }
    if (!email) {
      errors.errorEmail = "Completá este dato.";
    } else if (!regex.test(email)) {
      errors.errorEmail = "Usá el formato nombre@ejemplo.com.";
    }
    if (!message) {
      errors.errorMessage = "Completá este dato.";
    }
    return errors;
  }

  return (
    <Section id="contact">
      <SectionTitle>Contact me</SectionTitle>
      {Object.keys(formErrors).length !== 0 || !formSubmitted ?
      <Form ref={form} onSubmit={handleSubmit} noValidate>
        {/* Input Name */}
        <InputContainer error={errorName}>
          <Input type="text" name="name" value={name} onChange={handleChangeInput} onFocus={() => {setFocusName(true), setBlurName(true)}} onBlur={name.length === 0 ? () => {setFocusName(false), setBlurName(false)} : () => setBlurName(false)} />
          <Placeholder focus={focusName} blur={blurName} error={errorName}>Name</Placeholder>
        </InputContainer>
        <ErrorContainer>
          {errorName &&
            <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
          }
          <Error>{errorName}</Error>
        </ErrorContainer>

        {/* Input Email */}
        <InputContainer error={errorEmail}>
          <Input type="email" name="email" value={email} onChange={handleChangeInput} onFocus={() => {setFocusEmail(true), setBlurEmail(true)}} onBlur={email.length === 0 ? () => {setFocusEmail(false), setBlurEmail(false)} : () => setBlurEmail(false)} />
          <Placeholder focus={focusEmail} blur={blurEmail} error={errorEmail}>Email</Placeholder>
        </InputContainer>
        <ErrorContainer>
          {errorEmail &&
            <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
          }
          <Error>{errorEmail}</Error>
        </ErrorContainer>

        {/* Input Message */}
        <InputContainer error={errorMessage} area>
          <TextArea name="message" value={message} onChange={handleChangeInput} onFocus={() => {setFocusMessage(true), setBlurMessage(true)}} onBlur={message.length === 0 ? () => {setFocusMessage(false), setBlurMessage(false)} : () => setBlurMessage(false)}/>
          <Placeholder focus={focusMessage} blur={blurMessage} error={errorMessage} area>Message</Placeholder>
        </InputContainer>
        <ErrorContainer>
          {errorMessage &&
            <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
          }
          <Error>{errorMessage}</Error>
        </ErrorContainer>

        {/* Submit button */}
        <Button type="submit" margin>Send Message</Button>
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
