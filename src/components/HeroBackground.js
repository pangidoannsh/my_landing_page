import { Fragment, useEffect, useState } from 'react'
import earthBg from '@/assets/images/EarthRender.png'
import { Transition } from '@headlessui/react';

const defaultPosition = {
    x: 0,
    y: 0,
    z: 0
};


export default function HeroBackground({ isOpenMenu, scrollY }) {
    const [position, setPosition] = useState(defaultPosition);

    function handleMouseMove(e) {
        setPosition({
            x: (window.innerWidth - e.clientX) / 40,
            y: (window.innerHeight - e.clientY) / 40
        })
    }

    let isMounted = false;
    useEffect(() => {
        if (!isMounted) {
            window.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            isMounted = true
        }
    }, []);
    return (
        <>
            <div className={`w-screen h-screen fixed duration-500 -z-10 bg-black 
            ${scrollY > 200 ? 'bg-opacity-100' : 'bg-opacity-40'}`} />
            <div className={`bg-hero-wrapper duration-1000 ${isOpenMenu ? 'scale-110' : ''}`}>
                <div className={`bg-hero ${isOpenMenu ? 'duration-500' : ''}`}
                    style={{
                        backgroundImage: `url('${earthBg.src}')`,
                        translate: `${!isOpenMenu ? `${position.x}px ${position.y}px` : '0'}`,
                        scale: `1.1`
                    }}
                />
            </div>
        </>
    )
}
