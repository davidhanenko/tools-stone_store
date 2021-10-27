import { formatUrlToDbName } from '../../../lib/formatUrl';
import ItemsCategory from './ItemsCategory';
import { ItemsStyles } from './ItemsStyles';

export default function Items({ itemsCategory }) {
  return (
    <ItemsStyles>
      {itemsCategory && (
        <ItemsCategory itemsCategory={formatUrlToDbName(itemsCategory)} />
      )}
    </ItemsStyles>
  );
}
