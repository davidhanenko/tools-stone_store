import { useEffect } from 'react/cjs/react.development';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useNav } from '../../lib/navState';

import NavDropdown from './NavDropdown';
import { NavStyles, NavButtonStyles } from './NavStyles';
import useWindowDimensions from '../../lib/windowDimensions';
import Search from './Search';

export default function Nav() {
  const { navOpen, toggleNav, closeSideNav } = useNav();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 850) {
      closeSideNav();
    }
  }, [width]);

  return (
    <>
      <NavStyles open={navOpen} width={width}>
        <div className='nav-links'>
          <Link href='/'>Home</Link>
          <Link href='/test'>About</Link>
          <Link href='/products' passHref>
            <NavDropdown title='products' />
          </Link>
          <Link href='/tools' passHref>
            <NavDropdown title='tools' />
          </Link>
          <Link href='/contacts'>Contact</Link>
          <Link href='/gallery'>Gallery</Link>
        </div>
        <NavButtonStyles>
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
