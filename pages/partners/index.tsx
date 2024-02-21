import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import Image from 'next/image'
import Link from 'next/link'
import ScrollButton from '@/components/ui/scrollbutton/ScrollButton'



const Partner: NextPage= () => {
	return (
		<Layout title="Upler - Partner">
			<div className="xl:pb-18 flex w-full flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] pt-24 lg:flex-row lg:items-start lg:pt-48 2xl:pb-20">
				<div className="relative flex w-[80%] flex-col  place-items-center items-center pb-7 text-neutral-700 lg:ml-[7%] lg:w-[40%]  lg:place-items-start  lg:items-start">
					<div className="flex text-center text-[32px]  font-bold md:text-left md:text-3xl xl:text-5xl 2xl:text-6xl">
						<p className="text-[35px] md:text-4xl xl:text-5xl 2xl:text-6xl">
							<span className=" text-primary-color ">
								Gana Dinero
							</span>

							<span className="">
								{' '}
								Vendiendo tus Productos Digitales
							</span>
						</p>
					</div>
					<p className="pb-10 pt-8 text-center font-semibold lg:w-[90%] lg:text-left">
						Tu portal hacia un mundo de oportunidades digitales, donde mostrar tus productos a posibles clientes no te costará ni un centavo.
					</p>
					<Link
						href="/apply"
						scroll={false}
						className="scroll-smooth"
					>
						<button className=" h-12 w-48 rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100">
							Empeza a Vender
						</button>
					</Link>
				</div>
				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-10 lg:w-[60%] lg:pr-[7%]">
					<Image
						src={'./partnerpurple.webp'}
						alt={''}
						width={500}
						height={500}
					/>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-8 bg-purple-50  py-20">
				<div className="flex text-center text-[32px]  font-bold md:text-left md:text-3xl xl:text-5xl ">
					<p className="text-[35px] md:text-3xl xl:text-5xl">
						<span className="text-neutral-600">
							Softwares que Podés
						</span>
						<span className=" text-primary-color "> Vender</span>
					</p>
				</div>
				<hr className="left-0 right-0 m-auto w-[100px] border-2 border-primary-color bg-primary-color " />
				<div className=" grid grid-cols-2 gap-4 text-center md:grid md:grid-cols-4">
					<div className="align-center grid  grid-rows-2  justify-items-center  md:items-start lg:items-end lg:p-8 xl:m-6">
						<div>
							<Image
								src={
									'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dae365a484e6ef407bc_software.svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col gap-3 md:gap-1">
							<h4 className=" pb-2 text-xl text-black md:text-[25px]">
								IA
							</h4>
						</div>
					</div>

					<div className="align-center grid  grid-rows-2  justify-items-center  md:items-start lg:items-end lg:p-8 xl:m-6">
						<div>
							<Image
								src={
									'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad0ddc742e412f9a02_pdfs.svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col gap-3 md:gap-1">
							<h4 className="pb-2 text-xl text-black md:text-[25px]">
								Marketing
							</h4>
						</div>
					</div>
					<div className="align-center grid  grid-rows-2  justify-items-center  md:items-start lg:items-end lg:p-8 xl:m-6">
						<div>
							<Image
								src={
									'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad0ddc742e412f9a02_pdfs.svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col gap-3 md:gap-1">
							<h4 className="pb-2 text-xl text-black md:text-[25px]">
								Trading
							</h4>
						</div>
					</div>
					<div className="align-center grid  grid-rows-2  justify-items-center  md:items-start lg:items-end lg:p-8 xl:m-6">
						<div>
							<Image
								src={
									'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad0ddc742e412f9a02_pdfs.svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col gap-3 md:gap-1">
							<h4 className="pb-2 text-xl text-black md:text-[25px]">
								Design
							</h4>
						</div>
					</div>
					<div className="align-center grid  grid-rows-2  justify-items-center  md:items-start lg:items-end lg:p-8 xl:m-6">
						<div>
							<Image
								src={
									'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad0ddc742e412f9a02_pdfs.svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col gap-3 md:gap-1">
							<h4 className="pb-2 text-xl text-black md:text-[25px]">
								Development
							</h4>
						</div>
					</div>
					<div className="align-center grid  grid-rows-2  justify-items-center  md:items-start lg:items-end lg:p-8 xl:m-6">
						<div>
							<Image
								src={
									'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad0ddc742e412f9a02_pdfs.svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col gap-3 md:gap-1">
							<h4 className="pb-2 text-xl text-black md:text-[25px]">
								Cloud
							</h4>
						</div>
					</div>
					<div className="align-center grid  grid-rows-2  justify-items-center  md:items-start lg:items-end lg:p-8 xl:m-6">
						<div>
							<Image
								src={
									'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad0ddc742e412f9a02_pdfs.svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col gap-3 md:gap-1">
							<h4 className="pb-2 text-xl text-black md:text-[25px]">
								Business
							</h4>
						</div>
					</div>

				</div>
				<Link href="/apply" scroll={false} className="scroll-smooth ">
					<button className=" h-12 w-48 rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100">
						Empezá a Vender
					</button>
				</Link>
				<p className="w-[90%] pb-12 text-center text-neutral-600 lg:w-1/3">
					¿No ves tu producto digital listado? No hay problema, ¡todos los productos son bienvenidos! Lista de forma gratuita y te informaremos si es adecuado.
				</p>
			</div>
			<hr className="absolute left-0 right-0 m-auto w-[80px] rotate-90 border-4 border-primary-color bg-primary-color" />
			<div className="flex flex-col items-center justify-center gap-8 bg-purple-100 py-20 md:gap-5 ">
				<div className="flex text-center text-[32px]  font-bold md:text-left md:text-3xl xl:text-5xl ">
					<p className="text-[35px] md:text-3xl xl:text-5xl">
						<span className="text-neutral-600 ">
							¿Comó funciona Upler?
						</span>
					</p>
				</div>

				<div className=" grid w-[90%] grid-cols-1 gap-6 text-center md:grid md:grid-cols-3 xl:w-[70%]">
					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div>
							<Image
								src={
									'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb23e38e9e15c15562fa7_Union%20(1).svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								1. Lista
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Comienza a listar tu producto digital en Upler de forma gratuita.
							</p>
						</div>
					</div>

					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div className="">
							<Image
								src={
									'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb22641b1672df9c9e648_Union%20(2).svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								2. Difunde la palabra
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Nosotros también difundiremos la palabra contigo, informando a nuestros más de 1 millón de emprendedores.
							</p>
						</div>
					</div>
					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div className="">
							<Image
								src={
									'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb24fe8d6fafb2abcbc12_Union.svg'
								}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								3. Ganá Dinero
							</h4>
							<p className="w-[90%] text-neutral-600">
								Gana más dinero con tus productos digitales.
							</p>
						</div>
					</div>
				</div>
			</div>
			<hr className="absolute left-0 right-0 m-auto w-[80px] rotate-90 border-4 border-primary-color bg-primary-color" />
			<div className="flex w-full  flex-col  items-center justify-center gap-8 bg-purple-50 pb-24 pt-24">
				<div className=" relative  flex flex-col place-items-center items-center   pb-7  text-neutral-700">
					<div className="flex w-[90%] text-center  text-[32px] font-bold md:w-full md:text-3xl xl:text-5xl">
						<p className="text-[35px] md:text-3xl xl:text-5xl">
							<span className=""> Nuestro negocio </span>
							<span className=" text-primary-color ">
								ayuda al tuyo
							</span>
						</p>
					</div>
					<p className="pb-10 pt-8 text-center font-semibold lg:w-[90%]">
						Tú creas cosas. Nosotros hacemos que las cosas sucedan.
					</p>
					<Link
						href="/apply"
						scroll={false}
						className="scroll-smooth"
					>
						<button className=" h-12 w-48 rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100">
							Empieza a Vender
						</button>
					</Link>
					<p className="  pt-2 text-xs text-neutral-500">
						Ganá Dinero. Sin tarifas por adelantado.
					</p>
				</div>
			</div>
			<ScrollButton />
		</Layout>
	)
}

export default Partner
