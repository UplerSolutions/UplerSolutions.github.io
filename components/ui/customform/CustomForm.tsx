import React from 'react'
import { useForm } from "react-hook-form";


interface FormData {
  companyType: string;
  companySector: string
  companyName: string;
  companyWebsite: string
  companyEmail: string;
  file: any;
  fullName: string;
  email: string;
  position: string;
}

export const CustomForm = () => {

  const {  register, handleSubmit, formState: { errors }, control, } = useForm<FormData>();

  const onSubmit = (data: any) => {
    const postData = {
      ...data,
      file: data.file[0].name
    }
    console.log(postData)
  }

  

  return (
    <div className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] flex justify-center items-center'>
      <div className='flex flex-col w-[90%] rounded-lg md:w-[75%] pb-10 gap-5 justify-center items-center'>
        <div className='w-[100%] text-center mb-4 pb-4 content-between text-neutral-700'>
          <h1 className='text-4xl lg:text-5xl py-10 font-semibold'>
            Do you want to sell your product?
          </h1>
          <p className='text-sm'>
            Please fill the form to recieve a qoute for your project. Feel free
            to add as much detailed as needed
          </p>
        </div>

        <div className='flex flex-col w-[100%] border-1 rounded-3xl bg-white p-2 text-neutral-600 lg:w-[75%] justify-center items-center'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pt-8 pl-10 w-[100%]'>
            <h2 className='text-3xl pb-8 font-semibold'>Company details</h2>
            <section className=''>
              <fieldset className='flex flex-col '>
                <h3 className='text-xl py-4 font-semibold'>Company Type*</h3>
                <label htmlFor='companyType' className='flex gap-4'>
                  <input
                    {...register("companyType",{ required: "This input is required" })}
                    value='independent-consultant'
                    name='companyType'
                    type='radio'
                  />
                  Independent Consultant
                </label>
                <label htmlFor='companyType' className='flex gap-4'>
                  <input
                    {...register("companyType",{ required: "This input is required" })}
                    name='companyType'
                    value='incorporated-company'
                    type='radio'
                  />
                  Incorporated Company
                </label>
              </fieldset>
              <fieldset className='flex flex-col'>
                <h3 className='text-xl pt-8 pb-4 font-semibold'>
                  Company Sector*
                </h3>
                <div className='flex flex-wrap justify-between gap-5 '>
                  <label
                    htmlFor='companySector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%]'
                  >
                    <input
                      {...register("companySector",{ required: "This input is required" })} value='developmnet-it' name='companySector' type='radio' />
                    Development & IT
                  </label>
                  <label
                    htmlFor='companySector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%]'
                  >
                    <input
                      {...register("companySector",{ required: "This input is required" })} value='media' name='companySector' type='radio' />
                    Media
                  </label>
                  <label
                    htmlFor='companySector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%]'
                  >
                    <input
                      {...register("companySector",{ required: "This input is required" })} value='sales' name='companySector' type='radio' />
                    Sales
                  </label>
                  <label
                    htmlFor='companySector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%]'
                  >
                    <input
                      {...register("companySector")} value='marketing' name='companySector' type='radio' />
                    Marketing
                  </label>
                  <label
                    htmlFor='companySector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%]'
                  >
                    <input
                      {...register("companySector")} value='operations' name='companySector' type='radio' />
                    Operations
                  </label>
                  <label
                    htmlFor='companySector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%]'
                  >
                    <input
                      {...register("companySector")} value='UX/UI' name='companySector' type='radio' />
                    UX/UI
                  </label>
                </div>
              </fieldset>

              <fieldset className='flex flex-col gap-5'>
                <label
                  htmlFor='companyName'
                  className='text-xl pt-10 pb-4 font-semibold'
                >
                  Company Name*
                </label>
                <input
                  {...register("companyName",{ required: "This input is required" })}
                  type='text'
                  placeholder='Uplix'
                  name='companyName'
                  className='py-3 px-3 border-2 rounded-2xl mr-10'
                />

                <label
                  htmlFor='companyAddress'
                  className='text-xl py-4 font-semibold'
                >
                  Company Registered Address*
                </label>
                <input
                  {...register("companyAddress",{ required: "This input is required" })}
                  type='text'
                  placeholder='Avenue 123, Argentina'
                  name='companyAddress'
                  className='py-3 px-3  border-2 rounded-2xl mr-10'
                />

                <label
                  htmlFor='companyWebsite'
                  className='text-xl py-4 font-semibold'
                >
                  Company Website*
                </label>
                <input
                  {...register("companyWebsite",{ required: "This input is required" })}
                  type='text'
                  placeholder='https://upler.com'
                  name='companyWebsite'
                  className='py-3 px-3 border-2 rounded-2xl mr-10'
                />

                <label
                  htmlFor='companyEmail'
                  className='text-xl py-4 font-semibold'
                >
                  Company Email*
                </label>
                <input
                  {...register("companyEmail",{ required: "This input is required" })}
                  type='text'
                  placeholder='company@gmail.com'
                  name='companyEmail'
                  className='py-3 px-3 mb-4 border-2 rounded-2xl mr-10'
                />
              </fieldset>
            </section>
            <section className='flex flex-col'>
              <h2 className='text-xl py-4 font-semibold'>Attach File</h2>
              <p className='pb-4'>Share whit us your Company Profile</p>
              <input 
                  type="file"
                  {...register("file",{ required: "This input is required" })}
                  />               
            </section>

            <section>
              <fieldset className='flex flex-col gap-5'>
                <h2 className='text-3xl pt-14 pb-4 font-semibold'>
                  Personal Information
                </h2>
                <label htmlFor='name' className='text-xl py-4 font-semibold'>
                  Full Name
                </label>
                <input
                  {...register("fullName",{ required: "This input is required" })}
                  type='text'
                  placeholder='Jesus Rodriguez'
                  name='fullName'
                  className='py-3 px-3 border-2 rounded-2xl mr-10'
                />

                <label htmlFor='email' className='text-xl py-4 font-semibold'>
                  Email
                </label>
                <input
                  {...register("email",{ required: "This input is required" })}
                  type='text'
                  placeholder='jgonzales@gmail.com'
                  name='email'
                  className='py-3 px-3 border-2 rounded-2xl mr-10'
                />

                <label
                  htmlFor='position'
                  className='text-xl py-4 font-semibold'
                >
                  What is your position within the Company
                </label>
                <input
                  {...register("position",{ required: "This input is required" })}
                  type='text'
                  placeholder='CEO'
                  name='position'
                  className='py-3 px-3 border-2 mb-10 rounded-2xl mr-10'
                />
              </fieldset>
            </section>
            <div className='flex justify-center items-center'>
          <button type="submit" className='bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color '>
            
            Submit
          </button>
        </div>
          </form>
        </div>

      </div>
    </div>
  )
}
