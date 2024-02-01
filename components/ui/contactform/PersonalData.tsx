import  { FC } from 'react'
import Typography from '@mui/material/Typography'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CustomTextField } from './customInput/CustomTextField'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaCustomer } from '@/rules'

interface Props {
	handlerCustomer: (data: any) => void
	handleNext: () => void
}

const PersonalData: FC<Props> = ({ handlerCustomer, handleNext }) => {
	const {
		control,
		formState: { errors },
		handleSubmit
	} = useForm({ resolver: yupResolver(schemaCustomer) })

	const onSubmit: SubmitHandler<any> = (data: any) => {
		handlerCustomer(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Typography
				sx={{ paddingBottom: '1rem' }}
				variant="h4"
				align="center"
			>
				Personal Information
			</Typography>

			<Typography variant="caption" color="red">
				<ErrorMessage errors={errors} name="name" />
			</Typography>

			<CustomTextField
				name="name"
				control={control}
				defaultValue=""
				type="text"
				label="Name"
				required={true}
			/>

			<Typography variant="caption" color="red">
				<ErrorMessage errors={errors} name="lastname" />
			</Typography>

			<CustomTextField
				name="lastname"
				label="Lastname"
				type="text"
				control={control}
				defaultValue=""
				required={true}
			/>

			<Typography variant="caption" color="red">
				<ErrorMessage errors={errors} name="email" />
			</Typography>

			<CustomTextField
				name="email"
				label="Email"
				type="email"
				control={control}
				defaultValue=""
				required={true}
			/>

			<CustomTextField
				name="Your position"
				label="Your position"
				type="text"
				control={control}
				defaultValue=""
				required={true}
			/>
			{
				<Button
					variant="contained"
					type="submit"
					className="bg-primary-color hover:bg-purple-500"
				>
					{' '}
					Next
				</Button>
			}
		</form>
	)
}

export default PersonalData
