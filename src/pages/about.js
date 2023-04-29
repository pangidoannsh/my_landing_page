import Layout from '@/components/Layout'
import DataPortfolio from '@/databases/DataPortfolio'
import { linkeIn } from '@/databases/dataLink'
import Head from 'next/head'
import React from 'react'

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Me | Pangidoan NSH</title>
                <meta name="description" content='pangidoan nsh about me' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <Layout title="About Me" subTitle='Pangidoan Nsh | Software Dev Enthusiast'
                    backgroundImage='/assets/earth-render.png'>
                    <div className='min-h-screen relative z-50 px-6 md:px-24 lg:px-44 pt-24 text-white'>
                        <div className="px-6 lg:px-28">
                            <h4 className='text-4xl font-semibold mb-3 lg:mb-6'>Bio</h4>
                            <p className='opacity-60 font-roboto'>
                                Passionate logical and organized individual with a strong foundation in web development and also excellent communication skill in
                                teamworks. Highly experienced in React Js, laravel, Tailwind, Java, Figma.
                            </p>
                        </div>
                        <div className="px-6 lg:px-28 mt-12">
                            <h4 className='text-4xl font-semibold mb-3 lg:mb-6'>Experience</h4>
                            <a href={linkeIn} target='_blank' className='bg-[#4C4C4C] rounded-full font-light font-roboto
                            text-lg py-3 px-6 mb-7'>
                                Linkedin
                            </a>
                            <div className='flex flex-col gap-10 mt-10'>
                                {DataPortfolio.map(data => (
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className='flex flex-col items-end gap-1 font-semibold text-sm'>
                                            <div>{data.partner.name}</div>
                                            <div>{data.partner.location}</div>
                                            <div>{data.startDate} - {data.endDate}</div>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <div className='font-semibold text-sm'>
                                                {data.role}
                                            </div>
                                            <div className="text-xs semi-white font-light font-roboto leading-7">
                                                {data.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}
