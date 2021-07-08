import Link from 'next/link';
import styled from 'styled-components';
// import Nav from './Nav';

const Logo = styled.h1`
  font-size: 5rem;
  position: relative;
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

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 5px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    border-bottom: 1px solid var(--black, black);
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">A2Z</Link>
        </Logo>
        {/* <Nav /> */}
      </div>
      {/* <div className="sub-bar">
        <Search />
      </div> */}
    </HeaderStyles>
  );
}
