"use server"
import React from 'react';
import BlockCloudContainer from "@/app/_components/BlockCloudContainer/BlockCloudContainer";
import styles from './RecommendedProducts.module.scss'
import RecommendedProductsContent
    from "@/app/_components/RecommendedProducts/RecommendedProductsContent/RecommendedProductsContent";

const RecommendedProducts =  () => {
    return (
        <div className={`mainGrid ${styles.recomended__products__container}`}>
            <BlockCloudContainer version={"block"} text={'Рекомендуемые продукты'} cloudCount={2} />
            <RecommendedProductsContent />
        </div>
    );
};

export default RecommendedProducts;