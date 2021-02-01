import React from "react";
import { graphql } from "gatsby";

import WorkList from "../components/WorkList";
import SEO from "../components/SEO";

export default function WorkPage({ data }) {
  const works = data.works.nodes.sort((a, b) => (a.date > b.date ? -1 : 1));
  return (
    <div>
      <SEO title="Referenzen" />
      <WorkList works={works} />
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
