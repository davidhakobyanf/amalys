import React, { FC } from 'react';
import styles from './DropDown.module.scss';

interface DropDownProps {
    children: React.ReactNode;
}
const DropDown: FC<DropDownProps> = ({ children }) => {
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown__content}>{children}asdasda</div>
        </div>
    );
};

export default DropDown;
