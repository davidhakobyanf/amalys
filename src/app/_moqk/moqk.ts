import menuIcon from '../../../public/icons/chevron-up.svg'; // Убираем `{}`

interface MenuDataTypes {
    label: string;
    href?: string;
    button?: boolean;
    icon?: any; 
}

export const menuData: MenuDataTypes[] = [
    { label: 'О нас', href: '/aboutUs' },
    { label: 'Меню', icon: menuIcon },
    { label: 'Контакты', href: '/contact' },
    { label: 'Условия доставки', href: '/delivery-policy' },
];
