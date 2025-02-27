'use client';
import { FC } from 'react';
import { useSearch } from '../../../_hooks/useSearch';
import { menuData } from '@/app/_moqk/moqk';
import Image from 'next/image';
import closeIcon from '../../../../../public/icons/x.svg';
import Search from '../../Search/Search';
import Link from 'next/link';
import menuLogo from '../../../../../public/icons/chevron-up.svg';
import styles from './NavbarMobail.module.scss';

interface NavbarMobailProps {
    isOpen: boolean;
    setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}
const NavbarMobail: FC<NavbarMobailProps> = ({ isOpen, setIsOpen }) => {
    const handleCLose = () => {
        setIsOpen((prev: boolean) => !prev);
    };
    const { searchCheck } = useSearch();

    return (
        <div className={`${styles.navbar__mobail} ${isOpen ? styles.active : ''}`}>
            <div>
                <div className={styles.navbar__mobail__closeIcon}>
                    <Image src={closeIcon} alt='closeIcon' width={32} height={32} onClick={handleCLose} />
                </div>
                <div>
                    <Search variant='mobailSearch' searchCheck={searchCheck} />
                    <ul className={styles.navbar__mobail__wrapper}>
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
            </div>

            <div className={styles.navbar__mobail__contacts}>
                <p>+7 (985) 648-66-81</p>
            </div>
        </div>
    );
};

export default NavbarMobail;
