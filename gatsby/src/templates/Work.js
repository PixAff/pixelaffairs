import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/SEO";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function SingleWorkPage({ data }) {
  const date = {
    year: new Date(data.work.date).getFullYear(),
    month: months[new Date(data.work.date).getMonth()],
  };
  return (
    <div>
      <SEO title={data.work.title} image={data.work.image?.asset?.fluid?.src} />
      <div className="container">
        <div className="container-inner">
          <h2>{data.work.title}</h2>
          <p className="subtitle">
            {date.month} {date.year}
          </p>
          <Img fluid={data.work.image.asset.fluid} alt={data.work.title} />
          <p>{data.work.description}</p>

          <p>
            <Link to={`/work`}>← zurück</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    work: sanityWork(slug: { current: { eq: $slug } }) {
      title
      id
      place
      date
      client
      description
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
