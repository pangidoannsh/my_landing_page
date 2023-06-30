import DetailPortfolio from '@/databases/DetailPortfolio';

export default function Detail({ description, id }) {
    const details = DetailPortfolio.filter(detail => detail.portfolioId === id);

    return (
        <div className='min-h-screen relative z-50 px-6 md:px-24 lg:px-56 pt-24 text-white'>
            <div className="px-6 lg:px-28 mb-12">
                <div>
                    <h4 className='text-2xl font-semibold mb-3 lg:mb-6'>Deskripsi Projek</h4>
                    <p className='opacity-60 font-roboto'>{description}</p>
                </div>
            </div>
            <div className='flex flex-col lg:gap-12 gap-8'>
                {details.map(detail => (
                    <div key={detail.id}>
                        {detail.title ? <h4 className='text-2xl font-semibold mb-3 lg:mb-6'>{detail.title}</h4> : ''}
                        {detail.desc ? Array.isArray(detail.desc) ? (
                            <div className='flex flex-col gap-3'>
                                {detail.desc.map((subDetail, index) => (
                                    <p key={subDetail + index}>
                                        <span className='font-semibold'>{(index + 1) + ". " + subDetail.title}</span> :
                                        <span className='opacity-60'>
                                            {" " + subDetail.desc}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        ) : <p className='opacity-60'>{detail.desc}</p>
                            : ''}
                        {detail.image ? Array.isArray(detail.image) ? <div className='flex flex-col gap-4'>
                            {detail.image.map((image, index) => <img key={index} src={image.src} />)}
                        </div> : <img src={detail.image} className='mt-6' /> : ''}
                    </div>
                ))}
            </div>
        </div>
    )
}
