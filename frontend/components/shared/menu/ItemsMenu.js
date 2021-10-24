import { useState } from 'react';
import {Slant as Hamburger} from 'hamburger-react';

import MenuLink from './MenuLink';
import { ItemsMenuStyles, MenuButtonStyles } from './ItemsMenuStyles';

export default function ItemsMenu({ products }) {
  const [isOpen, setOpen] = useState(false);
   const [btnClicked, setBtnClicked] = useState(false);

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
          <MenuLink product={product} key={product.id} />
        ))}
      </div>
    </ItemsMenuStyles>
  );
}
