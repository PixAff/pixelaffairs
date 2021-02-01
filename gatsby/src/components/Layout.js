import React from "react";
import styled from "styled-components";

import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

import Nav from "./Nav";
import Footer from "./Footer";

const ContentStyles = styled.div``;

export default function Layout(props) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav />
      <ContentStyles>
        <div className="content">{props.children}</div>
        <Footer />
      </ContentStyles>
    </div>
  );
}
