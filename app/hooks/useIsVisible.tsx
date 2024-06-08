// @ts-nocheck

import { useEffect, useState } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return; 

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.disconnect();
            }
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}
