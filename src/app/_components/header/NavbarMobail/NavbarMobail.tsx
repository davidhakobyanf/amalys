'use client';
import { FC } from 'react';
import Image from 'next/image';
import styles from './NavbarMobail.module.scss';
import closeIcon from '../../../../../public/icons/x.svg';

interface NavbarMobailProps {
    isOpen: boolean;
    setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}
const NavbarMobail: FC<NavbarMobailProps> = ({ isOpen, setIsOpen }) => {
    const handleCLose = () => {
        setIsOpen((prev: boolean) => !prev);
    };
    return (
        <div className={`${styles.navbar__mobail} ${isOpen ? styles.active : ''}`}>
            <div className={styles.navbar__mobail__closeIcon}>
                <Image src={closeIcon} alt='closeIcon' width={32} height={32} onClick={handleCLose} />
            </div>
        </div>
    );
};

export default NavbarMobail;
