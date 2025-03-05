"use server"
import React from 'react';
import styles from './RecommendedProducts.module.scss'
import BlockCloudContainer from "@/app/_components/BlockCloudContainer/BlockCloudContainer";
const RecommendedProducts = () => {
    return (
        <div className={styles.recomended__products__container}>
            <BlockCloudContainer version={"block"} text={'Рекомендуемые продукты'} cloudCount={2}/>
        </div>
    );
};

export default RecommendedProducts;