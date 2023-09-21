import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Button,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HomeStyles";

const Home = ({ homeRef }) => (
  <Section id="home" ref={homeRef} row>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        Hi there, I'm Sebastian Sanchis 👋, a frontend developer specializing in
        building responsive, user-friendly websites and applications that
        deliver a seamless user experience. Please take a look at my portfolio
        to see some of my latest work.
      </SectionText>
      <Button onClick={() => (window.location = "#contact")}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Home;
