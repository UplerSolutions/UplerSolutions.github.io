import { ISoftware } from '@/interface/software'

export const getSoftwares = async (): Promise<ISoftware[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
	return await res.json()
}

export const getSoftware = async (id: string): Promise<ISoftware> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${id}`
	)
	return await res.json()
}

export const getSoftwareByName = async (name: string): Promise<ISoftware[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/productsByName?name=${name}`
	)
	return await res.json()
}

export const getSoftwaresByRange = async (
	low: number,
	high: number
): Promise<ISoftware[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/productsByName?low=${low}&high=${high}`
	)
	return await res.json()
}

export const getSoftwaresByCategory = async (
	category: string
): Promise<ISoftware[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/getProductsByCategory?categoryName=${category}`
	)
	return await res.json()
}
