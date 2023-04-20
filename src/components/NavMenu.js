import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function NavMenu({ isOpen, setIsOpen }) {
    const [isHover, setIsHover] = useState("");
    function closeModal() {
        setIsOpen(false)
    }

    function handleHover(e) {
        setIsHover(e.target.id)
    }
    return (
        <>
            <div className={`fixed inset-0 duration-500 ${isOpen ? 'backdrop-blur-md' : ''}`} />
            <Transition show={isOpen}>
                <div className={`fixed inset-0`}>
                    <div className="flex flex-col h-screen items-center justify-center p-4 text-center
                      text-white text-[54px] font-semibold leading-[60px]">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300 delay-[200ms]"
                            enterFrom="opacity-0 translate-y-20"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-out duration-700 delay-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0 -translate-y-40"
                        >
                            <div className={`py-[2px] cursor-pointer duration-150
                                  ${(isHover === "" || isHover === 'portfolio') ? 'opacity-100' : 'opacity-70'}`}
                                id='portfolio' onMouseEnter={handleHover}
                                onMouseLeave={() => setIsHover("")}>
                                Portfolio
                            </div>
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300 delay-[300ms]"
                            enterFrom="opacity-0 translate-y-20"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-out duration-700 delay-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0 -translate-y-40"
                        >
                            <div className={`py-[2px] cursor-pointer duration-150 
                                  ${(isHover === "" || isHover === 'about') ? 'opacity-100' : 'opacity-70'}`}
                                id='about' onMouseEnter={handleHover}
                                onMouseLeave={() => setIsHover("")}>
                                About Me
                            </div>
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300 delay-[400ms]"
                            enterFrom="opacity-0 translate-y-20"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-out duration-700 delay-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0 -translate-y-40"
                        >
                            <div className={`py-[2px] cursor-pointer duration-150
                                  ${(isHover === "" || isHover === 'contact') ? 'opacity-100' : 'opacity-70'}`}
                                id='contact' onMouseEnter={handleHover}
                                onMouseLeave={() => setIsHover("")}>
                                Contact
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Transition>
        </>
        // <Transition show={isOpen} as={Fragment}>
        //     <Dialog as="div" onClose={closeModal}>
        //         <Transition.Child
        //             as={Fragment}
        //             enter="ease-out duration-300"
        //             enterFrom="opacity-0"
        //             enterTo="opacity-100"
        //             leave="ease-in duration-500"
        //             leaveFrom="opacity-100"
        //             leaveTo="opacity-0"
        //         >
        //             <div className="fixed inset-0 backdrop-blur-md" />
        //         </Transition.Child>

        //         <div className={`fixed inset-0`}>
        //             <div className="flex flex-col h-screen items-center justify-center p-4 text-center
        //              text-white text-[54px] font-semibold leading-[60px]">
        //                 <Transition.Child
        //                     as={Fragment}
        //                     enter="ease-out duration-300 delay-[200ms]"
        //                     enterFrom="opacity-0 translate-y-20"
        //                     enterTo="opacity-100 translate-y-0"
        //                     leave="ease-out duration-700 delay-100"
        //                     leaveFrom="opacity-100"
        //                     leaveTo="opacity-0 -translate-y-40"
        //                 >
        //                     <Dialog.Panel className={`py-[2px] cursor-pointer duration-150
        //                          ${(isHover === "" || isHover === 'portfolio') ? 'opacity-100' : 'opacity-70'}`}
        //                         id='portfolio' onMouseEnter={handleHover}
        //                         onMouseLeave={() => setIsHover("")}>
        //                         Portfolio
        //                     </Dialog.Panel>
        //                 </Transition.Child>
        //                 <Transition.Child
        //                     as={Fragment}
        //                     enter="ease-out duration-300 delay-[300ms]"
        //                     enterFrom="opacity-0 translate-y-20"
        //                     enterTo="opacity-100 translate-y-0"
        //                     leave="ease-out duration-700 delay-200"
        //                     leaveFrom="opacity-100"
        //                     leaveTo="opacity-0 -translate-y-40"
        //                 >
        //                     <Dialog.Panel className={`py-[2px] cursor-pointer duration-150 
        //                          ${(isHover === "" || isHover === 'about') ? 'opacity-100' : 'opacity-70'}`}
        //                         id='about' onMouseEnter={handleHover}
        //                         onMouseLeave={() => setIsHover("")}>
        //                         About Me
        //                     </Dialog.Panel>
        //                 </Transition.Child>
        //                 <Transition.Child
        //                     as={Fragment}
        //                     enter="ease-out duration-300 delay-[400ms]"
        //                     enterFrom="opacity-0 translate-y-20"
        //                     enterTo="opacity-100 translate-y-0"
        //                     leave="ease-out duration-700 delay-300"
        //                     leaveFrom="opacity-100"
        //                     leaveTo="opacity-0 -translate-y-40"
        //                 >
        //                     <Dialog.Panel className={`py-[2px] cursor-pointer duration-150
        //                          ${(isHover === "" || isHover === 'contact') ? 'opacity-100' : 'opacity-70'}`}
        //                         id='contact' onMouseEnter={handleHover}
        //                         onMouseLeave={() => setIsHover("")}>
        //                         Contact
        //                     </Dialog.Panel>
        //                 </Transition.Child>
        //             </div>
        //         </div>
        //     </Dialog>
        // </Transition>
    )
}