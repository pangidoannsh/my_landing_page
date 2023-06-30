import { Icon } from '@iconify/react'
import React, { Fragment } from 'react'

export default function BottomBar({ show, handleScrollUp }) {
    return (
        <>
            <button className={`btn-bottombar fixed bottom-0 md:left-32 left-6 border-[2.5px] border-white 
            ${show ? 'z-40' : '-z-20'} mb-20
            ${show ? 'scale-100' : 'scale-0'}`}>
                <span className="caption -rotate-90 -left-1">
                    Filters
                </span>
                <Icon icon="material-symbols:more-vert" className='text-white' />
            </button>
            <button onClick={handleScrollUp} className={`btn-bottombar fixed bottom-0 md:right-32 right-6 border-[2.5px]
             border-white ${show ? 'z-40' : '-z-20'} mb-20
            ${show ? 'scale-100' : 'scale-0'}`}>
                <span className="caption -rotate-90 w-max -left-1">
                    Go Top
                </span>
                <Icon icon="ion:chevron-up" className='text-white' />
            </button>
        </>
    )
}
