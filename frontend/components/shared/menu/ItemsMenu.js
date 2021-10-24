import { useState, useEffect } from 'react';
import { Slant as Hamburger } from 'hamburger-react';

import useWindowDimensions from '../../../lib/windowDimensions';
import MenuLink from './MenuLink';
import { ItemsMenuStyles, MenuButtonStyles } from './ItemsMenuStyles';
import { useMenu } from '../../../lib/menuState';

export default function ItemsMenu({ products }) {

  const { isOpen, setOpen, btnClicked, setBtnClicked, closeMenu } = useMenu();

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
          {products.map(product => (
            <MenuLink product={product} key={product.id} />
          ))}
        </div>
        <div className='side-menu-links '>
          {products.map(product => (
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
