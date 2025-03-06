"use client"
import React, {FC, ReactNode} from "react";
import styles from "@/app/_components/Card/CardItem/CardItem.module.scss";
import {CardItemProps} from "@/app/_type/type";

const Content: FC<CardItemProps> = ({ children,position = "laptop" }) => (
    <div className={`${styles.content} ${styles[`${position}__content`]}`}>{children}</div>
);

export default Content;