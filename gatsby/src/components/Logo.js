import React from "react";
import styled from "styled-components";

import pixAffLogo from "../assets/images/pixAffLogo.png";

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  margin: 0;
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <img src={pixAffLogo} alt="Logo" />
    </LogoStyles>
  );
}
