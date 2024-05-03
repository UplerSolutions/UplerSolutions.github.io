import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@/components/ui/button'

interface Props {
	handleNext: () => void
}

const PersonalData: FC<Props> = ({ handleNext }) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()

	return (
		<section className="flex flex-col gap-4">
			<h4 className="mb-4 text-center text-4xl">Información Personal</h4>
			<div>
				<div className="relative">
					<input
						{...register('name')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="Martin"
						required
						name="name"
					/>
					<label
						htmlFor="name"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Nombre
					</label>
				</div>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="name" />
				</p>
			</div>

			<div>
				<div className="relative">
					<input
						{...register('lastname')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="Alvarez"
						required
						name="lastname"
					/>
					<label
						htmlFor="lastname"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Apellido
					</label>
				</div>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="lastname" />
				</p>
			</div>

			<div>
				<div className="relative">
					<input
						{...register('email')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="tuemail@gmail.com"
						required
						name="email"
					/>
					<label
						htmlFor="email"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Email
					</label>
				</div>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="email" />
				</p>
			</div>

			<div>
				<div className="relative">
					<input
						{...register('position')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="CEO"
						required
						name="position"
					/>
					<label
						htmlFor="position"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Tu Posicion
					</label>
				</div>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="position" />
				</p>
			</div>
			<Button className="self-end" onClick={handleNext}>
				SIGUIENTE
			</Button>
		</section>
	)
}

export default PersonalData
