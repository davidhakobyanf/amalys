'use client'
import React, {FC, useState} from 'react';
import NavbarMobail from "@/app/_components/header/NavbarMobail/NavbarMobail";
import useMediaWidthOrientation from "@/app/_hooks/useMediaWidthOrientation";
import Hamburger from "hamburger-react";
import {HeaderClientProps,} from "@/app/_type/type";
import styles from './HeaderActionBurgerMenu.module.scss'

const HeaderActionBurgerMenu:FC<HeaderClientProps> = ({categories}) => {
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