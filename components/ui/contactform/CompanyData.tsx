import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { CustomTextField } from './customInput/CustomTextField'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@/components/ui/button'
import { yupResolver } from '@hookform/resolvers/yup'
import { companyDataSchema } from '@/rules'

interface Props {
	handlerAddress: (data: any) => void
}

const DataDireccionEntrega: FC<Props> = ({ handlerAddress }) => {
	const {
		control,
		formState: { errors },
		handleSubmit
	} = useForm({ resolver: yupResolver(companyDataSchema) })

	const onSubmit = (data: any) => {
		handlerAddress(data)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex flex-col gap-4"
		>
			<h4 className="mb-4 text-center text-4xl">Información de la Compania</h4>

			<div>
				<CustomTextField
					name="name"
					control={control}
					defaultValue=""
					type="text"
					label="Nombre de producto"
					required={true}
				/>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="name" />
				</p>
			</div>

			<div>
				<CustomTextField
					name="website"
					label="URL de la pagina web"
					type="text"
					control={control}
					defaultValue=""
					required={true}
				/>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="website" />
				</p>
			</div>

			<div>
				<CustomTextField
					name="email"
					label="Email de la compania"
					type="email"
					control={control}
					defaultValue=""
					required={true}
				/>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="email" />
				</p>
			</div>

			<Button type="submit" className="absolute -bottom-14 right-0">
				SIGUIENTE
			</Button>
		</form>
	)
}

export default DataDireccionEntrega
