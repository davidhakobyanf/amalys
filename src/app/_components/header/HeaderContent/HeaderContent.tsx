import React from 'react';
import Image from 'next/image';
import leftImage from '../../../../../public/images/headerLeftIcon.png';
import rightImage from '../../../../../public/images/headerRightIcon.png';
import saladImage from '../../../../../public/images/salad.svg';
import { Neucha } from 'next/font/google';

import styles from './HeaderContent.module.scss';
const neucha = Neucha({ weight: '400', subsets: ['latin', 'cyrillic'] });

const HeaderContent = () => {
    return (
        <div className={`mainGrid ${styles.header__content} `}>
            <Image className={styles.left__food__image} src={leftImage} alt='foodImage' />
            <div className={`mainGrid ${styles.center__content}`}>
                <Image className={styles.saladIcon} src={saladImage} width={512} height={526} alt='saladImage' />
                <p>Даже ангелы иногда совершают преступления ;)</p>
            </div>
            <Image className={styles.right__food__image} src={rightImage} alt='foodImage' />
        </div>
    );
};

export default HeaderContent;
