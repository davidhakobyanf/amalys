export const getAllCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-category`);
        const data = await response.json();
        console.log(data,'data')
        return data;
    } catch (error) {
        console.error(`Ошибка при загрузке категорий ${error}`);
        throw error;
    }
};
