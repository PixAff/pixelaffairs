import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

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

function truncateString(str, num = 100) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

const WorkGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
`;

const WorkStyles = styled.div`
  padding: 1rem;
  background: white;
  display: grid;
  grid-template-rows: auto auto 200px minmax(12rem, 1fr) auto;
  gap: 1rem;
  h2,
  p {
    margin: 0;
  }
  .no-padding {
    padding: 0;
    margin: 0;
  }
`;

function SingleWork({ work }) {
  const date = {
    year: new Date(work.date).getFullYear(),
    month: months[new Date(work.date).getMonth()],
  };
  return (
    <div>
      <WorkStyles>
        <h2>
          <span>{work.title}</span>
        </h2>
        <p className="subtitle">
          {date.month} {date.year}
        </p>
        <Img
          className="no-padding"
          fluid={work.image.asset.fluid}
          alt={work.title}
        />
        <p>{truncateString(work.description)}</p>
        <Link to={`/work/${work.slug.current}`}>read more</Link>
      </WorkStyles>
    </div>
  );
}

export default function WorkList({ works }) {
  return (
    <div className="container">
      <div className="container-inner">
        <h2 className="page-title">Referenzen</h2>
        <div className="divider-center">
          <div className="divider"></div>
        </div>
        <p className="subtitle center">
          Ein Auszug der prägnantesten Projekte der letzten Zeit
        </p>
        <div>
          <WorkGridStyles>
            {works.map((work) => (
              <SingleWork key={work.id} work={work} />
            ))}
          </WorkGridStyles>
        </div>
      </div>
    </div>
  );
}
