export type User = {
  id: number
  username: string
  email: string
  name: {
    firstname: string
    lastname: string
  }
  phone: string
  address: {
    street: string
    zipcode: string
    number: number
    city: string
  }
}
