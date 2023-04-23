
export default function PortfolioPage() {
    return (
        <div />
    )
}

export async function getStaticProps(context) {
    return {
        redirect: {
            destination: '/'
        }
    }
}