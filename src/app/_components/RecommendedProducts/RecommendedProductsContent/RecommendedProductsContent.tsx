'use server'
import React from 'react';
import {getAboutContent} from "@/service/public/aboutContent";
import Image from "next/image";
import styles from './RecommendedProductsContent.module.scss'
import Link from "next/link";
import BlockCloudContainer from "@/app/_components/BlockCloudContainer/BlockCloudContainer";
import RecommendedProductsContentLogoBLock
    from "@/app/_components/RecommendedProducts/RecommendedProductsContent/RecommendedProductsContentLogoBLock/RecommendedProductsContentLogoBLock";
const RecommendedProductsContent = async () => {
    const {category} = await getAboutContent()
    console.log(category,'categories')
    return (
        <div className="mainGrid">
            {category?.map((item) => (
                <div  key={item.id}  className={styles.recomended__products__content}>
                    <RecommendedProductsContentLogoBLock  category={item}/>
                </div>

            ))}
        </div>
    );
};

export default RecommendedProductsContent;