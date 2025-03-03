import React, { FC } from 'react';
import styles from './DropDown.module.scss';
import {DropDownProps} from "@/app/_type/type";


const DropDown: FC<DropDownProps> = ({ children }) => {
    return (
        <div className={styles.dropdown}>
            <ul className={styles.dropdown__content}>{children}</ul>
        </div>
    );
};

export default DropDown;
