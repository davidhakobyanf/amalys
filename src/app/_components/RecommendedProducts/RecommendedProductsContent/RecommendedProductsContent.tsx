'use server'
import React from 'react';
import {getAboutContent} from "@/service/public/aboutContent";
import RecommendedProductsContentLogoBLock
    from "@/app/_components/RecommendedProducts/RecommendedProductsContent/RecommendedProductsContentLogoBLock/RecommendedProductsContentLogoBLock";
import CardContainer from "@/app/_components/Card/CardContainer";
import { categoryProducts} from "@/app/_type/type";
import styles from './RecommendedProductsContent.module.scss'

const RecommendedProductsContent = async () => {
    const {category} = await getAboutContent()
    console.log(category,'categories')
    return (
        <div className="mainGrid">
            {category?.map((item:categoryProducts) => (
                <div  key={item?.id}  className={styles.recomended__products__content}>
                    <RecommendedProductsContentLogoBLock  category={item}/>
                    <CardContainer products={item.products} />
                </div>

            ))}
        </div>
    );
};

export default RecommendedProductsContent;