import { FC, useEffect, useState, ChangeEvent, FocusEvent } from 'react'
import { IPlan } from '@/interface/plan'
import { ISoftware } from '@/interface/software'
import { getSoftwares } from '@/service/software/software-service'

import Period from './Period'
import { CheckboxGroup } from './CheckboxGroup'

import { useForm, FormProvider } from 'react-hook-form'
import { RxLockClosed } from 'react-icons/rx'
import { GoShieldCheck } from 'react-icons/go'
import { FaCheck } from 'react-icons/fa'
import Pagination from '../pagination/Pagination'

interface Props {
	plan: IPlan
}

interface PaymentForm {
	number: string
	name: string
	expiry: string
	cvc: string
}

interface PaymentFormState {
	number: string
	name: string
	expiry: string
	cvc: string
	focus: string
}

interface FormData {
	status: string
	paymentMethod: PaymentForm
	user: string
	plan: string
	period: string
	products: string[]
	totalPrice: number
}

interface Props {
	plan: IPlan
}

const PurchaseForm: FC<Props> = ({ plan }) => {
	const [products, setProducts] = useState<ISoftware[]>()
	const [purchaseProducts, setPurchaseProducts] = useState<string[]>([])
	const [state, setState] = useState<PaymentFormState>({
		cvc: '',
		expiry: '',
		name: '',
		number: '',
		focus: ''
	})

	const [currentPage, setCurrentPage] = useState<number>(1)
	const pageSize = 6 // Number of products per page
	const totalProducts = products?.length || 0
	const totalPages = Math.ceil(totalProducts / pageSize)

	const methods = useForm<FormData>({
		defaultValues: {
			status: 'PENDING',
			paymentMethod: {
				cvc: '',
				expiry: '',
				name: '',
				number: ''
			},
			user: '',
			plan: plan.name,
			period: '',
			products: [],
			totalPrice: plan.price
		}
	})

	const onSubmit = (data: any) => {
		const formatData = {
			...data,
			paymentMethod: { ...state },
			user: ''
		}
		console.log(formatData)
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await getSoftwares()
				setProducts(res)
			} catch (error) {
				console.error('Error fetching categories:', error)
			}
		}
		fetchData()
	}, [])

	const handleCheckboxChange = (value: string) => {
		if (purchaseProducts.includes(value)) {
			setPurchaseProducts(
				purchaseProducts.filter((option) => option !== value)
			)
		} else {
			if (purchaseProducts.length < plan.amount!) {
				setPurchaseProducts((prevProducts) => [...prevProducts, value])
			}
		}

		setPurchaseProducts((prevProducts) => prevProducts.flat())
	}

	const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target

		if (name === 'number') {
			// Restrict card number to 16 digits
			const formattedValue = value
				.replace(/\s/g, '')
				.slice(0, 16)
				.replace(/(\d{4})/g, '$1 ')
				.trim()
			setState((prev) => ({ ...prev, [name]: formattedValue }))
		} else if (name === 'expiry') {
			// Restrict date to 4 digits (MM/YY)
			const formattedValue = value
				.replace(/\s/g, '')
				.slice(0, 5)
				.replace(/(\d{2})(\d{0,2})/, '$1/$2')
				.replace(/\/+/g, '/')
			setState((prev) => ({ ...prev, [name]: formattedValue }))
		} else if (name === 'cvc') {
			// Restrict CVC to 3 digits
			const formattedValue = value.replace(/\s/g, '').slice(0, 3)
			setState((prev) => ({ ...prev, [name]: formattedValue }))
		} else {
			setState((prev) => ({ ...prev, [name]: value }))
		}
	}

	const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
		setState((prev) => ({ ...prev, focus: evt.target.name }))
	}

	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}

	const handlePaginationChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	) => {
		onPageChange(page)
	}
	const startIndex = (currentPage - 1) * pageSize
	const endIndex = startIndex + pageSize

	// Slice the products array to display only the products for the current page
	const displayedProducts: ISoftware[] =
		products?.slice(startIndex, endIndex) || []
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] pt-32 ">
					<div className="flex flex-row bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] p-6 text-neutral-700 first-letter:rounded-xl sm:py-10 sm:pl-10 lg:w-[75%] ">
						<div className="flex flex-col gap-10">
							<div className="flex flex-col items-center gap-4  text-center sm:flex-row sm:gap-0 sm:text-left md:gap-[150px]">
								<h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-[42px] ">
									¡Ya casi! Finalice su order
								</h1>
								<div className="flex items-center gap-6">
									<GoShieldCheck className="scale-[1.8] text-primary-color" />
									<span>
										Garantía de devolución de dinero de 30
										días
									</span>
								</div>
							</div>
							<div>
								<h2 className="text-xl">
									Paquete Elegido:
									<span className="font-semibold text-primary-color">
										{' '}
										{plan?.name}
									</span>
								</h2>
								<div className="flex gap-5">
									<div className="flex items-center pt-2">
										<h2>This Bundles includes :</h2>
										<div className="pl-5">
											{plan?.benefits.map((benefit) => (
												<div
													className="flex items-center gap-4"
													key={benefit}
												>
													<FaCheck className="text-primary-color " />
													<span>{benefit}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mb-8 mt-8 w-[90%] rounded-xl bg-gradient-to-r from-[#fff5ff] to-[#fffdf0]  px-6  py-8 md:px-8 lg:w-[75%] 2xl:px-0">
						<div className="w-full text-2xl font-bold md:text-[28px] lg:text-[32px] xl:text-[36px]">
							<h2 className="pl-10 pt-6 text-neutral-600 md:pb-10">
								1. Elige un Periodo
							</h2>
						</div>
						<div className="flex flex-wrap items-center justify-center gap-10 pt-6 md:flex-nowrap">
							<Period duration="1 Month" price={plan?.price} />
							<Period
								duration="3 Months"
								price={plan?.price * 3}
							/>
							<Period
								duration="12 Months"
								price={plan?.price * 12}
							/>
						</div>
					</div>
				</section>

				<section className="flex w-full flex-col  items-center justify-center bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]">
					<div className="flex w-[90%] flex-col rounded-xl bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] p-6 pr-8 text-neutral-700 sm:py-16 sm:pl-8 lg:w-[75%]">
						<div className="w-full text-2xl font-bold md:text-[28px] lg:text-[32px] xl:text-[36px]">
							<h2 className="text-neutral-600 md:pb-10 md:pl-4">
								2. Seleccione tus softwares
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center text-center">
							<CheckboxGroup
								options={products}
								limit={plan?.amount!}
								selectedOptions={purchaseProducts}
								onChange={handleCheckboxChange}
								currentPage={currentPage} // Pass the currentPage prop
								totalProducts={totalProducts} // Pass the totalProducts prop
							/>

							<Pagination
								totalPages={totalPages}
								currentPage={currentPage}
								onPageChange={(page) => onPageChange(page)}
							/>
						</div>
					</div>
				</section>

				<section className="flex w-full flex-col  items-center justify-center bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] ">
					<div className="mb-8 mt-10 flex w-[90%] flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] px-6 py-8 text-center lg:w-[75%] xl:items-start xl:text-start ">
						<div className="flex w-full flex-col items-center justify-between gap-6 text-2xl font-bold md:text-[28px] lg:text-[32px] xl:flex-row xl:text-[36px]">
							<h2 className="pt-6 text-neutral-600 md:pb-8 md:pl-6">
								3. Procedá a hacer un pago seguro
							</h2>
						</div>
						<div className="flex flex-col md:pl-[3.2rem]">
							<div className="hidden items-center gap-6 xl:flex">
								<span>
									<GoShieldCheck className="scale-[1.8] text-primary-color" />
								</span>
								<p className="w-[150px] text-neutral-700">
									Garantía de devolución de dinero de 30 días
								</p>
								<div className="flex items-center gap-6 pl-7">
									<span>
										<RxLockClosed className="scale-[1.8] text-primary-color" />
									</span>
									<p className="w-[150px] text-neutral-700">
										Pagos cifrados y seguros.
									</p>
								</div>
							</div>
							<div>
								<h4 className="pt-6 text-neutral-700">
									Al completar la compra, aceptas nuestros
									Términos de Servicio y confirmas que has
									leído nuestra Política de Privacidad. Puedes
									cancelar los pagos recurrentes en cualquier
									momento.
								</h4>
							</div>
							<span className="pb-8 pt-10 font-semibold text-neutral-700">
								¿Necesitas ayuda? Consulta nuestras preguntas
								frecuentes (FAQs).
							</span>
						</div>
					</div>
					<div className="pb-14 xl:pl-[3.2rem]">
						<button
							type="submit"
							className=" h-12 w-48 rounded-xl bg-primary-color text-lg font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
						>
							Compra Ya
						</button>
					</div>
				</section>
			</form>
		</FormProvider>
	)
}

export default PurchaseForm
