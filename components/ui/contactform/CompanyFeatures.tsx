import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '../button'

interface Props {
	handleNext: () => void
}

const CompanyFeatures: FC<Props> = ({ handleNext }) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()
	return (
		<div className="relative flex flex-col gap-4">
			<h4 className="mb-4 text-center text-4xl">
				Características del Producto
			</h4>

			<div>
				<div className="relative">
					<input
						{...register('productName')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="Upler"
						required
						name="productName"
					/>
					<label
						htmlFor="productName"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Nombre del producto
					</label>
				</div>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="productName" />
				</p>
			</div>

			<div>
				<div className="relative">
					<input
						{...register('productDescription')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="Upler"
						required
						name="productDescription"
					/>
					<label
						htmlFor="productDescription"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Descripción del producto
					</label>
				</div>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="productDescription" />
				</p>
			</div>

			<div>
				<div className="relative">
					<input
						{...register('productCategory')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="Trading"
						required
						name="productCategory"
					/>
					<label
						htmlFor="productCategory"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Category del producto
					</label>
				</div>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="category" />
				</p>
			</div>
			<Button
				className="self-end"
				onClick={handleNext}
			>
				SIGUIENTE
			</Button>
		</div>
	)
}

export default CompanyFeatures
