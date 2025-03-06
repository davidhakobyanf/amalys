import { useEffect, useState } from 'react';
import usePathNavigate from "@/app/_hooks/usePathNavigate";

interface useMediaWidthOrientationType {
    isMobile: boolean;
    isScrolled: boolean;
}

const useMediaWidthOrientation = (): useMediaWidthOrientationType => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const { isHomePage } = usePathNavigate();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                const mobile = window.innerWidth < 1200;
                setIsMobile(mobile);
                if (mobile) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(window.scrollY > 50);
                }
            };

            const handleScroll = () => {
                if (!isMobile) {
                    setIsScrolled(window.scrollY > 50);
                }
            };

            window.addEventListener('resize', handleResize);
            handleResize();  // Вызываем сразу, чтобы установить начальные значения

            if (!isHomePage && !isMobile) {
                window.addEventListener('scroll', handleScroll);
            }

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isHomePage, isMobile]);

    return { isMobile, isScrolled };
};

export default useMediaWidthOrientation;
