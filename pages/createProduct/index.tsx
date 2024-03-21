import { Layout } from '@/components/layout/Layout'
import { ICategory } from '@/interface/category'
import { ISoftware } from '@/interface/software'
import { getCategories } from '@/service/categories/categories-service'
import { Tab, Tabs } from '@mui/material'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	SyntheticEvent,
	useState
} from 'react'

interface Software {
	productName: string
	lowDescription: string
	longDescription: string
	price: number
	updated_at: string
	seller: string
	directLink: string
	imageUrl: string
	rating: number
	category: {
		categoryName: string
	}
}

interface Props {
	categories: ICategory[]
}

const CreateProduct: NextPage<Props> = ({ categories }) => {
	const [software, setProduct] = useState({
		productName: '',
		lowDescription: '',
		longDescription: '',
		price: 0,
		seller: '',
		directLink: '',
		imageUrl: '',
		category: '',
		rating: 0,
		founderName: 'Will Brown',
		founderImage:
			'https://appsumo2-cdn.appsumo.com/media/users/avatars/will_picture.jpeg',
		founderDescription: 'CEO',
		linkdin: 'https://www.magicform.ai/'
	})

	const [value, setValue] = useState('overview')

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	const handleOnChange = (
		e: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = e.currentTarget
		setProduct((prevProduct) => ({ ...prevProduct, [name]: value }))
	}

	const handleOnSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const post = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/createProduct`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(software)
			}
		)
		const res = await post.json()
		console.log(res)
	}

	return (
		<Layout title="Upler - New Product">
			<div className=" flex items-center justify-center bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]">
				<form
					onSubmit={handleOnSubmit}
					className=" mt-36 flex w-[90%] flex-col items-center gap-4    text-neutral-600"
				>
					<div className="flex w-full flex-col items-center justify-between gap-10 md:h-[80vh] ">
						<div className="flex  w-full  flex-col items-center gap-4">
							<h1 className="text-5xl font-semibold text-neutral-700">
								Carga Tu Producto
							</h1>
							<div className=" mt-4  flex w-[90%] flex-col items-start justify-center gap-20 rounded-lg border bg-white p-4 md:w-10/12  md:flex-row ">
								<div className="flex w-[80%]  flex-col gap-4 md:w-[40%]  ">
									<div className="flex flex-col gap-2">
										<label
											className="text-xl font-semibold"
											htmlFor="productName"
										>
											{' '}
											Nombre de Producto
										</label>
										<input
											value={software?.productName}
											onChange={handleOnChange}
											placeholder="Kepla"
											type="text"
											name="productName"
											className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label
											className="text-xl font-semibold"
											htmlFor="longDescription"
										>
											{' '}
											Descripción Larga
										</label>
										<input
											value={software?.longDescription}
											onChange={handleOnChange}
											placeholder="Kepla"
											type="textArea"
											name="longDescription"
											className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label
											className="text-xl font-semibold"
											htmlFor="seller"
										>
											{' '}
											Vendedor
										</label>
										<input
											value={software?.seller}
											onChange={handleOnChange}
											placeholder="Jacob James"
											type="text"
											name="seller"
											className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label
											className="text-xl font-semibold"
											htmlFor="imageUrl"
										>
											{' '}
											Seleccione una Foto
										</label>
										<input
											onChange={handleOnChange}
											type="file"
											name="imageUrl"
											value={software?.imageUrl}
										/>
									</div>
								</div>
								<div className="flex w-[80%]  flex-col gap-4 md:w-[40%] ">
									<div className="flex flex-col gap-2">
										<label
											className="text-xl font-semibold"
											htmlFor="lowDescription"
										>
											{' '}
											Descripción Corta
										</label>
										<input
											value={software?.lowDescription}
											onChange={handleOnChange}
											placeholder="Kepla is a software..."
											type="text"
											name="lowDescription"
											className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label
											className="text-xl font-semibold"
											htmlFor="price"
										>
											{' '}
											Precio
										</label>
										<input
											value={software?.price}
											onChange={handleOnChange}
											placeholder="100"
											type="number"
											name="price"
											className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label
											className="text-xl font-semibold"
											htmlFor="directLink"
										>
											{' '}
											URL web
										</label>
										<input
											value={software?.directLink}
											onChange={handleOnChange}
											placeholder="Kepla"
											type="text"
											name="directLink"
											className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label
											className="text-xl font-semibold"
											htmlFor="directLink"
										>
											{' '}
											Categoria
										</label>
										<select
											value={software.category}
											onChange={handleOnChange}
											placeholder="Eliga una categoria"
											name="category"
											className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										>
											{categories?.map((cat) => (
												<option
													key={cat.id}
													value={cat.id}
												>
													{cat.categoryName}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
						</div>

						<Link
							href={'#product'}
							className="text-2xl hover:text-fuchsia-800"
						>
							Previsualiza tu Producto
						</Link>
					</div>
					<div
						id="product"
						className="flex w-screen flex-col gap-4 px-14  py-4 pt-36 md:flex-row  "
					>
						<Image
							src={
								software?.imageUrl === ''
									? ''
									: software.imageUrl
							}
							alt="aaa"
							width={300}
							height={300}
							className="w-full rounded-xl border border-black"
						/>
						<div className=" flex flex-col  pb-20 md:w-[95%] lg:w-[40%]">
							<h2 className="py-3 text-xl font-semibold text-neutral-600 md:text-2xl lg:text-3xl">
								{software?.productName === ''
									? 'Name'
									: software.productName}
							</h2>
							<Link
								href={software?.directLink}
								target="_blank"
								className=" w-fit rounded-xl bg-primary-color px-16 py-3 text-center text-lg font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
							>
								Get Link
							</Link>
							<div className="">
								<h1 className="py-3 text-xl font-semibold text-neutral-600 md:text-2xl lg:text-3xl">
									Description
								</h1>
								<p className=" text-neutral-500">
									{software?.lowDescription === ''
										? 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aperiam quo facere voluptatem, inventore itaque corrupti autem, quidem saepe nobis modi? Maiores possimus similique quidem vel vitae! Animi, neque dignissimos!'
										: software.lowDescription}
								</p>
							</div>
						</div>
					</div>

					{/* <div className="flex w-screen flex-col bg-neutral-50 px-14 lg:pl-20">
						<div className="flex gap-4 p-2">
							<h4 className="uppercase text-fuchsia-800 ">
								Overview
							</h4>{' '}
							{/* <h4 className="uppercase  text-neutral-600 hover:text-fuchsia-800 ">
								Características
							</h4>{' '}
							<h4 className="uppercase text-neutral-600 hover:text-fuchsia-800 ">
								Preguntas
							</h4>{' '}
							<h4 className="uppercase text-neutral-600 hover:text-fuchsia-800 ">
								Reseñas
							</h4> 
						</div>

						<hr className="w-full" />
						<div className="flex">
							<div className="mt-10 flex flex-col items-start gap-10 pt-3">
								<h3 className="  text-3xl text-neutral-700">
									Overview
								</h3>
								<div className="mb-12 flex flex-col gap-10  ">
									<p className=" w-[80%] text-neutral-700 md:w-full">
										{software?.longDescription === ''
											? 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aperiam quo facere voluptatem, inventore itaque corrupti autem, quidem saepe nobis modi? Maiores possimus similique quidem vel vitae! Animi, neque dignissimos!'
											+ " " +'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aperiam quo facere voluptatem, inventore itaque corrupti autem, quidem saepe nobis modi? Maiores possimus similique quidem vel vitae! Animi, neque dignissimos!' 
											: software.longDescription}
									</p>
									<Image
										src={`/${software?.imageUrl}`}
										alt=""
										width={100}
										height={100}
										className="w-full  rounded-2xl  "
									/>
								</div>
							</div>
						</div>
					</div>  */}

					<button
						type="submit"
						className=" my-4 scroll-smooth rounded-xl bg-primary-color p-3 text-center font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100 "
					>
						Cargar Producto
					</button>
				</form>
			</div>
		</Layout>
	)
}

export default CreateProduct

export const getServerSideProps: GetServerSideProps = async () => {
	const categories = await getCategories()
	return {
		props: { categories }
	}
}
