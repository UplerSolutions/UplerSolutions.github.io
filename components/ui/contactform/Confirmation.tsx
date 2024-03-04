import { FC } from 'react'
import { DefaultValues } from './CustomForm'
import { EditIcon } from '../icons'

interface Props {
	info: DefaultValues
	setActiveStep: (step: number) => void
}

export const Confirmation: FC<Props> = ({ info, setActiveStep }) => {
	return (
		<>
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
						{info.customerInfo.name}
					</span>
				</div>
				<div className="flex  w-4/5">
					<p className="w-[25%] text-xl  font-bold  ">Apellido </p>
					<span className="text-xl font-normal italic">
						{info.customerInfo.lastname}
					</span>
				</div>
				<div className="flex w-4/5">
					<p className="w-[25%] text-xl  font-bold  ">Email </p>
					<span className="text-xl font-normal italic">
						{info.customerInfo.email}
					</span>
				</div>
				<div className="flex  w-4/5">
					<p className="w-[25%] text-xl  font-bold  ">Posición </p>
					<span className="text-xl font-normal italic">
						{info.customerInfo.position}
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
						{info.companyInfo.name}
					</span>
				</div>
				<div className="flex ">
					<p className="w-[35%] text-xl  font-bold  ">URL</p>
					<span className=" text-xl font-normal italic">
						{info.companyInfo.website}
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
						{info.productFeatures.name}
					</span>
				</div>
				<div className="flex w-4/5">
					<p className=" w-[40%] text-xl  font-bold  ">
						Descripción{' '}
					</p>
					<span className=" text-xl font-normal italic">
						{info.productFeatures.description}
					</span>
				</div>
				<div className="flex w-4/5">
					<p className=" w-[40%] text-xl  font-bold  ">Categoria </p>
					<span className=" text-xl font-normal italic">
						{info.productFeatures.category}
					</span>
				</div>
			</div>
		</>
	)
}
