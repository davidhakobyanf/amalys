'use server';

import Logo from './HeaderLogo/Logo';
import HeaderCategories from './HeaderCategories/HeaderCategories';
import HeaderActions from "@/app/_components/header/HeaderActions/HeaderActions";
import HeaderContent from "@/app/_components/header/HeaderContent/HeaderContent";
import styles from './Header.module.scss';

const HeaderServer =  () => {
    return (
        <>
            <header className={styles.header}>
                <div className={`mainGrid ${styles.header__container}`}>
                    <div className={styles.header__nav}>
                        <Logo/>
                        <HeaderCategories/>
                    </div>
                    <HeaderActions />
                </div>
            </header>
            <HeaderContent/>
        </>

    );
};

export default HeaderServer;
