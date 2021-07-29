import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NavStateProvider } from '../lib/navState';
import Nav from './Navbar/Nav';

const HeaderStyles = styled.header`
  background: var(--offWhite);
  margin: 0;
  padding: 0;
  max-height: var(--navHeight);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  .navbar {
    height: var(--navHeight);
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-areas: 'logo navbar';
    @media (max-width: 850px) {
      grid-template-rows: var(--navHeight);
    }
  }
  .search-scrolled {
    transition: all 0.5s;
    opacity: 0;
    height: 0;
  }
`;

const Logo = styled.h1`
  grid-area: logo;
  display: grid;
  grid-auto-columns: min-content;
  place-self: start;
  font-size: 5rem;
  line-height: 1rem;
  margin-left: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: orange;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;

export default function Header() {
  return (
    <NavStateProvider>
      <HeaderStyles>
        <div className='navbar'>
          <Logo>
            <Link href='/'>a2z</Link>
          </Logo>
          <Nav />
        </div>
      </HeaderStyles>
    </NavStateProvider>
  );
}
