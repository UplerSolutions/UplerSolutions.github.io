import React, { ChangeEvent, FocusEvent } from 'react'
import Cards, { ReactCreditCardsProps } from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { useFormContext } from 'react-hook-form'

interface PaymentFormState {
  number: string
  name: string
  expiry: string
  cvc: string
  focus: string
}

interface Props{
  state: PaymentFormState;
  handleInputFocus : (evt: FocusEvent<HTMLInputElement>) => void
  handleInputChange:(evt: ChangeEvent<HTMLInputElement>) => void  
}

const CreditCard: React.FC<Props> = ({state,handleInputFocus,handleInputChange}) => {


  const { register, formState } = useFormContext();

  

  // Add validation logic here
  // For example, you can check the length of card number, expiry, and CVC

  return (
    <div className='flex flex-col xl:flex-row gap-4 py-4 md:px-12 items-center '>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus as ReactCreditCardsProps['focused']}
      />
      <div className='flex items-center flex-col'>
        <div className='text-black flex flex-col gap-4 w-[98%] sm:w-full'>
          <input
            {...register("paymentMethod.number")}
            type='text'
            name='number'
            placeholder='Card Number'
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='rounded-md px-3 py-1'
          />
          <input
            {...register("paymentMethod.name")}
            type='text'
            name='name'
            placeholder='Name'
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='rounded-md px-3 py-1'
          />
          <div className='flex gap-4 items-center justify-center '>
            <input
              {...register("paymentMethod.expiry")}
              type='text'
              name='expiry'
              placeholder='MM/YY'
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='rounded-md w-4/5 px-3 py-1'
            />
            <input
              {...register("paymentMethod.cvc")}
              type='text'
              name='cvc'
              placeholder='CVC'
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='rounded-md w-4/5 px-3 py-1'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
