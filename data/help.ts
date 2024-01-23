export interface HelpContent {
	title: string
	description: string
}

export interface GeneralInfo {
	ContactUpler: HelpContent
	ChatActivation: HelpContent
	// Agrega más secciones aquí si es necesario...
}

export interface Partners {
	WhyPartnerWithUpler: HelpContent
	HowToPartnerWithUpler: HelpContent
	ProductSubmissionTips: HelpContent
	// Agrega más secciones aquí si es necesario...
}

export interface Licenses {
	WhatIsALicense: HelpContent
	WhereIsMyLicense: HelpContent
	HowToActivateLicense: HelpContent
	HowToLoginWithLicense: HelpContent
	UpgradeDowngradeLicense: HelpContent
	ExplanationOfOffersAndProducts: HelpContent
	TermsAndFeatures: HelpContent
	ProductSupport: HelpContent
	Gifts: HelpContent
	CatalogPriceCalculation: HelpContent
	// Agrega más secciones aquí si es necesario...
}

export interface HelpData {
	GeneralInfo: GeneralInfo
	Partners: Partners
	Licenses: Licenses
	// Agrega más secciones aquí si es necesario...
}
type GeneralInfoKeys = keyof HelpData['GeneralInfo']
type PartnersKeys = keyof HelpData['Partners']
type LicensesKeys = keyof HelpData['Licenses']

type HelpDataKeys = GeneralInfoKeys | PartnersKeys | LicensesKeys

type HelpCategory = {
	GeneralInfo: Record<GeneralInfoKeys, HelpContent>
	Partners: Record<PartnersKeys, HelpContent>
	Licenses: Record<LicensesKeys, HelpContent>
}

export const help: HelpCategory = {
	GeneralInfo: {
		ContactUpler: {
			title: 'Contactar con Upler',
			description:
				"Consulta nuestro Centro de Ayuda para obtener información sobre tu cuenta de AppSumo, cómo asociarte con nosotros para listar tu producto y nuestra membresía AppSumo Plus. Utiliza la lupa en la esquina inferior derecha de la pantalla para navegar por artículos relacionados y contactar a nuestro equipo de soporte si no encuentras la respuesta que buscas."
		},
		ChatActivation: {
			title: 'Activación de Chat',
			description:
				"¿Olvidaste la séptima variación de la misma contraseña que has estado usando durante años? ¿Quizás 'Contraseña123' no ha demostrado ser segura? ¿Es hora de cambiar la contraseña que compartiste con alguien con quien has tenido desacuerdos? Estamos aquí para ayudarte. Puedes restablecer la contraseña de tu cuenta AppSumo aquí y guardar este enlace para acceder fácilmente."
		}
	},
	Partners: {
		WhyPartnerWithUpler: {
			title: '¿Por qué asociarse con Upler?',
			description:
				'Upler está aquí para empoderar a todos los emprendedores. Asociarse con Upler te brinda la oportunidad de ganar dinero vendiendo tu software, obtener nuevos clientes, anunciarte a largo plazo en nuestra plataforma y recibir comentarios valiosos de nuestros usuarios para mejorar tu producto.'
		},
		HowToPartnerWithUpler: {
			title: 'Cómo asociarse con Upler',
			description:
				'¡Vender con Upler es tan fácil como 1-2-3! Conviértete en socio, envía tu producto y mantente atento a tu bandeja de entrada de correo electrónico para recibir actualizaciones de estado de nuestro equipo que ayudarán a que tu oferta esté lista para la venta y activa.'
		},
		ProductSubmissionTips: {
			title: 'Consejos para enviar un producto',
			description:
				'Aquí tienes algunas pautas y mejores prácticas para crear una excelente presentación que se alinee perfectamente con nuestra audiencia y aumente tus posibilidades de que tu producto sea aceptado para lanzamiento en nuestra comunidad.'
		}
	},
	Licenses: {
		WhatIsALicense: {
			title: '¿Qué es una licencia?',
			description:
				"Las licencias son nuestra alternativa recién lanzada a los códigos. ¡Hurra! Las licencias son muy fáciles de canjear y te permiten conectarte al sitio web de nuestro socio inmediatamente después de la activación (de nada). A diferencia de los códigos, las licencias no necesitan apilarse, lo que significa que puedes mejorar o reducir tu plan escalonado según tus preferencias."
		},
		WhereIsMyLicense: {
			title: '¿Dónde está mi licencia en mi cuenta?',
			description:
				'Todos los productos comprados en el mercado Upler se pueden encontrar en la página "Productos" de tu cuenta Upler. Puedes usar la barra de búsqueda debajo del encabezado "Productos" en la esquina superior izquierda de la página para encontrar rápidamente tu compra.'
		},
		HowToActivateLicense: {
			title: 'Cómo activar mi licencia',
			description:
				'Para activar tu licencia y acceder a tu compra, sigue estos pasos: Ve a la página "Productos" de tu cuenta AppSumo, usa el menú desplegable "Acciones" junto a tu producto para seleccionar "Activar", haz clic en el botón "Activar ahora" y sigue las instrucciones paso a paso para completar el registro y el proceso de activación en el sitio del socio.'
		},
		HowToLoginWithLicense: {
			title: 'Cómo iniciar sesión con mi licencia',
			description:
				'Una vez que tu licencia ha sido activada y se ha creado tu cuenta, puedes seguir accediendo al producto directamente a través del sitio del socio utilizando tu correo electrónico de activación para iniciar sesión.'
		},
		UpgradeDowngradeLicense: {
			title: 'Actualizar/Reducir mi licencia',
			description:
				'¿Por qué deberías actualizar/reducir tu licencia? ¡Porque puedes! Después de activar y probar la licencia de tu producto, puedes realizar cambios en las características variables de tu plan escalonado ya sea mejorándolo o reduciéndolo.'
		},
		ExplanationOfOffersAndProducts: {
			title: 'Explicación de Ofertas y Productos',
			description:
				'¿Qué es una oferta de por vida? ¿Qué es apilar? Conoce los detalles sobre las ofertas y productos disponibles en nuestra plataforma.'
		},
		TermsAndFeatures: {
			title: 'Términos y Características',
			description:
				'Aprende sobre los términos y características relacionados con las compras en Upler y cómo navegar por tu cuenta Upler.'
		},
		ProductSupport: {
			title: 'Soporte del Producto',
			description:
				'¿Problemas con un producto comprado? Aprende cómo obtener soporte y ponerte en contacto directo con nuestros socios desde tu cuenta Upler.'
		},
		Gifts: {
			title: 'Regalos',
			description:
				'Comprende lo que significan los "regalos" en nuestro contexto y cómo podrías encontrarlos en nuestro sitio web.'
		},
		CatalogPriceCalculation: {
			title: '¿Cómo se calcula el precio del catálogo?',
			description:
				'¿Curioso acerca de los precios tachados? Entiende cómo calculamos estos precios para demostrar el valor que obtienes con nuestras ofertas.'
		}
		// Agrega más secciones aquí si es necesario...
	}
};

