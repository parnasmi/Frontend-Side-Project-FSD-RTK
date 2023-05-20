import { useEffect, useState } from 'react';

export function useDeviceDetect() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        if (!window.matchMedia) return;

        setIsTouchDevice(window.matchMedia('(pointer:coarse)').matches);
    }, []);

    return isTouchDevice;
}
