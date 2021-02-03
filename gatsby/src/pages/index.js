import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import AnimatedLogo from "../components/indexPage/AnimatedLogo";
import Introduction from "../components/indexPage/Introduction";
import Example from "../components/indexPage/Example";
import Tech from "../components/indexPage/Tech";
// import useLatestData from "../utils/useLatestData";

// import pixAffIndexBg from "../assets/images/index-bg-car.jpeg";

const PageStyles = styled.div`
  font-size: 2rem;
`;

const IndexStyles = styled.div`
  z-index: -10;
  position: fixed;
  bottom: 0;
  transition: all 0.4s;
  min-height: 100vh;
  width: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

// background: var(--yellow) url(${pixAffIndexBg});
export default function HomePage({ data }) {
  // const result = useLatestData();
  return (
    <div>
      <SEO title="home" />
      <PageStyles>
        <IndexStyles
          style={{ background: "url('/index-bg-car.jpeg')" }}
        ></IndexStyles>
        <AnimatedLogo />
        <Introduction fluid={data.idx.imageIdx.asset.fluid} />
        <Example />
        <Tech />
      </PageStyles>
    </div>
  );
}

export const query = graphql`
  query {
    idx: sanityPageSettings {
      id
      name
      imageIdx {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageBgIdx {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
