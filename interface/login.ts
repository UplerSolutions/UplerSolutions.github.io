export interface IResponseLogin {
	accessToken: string
	user: User
}

export interface User {
	id: string
	createdAt: Date
	updatedAt: Date
	username: string
	name: string
	lastname: string
	email: string
	password: string
	city: string
	province: string
	role: string
	streetAdrees: string
	numberPhone: number
}
