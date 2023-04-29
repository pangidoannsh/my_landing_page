import { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";
import { Transition } from "@headlessui/react";
import ScrollAnimationIcon from "./ScrollAnimationIcon";
import Footer from "./Footer";
import BottomBar from "./BottomBar";
import NavigateProvider from "@/context/NavigateProvider";
import Hero from "./Hero";

export default function Layout({ children, backgroundImage, title, subTitle }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [scrollY, setscrollY] = useState(0);

    function handleClickMenu() {
        setIsOpenMenu((prev) => !prev);
    }
    function handleScroll(e) {
        setscrollY(window.scrollY);
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <NavigateProvider>
            <ScrollAnimationIcon onClick={() => window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })}
                show={scrollY < 100 && !isOpenMenu} />
            <Navbar isOpenMenu={isOpenMenu} handleClickMenu={handleClickMenu} />
            <Hero isOpenMenu={isOpenMenu} scrollY={scrollY} backgroundImage={backgroundImage}
                title={title} subTitle={subTitle} />
            <NavMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
            <div className={`fixed -z-10 inset-0 duration-1000 ${scrollY > 150 ? 'bg-[#111111]' : ''}`} />
            <div className="h-28"></div>
            <div className={`relative min-h-screen ${scrollY > 150 ? 'opacity-100 duration-1000' : 'opacity-0 '}`}>
                <Transition appear as={Fragment} show={!isOpenMenu}>
                    <div className={`pt-52 `}>
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
                            {children}
                        </Transition.Child>
                    </div>
                </Transition>
                <Footer show={!isOpenMenu} />
            </div>
            <BottomBar show={scrollY > 500 && !isOpenMenu}
                handleScrollUp={() => window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })} />
        </NavigateProvider>
    )
}
