import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/tools">Tools</Link>
      <Link href="/contacts">Contact</Link>
      <Link href="/gallery">Gallery</Link>
      <button type="button">&times;</button>
    </NavStyles>
  );
}
