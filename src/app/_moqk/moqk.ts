interface menuDataTypes {
    label: string;
    href?: string;
    button?: boolean;
}
export const menuData: menuDataTypes[] = [
    { label: 'О нас', href: '/aboutUs' },
    { label: 'Меню', button: true },
    { label: 'Контакты', href: '/contact' },
    { label: 'Условия доставки', href: '/delivery-policy' },
];
