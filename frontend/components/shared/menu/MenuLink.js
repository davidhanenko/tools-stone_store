import Link from 'next/link';
import { useRouter } from 'next/router';
import { formatUrlToRoute } from '../../../lib/formatUrl';

import { useMenu } from '../../../lib/menuState';
import { MenuLinkStyles } from './MenuLinkStyles';

export default function MenuLink({ product }) {
  const router = useRouter();

  const { closeMenu } = useMenu();

  return (
    <MenuLinkStyles>
      <Link
        href={{
          pathname: '/products/[products]',
          query: { products: `${formatUrlToRoute(product.title)}` },
        }}
      >
        <a onClick={() => closeMenu()}>
          <p
            className={
              formatUrlToRoute(router.asPath.split('/').slice(-1).join('')) ===
              formatUrlToRoute(product.title)
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
