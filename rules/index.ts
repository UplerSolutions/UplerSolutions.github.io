import * as yup from 'yup'

export const singup = yup.object({
	username: yup
		.string()
		.min(5, 'At least should be five characters short')
		.required('Please enter an username'),
	email: yup
		.string()
		.required('Please enter a valid email')
		.matches(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please enter a valid email'
		),
	password: yup
		.string()
		.required('Please enter your password')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
			'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
		),
	confirmPassword: yup
		.string()
		.required('Passwords must match')
		.oneOf([yup.ref('password')], 'Passwords must match')
})

export const login = yup.object({
	username: yup.string().required('Please Enter your username'),
	password: yup.string().required('Please Enter your password')
})


export const contactForm = yup.object({
	name: yup
		.string()
		.required('Este campo es requerido')
		.min(2, 'Mínimo de 2 caracteres'),
	lastname: yup
		.string()
		.required('Este campo es requerido')
		.min(2, 'Mínimo de 2 caracteres'),
	email: yup
		.string()
		.email()
		.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Debe ser un mail')
		.required('Este campo es requerido'),
	position: yup
		.string()
		.required('Este campo es requerido')
		.min(2, 'Mínimo de 2 caracteres'),
	companyName: yup
		.string()
		.required('Este campo es requerido')
		.min(2, 'Mínimo de 2 caracteres'),
	website: yup
		.string()
		.url('Formato de URL invalido')
		.required('Este campo es requerido'),
	productName: yup
		.string()
		.required('Este campo es requerido')
		.min(2, 'Mínimo de 2 caracteres'),
	productDescription: yup
		.string()
		.required('Este campo es requerido')
		.min(2, 'Mínimo de 2 caracteres'),
	productCategory: yup
		.string()
		.required('Este campo es requerido')
		.min(2, 'Mínimo de 2 caracteres'),
})
