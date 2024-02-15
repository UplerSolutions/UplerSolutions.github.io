import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { CustomTextField } from './customInput/CustomTextField'
import { ErrorMessage } from '@hookform/error-message'


interface Props {
	handlerAddress: (data: any) => void
}

const CompanyFeatures: FC<Props> = ({ handlerAddress }) => {
	const {
		control,
		formState: { errors },
		handleSubmit
	} = useForm()

	const onSubmit = (data: any) => {
		handlerAddress(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
			<h4 className="mb-4 text-center text-4xl">Características del Producto</h4>

			<div>
				<CustomTextField
					name="name"
					control={control}
					type="text"
					label="Nombre del Producto"
					required={true}
				/>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="name" />
				</p>
			</div>

			<div>
				<CustomTextField
					name="descripción"
					label="Descripción"
					type="text"
					control={control}
					required={true}
				/>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="descripción" />
				</p>
			</div>

			<CustomTextField
				name="categoria"
				label="Categoria"
				type="email"
				control={control}
				required={true}
			/>

			<p className="text-sm font-medium text-red-500">
				<ErrorMessage errors={errors} name="categoria" />
			</p>
		</form>
	)
}

export default CompanyFeatures
