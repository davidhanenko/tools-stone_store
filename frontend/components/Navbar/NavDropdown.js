
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { useNav } from '../../context/navState';
import useWindowDimensions from '../../lib/windowDimensions';
import { formatUrlToRoute } from '../../helpers/formatUrl';

import {
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
  NavDropdownStyles,
} from './NavDropdownStyles';

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
    let isMounted = true;
    if (width >= 850) {
      setDropdownOpen(false);
    }
    return () => {
      isMounted = false;
    };
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
                query: {
                  product: `${formatUrlToRoute(product.product_title)}`,
                },
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
