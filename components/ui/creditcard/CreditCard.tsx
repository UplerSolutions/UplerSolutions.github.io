import React, { useState, ChangeEvent, FocusEvent } from 'react'
import Cards, { ReactCreditCardsProps } from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'

interface PaymentFormState {
  number: string
  expiry: string
  cvc: string
  name: string
  focus: string
}

const CreditCard: React.FC = () => {
  const [state, setState] = useState<PaymentFormState>({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: ''
  })

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
      const formattedValue = value.replace(/\s/g, '').slice(0, 4)
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

  // Add validation logic here
  // For example, you can check the length of card number, expiry, and CVC

  return (
    <div className='flex gap-4 py-8 items-center justify-center'>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus as ReactCreditCardsProps['focused']}
      />
      <div className=''>
        <form className='text-black flex flex-col gap-4'>
          <input
            type='text'
            name='number'
            placeholder='Card Number'
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='rounded-md '
          />
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='rounded-md '
          />
          <div className='flex gap-4'>
            <input
              type='text'
              name='expiry'
              placeholder='MM/YY Expiry'
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='rounded-md '
            />
            <input
              type='text'
              name='cvc'
              placeholder='CVC'
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='rounded-md '
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreditCard
