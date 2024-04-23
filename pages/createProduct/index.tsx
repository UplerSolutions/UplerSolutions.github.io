import { Layout } from '@/components/layout/Layout'
import { ICategory } from '@/interface/category'
import { getCategories } from '@/service/categories/categories-service'
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
	ChangeEvent,
	FormEvent,
	useState
} from 'react'

interface Props {
	categories: ICategory[]
}

const CreateProduct: NextPage<Props> = ({ categories }) => {
	const [erros, setErros] = useState<string[]>([])
	const [software, setProduct] = useState({
		productName: '',
		lowDescription: '',
		longDescription: '',
		price: 0,
		yearRelease: 0,
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

	const handleOnChange = (
		e: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value, type } = e.currentTarget
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value
		}))
	}

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				// Update the state with the data URL of the selected image
				setProduct((prevProduct) => ({
					...prevProduct,
					imageUrl: reader.result as string // assuming reader.result is a string
				}))
			}
			reader.readAsDataURL(file)
		}
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
	}

	return (
		<Layout title="Upler - New Product">
			<div className=" flex items-center justify-center bg-[#F8F8F8]">
				<form
					onSubmit={handleOnSubmit}
					className=" mt-48 flex   flex-col items-center gap-4    text-neutral-600"
				>
					<div className="flex w-[90%] flex-col gap-10 rounded-lg border  bg-white px-11 py-6 ">
						<div className="flex w-full flex-col gap-4">
							<h1 className="text-5xl font-semibold text-neutral-700">
								Carga Tu Producto
							</h1>
							<Link
								href={'#product'}
								className="text-2xl hover:text-fuchsia-800"
							>
								Previsualiza tu Producto
							</Link>
						</div>
						<div className="flex w-full flex-col gap-10 md:flex-row ">
							<div className="flex w-full flex-col gap-4">
								<div className="flex flex-col gap-2">
									<label
										className="text-xl font-semibold"
										htmlFor="productName"
									>
										{' '}
										Nombre de Producto
									</label>
									<input
										required
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
										htmlFor="seller"
									>
										{' '}
										Vendedor
									</label>
									<input
										required
										value={software?.seller}
										onChange={handleOnChange}
										placeholder="Jacob James"
										type="text"
										name="seller"
										className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
									/>
								</div>
								{/* <div className="flex flex-col gap-2">
									<label
										className="text-xl font-semibold"
										htmlFor="yearRelease"
									>
										{' '}
										Año de lanzamiento
									</label>
									<input
										required
										value={software?.yearRelease}
										onChange={handleOnChange}
										placeholder=""
										type="text"
										name="yearRelease"
										className=" rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
									/>
								</div> */}
								<div className="flex flex-col gap-2">
									<label
										className="text-xl font-semibold"
										htmlFor="price"
									>
										{' '}
										Precio
									</label>
									<input
										required
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
										required
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
											<option key={cat.id} value={cat.id}>
												{cat.categoryName}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="flex w-full flex-col gap-4">
								<div className="flex flex-col gap-2">
									<label
										className="text-xl font-semibold"
										htmlFor="lowDescription"
									>
										{' '}
										Descripción Corta
									</label>
									<textarea
										value={software?.lowDescription}
										onChange={(e) =>
											setProduct((prevProduct) => ({
												...prevProduct,
												lowDescription: e.target.value
											}))
										}
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
									<textarea
										value={software?.longDescription}
										onChange={(e) =>
											setProduct((prevProduct) => ({
												...prevProduct,
												longDescription: e.target.value
											}))
										}
										placeholder="Kepla"
										name="longDescription"
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
										required
										type="file"
										accept="image/*"
										onChange={handleFileChange}
										// You can add other attributes like name if needed
									/>
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
					<div
						id="product"
						className="flex w-screen flex-col justify-center gap-4 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] px-14  py-4 pt-36 md:flex-row  "
					>
						<Image
							src={
								software?.imageUrl === ''
									? ''
									: software.imageUrl
							}
							alt="aaa"
							width={500}
							height={500}
							className=" rounded-xl border border-black"
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

					<div className="flex w-screen flex-col bg-neutral-50 px-14 lg:pl-20">
						<div className="flex gap-4 p-2">
							<h4 className="uppercase text-fuchsia-800 ">
								Overview
							</h4>{' '}
							<h4 className="uppercase  text-neutral-600 hover:text-fuchsia-800 ">
								Características
							</h4>{' '}
						</div>

						<hr className="w-full" />
						<div className="flex ">
							<div className="mt-10 flex flex-col  items-start gap-10 pt-3">
								<h3 className="  text-3xl text-neutral-700">
									Overview
								</h3>
								<div className="mb-12 flex flex-col gap-10 md:flex-row   ">
									<Image
										src={
											software?.imageUrl === ''
												? ''
												: software.imageUrl
										}
										alt="aaa"
										width={500}
										height={500}
										className=" rounded-xl border border-black"
									/>
									<p className="md:w-[50%]  text-neutral-700 ">
										{software?.longDescription === ''
											? 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aperiam quo facere voluptatem, inventore itaque corrupti autem, quidem saepe nobis modi? Maiores possimus similique quidem vel vitae! Animi, neque dignissimos!' +
											  ' ' +
											  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aperiam quo facere voluptatem, inventore itaque corrupti autem, quidem saepe nobis modi? Maiores possimus similique quidem vel vitae! Animi, neque dignissimos!'
											: software.longDescription}
									</p>
								</div>
							</div>
						</div>
					</div>

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
