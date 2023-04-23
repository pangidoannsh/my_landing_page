import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react';

const defaultPosition = {
    x: 0,
    y: 0
};

export default function CommonHero({ isOpenMenu, scrollY, backgroundImage, title, subTitle }) {
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
            <Transition as={Fragment} show={!isOpenMenu}>
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
                        opacity: scrollY <= 150 ? `${(150 - scrollY) / 150}` : '0'
                    }}
                >
                    <div className="text-center text-5xl font-semibold sm:w-3/4 lg:w-1/2">
                        {title}
                    </div>
                    <div className="opacity-60 font-roboto font-light">{subTitle}</div>
                </Transition.Child>

            </Transition>
            <div className={`bg-hero-wrapper ${isOpenMenu ? 'scale-110' : ''}`}>
                <div className={`bg-hero`}
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        translate: `${position.x}px ${position.y}px`,
                        scale: isOpenMenu ? '1.2' : '1.1',
                        transition: 'scale 1000ms'
                    }}
                />
            </div>
        </div>
    )
}
