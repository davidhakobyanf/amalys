'use server'
// components/Header/HeaderServer.tsx
import { getAllCategories } from '@/service/public/allCategory';
import HeaderClient from "@/app/_components/header/HeaderClient/HeaderClient";

const HeaderServer = async () => {
        const data = await getAllCategories()
        return <HeaderClient categories={data} />;
};

export default HeaderServer;
