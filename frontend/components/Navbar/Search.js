import { useRef, useContext } from 'react/';
import { useEffect, useState } from 'react';
import { SearchStyles } from './SearchStyles';
import { MdSearch } from 'react-icons/md';
import { useScroll } from '../../lib/useScroll';

export default function Search({ offset }) {
  const [isScroll, setIsScroll] = useState(false);
  const { scrollRef } = useScroll();

  const handleScrollPos = () => {
    if (window.pageYOffset > 100 && window.innerHeight) {
      window.pageYOffset !== scrollRef.current.scrollPos && setIsScroll(true);

      setTimeout(() => {
        setIsScroll(false);
        scrollRef.current.scrollPos = window.pageYOffset;
      }, 300);
    }

    console.log(scrollRef.current.scrollPos, window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPos);
    return () => window.removeEventListener('scroll', handleScrollPos);
  });

  return (
    <SearchStyles scroll={isScroll}>
      <MdSearch className='search-icon' />
      <input type='text' placeholder='Search...' />
    </SearchStyles>
  );
}
