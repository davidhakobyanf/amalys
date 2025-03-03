import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

const usePathNavigate = () => {
    const pathname = usePathname();
    const [isHomePage, setIsHomePage] = useState(false);

    useLayoutEffect(() => {
        setIsHomePage(pathname !== '/');
    }, [pathname]);

    return {
        pathname,
        isHomePage,
    };
};

export default usePathNavigate;