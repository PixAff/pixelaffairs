import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import pixAffStefanImg from "../assets/images/stefan-sarow-contact.webp";
import SEO from "../components/SEO";

const ContactStyles = styled.div`
  margin-top: 12rem;
  margin-bottom: 8rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  place-items: center;
  h3,
  button {
    margin-bottom: 4rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export default function ContactPage() {
  return (
    <div>
      <SEO title="contact" />
      <div className="container">
        <div className="container-inner center">
          <h2 className="page-title">Kontakt</h2>
          <div className="divider-center">
            <div className="divider"></div>
          </div>
          <ContactStyles>
            <div>
              <img height="400px" src={pixAffStefanImg} alt="Stefan Sarow" />
            </div>
            <div>
              <h3>
                <strong>
                  Für ein Projekt anfragen oder Technik ausleihen?
                </strong>
              </h3>
              <Link to={`/work`}>
                <button>Say Hello!</button>
              </Link>
              <p>Pixel Affairs</p>
              <p>Stefan Sarow</p>
              <p>stefan [at] pixelaffairs.com</p>
              <p>Florastraße 86</p>
              <p>13187 Berlin</p>
            </div>
          </ContactStyles>
        </div>
      </div>
    </div>
  );
}
