import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { CustomTextField } from './customInput/CustomTextField'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '../button'

interface Props {
	handlerProduct: (data: any) => void
}

const CompanyFeatures: FC<Props> = ({ handlerProduct }) => {
	const {
		control,
		formState: { errors },
		handleSubmit
	} = useForm()

	const onSubmit = (data: any) => {
		handlerProduct(data)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex flex-col gap-4"
		>
			<h4 className="mb-4 text-center text-4xl">
				Características del Producto
			</h4>

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
					name="description"
					label="Descripción"
					type="text"
					control={control}
					required={true}
				/>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="descripción" />
				</p>
			</div>

			<div>
				<CustomTextField
					name="category"
					label="Categoria"
					type="text"
					control={control}
					required={true}
				/>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="categoria" />
				</p>
			</div>

			<Button type="submit" className="absolute -bottom-14 right-0">
				SIGUIENTE
			</Button>
		</form>
	)
}

export default CompanyFeatures
