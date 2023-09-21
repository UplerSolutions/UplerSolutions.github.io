import { ISoftware } from '@/interface/software'
const url = process.env.API_ROUTE;
export const getSoftwares = async () : Promise<ISoftware[]> =>{
    const res = await fetch("http://localhost:3000/api/software")
    return await res.json()
}