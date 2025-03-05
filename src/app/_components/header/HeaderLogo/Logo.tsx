'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import useMediaWidthOrientation from '@/app/_hooks/useMediaWidthOrientation';
import cloudsLogo from '../../../../../public/images/clouds.png';
import usePathNavigate from '@/app/_hooks/usePathNavigate';
import logo from '../../../../../public/images/logo.png';
import styles from './Logo.module.scss';

const Logo = () => {
  const { isScrolled } = useMediaWidthOrientation();
  const { isHomePage } = usePathNavigate();
  return (
    <Link href="/" className={styles.logoContainer}>
      {isHomePage === false && <Image src={cloudsLogo} alt="cloudsLogo" className={`${styles.cloudLogo} ${isScrolled ? styles.hidden : ''}`} />}
      <Image
        src={logo}
        style={{ background: !isHomePage ? 'transparent' : 'white' }}
        className={`${styles.logo} ${!isHomePage ? (isScrolled ? styles.scrolled : styles.home) : ''}`}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
