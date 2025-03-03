import React, {FC} from 'react';
import {DropDownProps} from "@/app/_type/type";
import  styles from './MobileDropDown.module.scss'
const MobileDropDown:FC<DropDownProps>  = ({children}) => {
    return (
        <div className={styles.dropdown}>
            <ul className={styles.dropdown__content}>{children}</ul>
        </div>
    );
};

export default MobileDropDown;