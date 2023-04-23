import DataPortfolio from "@/databases/DataPortfolio"
import Atropos from 'atropos/react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Portfolio({ refrence, setIsOpenDetail }) {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    function handleClick(path) {
        setIsOpenDetail(true);
        setTimeout(() => {
            router.push(`/portfolio/${path}`)
        }, 500)
    }
    useEffect(() => {
        console.log(window.innerWidth);
        if (window.innerWidth < 400) {
            setIsMobile(true)
        }
    }, []);

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-24 px-16 sm:px-24 lg:px-64 mb-12' ref={refrence}>
            {DataPortfolio.map(data => (
                <div className="relative" key={data.id} >
                    {!isMobile ? (
                        <Atropos component="button" rotateXMax={10} rotateYMax={10} highlight={false}
                            className="card-portfolio-wrapper relative h-[420px]" id={data.slug}
                            onClick={() => handleClick(data.slug)}>
                            {/* <div className="partner-logo">
                            <img src={data.partner.logo} alt="" className="w-28" />
                        </div> */}
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
                    ) : (
                        <button className="card-portfolio-wrapper relative h-[420px]" id={data.slug}
                            onClick={() => handleClick(data.slug)}>
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
                        </button>
                    )}
                    <div className="card-shadow" style={{ backgroundImage: `url('${data.image.src}')` }} />
                </div>
            ))}
        </div>
    )
}
