"use server"
import Link from "next/link";
import PeopleIcon from "@/app/_components/icons/PeopleIcon";
import BasketIcon from "@/app/_components/icons/BasketIcon";
import HeaderActionSearchBar
    from "@/app/_components/header/HeaderActions/Components/HeaderActionSearchBar";
import styles from './HeaderAction.module.scss'
import HeaderActionBurgerMenu
    from "@/app/_components/header/HeaderActions/HeaderActionBurgerMenu/HeaderActionBurgerMenu";
import {getAllCategories} from "@/service/public/allCategory";

    const HeaderActions = async () => {
        const data = await getAllCategories();
        return (
            <div className={styles.header__contacts}>
                <div className={styles.header__contacts__icons}>
                    <HeaderActionSearchBar />
                    <Link href='login'>
                        <PeopleIcon style={{width: '24px', height: '24px'}}/>
                    </Link>
                    <Link href='basket'>
                        <BasketIcon style={{width: '24px', height: '24px'}}/>
                    </Link>
                    <HeaderActionBurgerMenu  categories={data}/>
                </div>
                <p>+7 (985) 648-66-81</p>
            </div>
    );
};

export default HeaderActions;