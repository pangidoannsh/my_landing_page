import { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroBackground from "./HeroBackground";
import NavMenu from "./NavMenu";
import { Transition } from "@headlessui/react";

export default function Home() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [scrollY, setscrollY] = useState(0);

    function handleClickMenu() {
        setIsOpenMenu((prev) => !prev);
    }
    function handleScroll(e) {
        setscrollY(window.scrollY)
    }

    let isMounted = false;
    useEffect(() => {
        if (!isMounted) {
            window.addEventListener("scroll", handleScroll)
        }
        return () => {
            isMounted = true
        };
    }, []);

    return (
        <>
            <HeroBackground isOpenMenu={isOpenMenu} scrollY={scrollY} />
            <Navbar isOpenMenu={isOpenMenu} handleClickMenu={handleClickMenu} />
            <NavMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
            {/* <div className="h-[120px]">
                <Transition appear as={Fragment} show={!isOpenMenu}>
                    <Transition.Child
                        as='div'
                        enter="ease-out duration-[400ms] delay-500"
                        enterFrom="opacity-0 translate-y-40"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0 -translate-y-40"
                        className={`z-10 flex flex-col justify-center items-center h-screen text-white `}
                        style={{
                            translate: scrollY > 50 ? `0 ${scrollY / 1.5}px` : '0 0',
                            opacity: scrollY > 50 ? isOpenMenu ? '0' : `${(window.innerHeight - scrollY) / window.innerHeight}` : '',
                        }}
                    >
                        <div className="text-center text-5xl font-semibold w-1/2">
                            The best way to predict the future is to create it.
                        </div>
                        <div className="opacity-80 font-roboto font-light">Pangidoan Nsh | Frontend Developer</div>
                    </Transition.Child>

                </Transition>
            </div>
            <Transition appear as='div' show={scrollY > 200}>
                <Transition.Child
                    as='div'
                    enter="ease-out duration-[400ms] delay-500"
                    enterFrom="opacity-0 translate-y-40"
                    enterTo="opacity-100"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0 -translate-y-40"
                    className={`text-white relative`}
                >
                    <div className={`text-center text-5xl duration-500 font-semibold 
                        ${!isOpenMenu ? 'opacity-100' : 'opacity-0 '}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit repellat quisquam.
                    </div>
                </Transition.Child>
            </Transition> */}
        </>
    )
}
