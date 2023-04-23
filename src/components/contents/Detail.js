import React from 'react'

export default function Detail({ description }) {
    return (
        <div className='min-h-screen relative z-50 px-6 md:px-24 lg:px-56 pt-24 text-white'>
            <div className="px-6 lg:px-28">
                <h4 className='text-2xl font-semibold mb-3 lg:mb-6'>Deskripsi Projek</h4>
                <p className='opacity-60 font-roboto'>{description}</p>
            </div>
        </div>
    )
}
