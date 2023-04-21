import { Fragment, useEffect, useState } from 'react'
import earthBg from '@/assets/images/EarthRender.png'
import { Transition } from '@headlessui/react';

const defaultPosition = {
    x: 0,
    y: 0
};

export default function Hero({ isOpenMenu, scrollY }) {
    const [position, setPosition] = useState(defaultPosition);

    function handleMouseMove(e) {
        // console.log('scroll');
        if (!isOpenMenu) {
            setPosition({
                x: (window.innerWidth - (e.clientX * 2)) / 40,
                y: (window.innerHeight - (e.clientY * 2)) / 40
            })
        }
    }
    return (
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
                    className={`z-10 fixed flex flex-col justify-center items-center w-screen h-screen text-white `}
                    style={{
                        translate: scrollY > 50 ? `0 -${scrollY / 1.8}px` : '0 0',
                    }}
                >
                    <div className="text-center text-5xl font-semibold w-1/2">
                        The best way to predict the future is to create it.
                    </div>
                    <div className="opacity-60 font-roboto font-light">Pangidoan Nsh | Frontend Developer</div>
                </Transition.Child>

            </Transition>
            <div className={`bg-hero-wrapper ${isOpenMenu ? 'scale-110' : ''}`}>
                <div className={`bg-hero`}
                    style={{
                        backgroundImage: `url('${earthBg.src}')`,
                        // transform: `translate3d(${position.x}px,${position.y}px,0px) scale(1.1,1.1)`,
                        translate: `${position.x}px ${position.y}px`,
                        scale: isOpenMenu ? '1.2' : '1.1',
                        transition: 'scale 1000ms'
                        // transition: '100ms',
                    }}
                />
            </div>
        </div>
    )
}
