import ItemsSlider from '../../sliders/items-slider/ItemsSlider';
import ItemsCategory from './ItemsCategory';
import { ItemsStyles } from './ItemsStyles';

export default function Items({ itemsCategory, itemsByIndex, slides }) {
  return (
    <ItemsStyles>
      <h2 className='main-title'>Products</h2>
      <ItemsSlider slides={slides} itemsByIndex={itemsByIndex} />
      {itemsCategory && <ItemsCategory itemsCategory={itemsCategory.split('-').join(' ')} />}
    </ItemsStyles>
  );
}
