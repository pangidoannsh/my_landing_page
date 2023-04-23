import { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";
import { Transition } from "@headlessui/react";
import Hero from "./Hero";
import Portfolio from "./contents/Portfolio";
import ScrollAnimationIcon from "./ScrollAnimationIcon";
import Footer from "./Footer";
import BottomBar from "./BottomBar";

export default function Home() {
    const portfolioRef = useRef(null);

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
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
        <>
            <ScrollAnimationIcon onClick={() => window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })}
                show={scrollY < 100 && !isOpenMenu} />
            <Navbar isOpenMenu={isOpenMenu} handleClickMenu={handleClickMenu} />
            <Hero isOpenMenu={isOpenMenu} scrollY={scrollY} backgroundImage='/assets/earth-render.png' />
            <NavMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
            <div className={`fixed -z-10 inset-0 duration-500 ${scrollY > 200 ? 'bg-black' : ''}`} />
            <div className="h-[50vh]"></div>
            <div className={`relative min-h-screen ${scrollY > 50 ? 'z-30' : '-z-30'}`}>
                <Transition appear as={Fragment} show={!isOpenMenu && !isOpenDetail}>
                    <div className={`pt-52`}>
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
                            <Portfolio refrence={portfolioRef} setIsOpenDetail={setIsOpenDetail} />
                        </Transition.Child>
                    </div>
                </Transition>
                <Footer show={!isOpenMenu && !isOpenDetail} />
            </div>
            <BottomBar show={scrollY > 500 && !isOpenMenu}
                handleScrollUp={() => window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })} />
        </>
    )
}
