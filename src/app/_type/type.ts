import React, {ElementType} from "react";

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
    categories?:HeaderClientProps
}
