import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const TecStyles = styled.div`
  padding: 4rem;
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  background: var(--yellow);
  text-align: center;
  div {
    width: 75%;
  }
`;

export default function Tech() {
  return (
    <TecStyles>
      <div>
        <h2>Technik</h2>
        <div className="divider"></div>
        <p>
          Jahrelange Erfahrung und intensiver Austausch mit unseren Kunden haben
          uns die Möglichkeit gegeben, ein gut abgestimmtes Portfolio an eigener
          Technik aufzubauen. Die Technik kommt auf unseren umgesetzten
          Veranstaltungen zum Einsatz, kann aber auch als „dry hire“ gemietet
          werden. Vom Dataton Watchout Server über Mac Pro bis zum 4K Monitor
          haben wir ein breites Angebot an eigener Technik.
        </p>
        <Link to={`/equipment`}>
          <button>Zur Technik</button>
        </Link>
      </div>
    </TecStyles>
  );
}
