import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ContactStyles';
import { data } from '../../constants/constants';

const Contact = () => (
  <Section id="contact">
    <SectionTitle>Contact me</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Contact;
