import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "./Logo";

const NavStyles = styled.nav`
  z-index: 9999;
  display: flex;
  align-items: center;
  position: fixed;
  height: var(--nav);
  width: 100%;
  margin-bottom: 2rem;
  background: var(--grey);
  transition: all 0.4s;
  .logo {
    transform: translateY(0);
  }
  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    text-align: center;
    list-style: none;
    align-items: center;
  }
  li {
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(3) {
      &:hover {
        --rotate: 2deg;
      }
    }
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    color: var(--yellow);
    &:hover {
      color: var(--red);
    }
    @media (max-width: 600px) {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 800px) {
    --nav: 100px;
    --columns: 4;
    ul {
      row-gap: 1rem;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
  }
  @media (max-width: 600px) {
    --columns: 4;
  }
  @media (max-width: 400px) {
    ul {
      grid-gap: 2rem;
    }

    --columns: 2;
    --nav: 140px;
  }
`;

export default function Nav() {
  return (
    <NavStyles className="nav">
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li className="logo-item">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/equipment">equipment</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
