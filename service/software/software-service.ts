import { ISoftware } from '@/interface/software'

export const getSoftwares = async () : ISoftware[] =>{
    const res = await fetch("http://localhost:3000/api/software")
    return await res.json()
}