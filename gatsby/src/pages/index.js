import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import SEO from "../components/SEO";
import useLatestData from "../utils/useLatestData";

import pixAffIndexBg from "../assets/images/index-bg-car.webp";
import pixAffLogoAnimation from "../assets/images/animation.webm";
import pixAffIntroImg from "../assets/images/intro-image.webp";

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
  background-repeat: no-repeat;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background: var(--yellow) url(${pixAffIndexBg});
`;

const LogoStyles = styled.div`
  background: var(--yellow);
  margin: 0;
  padding: 0;
`;

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

export default function HomePage() {
  const result = useLatestData();
  console.log(result);
  return (
    <div>
      <SEO title="home" />
      <PageStyles>
        <IndexStyles></IndexStyles>
        <LogoStyles>
          <video
            width="100%"
            autoPlay
            loop
            muted
            src={pixAffLogoAnimation}
            type="video/webm"
          ></video>
        </LogoStyles>

        <IntroductionStyles>
          <div>
            <img src={pixAffIntroImg} alt="Exibition stage" />
          </div>
          <IntroTextStyles>
            <h2>Über pixel affairs</h2>
            <div className="divider"></div>
            <div>
              <p>
                <strong>pixel affairs</strong> ist Live Event Spezialist für
                Medienserver und interaktive Mediensteuerungen. Wir setzen
                verrückte Ideen um, bauen Steuerungen oder sind als Operator
                tätig. Wir sind kreative Techniker und technisch versierte
                Kreative.
              </p>
              <p>
                Sie haben Ideen und möchten diese professionell umsetzen lassen?
                Sie brauchen Ideen, wie Ihre Inhalte kreativ transportiert
                werden können? Wir haben die Lösungen!
              </p>
            </div>
            <Link to={`/about`}>
              <button>Mehr Informationen</button>
            </Link>
          </IntroTextStyles>
        </IntroductionStyles>

        <ExampleWrapper>
          <ExampleStyles>
            <h2>Genfer Autosalon 2019</h2>
            <div className="divider"></div>
            <p>
              <strong>Kunde: MediaIvent</strong>
            </p>
            <p>
              Für unserem langjährigen Partner MediaIvent haben wir die
              Zuspielung von LED Flächen und einer 4x4k Monitorwand in Anlehnung
              an eine alte Reklametafel realisiert.
            </p>
            <Link to={`/work`}>
              <button>Weitere Referenzen</button>
            </Link>
          </ExampleStyles>
        </ExampleWrapper>
        <TecStyles>
          <div>
            <h2>Technik</h2>
            <div className="divider"></div>
            <p>
              Jahrelange Erfahrung und intensiver Austausch mit unseren Kunden
              haben uns die Möglichkeit gegeben, ein gut abgestimmtes Portfolio
              an eigener Technik aufzubauen. Die Technik kommt auf unseren
              umgesetzten Veranstaltungen zum Einsatz, kann aber auch als „dry
              hire“ gemietet werden. Vom Dataton Watchout Server über Mac Pro
              bis zum 4K Monitor haben wir ein breites Angebot an eigener
              Technik.
            </p>
            <Link to={`/equipment`}>
              <button>Zur Technik</button>
            </Link>
          </div>
        </TecStyles>
      </PageStyles>
    </div>
  );
}
