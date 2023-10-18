import 'next-auth'
import { User } from '@/interface/login'

declare module 'next-auth' {
  interface Session {
    user: User & { name: string }
  }
}
