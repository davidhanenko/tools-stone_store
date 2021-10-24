import Link from 'next/link';
import { useRouter } from 'next/router';

import { useMenu } from '../../../lib/menuState';
import { MenuLinkStyles } from './MenuLinkStyles';

export default function MenuLink({ product }) {
  const router = useRouter();

  const { closeMenu } = useMenu();

  console.log(router.asPath.split('/').slice(-1).join(''));
  console.log('title ' + product.title);

  return (
    <MenuLinkStyles>
      <Link
        href={{
          pathname: '/products/[products]',
          query: { products: `${product.title.split(' ').join('_')}` },
        }}
      >
        <a onClick={() => closeMenu()}>
          <p
            className={
              router.asPath.split('/').slice(-1).join('') === product.title.split(' ').join('_')
                ? 'active link-title'
                : 'link-title'
            }
          >
            {product.title}
          </p>
        </a>
      </Link>
    </MenuLinkStyles>
  );
}
