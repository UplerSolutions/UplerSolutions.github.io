export const WALLET_CONNECT_PROJECT_ID = '7301c27df5004880e903a97f361f6e8f'

export const SITE_NAME = 'Upler'
export const SITE_DESCRIPTION =
	'¡Upler - Here you can find hundreds of software for your professional/independent career'
//TODO: completar url de la pagina
export const SITE_URL = 'https://upler.tech'

export const ironOptions = {
	cookieName: SITE_NAME,
	password:
		process.env.SESSION_PASSWORD ??
		'set_a_complex_password_at_least_32_characters_long',
	cookieOptions: {
		secure: process.env.NODE_ENV === 'production'
	}
}
