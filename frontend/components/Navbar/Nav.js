import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useNav } from '../../lib/navState';

import NavButtonStyles from './NavButtonStyles';
import NavDropdown from './NavDropdown';
import NavStyles from './NavStyles';

export default function Nav() {
  const { navOpen, toggleNav } = useNav();

  return (
    <NavStyles open={navOpen}>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products" passHref>
          <NavDropdown title="products" />
        </Link>
        <Link href="/tools" passHref>
          <NavDropdown title="tools" />
        </Link>
        <Link href="/contacts">Contact</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
      <NavButtonStyles>
        <Hamburger
          hideOutline={false}
          label="Show menu"
          toggled={navOpen}
          toggle={toggleNav}
        />
      </NavButtonStyles>
    </NavStyles>
  );
}
