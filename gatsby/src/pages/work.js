import React from "react";
import { graphql } from "gatsby";

import WorkList from "../components/WorkList";
import SEO from "../components/SEO";

export default function WorkPage({ data }) {
  const works = data.works.nodes.sort((a, b) => (a.date > b.date ? -1 : 1));
  return (
    <div>
      <SEO title="Referenzen" />
      <WorkList
        className="Stefan here"
        works={works}
        data-sal="slide-up"
        // data-sal-duration="2000" // changes duration of the animation (from 200to 2000 ms)
        // data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
        // data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      />
    </div>
  );
}

export const query = graphql`
  query {
    works: allSanityWork {
      nodes {
        title
        place
        date
        id
        slug {
          current
        }
        client
        description
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
