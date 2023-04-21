import { Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import React, { Fragment } from 'react'

export default function BottomBar({ show, handleScrollUp }) {
    return (
        <div className="fixed bottom-0 flex justify-between w-screen z-30 px-32 my-20">
            <button className={`btn-bottombar border-2 border-white 
            ${show ? 'scale-100' : 'scale-0'}`}>
                <span className="caption -rotate-90 -left-1">
                    Filters
                </span>
                <Icon icon="material-symbols:more-vert" className='text-white' />
            </button>
            <button onClick={handleScrollUp} className={`btn-bottombar border-2 border-white
            ${show ? 'scale-100' : 'scale-0'}`}>
                <span className="caption -rotate-90 w-max -left-1">
                    Go Top
                </span>
                <Icon icon="ion:chevron-up" className='text-white' />
            </button>
        </div>
    )
}
