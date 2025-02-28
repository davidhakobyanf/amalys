import { useState, useEffect, useRef, RefObject } from 'react';

interface UseDropdownReturn {
    openDropdown: string | null;
    handleDropdownToggle: (label: string) => void;
    dropdownRef: RefObject<HTMLLIElement>;
}

const useDropdown = (): UseDropdownReturn => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLLIElement>(null!);

    const handleDropdownToggle = (label: string) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return { openDropdown, handleDropdownToggle, dropdownRef };
};

export default useDropdown;
