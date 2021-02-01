import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--grey);
  height: 56px;
  p {
    margin: 0;
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; pixel affairs {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
