import { formatUrlToDbName } from '../../../lib/formatUrl';
import ItemsMenu from '../../shared/menu/ItemsMenu';
import ItemsCategory from './ItemsCategory';
import { ItemsStyles } from './ItemsStyles';

export default function Items({ itemsCategory, products }) {
  
  return (
    <ItemsStyles>
      <ItemsMenu products={products} />

      {itemsCategory && (
        <ItemsCategory itemsCategory={formatUrlToDbName(itemsCategory)} />
      )}
    </ItemsStyles>
  );
}
