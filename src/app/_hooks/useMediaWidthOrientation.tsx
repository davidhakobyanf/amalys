import { useEffect, useState } from 'react';

interface useMediaWidthOrientationType {
    isMobile: boolean;
    isScrolled: boolean;
}

const useMediaWidthOrientation = (): useMediaWidthOrientationType => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    console.log(isScrolled, 'isScrolled');
    const handleResize = () => {
        setIsMobile(window.innerWidth < 1200);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isMobile, isScrolled };
};

export default useMediaWidthOrientation;
