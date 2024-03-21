'use client'
import { Layout } from '@/components/layout/Layout'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'

interface FormData {
	email: string
	subject: string
	message: string
}

const Support: NextPage = () => {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const preguntasFrecuentes = [
		{
			id: 1,
			pregunta: '¿Qué es su servicio de suscripción de software?',
			respuesta:
				'Nuestro servicio de suscripción de software te proporciona acceso a una variedad de herramientas y recursos digitales para mejorar tu productividad y eficiencia en diferentes áreas.'
		},
		{
			id: 2,
			pregunta:
				'¿Cuáles son los beneficios de suscribirse a su software?',
			respuesta:
				'Al suscribirte a nuestro software, obtendrás acceso a actualizaciones regulares, soporte técnico dedicado, seguridad mejorada y nuevas características que se agregan constantemente.'
		},
		{
			id: 3,
			pregunta: '¿Cómo funciona el proceso de suscripción?',
			respuesta:
				'El proceso de suscripción es simple. Solo tienes que seleccionar el plan que mejor se adapte a tus necesidades, completar el pago y comenzar a disfrutar de todos los beneficios de nuestro software.'
		},
		{
			id: 4,
			pregunta: '¿Puedo cancelar mi suscripción en cualquier momento?',
			respuesta:
				'Sí, puedes cancelar tu suscripción en cualquier momento. No hay contratos a largo plazo ni penalizaciones por cancelación anticipada.'
		},
		{
			id: 5,
			pregunta: '¿Qué métodos de pago aceptan?',
			respuesta:
				'Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito/débito y PayPal.'
		},
		{
			id: 6,
			pregunta:
				'¿Ofrecen descuentos para estudiantes o instituciones educativas?',
			respuesta:
				'Sí, ofrecemos descuentos especiales para estudiantes y organizaciones educativas. Ponte en contacto con nuestro equipo de ventas para obtener más información.'
		},
		{
			id: 7,
			pregunta:
				'¿Qué sucede si necesito ayuda durante la instalación o configuración?',
			respuesta:
				'Nuestro equipo de soporte técnico está disponible para ayudarte con cualquier pregunta o problema que puedas tener durante la instalación o configuración. Puedes contactarnos por correo electrónico, chat en vivo o teléfono.'
		},
		{
			id: 8,
			pregunta: '¿Ofrecen una versión de prueba gratuita?',
			respuesta:
				'Sí, ofrecemos una versión de prueba gratuita de nuestro software para que puedas probarlo antes de comprometerte con una suscripción completa.'
		},
		{
			id: 9,
			pregunta: '¿Cómo se gestionan las actualizaciones de software?',
			respuesta:
				'Las actualizaciones de software se gestionan de forma automática. Nuestro software verificará regularmente si hay nuevas actualizaciones disponibles y las instalará de manera transparente para ti.'
		},
		{
			id: 10,
			pregunta:
				'¿Qué medidas de seguridad tienen implementadas para proteger mis datos?',
			respuesta:
				'Implementamos medidas de seguridad robustas para proteger tus datos, incluyendo cifrado de extremo a extremo, autenticación de dos factores y auditorías de seguridad regulares.'
		},
		{
			id: 11,
			pregunta:
				'¿Puedo acceder a mi software desde múltiples dispositivos?',
			respuesta:
				'Sí, puedes acceder a tu software desde múltiples dispositivos siempre y cuando tengas una conexión a Internet activa.'
		},
		{
			id: 12,
			pregunta: '¿Qué pasa si cambio de opinión después de suscribirme?',
			respuesta:
				'Si cambias de opinión después de suscribirte, tienes un período de garantía de devolución del dinero durante el cual puedes cancelar tu suscripción y recibir un reembolso completo.'
		},
		{
			id: 13,
			pregunta: '¿Cómo puedo actualizar mi plan de suscripción?',
			respuesta:
				'Puedes actualizar tu plan de suscripción en cualquier momento desde tu cuenta de usuario en nuestro sitio web.'
		},
		{
			id: 14,
			pregunta:
				'¿Ofrecen capacitación o recursos de aprendizaje para maximizar el uso del software?',
			respuesta:
				'Sí, ofrecemos una variedad de recursos de aprendizaje, incluyendo tutoriales en video, documentación detallada y seminarios web en vivo para ayudarte a aprovechar al máximo nuestro software.'
		},
		{
			id: 15,
			pregunta:
				'¿Qué sucede si tengo problemas técnicos con el software?',
			respuesta:
				'Si encuentras algún problema técnico con nuestro software, nuestro equipo de soporte técnico está disponible para ayudarte a resolverlo lo más rápido posible.'
		},
		{
			id: 16,
			pregunta:
				'¿Ofrecen integraciones con otros servicios o plataformas?',
			respuesta:
				'Sí, ofrecemos integraciones con una variedad de servicios y plataformas populares para que puedas conectar nuestro software con tus herramientas existentes y maximizar su funcionalidad.'
		},
		{
			id: 17,
			pregunta:
				'¿Puedo personalizar mi experiencia de usuario dentro del software?',
			respuesta:
				'Sí, nuestro software ofrece opciones de personalización para adaptarse a tus necesidades específicas y preferencias de trabajo.'
		},
		{
			id: 18,
			pregunta: '¿Qué pasa si olvido mi contraseña o nombre de usuario?',
			respuesta:
				'Si olvidas tu contraseña o nombre de usuario, puedes restablecerlos fácilmente utilizando la opción de recuperación de contraseña en nuestro sitio.'
		},
		{
			id: 19,
			pregunta: '¿Ofrecen soporte técnico en caso de necesitar ayuda?',
			respuesta:
				'Sí, nuestro equipo de soporte técnico está disponible para ayudarte con cualquier pregunta o problema que puedas tener durante el uso de nuestro software. Puedes contactarnos por correo electrónico, chat en vivo o teléfono.'
		},
		{
			id: 20,
			pregunta:
				'¿Cuál es su política de privacidad y seguridad de datos?',
			respuesta:
				'Nuestra política de privacidad y seguridad de datos se centra en proteger la información confidencial de nuestros usuarios. Implementamos medidas de seguridad avanzadas y seguimos las mejores prácticas de la industria para garantizar la seguridad y privacidad de tus datos.'
		}
	]

	const [formData, setFormData] = useState<FormData>({
		email: '',
		subject: '',
		message: ''
	})

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		// Aquí puedes manejar el envío del formulario
		console.log('Email:', formData.email)
		console.log('Asunto:', formData.subject)
		console.log('Mensaje:', formData.message)
		// Puedes enviar los datos a través de una solicitud HTTP aquí

		const res = await fetch('/api/send', {
			method: 'POST',
			body: JSON.stringify(formData)
		})
		const data = await res.json()
		console.log(data )
	}

	return (
		<Layout title="Upler - Faq´s">
			<div className="flex flex-col items-center justify-center bg-gradient-to-r   from-[#fde9fc] to-[#fffbe0] pt-20 text-neutral-600">
				<div className="flex flex-col items-center gap-8 pb-4 text-center">
					<h1 className="pt-12 text-[32px] font-bold text-neutral-700 md:text-5xl lg:text-6xl">
						Preguntas Frequentes
					</h1>
					<p className="w-[90%] text-xl text-neutral-700">
						Encontrá la respuesta a tu pregunta
					</p>
					<Link
						className="scroll-smooth rounded-xl bg-primary-color p-3 text-center font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100 "
						href="support/#contact"
					>
						Contactate con nosotros
					</Link>
				</div>

				<div className="my-10 w-[80%] rounded-xl bg-slate-50 px-10 py-8">
					<ol className="flex flex-col gap-8">
						{preguntasFrecuentes.map((preg) => (
							<li key={preg.id}>
								<h3 className="border-b-2 border-b-black pb-4 text-3xl font-semibold text-neutral-700">
									{preg.pregunta}
								</h3>
								<p className="pt-2 text-xl font-semibold">
									{preg.respuesta}
								</p>
							</li>
						))}
					</ol>
				</div>

				<div id="contact" className="mx-auto max-w-md">
					<form
						onSubmit={handleSubmit}
						className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
					>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="mb-2 block text-sm font-bold text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Ingresa tu email"
								value={formData.email}
								onChange={handleChange}
								className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="subject"
								className="mb-2 block text-sm font-bold text-gray-700"
							>
								Asunto
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="Ingresa el asunto"
								value={formData.subject}
								onChange={handleChange}
								className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
								required
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="mb-2 block text-sm font-bold text-gray-700"
							>
								Mensaje
							</label>
							<textarea
								id="message"
								name="message"
								placeholder="Escribe tu mensaje aquí"
								value={formData.message}
								onChange={handleChange}
								className="focus:shadow-outline h-32 w-full resize-none appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
								required
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								type="submit"
								className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
							>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	)
}

export default Support
