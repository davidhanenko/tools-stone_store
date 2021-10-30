import { formatUrlToDbName } from '../../../lib/formatUrl';
import ItemsCategory from './ItemsCategory';
import { ItemsStyles } from './ItemsStyles';

export default function Items({ itemsCategory, items }) {
  return (
    <ItemsStyles>
      {itemsCategory && (
        <ItemsCategory itemsCategory={formatUrlToDbName(itemsCategory)} items={items} />
      )}
    </ItemsStyles>
  );
}
