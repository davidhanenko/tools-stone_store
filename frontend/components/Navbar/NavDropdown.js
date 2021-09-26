/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
import React, { useState } from 'react';
import Link from 'next/link';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import {
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
  NavDropdownStyles,
} from './NavDropdownStyles';
import { useNav } from '../../lib/navState';
import useWindowDimensions from '../../lib/windowDimensions';
import { useEffect } from 'react';

const DropdownItem = React.forwardRef(({ href, onClick, item }, ref) => {
  const { closeSideNav } = useNav();
  return (
    <DropdownItemStyles>
      <a href={href} onClick={() => closeSideNav()} ref={ref}>
        {item}
      </a>
    </DropdownItemStyles>
  );
});

const NavDropdown = React.forwardRef(function NavDropdown(props, ref) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { navOpen } = useNav();
  const { width } = useWindowDimensions();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const mouseEnter = () => {
    !navOpen && setDropdownOpen(true);
  };

  const mouseLeave = () => {
    !navOpen && setDropdownOpen(false);
  };

  useEffect(() => {
    if (width >= 850) {
      setDropdownOpen(false);
    }
  }, [width]);

  return (
    <NavDropdownStyles onMouseOver={mouseEnter} onMouseLeave={mouseLeave}>
      <div className='dropdown-btns-group'>
        <a href={props.href} ref={ref}>
          {props.title}
        </a>
        <DropdownBtnStyles
          type='button'
          onClick={showDropdown}
          disabled={!navOpen || width > 850}
        >
          {dropdownOpen && navOpen ? <MdExpandLess /> : <MdExpandMore />}
        </DropdownBtnStyles>
      </div>

      {dropdownOpen && (
        <DropdownMenuStyles>
          {props?.products?.map(product => (
            <Link
              href={{
                pathname: '/products/[product]',
                query: { product: `${product.product_title.toLowerCase()}` },
              }}
              key={product.id}
              passHref
            >
              {/* <DropdownItemStyles>
              <a>{product.product_title.toLowerCase()}</a>
              </DropdownItemStyles> */}
              <DropdownItem item={product?.product_title} />
            </Link>
          ))}
        </DropdownMenuStyles>
      )}
    </NavDropdownStyles>
  );
});

export default NavDropdown;
