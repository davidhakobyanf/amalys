import React, { useEffect, useState } from 'react';
interface useMediaWidthOrientationType {
    isMobile: boolean;
}
const useMediaWidthOrientation = (): useMediaWidthOrientationType => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return { isMobile };
};

export default useMediaWidthOrientation;
