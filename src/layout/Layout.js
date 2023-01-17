import React, { useRef } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container, Main } from "./LayoutStyles";

export const Layout = ({ children, sectionRefs, headerRef }) => {

  return (
    <Container>
      <Header sectionRefs={sectionRefs} headerRef={headerRef} />
      <Main children={children} />
      <Footer />
    </Container>
  );
};
