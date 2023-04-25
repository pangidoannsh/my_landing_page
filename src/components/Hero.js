import { Fragment, useEffect, useRef, useState } from 'react'
import { Transition } from '@headlessui/react';
import { gsap, Power2 } from 'gsap'

const defaultPosition = {
    x: 0,
    y: 0
};
const TL = gsap.timeline({
    defaults: { duration: 0.5, ease: "none" }
});

export default function Hero({ isOpenMenu, scrollY, backgroundImage }) {
    const [position, setPosition] = useState(defaultPosition);
    const heroRef = useRef(null);

    function handleMouseMove(e) {
        // console.log('scroll');
        // if (!isOpenMenu) {
        //     setPosition({
        //         x: (window.innerWidth - (e.clientX * 2)) / 20,
        //         y: (window.innerHeight - (e.clientY * 2)) / 20
        //     })
        // }
        if (!isOpenMenu) {
            gsap.to(heroRef.current, {
                duration: 0.3,
                x: (window.innerWidth - (e.clientX * 2)) / 40,
                y: (window.innerWidth - (e.clientY * 2)) / 40,
                ease: 'none',
                stagger: 0.15
            })
        }
    }

    useEffect(() => {
        gsap.set(heroRef.current, {
            x: 0, y: 0, scale: 1.1
        })
    }, []);
    return (
        // <div>
        <div onMouseMove={handleMouseMove}>
            <Transition as={Fragment} show={!isOpenMenu && scrollY < 300}>
                <Transition.Child
                    as='div'
                    enter="ease-out duration-[400ms] delay-500"
                    enterFrom="opacity-0 translate-y-40"
                    enterTo="opacity-100"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0 -translate-y-40"
                    className={`z-10 fixed flex flex-col px-6 justify-center items-center w-screen h-screen text-white `}
                    style={{
                        translate: scrollY > 50 ? `0 -${scrollY / 1.8}px` : '0 0',
                    }}
                >
                    <div className="text-center text-5xl font-semibold sm:w-3/4 lg:w-1/2">
                        The best way to predict the future is to create it.
                    </div>
                    <div className="opacity-60 font-roboto font-light">Pangidoan Nsh | Software Dev Enthusiast</div>
                </Transition.Child>

            </Transition>
            <div className={`bg-hero-wrapper duration-1000 ${isOpenMenu ? 'scale-110' : 'scale-100'}`}>

                <div className='bg-hero' ref={heroRef}
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        // translate: `${position.x}px ${position.y}px`,
                        // scale: '1.1',
                        // transition: '160ms'
                    }}
                />
            </div>
        </div>
    )
}
