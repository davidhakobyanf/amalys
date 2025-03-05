"use server"
import React from 'react';
import BlockCloudContainer from "@/app/_components/BlockCloudContainer/BlockCloudContainer";
import {getAllCategories} from "@/service/public/allCategory";
import styles from './RecommendedProducts.module.scss'

const RecommendedProducts = async () => {
    const categories = await getAllCategories()
    console.log(categories,'categories4545')
    return (
        <div className={`mainGrid ${styles.recomended__products__container}`}>
            <BlockCloudContainer version={"block"} text={'Рекомендуемые продукты'} cloudCount={2} />

        </div>
    );
};

export default RecommendedProducts;