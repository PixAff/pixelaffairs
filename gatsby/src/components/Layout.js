import React from "react";
import styled from "styled-components";

import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

import Nav from "./nav";
import Footer from "./footer";

const ContentStyles = styled.div``;

export default function Layout(props) {
  function handleScroll(e) {
    if (window.scrollY > 100) {
      document.body.classList.add("scrolled-nav");
    } else {
      document.body.classList.remove("scrolled-nav");
    }
  }
  window.addEventListener("scroll", handleScroll);

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
