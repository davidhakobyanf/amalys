'use client';
import { FC } from 'react';
import { useSearch } from '../../../_hooks/useSearch';
import { menuData } from '@/app/_moqk/moqk';
import Image from 'next/image';
import closeIcon from '../../../../../public/icons/x.svg';
import Search from '../../Search/Search';
import Link from 'next/link';
import menuLogo from '../../../../../public/icons/chevron-up.svg';
import useDropdown from "@/app/_hooks/useDropDown";
import DropDown from "@/app/_components/DropDown/DropDown";
import menuIconUp from '../../../../../public/icons/chevron-up.svg'
import MobileDropDown from "@/app/_components/DropDown/MobileDropDown/MobileDropDown";
import {NavbarMobailProps} from "@/app/_type/type";
import styles from './NavbarMobail.module.scss';

const NavbarMobail: FC<NavbarMobailProps> = ({ isOpen, categories }) => {
    const { openDropdown, handleDropdownToggle, dropdownRef } = useDropdown();
    return (
        <div className={`${styles.navbar__mobail} ${isOpen ? styles.active : ''}`}>
                    <Search variant='mobailSearch'/>
                      <ul className={styles.navbar__mobail__wrapper}>
                        {menuData.map(({href, label, icon}) =>
                            icon ? (
                                <li key={label} className={styles.menu__wrapper}
                                    onClick={() => handleDropdownToggle(label)}
                                    ref={dropdownRef}>

                                    {label}{openDropdown === label ? <Image src={menuIconUp} alt={menuIconUp}
                                                                            style={{
                                                                                position: "absolute",
                                                                                top: "8px",
                                                                                left: "46px",
                                                                                display: "block",
                                                                            }}
                                /> : <Image src={icon} alt={icon} style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "46px",
                                    display: "block",
                                }}/>}
                                    {openDropdown === label &&
                                        <DropDown variant='mobail'>{categories?.map(({id, name}) => <li
                                            key={id}>{name}</li>)}</DropDown>}
                                </li>
                            ) : (
                                <li key={href}>
                                    <Link key={href} href={href || '#'}>{label}</Link>
                                </li>
                            )
                        )}
                    </ul>

            <div className={styles.navbar__mobail__contacts}>
                <p>+7 (985) 648-66-81</p>
            </div>
        </div>
    );
};

export default NavbarMobail;
