import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@/components/ui/button'

interface Props {
	handleNext: () => void
	handleBack: () => void
}
const CompanyData: FC<Props> = ({ handleNext, handleBack }) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()
	return (
		<section className="relative flex flex-col gap-4">
			<h4 className="mb-4 text-center text-4xl">
				Información de la Compania
			</h4>

			<div>
				<div className="relative">
					<input
						{...register('companyName')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="Upler"
						required
						name="companyName"
					/>
					<label
						htmlFor="companyName"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Nombre de la Compania
					</label>
				</div>
				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="companyName" />
				</p>
			</div>

			<div>
				<div className="relative">
					<input
						{...register('website')}
						type="text"
						className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder="https://www.tuweb"
						required
						name="website"
					/>
					<label
						htmlFor="website"
						className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Website
					</label>
				</div>

				<p className="text-sm font-medium text-red-500">
					<ErrorMessage errors={errors} name="website" />
				</p>
			</div>
			<div className=" flex justify-between">
				<Button className="self-start" onClick={handleBack}>
					ATRAS
				</Button>
				<Button className="self-end" onClick={handleNext}>
					SIGUIENTE
				</Button>
			</div>
		</section>
	)
}

export default CompanyData
