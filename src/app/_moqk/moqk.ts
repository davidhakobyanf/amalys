import menuIcon from '../../../public/icons/chevron-down.svg';
import {MenuDataTypes} from "@/app/_type/type"; // Убираем `{}`


export const menuData: MenuDataTypes[] = [
    { label: 'О нас', href: '#aboutUs' },
    { label: 'Меню', icon: menuIcon },
    { label: 'Контакты', href: '/contact' },
    { label: 'Условия доставки', href: '/delivery-policy' },
];
