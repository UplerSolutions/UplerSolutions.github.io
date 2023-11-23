import { ICategory } from '../../interface/category'

const API_ROUTE = process.env.API_ROUTE

export const getCategories = async (): Promise<ICategory[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`)
	return await res.json()
}
