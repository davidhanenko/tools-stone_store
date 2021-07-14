/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import {
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
  NavDropdownStyles,
} from './NavDropdownStyles';
import { useNav } from '../../lib/navState';
import useWindowDimensions from '../../lib/windowDimensions';

function DropdownItem({ item }) {
  return (
    <DropdownItemStyles>
      <a href="#">{item} </a>
    </DropdownItemStyles>
  );
}

const NavDropdown = React.forwardRef(function NavDropdown(props, ref) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { navOpen } = useNav();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const { width } = useWindowDimensions();

  function mouseEnter() {
    if (width > 850) setDropdownOpen(true);
  }

  function mouseLeave() {
    if (width > 850) setDropdownOpen(false);
  }

  return (
    <NavDropdownStyles onMouseOver={mouseEnter} onMouseLeave={mouseLeave}>
      <div className="dropdown-btns-group">
        <a href={props.href} ref={ref}>
          {props.title}
        </a>
        <DropdownBtnStyles
          type="button"
          onClick={showDropdown}
          disabled={!navOpen || width > 850}
        >
          {dropdownOpen && width <= 850 ? <MdExpandLess /> : <MdExpandMore />}
        </DropdownBtnStyles>
      </div>

      {dropdownOpen && (
        <DropdownMenuStyles>
          <DropdownItem item="First link" />
          <DropdownItem item="Second link" />
          <DropdownItem item="First link" />
          <DropdownItem item="Second link" />
          <DropdownItem item="First link" />
          <DropdownItem item="Second link" />
          <DropdownItem item="First link" />
          <DropdownItem item="Second link" />
        </DropdownMenuStyles>
      )}
    </NavDropdownStyles>
  );
});

export default NavDropdown;
