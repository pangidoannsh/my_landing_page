import Home from "@/components/Home";
import Layout from "@/components/Layout";
import Head from "next/head";
import earthBg from '@/assets/images/EarthRender.png'
import Portfolio from "@/components/contents/Portfolio";
import Detail from "@/components/contents/Detail";

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Portfolio | Pangidoan NSH</title>
        <meta name="description" content='pangidoan nsh portfolio' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  )
}
