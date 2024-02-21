import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { CustomTextField } from './customInput/CustomTextField'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@/components/ui/button'
import { yupResolver } from '@hookform/resolvers/yup'
import { companyDataSchema } from '@/rules'
import { DefaultValues } from './CustomForm'

interface Props {
	handlerCompany: (data: any) => void
	info: DefaultValues
}

const CompanyData: FC<Props> = ({ handlerCompany, info }) => {
	const {
		control,
		formState: { errors },
		handleSubmit
	} = useForm({ defaultValues: info.companyInfo, resolver: yupResolver(companyDataSchema) })

	const onSubmit = (data: any) => {
		handlerCompany(data)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex flex-col gap-4"
		>
			<h4 className="mb-4 text-center text-4xl">
				Información de la Compania
			</h4>

			<div>
				<CustomTextField
					name="name"
					control={control}
					defaultValue=""
					type="text"
					label="Nombre de compañía"
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
					label="Email de la compañía"
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

export default CompanyData
