import Link from 'next/link';
import { useMenu } from '../../../lib/menuState';
import { MenuLinkStyles } from './MenuLinkStyles';

export default function MenuLink({ product }) {
const {closeMenu} = useMenu()

  return (
    <MenuLinkStyles>
      <Link
        href={{
          pathname: '/products/[products]',
          query: { products: `${product.title.split(' ').join('_')}` },
        }}
      >
        <a onClick={()=> closeMenu()}>
          <p className='link-title'>{product.title}</p>
        </a>
      </Link>
    </MenuLinkStyles>
  );
}
