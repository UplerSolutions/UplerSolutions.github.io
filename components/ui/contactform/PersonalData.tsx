import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CustomTextField } from './customInput/CustomTextField'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@/components/ui/button'
import { yupResolver } from '@hookform/resolvers/yup'
import { personalDataSchema } from '@/rules'

interface Props {
	handlerCustomer: (data: any) => void
}

const PersonalData: FC<Props> = ({ handlerCustomer }) => {
	const {
		control,
		formState: { errors },
		handleSubmit
	} = useForm({ resolver: yupResolver(personalDataSchema) })

	const onSubmit: SubmitHandler<any> = (data: any) => {
		handlerCustomer(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
			<h4 className="mb-4 text-center text-4xl">Personal Information</h4>

			<div>
				<CustomTextField
					name="name"
					control={control}
					type="text"
					label="Name"
					required={true}
				/>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="name" />
				</p>
			</div>

			<div>
				<CustomTextField
					name="lastname"
					label="Lastname"
					type="text"
					control={control}
					required={true}
				/>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="lastname" />
				</p>
			</div>

			<div>
				<CustomTextField
					name="email"
					label="Email"
					type="email"
					control={control}
					defaultValue=""
					required={true}
				/>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="email" />
				</p>
			</div>

			<div>
				<CustomTextField
					name="position"
					label="Your position"
					type="text"
					control={control}
					required={true}
				/>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="position" />
				</p>
			</div>

			<Button type="submit" className="self-start">
				Next
			</Button>
		</form>
	)
}

export default PersonalData
