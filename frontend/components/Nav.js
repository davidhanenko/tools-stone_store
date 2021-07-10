import Link from 'next/link';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import NavButtonStyles from './styles/NavButtonStyles';

import NavStyles from './styles/NavStyles';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  function onClick() {
    setNavOpen(!navOpen);
  }
  return (
    <NavStyles open={navOpen}>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/contacts">Contact</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
      <NavButtonStyles>
        <Hamburger
          hideOutline={false}
          label="Show menu"
          toggled={navOpen}
          toggle={setNavOpen}
        />
      </NavButtonStyles>
    </NavStyles>
  );
}
