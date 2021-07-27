import { useEffect, useState } from 'react/cjs/react.development';
import { SearchStyles } from './SearchStyles';
import { MdSearch } from 'react-icons/md';

export default function Search({ offset }) {
  const [scroll, setSctoll] = useState(false);

  function handleScroll() {
    setSctoll(true);
  }
  function handleScrollEnd() {
    setSctoll(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScrollEnd);
  },[scroll]);

  return (
    <SearchStyles scroll={scroll}>
      <MdSearch className='search-icon' />
      <input type='text' placeholder='Search...' />
    </SearchStyles>
  );
}
