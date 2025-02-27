import React from 'react';
import Image from 'next/image';
import leftImage from '../../../../../public/images/headerLeftIcon.png';
import rightImage from '../../../../../public/images/headerRightIcon.png';
import saladImage from '../../../../../public/images/salad.svg';

import styles from './HeaderContent.module.scss';
const HeaderContent = () => {
    return (
        <div className={`mainGrid ${styles.header__content} `}>
            <Image className={styles.left__food__image} src={leftImage} alt='foodImage' />
            <div className={`mainGrid ${styles.center__content}`}>
                <Image className={styles.saladIcon} src={saladImage} alt='saladImage' />
            </div>
            <Image className={styles.right__food__image} src={rightImage} alt='foodImage' />
        </div>
    );
};

export default HeaderContent;
