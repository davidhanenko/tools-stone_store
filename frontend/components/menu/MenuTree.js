import { useRouter } from 'next/router';
import Link from 'next/link';

import { formatUrlToDbName } from '../../helpers/formatUrl';

import { MenuTreeStyles } from './MenuTreeStyles';

export default function MenuTree() {
  const router = useRouter();
  const routesArr = router.asPath.split('/').slice(1);

  const getRoute = (r, i) => r.slice(0, i+1).join('/');

  return (
    <MenuTreeStyles>
      {routesArr.map((node, index, arr) => (
        <TreeNode key={index} node={node} route={getRoute(arr, index)} />
      ))}
    </MenuTreeStyles>
  );
}

function TreeNode({ node, route }) {
  return (
    <li>
      <Link href={`/${route}`}>
        <a>{formatUrlToDbName(node)}</a>
      </Link>
    </li>
  );
}
