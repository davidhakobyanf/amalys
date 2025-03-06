"use server"
import React, {FC} from "react";
import Image from "next/image";
import styles from './ImageContainer.module.scss';
import {CardImageProps, CardItemProps} from "@/app/_type/type";
const ImageContainer: FC<CardImageProps> = ({ src,position = 'laptop' }) => (
    <div className={styles.images__container}>
        <Image className={`${styles.image} ${styles[`${position}__img`]}`} src={src} alt="Product Image" width={306} height={204} />

    </div>
);
export default  ImageContainer;