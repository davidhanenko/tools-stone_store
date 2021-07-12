/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import styled from 'styled-components';
import { useNav } from '../lib/navState';

const NavDropdownStyles = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownBtnStyles = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  @media (max-width: 700px) {
    position: relative;
    right: 3rem;
  }
  svg {
    color: grey;
    font-size: 2em;
  }
`;

const DropdownMenuStyles = styled.ul`
  background: var(--lightGrey);
  margin: 0;
  li {
    font-size: 1rem;
    padding-left: 2rem;
    text-decoration: none;
    list-style: none;
  }
`;

function DropdownItem() {
  return <li>1</li>;
}

const NavDropdown = React.forwardRef(function NavDropdown(props, ref) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { navOpen } = useNav();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <NavDropdownStyles>
        <a href={props.href} ref={ref}>
          {props.title}
        </a>
        <DropdownBtnStyles
          type="button"
          onClick={showDropdown}
          disabled={!navOpen}
        >
          {dropdownOpen ? <MdExpandLess /> : <MdExpandMore />}
        </DropdownBtnStyles>
      </NavDropdownStyles>
      {navOpen && dropdownOpen && (
        <DropdownMenuStyles>
          <DropdownItem />
        </DropdownMenuStyles>
      )}
    </>
  );
});

export default NavDropdown;
