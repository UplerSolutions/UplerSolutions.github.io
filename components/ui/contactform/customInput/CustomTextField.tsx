import { Control, Controller } from 'react-hook-form'

interface CustomTextFieldProps {
	name: string
	label: string
	type: string
	required?: boolean
	control: Control<any>
	defaultValue?: string
	textFieldProps?: Record<string, any>
}

export const CustomTextField = ({
	name,
	label,
	type,
	required,
	control,
	defaultValue,
	textFieldProps
}: CustomTextFieldProps) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field }) => (
				<>
					<div className="relative">
						<input
							{...field}
							type={type}
							id={name}
							className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
							placeholder=" "
							required={required}
							{...textFieldProps}
						/>
						<label
							htmlFor={name}
							className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
						>
							{label}
						</label>
					</div>
				</>
			)}
		/>
	)
}
