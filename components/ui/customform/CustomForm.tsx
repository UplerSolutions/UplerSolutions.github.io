import React from "react"

export const CustomForm = () => {
    return (
        <div className="bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]">
            <div className=" rounded-lg text-black m-40 w-100% ">
                <div className="w-100% text-center mb-4 pb-4 content-between ">
                    <h1 className="text-5xl">Do you want to sell your product?</h1>
                    <p className="text-sm" >Please fill the form to recieve a qoute for your project. Feel
                        free to add as much detailed as needed</p>
                </div>

                <div className="flex flex-row border-2 border-black bg-white text-start m-10">
                    <form>
                        <h2 className="text-2xl" >Company details</h2>
                        <section className="border-2 border-slate-200">
                            <fieldset>
                                <h3>Company Type</h3>
                                <label htmlFor="type">
                                    <input value="independent-consultant" name="type" type="radio" />
                                    Independent Consultant
                                </label>
                                <label htmlFor="type">
                                    <input name="type" value="incorporated-company" type="radio" />
                                    Incorporated Company
                                </label>
                            </fieldset>
                            <fieldset>
                                <h3>Company Sector</h3>
                                <label htmlFor="sector">
                                    <input value="developmnet-it" name="sector" type="radio" />
                                    Developmnet & IT
                                </label>
                                <label htmlFor="sector">
                                    <input value="media" name="sector" type="radio" />
                                    Media
                                </label>
                                <label htmlFor="sector">
                                    <input value="sales" name="sector" type="radio" />
                                    Sales
                                </label>
                                <label htmlFor="sector">
                                    <input value="marketing" name="sector" type="radio" />
                                    Marketing
                                </label>
                                <label htmlFor="sector">
                                    <input value="operations" name="sector" type="radio" />
                                    Operations
                                </label>
                                <label htmlFor="sector">
                                    <input value="UX/UI" name="sector" type="radio" />
                                    UX/UI
                                </label>
                            </fieldset>

                            <fieldset>
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" placeholder="Uplix" name="company-name" />

                                <label htmlFor="company-address">Company Registered Address</label>
                                <input type="text" placeholder="Avenue 123, Argentina" name="company-address" />

                                <label htmlFor="company-email">Company Email</label>
                                <input type="text" placeholder="company@gmail.com" name="company-email" />

                                <label htmlFor="company-file" >Attach File</label>
                                <input type="file" name="company-file" id="" />
                            </fieldset>
                        </section>

                        <section>
                            <fieldset>
                                <h2 className="text-2xl">Personal Information</h2>
                                <label htmlFor="name">Name </label>
                                <input type="text" placeholder="Jesus" name="name" />

                                <label htmlFor="email">Email</label>
                                <input type="text" placeholder="jgonzales@gmail.com" name="email" />

                                <label htmlFor="position">What is your position whithin the Company?</label>
                                <input type="text" placeholder="CEO" name="company-position" />
                            </fieldset>
                        </section>
                        <button className="bg-slate-400 rounded-lg"> Submit</button>
                    </form>

                </div>
            </div>
        </div>

    )
}