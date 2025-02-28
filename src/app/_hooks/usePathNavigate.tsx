import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const usePathNavigate = () => {
    const pathname = usePathname();
    const [isHomePage, setIsHomePage] = useState(false);
    useEffect(() => {
        setIsHomePage(pathname === '/');
    }, [pathname]);
    return {
        pathname,
        isHomePage,
    };
};

export default usePathNavigate;
