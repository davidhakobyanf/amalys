export const getAboutContent = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Ошибка при загрузке категорий ${error}`);
        throw error;
    }
};
