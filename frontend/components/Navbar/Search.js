import { SearchStyles } from './SearchStyles';
import { MdSearch } from 'react-icons/md';

export default function Search({offset}) {
  return (
    <SearchStyles className={offset > 90 && offset < 190 ? 'search-scrolled' : ''}>
      <MdSearch className="search-icon" />
      <input type='text' placeholder='Search...' />
    </SearchStyles>
  );
}
