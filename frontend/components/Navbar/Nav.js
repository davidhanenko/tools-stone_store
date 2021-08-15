import React, { useEffect } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useNav } from '../../lib/navState';

import NavDropdown from './NavDropdown';
import { NavStyles, NavButtonStyles } from './NavStyles';
import useWindowDimensions from '../../lib/windowDimensions';
import Search from './Search';

export default function Nav() {
  const { navOpen, toggleNav, closeSideNav, navBtnClick, setNavBtnClick } =
    useNav();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 850) {
      closeSideNav();
    }
  }, [width]);

  const LinkBtn = React.forwardRef(({ onClick, href, title }, ref) => {
    return (
      <a href={href} onClick={() => closeSideNav()} ref={ref}>
        {title}
      </a>
    );
  });

  return (
    <>
      <NavStyles open={navOpen} btnClick={navBtnClick} width={width}>
        <div className='nav-links'>
          <Link href='/' passHref>
            <LinkBtn title={'home'} />
          </Link>
          <Link href='/test' passHref>
            <LinkBtn title={'about'} />
          </Link>
          <Link href='/products' passHref>
            <NavDropdown title='products' />
          </Link>
          <Link href='/tools' passHref>
            <NavDropdown title='tools' />
          </Link>
          <Link href='/contacts' passHref>
            <LinkBtn title={'contact'} />
          </Link>
          <Link href='/gallery' passHref>
            <LinkBtn title={'gallery'} />
          </Link>
        </div>
        <NavButtonStyles onClick={()=> setNavBtnClick(true)}>
          <Hamburger
            hideOutline={false}
            label='Show menu'
            toggled={navOpen}
            toggle={toggleNav}
          />
        </NavButtonStyles>
      </NavStyles>
      <Search />
    </>
  );
}
