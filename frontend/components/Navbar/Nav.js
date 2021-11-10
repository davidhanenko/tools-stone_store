import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Hamburger from 'hamburger-react';

import { useNav } from '../../context/navState';
import useWindowDimensions from '../../lib/windowDimensions';

import NavDropdown from './NavDropdown';
import { NavStyles, NavButtonStyles } from './NavStyles';
import Search from './Search';

const PRODUCTS = gql`
  query PRODUCTS1 {
    services {
      service
      id
      items {
        id
        title
      }
    }
  }
`;

export default function Nav() {
  const { data, error, loading } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const services = data?.services;

  const { navOpen, toggleNav, closeSideNav, navBtnClick, setNavBtnClick } =
    useNav();
  const { width } = useWindowDimensions();

  useEffect(() => {
    let isMounted = true;
    if (width >= 850) {
      closeSideNav();
    }
    return () => {
      isMounted = false;
    };
  }, [width]);

  const LinkBtn = React.forwardRef(({ href, title }, ref) => {
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
          <Link href='/about' passHref>
            <LinkBtn title={'about'} />
          </Link>
          {services.map(service => (
            <Link key={service.id} href={`/${service.service}`} passHref>
              <NavDropdown title={service.service} items={service.items} />
            </Link>
          ))}
          {/* <Link href='/products' passHref>
            <NavDropdown title='products' products={data?.products} />
          </Link>
          <Link href='/tools' passHref>
            <NavDropdown title='tools' />
          </Link>
          <Link href='/sinks' passHref>
            <NavDropdown title='sinks' />
          </Link> */}
          <Link href='/gallery' passHref>
            <LinkBtn title={'gallery'} />
          </Link>
          <Link href='/contacts' passHref>
            <LinkBtn title={'contacts'} />
          </Link>
        </div>
        <NavButtonStyles onClick={() => setNavBtnClick(true)}>
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
