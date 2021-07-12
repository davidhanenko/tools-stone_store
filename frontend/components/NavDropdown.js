/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import styled from 'styled-components';

const NavDropdownStyles = styled.a`
  padding: 0.2rem 1rem;
  text-transform: uppercase;
  color: grey;
  position: relative;
  display: flex;
  align-items: top;
  cursor: pointer;
  &:after {
    content: '';
    height: 80%;
    width: 1px;
    background: var(--lightGrey);
    position: absolute;
    right: -0.25rem;
    @media (max-width: 701px) {
      content: none;
    }
  }
  &:hover,
  &:focus {
    text-decoration: none;
    color: var(--black);
    transition: 250ms;
    background: none;
  }
  @media (max-width: 700px) {
    padding-left: 3rem;
    width: 200px;
    border-bottom: 1px solid var(--lightGrey);
    padding-bottom: 1rem;
  }
  span {
    display: flex;
    font-size: 2em;
    vertical-align: middle;
    @media (max-width: 700px) {
      position: fixed;
      right: 5rem;
    }
  }
`;

const NavDropdown = React.forwardRef(function NavDropdown(props, ref) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <NavDropdownStyles href={props.href} ref={ref}>
      Products
      <span role="button" tabIndex={0} onClick={showDropdown}>
        {dropdownOpen ? <MdExpandLess /> : <MdExpandMore />}
      </span>
    </NavDropdownStyles>
  );
});

export default NavDropdown;
