import type { Product } from '@/types/product'
import type { User } from '@/types/user'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get('/products')
  return res.data
}

export const getProductsCategories = async (): Promise<string[]> => {
  const res = await api.get('/products/categories')
  return res.data
}

export const getProduct = async (id: number): Promise<Product> => {
  const res = await api.get(`/products/${id}`)
  return res.data
}

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const res = await api.get(`/products/category/${category}`)
  return res.data
}

export const userLogin = async (username: string, password: string): Promise<string> => {
  const res = await api.post('/auth/login', {
    username,
    password,
  })
  const token = res.data
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return token
}

export const getUser = async (userId: number): Promise<User> => {
  const res = await api.get(`/users/${userId}`)
  return res.data
}

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get('/users')
  return res.data
}
