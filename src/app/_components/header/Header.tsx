'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/logo.svg';
import searchIcon from '../../../../public/icons/searchIcon.svg';
import styles from './Header.module.scss';
import PeopleIcon from '../icons/PeopleIcon';
import BasketIcon from '../icons/BasketIcon';
import Search from '../Search/Search';
import { useEffect } from 'react';
import { searchUtils } from '../utils/searchUtils';

const Header = () => {
    const { searchCheck, handleCheck } = searchUtils();
    useEffect(() => {
        console.log(searchCheck, 'searchCheck');
    }, [searchCheck]);
    return (
        <header className={`mainGrid ${styles.header}`}>
            <div className={styles.header__container}>
                <div className={styles.header__nav}>
                    <Link href='/' className={styles.logoContainer}>
                        <Image src={logo} className={styles.logo} alt='logo' />
                    </Link>
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
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
