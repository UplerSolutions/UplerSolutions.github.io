import React, { FC } from 'react'
import { IPlan } from '@/interface/plan'
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Period from '../card/Period';

interface Props {
    plan: IPlan
}

interface Purchase {
    status: string
    paymentMethod: string
    customer: string
}

interface PurchaseProduct {
    quantityProduct: number
    totalPrice: number;
    purchase: string
    product: string;
}

interface Purchase2 {
    user: string // id
    products: [{ id: string, price: number }] // productos id
    totalPrice: number

}



interface Props {
    plan: IPlan
}

const PurchaseForm: FC<Props> = ({ plan }) => {

    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Period duration='1 Month' price={plan?.price} />
                <Period duration='3 Months' price={plan?.price * 3} />
                <Period duration='12 Months' price={plan?.price * 12} />
            </form>
        </FormProvider>
    )
}

export default PurchaseForm