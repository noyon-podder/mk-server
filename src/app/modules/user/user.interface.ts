export type TUser = {
  name: string
  email: string
  password: string
  phone: number
  address: string
  role: 'user' | 'admin'
  isDeleted: boolean
}
