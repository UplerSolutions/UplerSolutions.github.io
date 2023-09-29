import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { ISoftware } from '@/interface/software'
import { Layout } from '@/components/layout/Layout'
import { getSoftware } from '@/service/software/software-service'

interface Props {
    software: ISoftware
}

const Software: NextPage<Props> = ({ software }) => {
    return (
        <Layout title="Upler - Software" >
            <div  className='border flex flex-col h-full bg-white text-neutral-950 rounded-xl'>
                <div className='relative p-6 w-full h-[150px] bg-primary-color rounded-xl'>
                    {/* Render product image here */}
                </div>
            
                <div className='p-4 flex flex-col flex-1 gap-1'>
                    <h2 className='text-2xl'>{software.productName}</h2>
                    <p>${software.price} price </p>
                    <p>{software.description}</p>
                </div>
            
            </div>
        </Layout>
    )
}

export default Software

export const getServerSideProps: GetServerSideProps = async ({ req, res, params, query }) => {

    const id: string = typeof params?.id === 'string' ? params.id : "";

    const software = await getSoftware(id)
    
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    return {
        props: {
            software
        }
    }
}