import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ExampleWrapper = styled.div`
  position: relative;
  height: 500px;
`;

const ExampleStyles = styled.div`
  position: absolute;
  bottom: 0;
  left: 200px;
  padding: 4rem;
  height: 360px;
  width: 300px;
  background: var(--yellow);
  @media (max-width: 900px) {
    position: relative;
    left: 0;
    top: 0;
    bottom: 0;
    margin: 100px auto;
  }
`;

export default function Example() {
  return (
    <ExampleWrapper>
      <ExampleStyles>
        <h2>Genfer Autosalon 2019</h2>
        <div className="divider"></div>
        <p>
          <strong>Kunde: MediaIvent</strong>
        </p>
        <p>
          Für unserem langjährigen Partner MediaIvent haben wir die Zuspielung
          von LED Flächen und einer 4x4k Monitorwand in Anlehnung an eine alte
          Reklametafel realisiert.
        </p>
        <Link to={`/work`}>
          <button>Weitere Referenzen</button>
        </Link>
      </ExampleStyles>
    </ExampleWrapper>
  );
}
