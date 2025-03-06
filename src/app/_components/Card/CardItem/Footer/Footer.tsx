
import React, {FC} from 'react';
import styles from './Footer.module.scss'
import {CardItemProps} from "@/app/_type/type";
const Footer:FC<CardItemProps> = ({children,position = "laptop" }) => {
    return (
        <div className={`${styles.footer} ${styles[`${position}__footer`]}`}>
            {children}
        </div>
    );
};

export default Footer;