'use client';
import {useState,  FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from 'hamburger-react';
import logo from '../../../../../public/images/logo.png';
import searchIcon from '../../../../../public/icons/searchIcon.svg';
import PeopleIcon from '../../icons/PeopleIcon';
import BasketIcon from '../../icons/BasketIcon';
import Search from '../../Search/Search';
import NavbarMobail from '../NavbarMobail/NavbarMobail';
import useMediaWidthOrientation from '@/app/_hooks/useMediaWidthOrientation';
import { menuData } from '@/app/_moqk/moqk';
import { useSearch } from '../../../_hooks/useSearch';
import HeaderContent from '@/app/_components/header/HeaderContent/HeaderContent';
import usePathNavigate from '@/app/_hooks/usePathNavigate';
import cloudsLogo from '../../../../../public/images/clouds.png';
import useDropdown from '@/app/_hooks/useDropDown';
import DropDown from '../../DropDown/DropDown';
import { getAllCategories } from '@/service/public/allCategory';
import {HeaderClientProps} from "@/app/_type/type";
import styles from './HeaderClient.module.scss';


const HeaderClient:FC<HeaderClientProps> = ({ categories }) => {

    const { searchCheck, handleCheck } = useSearch();
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile, isScrolled } = useMediaWidthOrientation();
    const { isHomePage } = usePathNavigate();
    const { openDropdown, handleDropdownToggle, dropdownRef } = useDropdown();


    return (
        <>
            <header className={styles.header}>
                <div className={`mainGrid ${styles.header__container}`}>
                    <div className={styles.header__nav}>
                        <Link href='/' className={styles.logoContainer}>
                             {!isHomePage && (
                                <Image
                                    src={cloudsLogo}
                                    alt='cloudsLogo'
                                    className={`${styles.cloudLogo} ${isScrolled ? styles.hidden : ''}`}
                                />
                            )}
                            <Image
                                src={logo}
                                style={{ background: !isHomePage ? 'transparent' : 'white' }}
                                className={`${styles.logo} ${!isHomePage ? (isScrolled ? styles.scrolled : styles.home) : ''}`}

                                alt='logo'
                            />
                        </Link>
                        <ul className={styles.nav__wrapper}>
                            {menuData.map(({ href, label, icon }) =>
                                icon ? (
                                    <li
                                        key={label}
                                        onClick={() => handleDropdownToggle(label)}
                                        ref={dropdownRef}
                                        className={styles.menu__wrapper}
                                    >
                                        {label} <Image src={icon} alt={icon} />
                                        {openDropdown === label && <DropDown variant='laptop'>{categories.map(({id,name}) => <li key={id}>{name}</li>)}</DropDown>}
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
                {isMobile && <NavbarMobail   isOpen={isOpen} setIsOpen={setIsOpen}  categories={categories} />}
            </header>
            {!isHomePage && <HeaderContent />}
        </>
    );
};

export default HeaderClient;
