import Layout from '@/components/Layout'
import Detail from '@/components/contents/Detail'
import Head from 'next/head'
import DataPortfolio from '@/databases/DataPortfolio'

export default function PortfolioDetail(props) {
    const { image, title, partner, description, id } = props;
    const pageTitle = title + " | Pangidoan NSH"
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content='pangidoan nsh portfolio' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <Layout backgroundImage={image.src} title={title} subTitle={partner.name}>
                    <Detail description={description} id={id} />
                </Layout>
            </main>
        </>
    )
}
export async function getStaticPaths() {
    return {
        paths: DataPortfolio.map(data => ({ params: { slug: data.slug } })),
        fallback: false
    }
}
export async function getStaticProps(context) {
    const { slug } = context.params
    return {
        props: DataPortfolio.find(data => data.slug === slug)
    }
}
