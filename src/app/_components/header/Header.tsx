'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from 'hamburger-react';
import logo from '../../../../public/images/logo.svg';
import searchIcon from '../../../../public/icons/searchIcon.svg';
import PeopleIcon from '../icons/PeopleIcon';
import BasketIcon from '../icons/BasketIcon';
import Search from '../Search/Search';
import NavbarMobail from './NavbarMobail/NavbarMobail';
import useMediaWidthOrientation from '@/app/_hooks/useMediaWidthOrientation';
import { menuData } from '@/app/_moqk/moqk';
import { useSearch } from '../../_hooks/useSearch';
import styles from './Header.module.scss';
import HeaderContent from './HomeHeader/HeaderContent';

const Header = () => {
    const { searchCheck, handleCheck } = useSearch();
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile } = useMediaWidthOrientation();

    return (
        <>
            <header className={styles.header}>
                <div className={`mainGrid ${styles.header__container}`}>
                    <div className={styles.header__nav}>
                        <Link href='/' className={styles.logoContainer}>
                            <Image src={logo} className={styles.logo} alt='logo' />
                        </Link>
                        <ul className={styles.nav__wrapper}>
                            {menuData.map(({ href, label, icon }) =>
                                icon ? (
                                    <li key={label} className={styles.menu__wrapper}>
                                        {label} <Image src={icon} alt={icon} />
                                    </li>
                                ) : (
                                    <li key={href}>
                                        <Link href={href || '#'}>{label}</Link>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                    <div className={styles.header__contacts}>
                        <div className={styles.header__contacts__icons}>
                            {searchCheck ? (
                                <Search variant='headerSearch' searchCheck={searchCheck} handleCheck={handleCheck} />
                            ) : (
                                <Image width={24} height={24} src={searchIcon} alt='search' onClick={handleCheck} />
                            )}
                            <Link href='login'>
                                <PeopleIcon style={{ width: '24px', height: '24px' }} />
                            </Link>
                            <Link href='basket'>
                                <BasketIcon style={{ width: '24px', height: '24px' }} />
                            </Link>
                            <div className={styles.hamburger__icon}>
                                <Hamburger toggled={isOpen} duration={0.8} size={20} toggle={setIsOpen} />
                            </div>
                        </div>
                        <p>+7 (985) 648-66-81</p>
                    </div>
                </div>
                {isMobile && <NavbarMobail isOpen={isOpen} setIsOpen={setIsOpen} />}
            </header>
            <HeaderContent />
        </>
    );
};

export default Header;
