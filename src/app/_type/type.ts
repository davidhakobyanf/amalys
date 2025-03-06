import React, {ElementType, ReactNode} from "react";

export interface DropDownProps {
    children: React.ReactNode;
    variant:'laptop' | 'mobail',
    as?:ElementType;

}
export interface Category {
    id: number;
    name: string;
    image: string;
    status: number;
    created_at: string;
    updated_at: string;
}
export interface  categoryProducts extends  Category {
    products: Product[];
}

export interface HeaderClientProps {
    categories: Category[];
}
export interface NavbarMobailProps  extends  HeaderClientProps{
    isOpen: boolean;
}
export interface MenuDataTypes {
    label: string;
    href?: string;
    icon?: any;
    categories?: Category[];

}
export  interface  RecommendedProductsContentLogoBLockProps {
    category: Category
}

export type Product = {
    id: number;
    category_id: number;
    name: string;
    image: string;
    text: string;
    protein: string;
    fat: string;
    carbohydrates: string;
    calories: string;
    weight: string;
    price: number;
    status: number;
    created_at: string;
    updated_at: string;
};

export interface CardContainerProps {
    products: Product[];
    position?: "laptop" | "mobail";

}
export interface CardItemProps {
    children: ReactNode;
    position?: "laptop" | "mobail";
}
export interface CardImageProps {
    src: string;
    position?: "laptop" | "mobail";
}