import React, { FC } from 'react';
import styles from './DropDown.module.scss';
import {DropDownProps} from "@/app/_type/type";


const DropDown: FC<DropDownProps> = ({ children,variant }) => {
    return (
        <div className={styles[variant]}>
            <ul className={styles[`${variant}__content`]}>{children}</ul>
        </div>
    );
};

export default DropDown;
