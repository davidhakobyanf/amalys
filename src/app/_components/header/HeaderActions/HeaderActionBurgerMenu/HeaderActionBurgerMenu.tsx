'use client'
import React, {useState} from 'react';
import NavbarMobail from "@/app/_components/header/NavbarMobail/NavbarMobail";
import useMediaWidthOrientation from "@/app/_hooks/useMediaWidthOrientation";
import Hamburger from "hamburger-react";

import styles from './HeaderActionBurgerMenu.module.scss'
import Search from "@/app/_components/Search/Search";
import HeaderActionBurgerMenuList
    from "@/app/_components/header/HeaderActions/HeaderActionBurgerMenu/HeaderActionBurgerMenuList/HeaderActionBurgerMenuList";
const HeaderActionBurgerMenu = ({categories}) => {
    const { isMobile, isScrolled } = useMediaWidthOrientation();
    const  [isOpenBurgerMenu,setIsOpenBurgerMenu] = useState<boolean>(false);
    return (
        <>
            <div className={styles.hamburger__icon}>
                <Hamburger toggled={isOpenBurgerMenu} duration={0.8} size={20} toggle={setIsOpenBurgerMenu}/>
            </div>
            {isMobile && <NavbarMobail isOpen={isOpenBurgerMenu}  categories={categories} />}

        </>
    );
};

export default HeaderActionBurgerMenu;