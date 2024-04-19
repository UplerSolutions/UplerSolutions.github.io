import { FC } from 'react'
import { EditIcon } from '../icons'
import { useFormContext } from 'react-hook-form'
import { Button } from '../button'
import { ErrorMessage } from '@hookform/error-message'

interface Props {
	setActiveStep: (step: number) => void
	handleBack: () => void
}

export const Confirmation: FC<Props> = ({ setActiveStep, handleBack }) => {
	const {
		getValues,
		formState: { errors }
	} = useFormContext()

	const info = getValues()

	console.log(errors)

	return (
		<section className="relative flex flex-col">
			<h4 className="mb-6 flex items-center gap-2 text-center text-4xl font-bold">
				Información Personal{' '}
				<button onClick={(e) => setActiveStep(0)}>
					<EditIcon className="ml-4 mt-1 h-7 w-7" />
				</button>
			</h4>

			<div className="mb-4 flex flex-col ">
				<div className="flex  w-4/5">
					<p className=" w-[25%]  text-xl font-bold ">Nombre </p>
					<span className=" text-xl font-normal italic">
						{info.name}
					</span>
				</div>
				<div className="flex  w-4/5">
					<p className="w-[25%] text-xl  font-bold  ">Apellido </p>
					<span className="text-xl font-normal italic">
						{info.lastname}
					</span>
				</div>
				<div className="flex w-4/5">
					<p className="w-[25%] text-xl  font-bold  ">Email </p>
					<span className="text-xl font-normal italic">
						{info.email}
					</span>
				</div>
				<div className="flex  w-4/5">
					<p className="w-[25%] text-xl  font-bold  ">Posición </p>
					<span className="text-xl font-normal italic">
						{info.position}
					</span>
				</div>
			</div>

			<h4 className="mb-6 flex items-center gap-2 text-center text-4xl font-bold">
				Información de la Compañía{' '}
				<button onClick={(e) => setActiveStep(1)}>
					<EditIcon className="ml-4 mt-1 h-7 w-7" />
				</button>
			</h4>

			<div className="mb-4 flex flex-col">
				<div className="flex ">
					<p className="w-[35%] text-xl  font-bold  ">
						Nombre de compañía
					</p>
					<span className="  text-xl font-normal italic">
						{info.companyName}
					</span>
				</div>
				<div className="flex ">
					<p className="w-[35%] text-xl  font-bold  ">URL</p>
					<span className=" text-xl font-normal italic">
						{info.website}
					</span>
				</div>
			</div>

			<h4 className="mb-6 flex items-center gap-2 text-center text-4xl font-bold">
				Información del Producto{' '}
				<button onClick={(e) => setActiveStep(2)}>
					<EditIcon className="ml-4 mt-1 h-7 w-7" />
				</button>
			</h4>

			<div className="mb-4 flex flex-col">
				<div className="flex  w-4/5">
					<p className=" w-[40%] text-xl  font-bold  ">
						Nombre del Producto{' '}
					</p>
					<span className=" text-xl font-normal italic">
						{info.productName}
					</span>
				</div>
				<div className="flex w-4/5">
					<p className=" w-[40%] text-xl  font-bold  ">
						Descripción{' '}
					</p>
					<span className=" text-xl font-normal italic">
						{info.productDescription}
					</span>
				</div>
				<div className="flex w-4/5">
					<p className=" w-[40%] text-xl  font-bold  ">Categoria </p>
					<span className=" text-xl font-normal italic">
						{info.productCategory}
					</span>
				</div>
			</div>
			<div className=" flex justify-between">
				<Button className="self-start" onClick={handleBack}>
					ATRAS
				</Button>
				{Object.keys(errors).length > 0 ? (
					<Button type="submit" disable className="self-end">
						ENVIAR
					</Button>
				) : (
					<Button type="submit"  className="self-end">
						ENVIAR
					</Button>
				)}
			</div>
			<div className="pt-4 ">
				{Object.keys(errors).length > 0 ? (
					<p className="text-lg font-medium text-red-500">
						{' '}
						Debes completar todos los campos para contactarte con
						nosotros
					</p>
				) : (
					''
				)}
			</div>
		</section>
	)
}
