import { ISoftware } from '@/interface/software'

const API_ROUTE = process.env.API_ROUTE;

export const getSoftwares = async (): Promise<ISoftware[]> => {
    const res = await fetch(API_ROUTE + "/products/")
    return await res.json()
}

export const getSoftware = async (id: string): Promise<ISoftware> => {
    const res = await fetch(API_ROUTE + "/product/" + id )
    return await res.json()
}