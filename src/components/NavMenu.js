import { NavigateContext } from '@/context/NavigateProvider';
import { Transition } from '@headlessui/react'
import { useContext, useEffect, useRef, useState } from 'react'
// import { gsap } from 'gsap';

// const navMenus = [
//     {
//         id: 'portfolio',
//         title: 'Portfolio',
//         path: '/'
//     },
//     {
//         id: 'about',
//         title: 'About Me',
//         path: '/about-me'
//     },
//     {
//         id: 'contact',
//         title: 'Contact',
//         path: '/contact'
//     }
// ]

// const TL = gsap.timeline();

export default function NavMenu({ isOpen, setIsOpen }) {
    const [isHover, setIsHover] = useState("");
    const { isNavigate, handleNavigate } = useContext(NavigateContext);
    // const menuRefs = useRef([]);

    function handleHover(e) {
        setIsHover(e.target.id)
    }
    function closeMenu(e) {
        if (isHover === "") {
            setIsOpen(false)
        }
    }
    // function addMenuRefs(ref) {
    //     if (ref && !menuRefs.current.includes(ref)) {
    //         menuRefs.current.push(ref)
    //     }
    // }
    // useEffect(() => {
    //     TL.reve
    // }, []);
    return (
        <>

            <Transition show={isOpen && !isNavigate}>
                {/* <div className={`fixed inset-0 duration-500 ${isOpen ? 'backdrop-blur-md' : ''}`} /> */}
                <div className={`fixed inset-0 z-40`}>
                    <div className="flex flex-col h-screen items-center justify-center p-4 text-center
                      text-white text-[54px] font-semibold leading-[60px]" onClick={closeMenu}>
                        <Transition.Child
                            as='div'
                            enter="ease-out duration-300 delay-[200ms]"
                            enterFrom="opacity-0 translate-y-20"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-200 delay-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0 -translate-y-20"
                            className={`py-[2px] cursor-pointer duration-150
                                  ${(isHover === "" || isHover === 'portfolio') ? 'opacity-100' : 'opacity-70'}`}
                            id='portfolio' onMouseEnter={handleHover}
                            onMouseLeave={() => setIsHover("")}
                            onClick={() => handleNavigate('/')}>
                            Portfolio
                        </Transition.Child>
                        <Transition.Child
                            as='div'
                            enter="ease-out duration-300 delay-[300ms]"
                            enterFrom="opacity-0 translate-y-20"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-200 delay-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0 -translate-y-20"
                            className={`py-[2px] cursor-pointer duration-150 
                                  ${(isHover === "" || isHover === 'about') ? 'opacity-100' : 'opacity-70'}`}
                            id='about' onMouseEnter={handleHover}
                            onMouseLeave={() => setIsHover("")}
                            onClick={() => handleNavigate('/about')}>
                            About Me
                        </Transition.Child>
                        <Transition.Child
                            as='div'
                            enter="ease-out duration-300 delay-[400ms]"
                            enterFrom="opacity-0 translate-y-20"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-200 delay-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0 -translate-y-20"
                            className={`py-[2px] cursor-pointer duration-150
                                  ${(isHover === "" || isHover === 'contact') ? 'opacity-100' : 'opacity-70'}`}
                            id='contact' onMouseEnter={handleHover}
                            onMouseLeave={() => setIsHover("")}
                            onClick={() => handleNavigate('/contact')}>
                            Contact
                        </Transition.Child>
                    </div>
                </div>
            </Transition>
        </>
        // <div className={`fixed inset-0 duration-500 ${isOpen ? 'backdrop-blur-md' : ''}`} />
        //     <div className={`fixed inset-0 z-30`}>
        //         <div className="flex flex-col h-screen items-center justify-center p-4 text-center
        //               text-white text-[54px] font-semibold leading-[60px]" onClick={closeMenu}>
        //             {navMenus.map(menu => (
        //                 <div key={menu.id} ref={addMenuRefs}
        //                     className={`py-[2px] cursor-pointer duration-150
        //                           ${(isHover === "" || isHover === menu.id) ? 'opacity-100' : 'opacity-70'}`}
        //                     id={menu.id} onMouseEnter={handleHover}
        //                     onMouseLeave={() => setIsHover("")}
        //                     onClick={() => handleNavigate(menu.path)}>
        //                     {menu.title}
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
    )
}