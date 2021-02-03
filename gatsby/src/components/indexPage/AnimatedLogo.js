import React from "react";
import styled from "styled-components";

import pixAffLogoAnimation from "../../assets/images/animation.webm";

const LogoStyles = styled.div`
  background: var(--yellow);
  margin: 0;
  padding: 0;
`;

export default function AnimatedLogo() {
  return (
    <LogoStyles>
      <video
        width="100%"
        autoPlay
        loop
        muted
        poster="./pixelaffairs-logoanim-kl.gif"
        src={pixAffLogoAnimation}
        type="video/webm"
      ></video>
    </LogoStyles>
  );
}
