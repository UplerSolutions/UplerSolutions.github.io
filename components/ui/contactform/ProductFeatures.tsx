'use client'

import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '../button'
import { ICategory } from '@/interface/category'

interface Props {
	handleNext: () => void
	handleBack: () => void
}

const ProductFeatures: FC<Props> = ({ handleNext, handleBack }) => {
	const {
		register,
		formState: { errors },
		getValues
	} = useFormContext()

	const [categories, setCategories] = useState<ICategory[]>([])
	const [erros, setErrors] = useState<any>()
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`)
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch(e => setErrors(e))
	}, [])
	console.log(erros)
	return (
		<section className="relative flex flex-col gap-4">
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
				<div className="space relative">
					<label
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
						htmlFor="productCategory"
					>
						{' '}
						Categoria
					</label>
					<select
						{...register('productCategory')}
						placeholder="Eliga una categoria"
						name="productCategory"
						className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					>
						{categories?.map((cat) => (
							<option key={cat.id} value={cat.id}>
								{cat.categoryName}
							</option>
						))}
					</select>
				</div>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="productCategory" />
				</p>
			</div>
			<div className=" flex justify-between">
				<Button className="self-start" onClick={handleBack}>
					ATRAS
				</Button>
				<Button className="self-end" onClick={handleNext}>
					SIGUIENTE
				</Button>
			</div>
		</section>
	)
}

export default ProductFeatures
