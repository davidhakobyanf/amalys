"use server"
import { menuData } from '@/app/_moqk/moqk';
import React from 'react';
import styles from './HeaderCategories.module.scss';
import HeaderCategoriesItem from './HeaderCategoriesItem/HeaderCategoriesItem';
import { getAllCategories } from '@/service/public/allCategory';
import logo from "@/app/_components/header/HeaderLogo/Logo";

const HeaderCategories = async () => {
      const data = await getAllCategories();
  return (
    <div className={styles.header__nav}>
      <ul className={styles.nav__wrapper}>
          {menuData.map(({ href, label, icon }) => (
              <HeaderCategoriesItem
                  key={label}
                  icon={icon}
                  href={href}
                  label={label}
                  {...(icon ? { categories: data } : {})}
              />
          ))}

      </ul>
    </div>
  );
};

export default HeaderCategories;
