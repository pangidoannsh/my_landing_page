import DataPortfolio from "@/databases/DataPortfolio"
import Atropos from 'atropos/react';

export default function Portfolio({ refrence }) {
    return (
        <div className='grid lg:grid-cols-3 gap-24 lg:px-64 mb-12' ref={refrence}>
            {DataPortfolio.map(data => (
                <div className="relative" key={data.id} >
                    <Atropos component="button" rotateXMax={10} rotateYMax={10} highlight={false}
                        className="card-portfolio-wrapper relative h-[420px]" id={data.slug}>
                        <div className="partner-logo">
                            <img src={data.partner.logo} alt="" className="w-28" />
                        </div>
                        <div style={{ backgroundImage: `url('${data.image.src}')` }}
                            className="card-portfolio flex items-end justify-center text-center"
                        >
                            <div className="py-10 px-5 text-white relative z-[1]">
                                <div className="title text-2xl font-semibold">{data.title}</div>
                                <div className="tech text-sm mt-2">
                                    {data.effort.map((tech, index) => (index + 1) === data.effort.length ? tech : (tech + ', '))}
                                </div>
                            </div>
                        </div>
                        <div className="layer z-0" />
                    </Atropos>
                    <div className="card-shadow" style={{ backgroundImage: `url('${data.image.src}')` }} />
                </div>
            ))}
        </div>
    )
}