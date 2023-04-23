import React from 'react'

export default function Detail({ description }) {
    return (
        <div className='min-h-screen relative z-50 px-56 pt-24 text-white'>
            <div className="px-28">
                <h4 className='text-2xl font-semibold mb-6'>Deskripsi Projek</h4>
                <p className='opacity-60 font-roboto'>{description}</p>
            </div>
        </div>
    )
}
