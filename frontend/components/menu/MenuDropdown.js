import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { useMenu } from '../../context/menuState';

import useWindowDimensions from '../../lib/windowDimensions';
import { formatUrlToRoute } from '../../helpers/formatUrl';

import {
  DropdownStyles,
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
} from './MenuDropdownStyles';

const DropdownItem = React.forwardRef(({ href, onClick, menuItem }, ref) => {
  const { closeMenu } = useMenu();
  
  return (
    <DropdownItemStyles>
      <a href={href} onClick={() => closeMenu()} ref={ref}>
        {menuItem}
      </a>
    </DropdownItemStyles>
  );
});

const MenuDropdown = React.forwardRef(function MenuDropdown(props, ref) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isOpen } = useMenu();
  const { width } = useWindowDimensions();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const mouseEnter = () => {
    !isOpen && setDropdownOpen(true);
  };

  const mouseLeave = () => {
    !isOpen && setDropdownOpen(false);
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
    <DropdownStyles onMouseOver={mouseEnter} onMouseLeave={mouseLeave}>
      <div className='dropdown-btns-group'>
        <a href={props.href} ref={ref}>
          {props.title}
        </a>
        <DropdownBtnStyles
          type='button'
          onClick={showDropdown}
          disabled={!isOpen || width > 850}
        >
          {dropdownOpen && isOpen ? <MdExpandLess /> : <MdExpandMore />}
        </DropdownBtnStyles>
      </div>

      {dropdownOpen && (
        <DropdownMenuStyles>
          {props?.categories?.map(category => (
            <Link
              href={{
                pathname: '/products/[products]/[collection]',
                query: {
                  products: `${formatUrlToRoute(props.item)}`,
                  collection: `${formatUrlToRoute(category.category)}`,
                },
              }}
              key={category.id}
              passHref
            >
              <DropdownItem menuItem={category?.category} />
            </Link>
          ))}
        </DropdownMenuStyles>
      )}
    </DropdownStyles>
  );
});

export default MenuDropdown;
