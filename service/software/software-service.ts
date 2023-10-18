import { ISoftware } from '@/interface/software'

export const getSoftwares = async (): Promise<ISoftware[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
    return await res.json()
}

export const getSoftware = async (id: string): Promise<ISoftware> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${id}`)
    return await res.json()
}