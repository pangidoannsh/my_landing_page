import Home from "@/components/Home";
import Head from "next/head";

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
