import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";

const IntroductionStyles = styled.div`
  margin-top: 0;
  background: var(--yellow);
  text-align: center;
  padding: 4rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 4rem;
  }
`;

const IntroTextStyles = styled.div`
  background: var(--yellow);
  padding: 4rem;
`;

export default function Introduction({ fluid }) {
  return (
    <IntroductionStyles>
      <div>
        <Img fluid={fluid} alt="Exibition stage" />
      </div>
      <IntroTextStyles>
        <h2>Über pixel affairs</h2>
        <div className="divider"></div>
        <div>
          <p>
            <strong>pixel affairs</strong> ist Live der Event Spezialist für
            Medienserver und interaktive Mediensteuerungen. Wir setzen verrückte
            Ideen um, bauen Steuerungen oder sind als Operator tätig. Wir sind
            kreative Techniker und technisch versierte Kreative.
          </p>
          <p>
            Sie haben Ideen und möchten diese professionell umsetzen lassen? Sie
            brauchen Ideen, wie Ihre Inhalte kreativ transportiert werden
            können? Wir haben die Lösungen!
          </p>
        </div>
        <Link to={`/about`}>
          <button>Mehr Informationen</button>
        </Link>
      </IntroTextStyles>
    </IntroductionStyles>
  );
}
