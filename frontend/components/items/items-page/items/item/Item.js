import Image from 'next/image';

import { ItemStyles } from './ItemStyles';

export default function Item({ serviceItems }) {
  return (
    <ItemStyles>
      {serviceItems.category.map(item => (
        <div key={item.id} className='item-image'>
          <Image
            src={item.single_item[0].image[0].url}
            width={100}
            height={100}
          />
        </div>
      ))}
    </ItemStyles>
  );
}
