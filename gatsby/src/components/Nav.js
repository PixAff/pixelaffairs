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
        <li>
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
