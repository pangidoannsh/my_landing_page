import { Icon } from '@iconify/react'
import React from 'react'

export default function Footer({ show }) {
    return (
        <div className={`py-12 flex flex-col gap-6 justify-center items-center duration-300
        ${show ? 'opacity-1' : '-translate-y-8 opacity-0'}`}>
            <div className="flex text-white gap-5  items-center">
                <a href="https://www.linkedin.com/in/pangidoan-nsh/" target='_blank'>
                    <Icon icon="fa-brands:linkedin-in" className='text-sm' />
                </a>
                <a href="https://www.instagram.com/pangidoannsh_/" target='_blank'>
                    <Icon icon="fa6-brands:instagram" className='text-sm' />
                </a>
            </div>
            <span className='text-[10px] text-white/60 hover:text-white'>Copyright © 2023 Pangidoan Nugroho. All Rights Reserved.</span>
        </div>
    )
}
