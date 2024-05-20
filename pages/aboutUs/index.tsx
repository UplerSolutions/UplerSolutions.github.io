import { Layout } from '@/components/layout/Layout'
import Link from 'next/link'
import type { NextPage } from 'next'
import { Roadmap } from '@/components/ui/roadmap/Roadmap'
import { Team } from '@/components/ui/team/Team'
import Image from 'next/image'
import { IoDiamondOutline } from 'react-icons/io5'
import { PiBinoculars, PiRocketLight } from 'react-icons/pi'

const Aboutus: NextPage = () => {
	return (
		<Layout title={'Upler - About Us'}>
			<div className="xl:pb-18 flex w-full flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] pt-24 lg:flex-row lg:items-start lg:pt-48 2xl:pb-20">
				<div className="relative flex w-[80%] flex-col  place-items-center items-center pb-7 text-neutral-700 lg:ml-[7%] lg:w-[40%]  lg:place-items-start  lg:items-start">
					<div className="flex text-center text-[32px]  font-bold md:text-3xl lg:text-left xl:text-5xl 2xl:text-6xl">
						<p className="text-[35px] md:text-4xl xl:text-5xl 2xl:text-6xl">
							<span className="">
								{' '}
								Donde se encuentra el software de vanguardia{' '}
							</span>
							<span className=" text-primary-color ">
								ahorros inteligentes
							</span>
						</p>
					</div>
					<p className="pb-10 pt-8 text-center font-semibold lg:w-[90%] lg:text-left">
						Tu puerta de entrada a una Gestión de Licencias sin
						problemas y Ofertas Inigualables
					</p>
					<Link
						href="/register"
						scroll={false}
						className=" group relative  rounded-xl border-2 border-primary-color bg-primary-color px-5 py-2 text-lg font-semibold  text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100 "
					>
						Registrate Ahora Gratis
					</Link>
				</div>
				<div className="relative hidden w-full flex-col items-center justify-center overflow-hidden pb-10 lg:flex lg:w-[60%] lg:pr-[7%]">
					<Image
						src={'./globo1.png'}
						alt={''}
						width={400}
						height={500}
					/>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-8 bg-purple-50  py-20">
				<div className="flex text-center text-[32px]  font-bold md:text-left md:text-3xl xl:text-5xl ">
					<p className="text-[35px] md:text-3xl xl:text-5xl">
						<span className="text-neutral-600">
							Explora Nuestros
						</span>
						<span className=" text-primary-color "> Servicios</span>
					</p>
				</div>
				<hr className="left-0 right-0 m-auto mb-20 w-[100px] border-2 border-primary-color bg-primary-color" />
				<div className=" grid w-[80%] grid-cols-1 gap-10 text-center md:grid md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center justify-start gap-8">
						<div className="rounded-xl bg-purple-100 p-12">
							<Image
								src={'./shop.png'}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col  items-center md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Ofertas de un Mercado de Software de Confianza
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Explora un vasto mercado que presenta una
								variedad de softwares rigurosamente evaluado de
								socios de confianza. Nuestra plataforma
								garantiza estándares de calidad, ofreciendo a
								los usuarios una variedad de soluciones.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-start gap-8">
						<div className="rounded-xl bg-purple-100 p-8 xl:p-12">
							<Image
								src={'./bundles.png'}
								width={115}
								height={115}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Paquetes de Software Personalizados
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Descubre paquetes eficientes en costos adaptados
								a tus necesidades, que ofrecen una gama completa
								de servicios de software para ti.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-start gap-8">
						<div className="rounded-xl bg-purple-100 p-12">
							<Image
								src={'./notebook.png'}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Gestión de Licencias Simplificada
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Upler simplifica y agiliza la gestión de
								licencias. Disfruta de una plataforma unificada
								para realizar un seguimiento, renovar y
								gestionar todas las suscripciones de manera
								eficiente.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-start gap-8">
						<div className="rounded-xl bg-purple-100 p-12">
							<Image
								src={'./uplerinsign.png'}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Beneficios Exclusivos a través de Insignia
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Accede a beneficios exclusivos con socios a
								través de nuestro sistema Upler Insignia.
								Disfruta de ventajas y privilegios diseñados
								para mejorar tu experiencia digital.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-8 bg-purple-100 py-20 md:gap-5 ">
				<div className="flex w-[90%] justify-center text-center text-[32px] font-bold  md:text-left md:text-3xl lg:w-full xl:text-5xl ">
					<p className="text-center text-[35px] md:text-3xl xl:text-5xl">
						<span className="text-neutral-600 ">
							Conoce Nuestros{' '}
						</span>

						<span className="text-primary-color ">Principios</span>
					</p>
				</div>
				<hr className="left-0 right-0 m-auto w-[100px] border-2 border-primary-color bg-primary-color " />
				<div className=" grid w-[90%] grid-cols-1 gap-6 text-center md:grid md:grid-cols-3 xl:w-[70%]">
					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div className="scale-[4.5] pb-4 text-primary-color">
							<PiRocketLight />
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Misión
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Simplificar el acceso y la propiedad del
								software, empoderando a individuos y empresas
								con soluciones asequibles y eficientes.
							</p>
						</div>
					</div>

					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div className="scale-[4.5] pb-4 text-primary-color">
							<PiBinoculars />
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Visión
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Ser la plataforma líder en la gestión y
								distribución de herramientas de software,
								revolucionando cómo se accede y utiliza a nivel
								mundial.
							</p>
						</div>
					</div>
					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div className="scale-[4.5] pb-4 text-primary-color">
							<IoDiamondOutline />
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Valores
							</h4>
							<p className="w-[90%] text-neutral-600">
								Transparencia, compromiso con la calidad,
								colaboración, asociaciones estratégicas,
								atención al cliente y empoderamiento,
								asequibilidad y eficiencia.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Team />
			<Roadmap />
		</Layout>
	)
}

export default Aboutus
