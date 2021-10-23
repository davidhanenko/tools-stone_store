import Link from 'next/link';

import { MenuLinkStyles } from './MenuLinkStyles';

export default function MenuLink({ product }) {
  return (
    <MenuLinkStyles>
      <Link
        href={{
          pathname: '/products/[products]',
          query: { products: `${product.title.split(' ').join('_')}` },
        }}
      >
        <a>
          <p className='link-title'>{product.title}</p>
        </a>
      </Link>
    </MenuLinkStyles>
  );
}
