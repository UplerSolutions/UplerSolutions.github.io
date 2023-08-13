interface Herramienta {
  id: number
  nombre: string
}

export interface IPlan {
  id: number
  name: string
  description: string
  price: number
  herramientas: Herramienta[]
}
