"use client";
import useDropdown from '@/app/_hooks/useDropDown';
import React, {FC} from 'react';
import Image from 'next/image';
import DropDown from '../../../DropDown/DropDown';
import Link from 'next/link';
import {MenuDataTypes} from "@/app/_type/type";
import styles from './HeaderCategoriesItem.module.scss'



const HeaderCategoriesItem:FC<MenuDataTypes> = ({ icon, label, href,categories }) => {
  const { openDropdown, handleDropdownToggle, dropdownRef } = useDropdown();
  return icon ? (
    <li key={label} onClick={() => handleDropdownToggle(label)} ref={dropdownRef} className={styles.menu__wrapper}>
      {label} <Image src={icon} alt={icon} />
      {openDropdown === label && (
        <DropDown variant="laptop">
          {categories?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </DropDown>
      )}
    </li>
  ) : (
    <li key={href}>
      <Link href={href || '#'}>{label}</Link>
    </li>
  );
};

export default HeaderCategoriesItem;
