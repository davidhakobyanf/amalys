'use client';
import React, { FC, useState } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
    variant: 'headerSearch' | 'mainSearch';
    searchCheck?: boolean;
    handleCheck?: () => void;
}

const Search: FC<SearchProps> = ({ variant, searchCheck, handleCheck }) => {
    const [search, setSearch] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <div className={`${styles.search} ${styles[variant]}`}>
            <input type='text' placeholder='Поиск' value={search} onChange={handleChange} />
            {searchCheck && <span className={styles.clearIcon} onClick={handleCheck}></span>}
        </div>
    );
};

export default Search;
