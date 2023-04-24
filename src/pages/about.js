import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Me | Pangidoan NSH</title>
                <meta name="description" content='pangidoan nsh portfolio' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <Layout title="About Me" subTitle='Pangidoan Nsh | Software Dev Enthusiast'
                    backgroundImage='/assets/earth-render.png'>

                </Layout>
            </main>
        </>
    )
}
