import React from 'react'

export const CustomForm = () => {
  return (
    <div className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] flex justify-center items-center '>
      <div className='flex flex-col w-[90%] rounded-lg md:w-[75%] pb-10 gap-5 justify-center items-center'>
        <div className='w-[100%] text-center mb-4 pb-4 content-between text-neutral-700'>
          <h1 className='text-4xl lg:text-5xl py-10 font-semibold '>
            Do you want to sell your product?
          </h1>
          <p className='text-sm'>
            Please fill the form to recieve a qoute for your project. Feel free
            to add as much detailed as needed
          </p>
        </div>

        <div className='flex flex-col w-[100%] border-1 rounded-3xl bg-white p-2 text-neutral-600 lg:w-[75%] justify-center items-center'>
          <form className='flex flex-col pt-8 pl-10 w-[100%]'>
            <h2 className='text-3xl pb-8 font-semibold'>Company details</h2>
            <section className=''>
              <fieldset className='flex flex-col '>
                <h3 className='text-xl py-4 font-semibold'>Company Type*</h3>
                <label htmlFor='type' className='flex gap-4 items-center'>
                  <input
                    value='independent-consultant'
                    name='type'
                    type='radio'
                    className='text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  />
                  Independent Consultant
                </label>
                <label htmlFor='type' className='flex gap-4 items-center'>
                  <input
                    name='type'
                    value='incorporated-company'
                    type='radio'
                    className='text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
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
                    htmlFor='sector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%] items-center '
                  >
                    <input
                      value='developmnet-it'
                      name='sector'
                      type='radio'
                      className='text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                    Development & IT
                  </label>
                  <label
                    htmlFor='sector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%] items-center '
                  >
                    <input
                      value='media'
                      name='sector'
                      type='radio'
                      className='text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                    Media
                  </label>
                  <label
                    htmlFor='sector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%] items-center '
                  >
                    <input
                      value='sales'
                      name='sector'
                      type='radio'
                      className='text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                    Sales
                  </label>
                  <label
                    htmlFor='sector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%] items-center '
                  >
                    <input
                      value='marketing'
                      name='sector'
                      type='radio'
                      className='text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                    Marketing
                  </label>
                  <label
                    htmlFor='sector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%] items-center '
                  >
                    <input
                      value='operations'
                      name='sector'
                      type='radio'
                      className='text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                    Operations
                  </label>
                  <label
                    htmlFor='sector'
                    className='flex gap-4 w-[40%] md:w-[150px] lg:w-[200px] xl:w-[30%] items-center '
                  >
                    <input
                      value='UX/UI'
                      name='sector'
                      type='radio'
                      className='text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                    UX/UI
                  </label>
                </div>
              </fieldset>

              <fieldset className='flex flex-col gap-5'>
                <label
                  htmlFor='company-name'
                  className='text-xl pt-10 pb-4 font-semibold items-center '
                >
                  Company Name*
                </label>
                <input
                  type='text'
                  placeholder='Uplix'
                  name='company-name'
                  className='py-3 px-3 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />

                <label
                  htmlFor='company-address'
                  className='text-xl py-4 font-semibold items-center '
                >
                  Company Registered Address*
                </label>
                <input
                  type='text'
                  placeholder='Avenue 123, Argentina'
                  name='company-address'
                  className='py-3 px-3  border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />

                <label
                  htmlFor='company-name'
                  className='text-xl py-4 font-semibold items-center '
                >
                  Company Website*
                </label>
                <input
                  type='text'
                  placeholder='https://upler.com'
                  name='https://company-website.com'
                  className='py-3 px-3 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />

                <label
                  htmlFor='company-email'
                  className='text-xl py-4 font-semibold items-center '
                >
                  Company Email*
                </label>
                <input
                  type='text'
                  placeholder='company@gmail.com'
                  name='company-email'
                  className='py-3 px-3 mb-4 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />
              </fieldset>
            </section>
            <section className='flex flex-col'>
              <h2 className='text-xl py-4 font-semibold'>Attach File</h2>
              <p className='pb-4'>Share whit us your Company Profile</p>
              <button className='bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
                Browse Files
              </button>
            </section>

            <section>
              <fieldset className='flex flex-col gap-5'>
                <h2 className='text-3xl pt-14 pb-4 font-semibold'>
                  Personal Information
                </h2>
                <label htmlFor='name' className='text-xl py-4 font-semibold'>
                  Name{' '}
                </label>
                <input
                  type='text'
                  placeholder='Jesus'
                  name='name'
                  className='py-3 px-3 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />

                <label
                  htmlFor='email'
                  className='text-xl py-4 font-semibold items-center '
                >
                  Email
                </label>
                <input
                  type='text'
                  placeholder='jgonzales@gmail.com'
                  name='email'
                  className='py-3 px-3 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />

                <label
                  htmlFor='position'
                  className='text-xl py-4 font-semibold items-center '
                >
                  What is your position within the Company
                </label>
                <input
                  type='text'
                  placeholder='CEO'
                  name='company-position'
                  className='py-3 px-3 border-2 mb-10 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />
              </fieldset>
            </section>
          </form>
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color '>
            {' '}
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
