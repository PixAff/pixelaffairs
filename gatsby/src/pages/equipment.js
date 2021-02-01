import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import SEO from "../components/SEO";

const EquipmentGridStyles = styled.div`
  margin-top: 8rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

function SingleEquipment({ eq }) {
  return (
    <div>
      {eq.name}
      <p className="subtitle">{eq.description}</p>
    </div>
  );
}

export default function EquipmentPage({ data: { equipments } }) {
  return (
    <div>
      <SEO title="equipment" />
      <div className="container">
        <div className="container-inner center">
          <h2 className="page-title">Technik / Vermietung</h2>
          <div className="divider-center">
            <div className="divider"></div>
          </div>
          <p className="subtitle center">
            Kleiner Auszug aus der aktuellen Bestandsliste. Der Bestand wird
            regelmäßig erweitert. Detailinformationen und Preise auf Anfrage per
            Mail.
          </p>
          <EquipmentGridStyles>
            {equipments.nodes.map((eq) => (
              <SingleEquipment key={eq.name} eq={eq}></SingleEquipment>
            ))}
          </EquipmentGridStyles>
          <Link to={`/equipment`}>
            <button>Anfrage per Mail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    equipments: allSanityEquipment {
      nodes {
        name
        description
        id
        slug {
          current
        }
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
