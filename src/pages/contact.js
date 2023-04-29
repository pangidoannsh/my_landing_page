import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact | Pangidoan NSH</title>
                <meta name="description" content='pangidoan nsh contact' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <Layout title="Contact" subTitle='Pangidoan Nsh | Software Dev Enthusiast'
                    backgroundImage='/white-logo.png'>

                </Layout>
            </main>
        </>
    )
}
