import React, { FC } from 'react';
import {DropDownProps} from "@/app/_type/type";
import styles from './DropDown.module.scss';


const DropDown: FC<DropDownProps> = ({ children,variant }) => {
    return (
        <div className={styles[variant]}>
            <ul className={styles[`${variant}__content`]}>{children}</ul>
        </div>
    );
};

export default DropDown;
