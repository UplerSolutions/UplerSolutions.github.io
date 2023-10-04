import React, { FC, useEffect, useState, ChangeEvent, FocusEvent } from 'react'
import { IPlan } from '@/interface/plan'
import { ISoftware } from '@/interface/software'
import { getSoftwares } from '@/service/software/software-service'

import Period from './Period';
import { CheckboxGroup } from './CheckboxGroup'
import CreditCard from '@/components/ui/creditcard/CreditCard'

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { RxLockClosed } from 'react-icons/rx'
import { GoShieldCheck } from 'react-icons/go'
import { FaCheck } from 'react-icons/fa'

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
    status: string;
    paymentMethod: PaymentForm;
    user: string;
    plan: string;
    period: string;
    products: string[];
    totalPrice: number
}

interface Props {
    plan: IPlan
}

const PurchaseForm: FC<Props> = ({ plan }) => {


    const [products, setProducts] = useState<ISoftware[]>()
    const [purchaseProducts, setPurchaseProducts] = useState<string[]>([]);
    const [state, setState] = useState<PaymentFormState>({
        cvc: "",
        expiry: "",
        name: "",
        number: "",
        focus: ""
    })
    console.log(purchaseProducts)

    const methods = useForm<FormData>({
        defaultValues: {
            status: "PENDING",
            paymentMethod: {
                cvc: "",
                expiry: "",
                name: "",
                number: ""
            },
            user: "",
            plan: plan.name,
            period: "",
            products: [],
            totalPrice: plan.price
        }
    });

    const onSubmit = (data: any) => {
        const formatData = {
            ...data,
            paymentMethod: { ...state },
            user: "",
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
            setPurchaseProducts(purchaseProducts.filter((option) => option !== value));
        } else {
            if (purchaseProducts.length < plan.amount!) {
                setPurchaseProducts((prevProducts) => [...prevProducts, value]);
            }
        }


        setPurchaseProducts((prevProducts) => prevProducts.flat());
    };

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

    return (

        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} >
                <section className='pt-32 flex flex-col justify-center items-center w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>


                    <div className='first-letter:rounded-xl flex flex-row p-6 sm:py-10 sm:pl-16 bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] text-neutral-700 lg:w-[75%] '>
                        <div className='flex flex-col gap-10'>
                            <div className='items-center flex-col sm:flex-row flex  gap-4 text-center sm:gap-0 sm:text-left md:gap-[150px]'>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold '>
                                    ¡Almost There! Finish order
                                </h1>
                                <div className='flex gap-6 items-center'>
                                    <GoShieldCheck className='text-primary-color scale-[1.8]' />
                                    <span>30-day money-back guarantee</span>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl'>
                                    Bundle choosen:
                                    <span className='text-primary-color font-semibold'>
                                        {' '}
                                        {plan?.name}
                                    </span>
                                </h2>
                                <div className='flex gap-5'>
                                    <div className='flex'>
                                        <h2>This Bundles includes :</h2>
                                        <div className='pl-5'>
                                            {plan?.benefits.map((benefit) => (
                                                <div className='flex gap-4 pt-2' key={benefit}>
                                                    <FaCheck className='text-primary-color ' />
                                                    <span>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-8   py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%]'>
                        <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
                            <h2 className='md:pb-10 pl-6 pt-6 text-neutral-600'>
                                1. Choose a Period
                            </h2>
                        </div>
                        <div className='flex gap-10 pt-6 flex-wrap md:flex-nowrap items-center justify-center'>
                            <Period duration='1 Month' price={plan?.price} />
                            <Period duration='3 Months' price={plan?.price * 3} />
                            <Period duration='12 Months' price={plan?.price * 12} />
                        </div>
                    </div>

                </section>

                <section className='flex flex-col justify-center  items-center w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
                    <div className='rounded-xl flex flex-col p-6 sm:py-16 sm:pl-16 bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] text-neutral-700 w-[90%] lg:w-[75%]'>
                        <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
                            <h2 className='md:pb-10 md:pl-6 text-neutral-600'>
                                2. Select your preferred tools
                            </h2>
                        </div>
                        <div className='text-center '>
                            <CheckboxGroup
                                options={products}
                                limit={plan?.amount!}
                                selectedOptions={purchaseProducts}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                </section>


                <section className='flex flex-col justify-center  items-center w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>
                    <div className='flex flex-col justify-center items-center xl:items-start text-center xl:text-start bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-10 py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%] '>
                        <div className='flex-col xl:flex-row text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full flex items-center justify-between gap-6'>
                            <h2 className='md:pb-8 md:pl-6 pt-6 text-neutral-600'>
                                3. Proceed to secure payment
                            </h2>
                        </div>
                        <div className='flex flex-col md:pl-[3.2rem]'>
                            <div className='gap-6 hidden xl:flex items-center'>
                                <span>
                                    <GoShieldCheck className='text-primary-color scale-[1.8]' />
                                </span>
                                <p className='w-[150px] text-neutral-700'>
                                    30-day money-back guarantee
                                </p>
                                <div className='pl-7 flex items-center gap-6'>
                                    <span>
                                        <RxLockClosed className='text-primary-color scale-[1.8]' />
                                    </span>
                                    <p className='w-[150px] text-neutral-700'>
                                        Encrypted and secure payments
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h4 className='pt-6 text-neutral-700'>
                                    By completing the purchase, you agree to our Terms of Service
                                    and confirm that you have read our Privacy Policy. You can
                                    cancel recurring payments anytime.
                                </h4>
                            </div>
                            <span className='font-semibold pb-8 pt-10 text-neutral-700'>
                                Need assistance? Check out our FAQs.
                            </span>
                        </div>
                        <CreditCard state={state} handleInputFocus={handleInputFocus} handleInputChange={handleInputChange} />

                    </div>
                    <div className='xl:pl-[3.2rem]'>
                        <button type="submit" className=' text-lg bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
                            Buy now
                        </button>
                    </div>
                </section>

            </form>
        </FormProvider>

    )
}

export default PurchaseForm