import { useState, useEffect } from 'react';
import { Slant as Hamburger } from 'hamburger-react';

import useWindowDimensions from '../../lib/windowDimensions';
import MenuLink from './MenuLink';
import { ItemsMenuStyles, MenuButtonStyles } from './ItemsMenuStyles';
import { useMenu } from '../../lib/menuState';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const PRODUCTS = gql`
  query PRODUCTS {
    products {
      id
      title: product_title
      product_categories {
        category: product_category
      }
    }
  }
`;

export default function ItemsMenu() {
  const { data, error, loading } = useQuery(PRODUCTS);

  const { isOpen, setOpen, btnClicked, setBtnClicked, closeMenu } = useMenu();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const products = data?.products;

  console.log(products);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 850) {
      closeMenu();
    }
  }, [width]);

  return (
    <ItemsMenuStyles menuOpen={isOpen} btnClicked={btnClicked}>
      <div className='menu-header'>
        <MenuButtonStyles onClick={() => setBtnClicked(true)}>
          <Hamburger
            hideOutline={false}
            label='Show menu'
            toggled={isOpen}
            toggle={setOpen}
          />
        </MenuButtonStyles>

        <h3 className='main-title'>Products</h3>
      </div>
      <div className='menu-links'>
        {products?.map(product => (
          <MenuLink product={product} key={product.id} />
        ))}
      </div>

      <div className='side-menu-links '>
        {products?.map(product => (
          <MenuLink
            product={product}
            key={product.id}
            onClick={() => setOpen(false)}
          />
        ))}
      </div>
    </ItemsMenuStyles>
  );
}
