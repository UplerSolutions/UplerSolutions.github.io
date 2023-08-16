import React, { useState } from 'react'
import { data } from "../../../public/benefits"
import Image from 'next/image';

export const Benefits = () => {
    const [benefits, setBenefits] = useState(data);
    
    return (
        <div className='flex  flex-row  py-20   justify-center bg-zinc-100 text-center w-auto ' >
            <div className='justify-items-start mx-64 align-center w-auto '>
                <div className='max-w-fit h-fit'>
                    <h2 className='md:ml-12 lg:ml-0 lg:px-0   md:text:5xl lg:text-6xl md:pb-4 lg:pb-10 font-semibold text-neutral-700 '>
                        Why customers choose Upler?
                    </h2>
                </div>
                <div className='grid grid-cols-3 text-center w-90 '>
                    {benefits.map((benefit) => (
                        <div className='grid grid-rows-2  align-center  justify-items-center  m-6 p-8' key={benefit.title}>
                            <div>
                                <Image
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    width={95}
                                    height={95}
                                />
                            </div>
                            <div>
                                <h4 className='text-[32px] text-black'>{benefit.title}</h4>
                                <p className="text-neutral-700 text-xl">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

