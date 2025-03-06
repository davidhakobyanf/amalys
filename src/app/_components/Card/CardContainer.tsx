"use server"
import React, { FC } from "react";
import styles from "./CardContainer.module.scss";
import { CardContainerProps } from "@/app/_type/type";
import CardItem from "./CardItem/CardItem";

const CardContainer: FC<CardContainerProps> = ({ products,position = "laptop" }) => {
    console.log(products,'products')
    return (
        <div className={`${styles.card__container} ${styles[`card__${position}__container`]}`}>
            {products?.slice(0, 3).map((item) => (
                <CardItem key={item.id} position="laptop">
                    <CardItem.ImageContainer src={`${process.env.CATEGORY_PRODUCT_IMG_API_URL}/${item.image}`} />
                    <CardItem.Content position={'laptop'}>
                        {item.name}
                    </CardItem.Content>
                    <CardItem.Footer position={'laptop'}>
                        {item.protein} <p>{item.price} ₽</p>
                    </CardItem.Footer>
                    {/*<CardItem.Content>*/}
                    {/*    <CardItem.Title>{item.name}</CardItem.Title>*/}
                    {/*    <CardItem.Price amount={item.price} />*/}
                    {/*</CardItem.Content>*/}
                </CardItem>

            ))}
        </div>
    );
};

export default CardContainer;
