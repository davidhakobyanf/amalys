'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../../public/images/logo.svg';
import menuLogo from '../../../../../public/icons/chevron-up.svg';
import searchIcon from '../../../../../public/icons/searchIcon.svg';
import styles from './Header.module.scss';
import PeopleIcon from '../../icons/PeopleIcon';
import BasketIcon from '../../icons/BasketIcon';

const Header = () => {
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
                        <Image width={32} height={32} src={searchIcon} alt='search' />
                        <Link href='login'>
                            <PeopleIcon style={{ width: '32px', height: '32px' }} />
                        </Link>
                        <Link href='basket'>
                            <BasketIcon style={{ width: '32px', height: '32px' }} />
                        </Link>
                    </div>
                    <p>8 992-225-55-12</p>
                </div>
            </div>
        </header>
    );
};
export default Header;
