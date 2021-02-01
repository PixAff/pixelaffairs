import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import pixAffStefanImg from "../assets/images/stefan-sarow-portrait.webp";
import SEO from "../components/SEO";

const AboutStyles = styled.div`
  margin-top: 12rem;
  margin-bottom: 8rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  place-items: center;
`;

export default function AboutPage() {
  return (
    <div>
      <SEO title="about" image={pixAffStefanImg} />
      <div className="container">
        <div className="container-inner center">
          <h2 className="page-title">Pixel was?</h2>
          <div className="divider-center">
            <div className="divider"></div>
          </div>
          <p>
            <strong>pixel affairs</strong> ist der Live Event Spezialist im
            Bereich Videozuspielung. pixel affairs verbindet Kunst mit Technik –
            und Technik mit Kunst. Wir beraten Unternehmen, Agenturen und
            technische Dienstleister bei der Umsetzung ihrer Ideen für Live
            Events im Bereich Content Zuspielung und Interaktion. Wir planen die
            Umsetzung von Videozuspielungen, Präsentationen, Interaktiven
            Medien. Wir führen Machbarkeitsstudien durch, erfinden mögliche und
            unmögliche Steuerungen für Messestände und setzen das Ergebnis auch
            vor Ort um. Unsere Struktur erlaubt es uns, sowohl auf{" "}
            <Link to={`/equipment`}>eigene Technik</Link> zurückzugreifen, als
            auch innerhalb unsere Partnernetzwerkes eine breite Range an
            Medienservern, Mediensteuerungen, etc. anzubieten. Von der Planung
            über die Umsetzung bis zum Lächeln im Gesicht des Kunden – wir
            können alles.
          </p>
          <p>
            <strong>pixel affairs</strong> – your pixels are safe with us!
          </p>
          <AboutStyles>
            <div>
              <h2>Stefan Sarow</h2>
              <div className="divider"></div>
              <p>
                Stefan ist Gründer von pixel affairs. Nach fast 20 Jahren
                Berufserfahrung sieht man ihm noch immer jeden Tag seine
                Leidenschaft für bunte, bewegte Bilder an. Er liebt es, vor
                jeder Show die Vorfreude in den Augen seiner Kunden zu sehen,
                das Kribbeln in den letzten Momenten bevor es heißt „Herzlich
                willkommen…“
              </p>
              <p>
                Stefan ist zertifizierter und erfahrener Operator für diverse
                Systeme, darunter Dataton Watchout, AVStumpfl Pixera und Wings
                und Barco Eventmaster E2/S3. Er bildet sich laufend fort und
                bleibt auch in stressigen Situationen stets gelassen und ruhig.
              </p>
              <p>
                Seit längerer Zeit ist Stefan auch als zertifizierter Full Stack
                Web Developer tätig und entwickelt Apps sowohl für den
                Eventbereich als auch für Unternehmen aus anderen Branchen.{" "}
              </p>
            </div>
            <div>
              <img src={pixAffStefanImg} alt="Stefan Sarow" />
            </div>
          </AboutStyles>
          <Link to={`/work`}>
            <button>Referenzen</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
