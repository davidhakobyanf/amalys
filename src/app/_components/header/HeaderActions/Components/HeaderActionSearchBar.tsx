'use client';
import { useState } from 'react';
import Search from '@/app/_components/Search/Search';
import Image from 'next/image';
import searchIcon from '../../../../../../public/icons/searchIcon.svg';

const HeaderActionSearchBar = () => {
  const [searchCheck, setSearchCheck] = useState<boolean>(false);

  const handleCheck = () => {
    setSearchCheck((prev) => !prev);
  };

  return searchCheck ? (
    <Search variant="headerSearch" searchCheck={searchCheck} handleCheck={handleCheck} />
  ) : (
    <Image width={24} height={24} src={searchIcon} alt="search" onClick={handleCheck} />
  );
};

export default HeaderActionSearchBar;
