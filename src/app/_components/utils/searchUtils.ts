import { useState } from 'react';

export const searchUtils = () => {
    const [searchCheck, setSearchCheck] = useState(false);

    const handleCheck = () => {
        setSearchCheck((prev) => !prev);
    };

    return { searchCheck, handleCheck };
};
