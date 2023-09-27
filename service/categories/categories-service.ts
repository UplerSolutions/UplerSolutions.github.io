import { ICategory } from '../../interface/category'


const API_ROUTE = process.env.API_ROUTE;

export const getCategories = async (): Promise<ICategory[]> => {
    const res = await fetch(  "https://uplerbackend-production.up.railway.app/api/categories")
    return await res.json()
}