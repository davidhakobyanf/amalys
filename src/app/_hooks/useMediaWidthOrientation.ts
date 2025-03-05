'use client'
import { useEffect, useState } from 'react';
import usePathNavigate from "@/app/_hooks/usePathNavigate";

interface useMediaWidthOrientationType {
    isMobile: boolean;
    isScrolled: boolean;
}

const useMediaWidthOrientation = (): useMediaWidthOrientationType => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1200);
    const [isScrolled, setIsScrolled] = useState<boolean>(window.innerWidth < 1200);
    const { isHomePage } = usePathNavigate();
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

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        if (!isHomePage && !isMobile) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHomePage, isMobile]);

    return { isMobile, isScrolled };
};

export default useMediaWidthOrientation;
