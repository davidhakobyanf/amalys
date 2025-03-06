'use server';
import React, {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import BlockCloudContainer from "@/app/_components/BlockCloudContainer/BlockCloudContainer";
import styles from './RecommendedProductsContentLogoBLock.module.scss'
import {RecommendedProductsContentLogoBLockProps} from "@/app/_type/type";

const RecommendedProductsContentLogoBLock:FC<RecommendedProductsContentLogoBLockProps> = ({category}) => {
    return (
        <Link href={`/category/${category.id}`} className={styles.recomended__products__content__leftblock}>
            <Image className={styles.recomended__products__content__img} key={category.id} width={100} height={100} src={`${process.env.CATEGORY_IMG_API_URL}/${category.image}`}  alt={`${process.env.CATEGORY_IMG_API_URL}/${category.image}`}/>
            <BlockCloudContainer    version={'miniblock'} text={category.name} />

        </Link>
    );
};

export default RecommendedProductsContentLogoBLock;