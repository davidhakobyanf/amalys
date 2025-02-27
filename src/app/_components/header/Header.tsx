'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from 'hamburger-react';
import logo from '../../../../public/images/logo.svg';
import menuLogo from '../../../../public/icons/chevron-up.svg';
import searchIcon from '../../../../public/icons/searchIcon.svg';
import styles from './Header.module.scss';
import PeopleIcon from '../icons/PeopleIcon';
import BasketIcon from '../icons/BasketIcon';
import Search from '../Search/Search';
import { searchUtils } from '../utils/searchUtils';
import NavbarMobail from './NavbarMobail/NavbarMobail';

const Header = () => {
    const { searchCheck, handleCheck } = searchUtils();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={`mainGrid ${styles.header}`}>
            <div className={styles.header__container}>
                <div className={styles.header__nav}>
                    <Link href='/' className={styles.logoContainer}>
                        <Image src={logo} className={styles.logo} alt='logo' />
                    </Link>
                    <div className={styles.nav__wrapper}>
                        <Link href='aboutUs'>
                            <p>О нас</p>
                        </Link>
                        <div className={styles.menu__wrapper}>
                            <p>Меню</p> <Image src={menuLogo} alt='menuLogo' />
                        </div>
                        <Link href='contact'>
                            <p>Контакты</p>
                        </Link>
                        <Link href='delivery-policy'>
                            <p>Условия доставки</p>
                        </Link>
                    </div>
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
                    <p>8 992-225-55-12</p>
                </div>
            </div>
            {isMobile && <NavbarMobail isOpen={isOpen} setIsOpen={setIsOpen} />}
        </header>
    );
};

export default Header;
