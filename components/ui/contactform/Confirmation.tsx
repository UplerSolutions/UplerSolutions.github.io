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
			<h4 className="mb-6 flex items-center gap-2 text-center text-4xl">
				Información Personal{' '}
				<button onClick={(e) => setActiveStep(0)}>
					<EditIcon className="mt-1 h-7 w-7" />
				</button>
			</h4>

			<div className="mb-4 flex flex-col">
				<p>
					<strong>Nombre:</strong> {info.customerInfo.name}
				</p>
				<p>
					<strong>Apellido:</strong> {info.customerInfo.lastname}
				</p>
				<p>
					<strong>Email:</strong> {info.customerInfo.email}
				</p>
				<p>
					<strong>Posición:</strong> {info.customerInfo.position}
				</p>
			</div>

			<h4 className="mb-6 flex items-center gap-2 text-center text-4xl">
				Información de la Compañía{' '}
				<button onClick={(e) => setActiveStep(1)}>
					<EditIcon className="mt-1 h-7 w-7" />
				</button>
			</h4>

			<div className="mb-4 flex flex-col">
				<p>
					<strong>Nombre de compañía:</strong> {info.companyInfo.name}
				</p>
				<p>
					<strong>URL de la pagina web:</strong>{' '}
					{info.companyInfo.website}
				</p>
				<p>
					<strong>Email de la compañía:</strong>{' '}
					{info.companyInfo.email}
				</p>
			</div>

			<h4 className="mb-6 flex items-center gap-2 text-center text-4xl">
				Información del Producto{' '}
				<button onClick={(e) => setActiveStep(2)}>
					<EditIcon className="mt-1 h-7 w-7" />
				</button>
			</h4>

			<div className="mb-4 flex flex-col">
				<p>
					<strong>Nombre del Producto:</strong>{' '}
					{info.productFeatures.name}
				</p>
				<p>
					<strong>Descripción:</strong>{' '}
					{info.productFeatures.description}
				</p>
				<p>
					<strong>Categoria:</strong> {info.productFeatures.category}
				</p>
			</div>
		</>
	)
}
