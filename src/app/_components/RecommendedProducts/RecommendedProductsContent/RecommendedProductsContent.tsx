'use server'
import React from 'react';
import {getAboutContent} from "@/service/public/aboutContent";
import Image from "next/image";
import styles from './RecommendedProductsContent.module.scss'
import Link from "next/link";
const RecommendedProductsContent = async () => {
    const {category} = await getAboutContent()
    console.log(category,'categories')
    return (
        <div className="mainGrid">
            {category?.map(({id,name,image}) => (
                <Link href={`/category/${id}`} className={styles.recomended__products__content}>
                    <Image className={styles.recomended__products__content__img} key={id} width={100} height={100} src={`${process.env.CATEGORY_IMG_API_URL}/${image}`}  alt={`${process.env.CATEGORY_IMG_API_URL}/${image}`}/>

                </Link>
            ))}
        </div>
    );
};

export default RecommendedProductsContent;