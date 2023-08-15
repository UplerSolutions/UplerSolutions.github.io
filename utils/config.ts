import {
  mainnet,
  polygon,
  sepolia,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  bsc,
  bscTestnet,
  arbitrum,
  arbitrumGoerli
} from 'wagmi/chains'

export const ETH_CHAINS = [
  mainnet,
  polygon,
  sepolia,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  bsc,
  bscTestnet,
  arbitrum,
  arbitrumGoerli
]
export const WALLET_CONNECT_PROJECT_ID = '7301c27df5004880e903a97f361f6e8f'

export const SITE_NAME = 'Upler'
export const SITE_DESCRIPTION =
  '¡Upler - Aqui podras encontrar cientos de softwares para tu carrera profesional/independiente '
//TODO: completar url de la pagina
export const SITE_URL = ''

export const SOCIAL_TWITTER = 'Envoy_1084'
export const SOCIAL_GITHUB = 'Envoy-VC/boilr3'

export const NFT_CONTRACT_ADDRESS = '0x0Fc5f8A784810dEd101BD734cC59F6F7b868A3AF'

export const ironOptions = {
  cookieName: SITE_NAME,
  password:
    process.env.SESSION_PASSWORD ??
    'set_a_complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}
