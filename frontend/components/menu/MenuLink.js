import Link from 'next/link';

import { useMenu } from '../../context/menuState';
import { formatUrlToRoute } from '../../helpers/formatUrl';

import MenuDropdown from './MenuDropdown';
import { MenuLinkStyles } from './MenuLinkStyles';

export default function MenuLink({ product }) {
 


  return (
    <MenuLinkStyles>
      <Link
        href={{
          pathname: '/products/[products]',
          query: { products: `${formatUrlToRoute(product.title)}` },
        }}
        passHref
      >
        <MenuDropdown
          item={product.title}
          categories={product.items_categories}
        />
      </Link>
    </MenuLinkStyles>
  );
}
