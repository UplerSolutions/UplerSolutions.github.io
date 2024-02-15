
import { useForm } from 'react-hook-form'

interface FormData {
	companyType: string
	companySector: string
	companyName: string
	companyWebsite: string
	companyEmail: string
	companyAddress: string
	file: any
	fullName: string
	email: string
	position: string
}

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		const postData = {
			...data,
			file: data.file[0].name
		}
		console.log(postData)
	}

	return (
		<div className="flex items-center justify-center bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] ">
			<div className="flex w-[90%] flex-col items-center justify-center gap-5 rounded-lg pb-10 md:w-[75%]">
				<div className="mb-4 w-[100%] content-between pb-4 text-center text-neutral-700">
					<h1 className="py-10 pt-36 text-4xl font-bold lg:text-5xl xl:text-6xl">
						Do you want to sell your product?
					</h1>
					<p className="text-md">
						Please fill the form to receive a quote for your
						project. Feel free to add as much detail as needed
					</p>
				</div>

				<div className="border-1 flex w-[100%] flex-col items-center justify-center rounded-3xl bg-white p-2 text-start text-neutral-600 lg:w-[75%]">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex w-[100%] flex-col items-center pl-4 pt-8 md:items-start md:pl-10"
					>
						<h2 className="pb-8 text-3xl font-semibold">
							Company details
						</h2>

						<section className="w-full">
							<fieldset className="flex w-full flex-col gap-5">
								<h3 className="py-4 text-xl font-semibold">
									Company Type*
								</h3>
								<label
									htmlFor="companyType"
									className="flex items-center gap-4 pl-2 md:text-start"
								>
									<input
										{...register('companyType', {
											required: 'This input is required'
										})}
										value="independent-consultant"
										name="companyType"
										type="radio"
										className="scale-[1.5] text-primary-color accent-primary-color hover:text-primary-color"
									/>
									Independent Consultant
								</label>
								<label
									htmlFor="companyType"
									className="flex items-center gap-4 pl-2"
								>
									<input
										{...register('companyType', {
											required: 'This input is required'
										})}
										name="companyType"
										value="incorporated-company"
										type="radio"
										className="scale-[1.5] text-primary-color accent-primary-color hover:text-primary-color"
									/>
									Incorporated Company
								</label>
							</fieldset>

							<fieldset className="flex w-full flex-col gap-5">
								<h3 className="pb-4 pt-8 text-xl font-semibold">
									Company Sector*
								</h3>
								<div className="flex flex-wrap justify-between gap-5 pl-2">
									<label
										htmlFor="companySector"
										className="flex w-[40%] items-center gap-4 md:w-[150px] lg:w-[200px] xl:w-[30%] "
									>
										<input
											{...register('companySector', {
												required:
													'This input is required'
											})}
											value="development-it"
											name="companySector"
											type="radio"
											className="scale-[1.5] text-primary-color accent-primary-color hover:text-primary-color"
										/>
										Development & IT
									</label>
									<label
										htmlFor="companySector"
										className="flex w-[40%] items-center gap-4 md:w-[150px] lg:w-[200px] xl:w-[30%] "
									>
										<input
											{...register('companySector', {
												required:
													'This input is required'
											})}
											value="media"
											name="companySector"
											type="radio"
											className="scale-[1.5] text-primary-color accent-primary-color hover:text-primary-color"
										/>
										Media
									</label>
									<label
										htmlFor="companySector"
										className="flex w-[40%] items-center gap-4 md:w-[150px] lg:w-[200px] xl:w-[30%] "
									>
										<input
											{...register('companySector', {
												required:
													'This input is required'
											})}
											value="sales"
											name="companySector"
											type="radio"
											className="scale-[1.5] text-primary-color accent-primary-color hover:text-primary-color"
										/>
										Sales
									</label>
									<label
										htmlFor="companySector"
										className="flex w-[40%] items-center gap-4 md:w-[150px] lg:w-[200px] xl:w-[30%] "
									>
										<input
											{...register('companySector')}
											value="marketing"
											name="companySector"
											type="radio"
											className="scale-[1.5] text-primary-color accent-primary-color hover:text-primary-color"
										/>
										Marketing
									</label>
									<label
										htmlFor="companySector"
										className="flex w-[40%] items-center gap-4 md:w-[150px] lg:w-[200px] xl:w-[30%] "
									>
										<input
											{...register('companySector')}
											value="operations"
											name="companySector"
											type="radio"
											className="scale-[1.5] text-primary-color accent-primary-color hover:text-primary-color"
										/>
										Operations
									</label>
									<label
										htmlFor="companySector"
										className="flex w-[40%] items-center gap-4 md:w-[150px] lg:w-[200px] xl:w-[30%] "
									>
										<input
											{...register('companySector')}
											value="UX/UI"
											name="companySector"
											type="radio"
											className="scale-[1.5] text-primary-color accent-primary-color hover:text-primary-color"
										/>
										UX/UI
									</label>
								</div>
							</fieldset>

							<fieldset className="flex w-full flex-col gap-5">
								<label
									htmlFor="companyName"
									className="items-center pb-4 pt-10 text-xl font-semibold "
								>
									Company Name*
								</label>
								<input
									{...register('companyName', {
										required: 'This input is required'
									})}
									type="text"
									placeholder="Uplix"
									name="companyName"
									className="mr-4 rounded-2xl border-2 px-3 py-3 accent-primary-color focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:mr-10"
								/>

								<label
									htmlFor="companyAddress"
									className="items-center py-4 text-xl font-semibold "
								>
									Company Registered Address*
								</label>
								<input
									{...register('companyAddress', {
										required: 'This input is required'
									})}
									type="text"
									placeholder="Avenue 123, Argentina"
									name="companyAddress"
									className="mr-4 rounded-2xl  border-2 px-3 py-3 accent-primary-color focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:mr-10"
								/>

								<label
									htmlFor="companyWebsite"
									className="items-center py-4 text-xl font-semibold "
								>
									Company Website*
								</label>
								<input
									{...register('companyWebsite', {
										required: 'This input is required'
									})}
									type="text"
									placeholder="https://upler.com"
									name="companyWebsite"
									className="mr-4 rounded-2xl border-2 px-3 py-3 accent-primary-color focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:mr-10"
								/>

								<label
									htmlFor="companyEmail"
									className="items-center py-4 text-xl font-semibold "
								>
									Company Email*
								</label>
								<input
									{...register('companyEmail', {
										required: 'This input is required'
									})}
									type="text"
									placeholder="company@gmail.com"
									name="companyEmail"
									className="mb-4 mr-4 rounded-2xl border-2 px-3 py-3 accent-primary-color focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:mr-10"
								/>
							</fieldset>
						</section>
						<section className="flex w-full flex-col ">
							<h2 className="py-4 text-xl font-semibold">
								Attach File
							</h2>
							<p className="pb-4">
								Share with us your Company Profile
							</p>
							<input
								type="file"
								{...register('file', {
									required: 'This input is required'
								})}
								className="accent-primary-color"
							/>
						</section>

						<section className="w-full">
							<fieldset className="flex w-full flex-col gap-5">
								<h2 className="pb-4 pt-14 text-3xl font-semibold">
									Personal Information
								</h2>
								<label
									htmlFor="name"
									className="py-4 text-xl font-semibold"
								>
									Full Name
								</label>
								<input
									{...register('fullName', {
										required: 'This input is required'
									})}
									type="text"
									placeholder="Jesus Rodriguez"
									name="fullName"
									className="mr-4 rounded-2xl border-2 px-3 py-3 accent-primary-color focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:mr-10"
								/>

								<label
									htmlFor="email"
									className="items-center py-4 text-xl font-semibold "
								>
									Email
								</label>
								<input
									{...register('email', {
										required: 'This input is required'
									})}
									type="text"
									placeholder="jgonzales@gmail.com"
									name="email"
									className="mb-4 mr-10 rounded-2xl border-2 px-3 py-3 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
								/>

								<label
									htmlFor="position"
									className="items-center py-4 text-xl font-semibold "
								>
									What is your position within the Company
								</label>
								<input
									{...register('position', {
										required: 'This input is required'
									})}
									type="text"
									placeholder="CEO"
									name="position"
									className="mb-10 mr-4 rounded-2xl border-2 px-3 py-3 accent-primary-color focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:mr-10"
								/>
							</fieldset>
						</section>
					</form>{' '}
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="h-12 w-48 rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
