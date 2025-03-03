import React from "react";

export interface DropDownProps {
    children: React.ReactNode;
    variant:'laptop' | 'mobail'

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
    setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}