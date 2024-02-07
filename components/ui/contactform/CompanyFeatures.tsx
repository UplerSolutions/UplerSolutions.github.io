import { FC } from 'react'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'
import { CustomTextField } from './customInput/CustomTextField'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'

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
			<h4 className="mb-4 text-center text-4xl">Company Features</h4>

			<div>
				<CustomTextField
					name="name"
					control={control}
					type="text"
					label="Product name"
					required={true}
				/>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="name" />
				</p>
			</div>

			<div>
				<CustomTextField
					name="website"
					label="Website URL"
					type="text"
					control={control}
					required={true}
				/>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="website" />
				</p>
			</div>

			<CustomTextField
				name="email"
				label="Company email"
				type="email"
				control={control}
				required={true}
			/>

			<p className="text-sm font-medium text-red-500">
				<ErrorMessage errors={errors} name="email" />
			</p>
		</form>
	)
}

export default CompanyFeatures
