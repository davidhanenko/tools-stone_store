import Link from 'next/link';
import { useState } from 'react';

import NavStyles from './styles/NavStyles';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  function onClick() {
    setNavOpen(!navOpen);
  }
  return (
    <NavStyles open={navOpen}>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/products'>Products</Link>
      <Link href='/tools'>Tools</Link>
      <Link href='/contacts'>Contact</Link>
      <Link href='/gallery'>Gallery</Link>
      <button type='button' onClick={onClick}>
        &times;
      </button>
    </NavStyles>
  );
}
