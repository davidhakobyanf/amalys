"use server";
import React, { FC, ReactNode } from "react";
import Image from "next/image";
import styles from "./CardItem.module.scss";
import Content from "./Content/Content";
import ImageContainer from "@/app/_components/Card/CardItem/Image/ImageContainer";
import {CardItemProps} from "@/app/_type/type";
import Footer from "@/app/_components/Card/CardItem/Footer/Footer";



const CardItemComponent: FC<CardItemProps> = ({ children, position = "laptop" }) => {
    return (
        <div className={`${styles.card__item__container} ${styles[`card__${position}__container`]}`}>
            {children}
        </div>
    );
};

// const Price: FC<{ amount: number }> = ({ amount }) => (
//     <div className={styles.price}>{amount} ₽</div>
// );



// const Title: FC<{ children: ReactNode }> = ({ children }) => (
//     <h3 className={styles.title}>{children}</h3>
// );

const CardItem = Object.assign(CardItemComponent, {
    ImageContainer,
    Content,
    Footer
});

export default CardItem;
