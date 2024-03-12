import { ChangeEvent, FocusEvent, useState } from 'react'
import Cards, { ReactCreditCardsProps } from 'react-credit-cards-2'
import { useForm } from 'react-hook-form'
import 'react-credit-cards-2/dist/es/styles-compiled.css'

interface PaymentFormState {
	number: string
	name: string
	expiry: string
	cvc: string
	focus: string
}

const CreditCard = () => {
	const { register, formState } = useForm<PaymentFormState>()

	const [state, setState] = useState({
		number: '',
		expiry: '',
		cvc: '',
		name: '',
		focus: ''
	})

	const [state2, setState2] = useState({
		number: 1233242341231231,
		expiry: 1026,
		cvc: 123,
		name: 'Serafin Quesada'
	})

	const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target

		setState((prev) => ({ ...prev, [name]: value }))
	}

	const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
		setState((prev) => ({ ...prev, focus: evt.target.name }))
	}

	return (
		<div className="w-mx flex flex-col items-center gap-4 py-4 md:items-start md:px-12 ">
			<div className="flex w-full gap-10">
				<Cards
					number={state2.number}
					expiry={state2.expiry}
					cvc={state2.cvc}
					name={state2.name}
				/>
			</div>

			<Cards
				number={state.number}
				expiry={state.expiry}
				cvc={state.cvc}
				name={state.name}
				focused={state.focus as ReactCreditCardsProps['focused']}
			/>
			<div className="flex flex-col items-center">
				<form className="flex w-[98%] flex-col gap-4 text-black sm:w-full">
					<input
						{...register('number')}
						type="text"
						name="number"
						placeholder="Card Number"
						className="rounded-md px-3 py-1"
					/>
					<input
						{...register('name')}
						type="text"
						name="name"
						placeholder="Name"
						className="rounded-md px-3 py-1"
					/>
					<div className="flex items-center justify-center gap-4 ">
						<input
							{...register('expiry')}
							type="text"
							name="expiry"
							placeholder="MM/YY"
							className="w-4/5 rounded-md px-3 py-1"
						/>
						<input
							{...register('cvc')}
							type="text"
							name="cvc"
							placeholder="CVC"
							className="w-4/5 rounded-md px-3 py-1"
						/>
					</div>
					<button className="mt-4 w-max self-center rounded-lg bg-slate-400 p-4 hover:bg-slate-500 hover:transition-colors">
						Add New Credit Card
					</button>
				</form>
			</div>
		</div>
	)
}

export default CreditCard
