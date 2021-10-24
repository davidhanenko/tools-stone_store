import { useState } from 'react';
import Hamburger from 'hamburger-react';

import MenuLink from './MenuLink';
import { ItemsMenuStyles, MenuButtonStyles } from './ItemsMenuStyles';

export default function ItemsMenu({ products }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <ItemsMenuStyles menuOpen={isOpen}>
      <MenuButtonStyles>
        <Hamburger
          hideOutline={false}
          label='Show menu'
          toggled={isOpen}
          toggle={setOpen}
        />
      </MenuButtonStyles>
      <h3 className='main-title'>Products</h3>
      <div className='menu-links'>
        {products.map(product => (
          <MenuLink product={product} key={product.id} />
        ))}
      </div>
    </ItemsMenuStyles>
  );
}
