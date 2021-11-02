import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { Slant as Hamburger } from 'hamburger-react';

import { useMenu } from '../../context/menuState';
import useWindowDimensions from '../../lib/windowDimensions';

import MenuLink from './MenuLink';
import { ItemsMenuStyles, MenuButtonStyles } from './ItemsMenuStyles';

const PRODUCTS = gql`
  query PRODUCTS {
    products {
      id
      title: product_title
      items_categories {
        category: category_title
      }
    }
  }
`;

export default function ItemsMenu() {
  const { data, error, loading } = useQuery(PRODUCTS);

  const { isOpen, setOpen, btnClicked, setBtnClicked, closeMenu } = useMenu();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 850) {
      closeMenu();
    }
  }, [width]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data?.products;

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
