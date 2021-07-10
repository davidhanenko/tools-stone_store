import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderStyles = styled.header`
  background: var(--offWhite);
  margin: 0;
  padding: 0;
  max-height: 9rem;
  .navbar {
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-areas: 'logo navbar';
    @media (max-width: 700px) {
      grid-template-rows: 9rem;
    }
  }
`;

const Logo = styled.h1`
  grid-area: logo;
  display: grid;
  grid-auto-columns: min-content;
  place-self: start;
  font-size: 5rem;
  line-height: 1rem;
  margin-left: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: orange;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="navbar">
        <Logo>
          <Link href="/">a2z</Link>
        </Logo>
        <Nav />
      </div>
      {/* <div className="sub-bar">
        <Search />
      </div> */}
    </HeaderStyles>
  );
}
