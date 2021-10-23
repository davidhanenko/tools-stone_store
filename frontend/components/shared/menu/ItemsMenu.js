import { ItemsMenuStyles } from './ItemsMenuStyles';
import MenuLink from './MenuLink';

export default function ItemsMenu({ products }) {

  return (
    <ItemsMenuStyles>
      <div className='menu-links'>
        {products.map(product => (
          <MenuLink product={product} key={product.id} />
        ))}
      </div>
    </ItemsMenuStyles>
  );
}
