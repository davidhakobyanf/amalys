import { useState } from 'react';
interface useSearch {
    searchCheck: boolean;
    handleCheck: () => void;
}
export const useSearch = (): useSearch => {
    const [searchCheck, setSearchCheck] = useState<boolean>(false);

    const handleCheck = () => {
        setSearchCheck((prev) => !prev);
    };

    return { searchCheck, handleCheck };
};
